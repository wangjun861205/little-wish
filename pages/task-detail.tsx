import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Task } from "../apis/task";
import { Row, View, Text, Button, Alert } from "native-base";
import { RootStackParamList } from "../page-groups/task";
import { startTask } from "../apis/task";
import { useState } from "react";

type TaskDetailProps = NativeStackScreenProps<RootStackParamList, "TaskDetail">;

const TaskDetail = ({ navigation, route }: TaskDetailProps) => {
  const task = route.params?.task;
  const [status, setStatus] = useState<Task["status"]>(task.status);
  const start = () => {
    setStatus("doing");
  };

  const finish = () => {
    setStatus("done");
  };

  const cancel = () => {
    setStatus("pending");
  };
  return (
    <View>
      <Row>
        <Text>{task.id}</Text>
      </Row>
      <Row>
        <Text>{task.name}</Text>
      </Row>
      <Row>
        <Text>{task.description}</Text>
      </Row>
      <Row>
        <Text>{task.is_done}</Text>
      </Row>
      <Row>
        <Text>{task.score}</Text>
      </Row>
      <Row>
        <Text>
          {status === "pending"
            ? "未开始"
            : status === "doing"
            ? "已开始"
            : "已完成"}
        </Text>
      </Row>
      {status === "pending" && (
        <Row>
          <Button onPress={start}>开始任务</Button>
        </Row>
      )}
      {status === "doing" && (
        <Row>
          <Button onPress={finish}>结束任务</Button>
          <Button onPress={cancel}>取消任务</Button>
        </Row>
      )}
    </View>
  );
};

export default TaskDetail;
