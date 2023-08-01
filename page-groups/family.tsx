import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChildrenList from "../pages/children-list";
import { Child } from "../apis/child";
import ChildDetail from "../pages/child-detail";
import CreateChild from "../pages/create-child";

export type FamilyRouteParamList = {
  ChildrenList: undefined;
  ChildDetail: {
    child: Child;
  };
  CreateChild: undefined;
};

const Stack = createNativeStackNavigator<FamilyRouteParamList>();

const FamilyPageGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChildrenList"
        component={ChildrenList}
        options={{ title: "孩子们" }}
      />
      <Stack.Screen
        name="ChildDetail"
        component={ChildDetail}
        options={(route) => ({ title: route.route.params.child.name })}
      />
      <Stack.Screen
        name="CreateChild"
        component={CreateChild}
        options={{ title: "新廽数据" }}
      />
    </Stack.Navigator>
  );
};

export default FamilyPageGroup;
