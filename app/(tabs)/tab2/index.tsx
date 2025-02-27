import { View } from "react-native";

import { Link } from "expo-router";

export default function Tab2Screen() {
  return (
    <View style={{ flex: 1 }}>
      <Link href={"/tab2/tab2-modal"}>open /tab2/tab2-modal</Link>
    </View>
  );
}
