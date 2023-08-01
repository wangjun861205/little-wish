import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskPageGroupParamList } from "../page-groups/task";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Center, Input, List, Toast } from "native-base";
import { Child, queryChildren } from "../apis/child";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../App";
import { FamilyRouteParamList } from "../page-groups/family";

type CreateTaskProps = NativeStackScreenProps<any, "TabScreens">;

const CreateTask = ({ navigation }: CreateTaskProps) => {
  const [children, setChildren] = useState<Child[]>([]);
  const [error, setError] = useState<string>();
  useEffect(() => {
    queryChildren(0, 0)
      .then((c) => setChildren(c))
      .catch((reason) => {
        console.error(reason);
        setError("出了点问题， 请稍后再试");
      });
  }, []);

  if (error) {
    Toast.show({ description: error });
    navigation.goBack();
    return null;
  }

  if (!children.length) {
    return (
      <SafeAreaView>
        <Center>尚未添加宝宝</Center>
        <Center>
          <Button
            onPress={() =>
              navigation.navigate("TabScreens", {
                screen: "Family",
                params: { screen: "CreateChild" },
              })
            }
          >
            去添加
          </Button>
        </Center>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Input placeholder="任务名称" />
      <Input placeholder="任务描述" />
      <List>
        {children.map((child) => (
          <List.Item>{child.name}</List.Item>
        ))}
      </List>
    </SafeAreaView>
  );
};
