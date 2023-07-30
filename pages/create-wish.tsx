import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Input, View, Button, useToast } from "native-base";

const CreateWish = ({ navigation }: NativeStackScreenProps<any>) => {
  const toast = useToast();
  const [description, setDescription] = useState("");
  const submit = () => {
    toast.show({ description: "许愿成功" });
    navigation.goBack();
  };
  return (
    <View>
      <Input
        type="text"
        placeholder="输入你的愿望吧"
        value={description}
        onChangeText={(val) => setDescription(val)}
      ></Input>
      <Button onPress={submit}>许愿</Button>
    </View>
  );
};

export default CreateWish;
