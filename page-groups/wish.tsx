import WishList from "../pages/wish-list";
import CreateWish from "../pages/create-wish";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Wish } from "../apis/wish";
import ReviewWish from "../pages/review-wish";

export type WishPageGroupParamList = {
  WishList: {
    is_parent: boolean;
  };
  CreateWish: undefined;
  ReviewWish: { wish: Wish };
};

const Stack = createNativeStackNavigator<WishPageGroupParamList>();

const WishPageGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{ title: "愿望清单" }}
      />
      <Stack.Screen
        name="CreateWish"
        component={CreateWish}
        options={{ title: "许愿" }}
      />
      <Stack.Screen
        name="ReviewWish"
        component={ReviewWish}
        options={{ title: "定价" }}
      />
    </Stack.Navigator>
  );
};

export default WishPageGroup;
