import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FamilyRouteParamList } from "../page-groups/family";
import { SafeAreaView } from "react-native-safe-area-context";

type CreateChildProps = NativeStackScreenProps<
  FamilyRouteParamList,
  "CreateChild"
>;
const CreateChild = ({ navigation }: CreateChildProps) => {
  return <SafeAreaView></SafeAreaView>;
};

export default CreateChild;
