import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import {
  Row,
  List,
  Button,
  View,
  Text,
  Spinner,
  Toast,
  Center,
} from "native-base";
import { WishPageGroupParamList } from "../page-groups/wish";
import { useQuery } from "react-query";
import { Wish, queryWishes } from "../apis/wish";
import { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type WishListProps = NativeStackScreenProps<WishPageGroupParamList, "WishList">;

const WishList = ({
  navigation,
  route: {
    params: { is_parent },
  },
}: WishListProps) => {
  const [offset, setOffset] = useState(0);
  const _queryWishes = useCallback(() => {
    return queryWishes(10, offset);
  }, [offset]);
  const { data, error, isLoading, refetch } = useQuery(
    "wish-list",
    _queryWishes
  );
  if (isLoading) {
    return (
      <SafeAreaView>
        <Center>
          <Spinner />
        </Center>
      </SafeAreaView>
    );
  }
  if (error) {
    Toast.show(error);
  }

  if (!data) {
    return (
      <SafeAreaView>
        <Center>
          <Text>暂无愿望</Text>
        </Center>
      </SafeAreaView>
    );
  }

  return (
    <View>
      {!is_parent && (
        <Button onPress={() => navigation.navigate("CreateWish")}>
          <Text>许愿</Text>
        </Button>
      )}
      <List>
        {data.map((wish) => (
          <List.Item>
            <Row>
              <Text>{wish.description}</Text>
              {!wish.required_score && (
                <Button
                  onPress={() =>
                    navigation.navigate("ReviewWish", { wish: wish })
                  }
                >
                  去定价
                </Button>
              )}
            </Row>
          </List.Item>
        ))}
      </List>
    </View>
  );
};

export default WishList;
