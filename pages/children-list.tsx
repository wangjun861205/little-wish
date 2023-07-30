import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { List, ScrollView, Toast } from "native-base";
import { FlatList } from "react-native";
import { queryChildren, Child } from "../apis/child";
import { useCallback, useEffect, useState } from "react";

type ChildrenListProps = NativeStackScreenProps<any>;

const ChildrenList = ({ navigation }: ChildrenListProps) => {
  const [offset, setOffset] = useState(0);
  const [needRollback, setNeedRollback] = useState(false);
  const [children, setChildren] = useState<Child[]>([]);
  const fetchChildren = useCallback(() => {
    queryChildren(10, offset).then((res) => {
      if (typeof res === "string") {
        Toast.show({ description: res });
        navigation.goBack();
        return;
      }
      if (res.length === 0) {
        Toast.show({ description: "没有更多了" });
        setNeedRollback(true);
        return;
      }
      setChildren((prev) => [...prev, ...res]);
    });
  }, [offset]);

  useEffect(() => {
    if (needRollback) {
      setOffset((prev) => prev - 10);
    }
  }, [needRollback]);

  useEffect(() => {
    if (needRollback) {
      setNeedRollback(false);
      return;
    }
    fetchChildren();
  }, [offset]);

  return (
    <SafeAreaView>
      <FlatList
        data={children}
        renderItem={({ item }) => (
          <List.Item
            key={item.id}
            onPress={() => navigation.navigate("ChildDetail", { child: item })}
          >
            {item.name}
          </List.Item>
        )}
        onEndReached={() => setOffset((prev) => prev + 10)}
      />
    </SafeAreaView>
  );
};

export default ChildrenList;
