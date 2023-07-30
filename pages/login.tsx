import { View, Button, Input, Row } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginProps = NativeStackScreenProps<any, "Login">;

const Login = ({ navigation }: LoginProps) => {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    navigation.navigate("TabScreens", {
      screen: "Wish",
      params: {
        screen: "WishList",
        params: {
          is_parent: false,
        },
      },
    });
  };

  return (
    <SafeAreaView>
      <Input placeholder="手机号" />
      <Input placeholder="密码" />
      <Button onPress={login}>登录</Button>
      <Button>注册</Button>
    </SafeAreaView>
  );
};

export default Login;
