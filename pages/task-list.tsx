import { View, List, Text, Spinner, Alert } from "native-base";
import { useQuery, useQueryClient } from "react-query";
import { queryTasks } from "../apis/task";
import { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const TaskList = ({ navigation }: NativeStackScreenProps<any>) => {
  const [offset, setOffset] = useState(0);
  const _queryTasks = useCallback(async () => {
    return queryTasks(10, offset);
  }, [offset]);
  const { data, error, isLoading } = useQuery("queryTasks", _queryTasks);

  if (isLoading) {
    return (
      <Spinner style={{ position: "absolute", width: "10%", left: "45%" }} />
    );
  }

  if (!!error) {
    return <Alert>{error.toString()}</Alert>;
  }

  return (
    <View>
      <List>
        {(data ?? []).map((task) => (
          <List.Item
            key={task.id}
            onPress={() => navigation.navigate("TaskDetail", { task })}
          >
            <Text>{task.id}</Text>
            <Text>{task.name}</Text>
            <Text>{task.description}</Text>
            <Text>{task.is_done ? "已完成" : "未完成"}</Text>
            <Text>{task.score}</Text>
          </List.Item>
        ))}
      </List>
    </View>
  );
};

export default TaskList;
