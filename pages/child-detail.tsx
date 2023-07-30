import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FamilyRouteParamList } from "../page-groups/family";
import { useState } from "react";
import { Row, Text, View } from "native-base";
import QRCode from "react-native-qrcode-svg";

type ChildDetailProps = NativeStackScreenProps<
  FamilyRouteParamList,
  "ChildDetail"
>;

const ChildDetail = ({ navigation, route }: ChildDetailProps) => {
  const [child, setChild] = useState(route.params.child);
  return (
    <SafeAreaView>
      <Text>{child.name}</Text>
      <QRCode value="http://www.google.com" />
    </SafeAreaView>
  );
};

export default ChildDetail;
