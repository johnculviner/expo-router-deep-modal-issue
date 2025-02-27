import React from "react";
import { View, Text, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function TestModal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Button title="DISMISS" onPress={() => router.dismiss()} />
      <Text>PAGE NAME: /tab2/tab2-modal{'\n'}</Text>
      <Link href={"/explore/explore-modal"}>OPEN /explore/explore-modal</Link>
    </View>
  );
}
