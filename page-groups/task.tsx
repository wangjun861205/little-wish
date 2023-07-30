import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskList from "../pages/task-list";
import TaskDetail from "../pages/task-detail";
import { Task } from "../apis/task";

export type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: { task: Task };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const TaskPageGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{ title: "任务清单" }}
      />
      <Stack.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={{ title: "任务详情" }}
      />
    </Stack.Navigator>
  );
};

export default TaskPageGroup;
