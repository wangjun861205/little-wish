import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WishPageGroupParamList } from "../page-groups/wish";
import { SafeAreaView } from "react-native-safe-area-context";
import { Row, Text, Modal, Button, Input } from "native-base";
import { useState } from "react";

type ReviewWishProps = NativeStackScreenProps<
  WishPageGroupParamList,
  "ReviewWish"
>;

const ReviewWish = ({ navigation, route }: ReviewWishProps) => {
  const wish = route.params.wish;
  const [showModal, setShowModal] = useState(false);
  const onOk = () => {
    setShowModal(false);
    navigation.navigate("WishList", { is_parent: true });
  };

  const onCancel = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView>
      <Text>{wish.description}</Text>
      <Button onPress={() => setShowModal(true)}>定价</Button>
      <Modal
        isOpen={showModal}
        width="80%"
        height="40%"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        left="10%"
        top="20%"
      >
        <Modal.Content>
          <Input placeholder="定价" />
          <Button onPress={onOk}>确定</Button>
          <Button onPress={onCancel}>再想想</Button>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default ReviewWish;
