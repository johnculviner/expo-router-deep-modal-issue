import { View, Text, Button } from "react-native";
import { Link, useRouter } from "expo-router";
import React from 'react';

export default function TestModal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Button title="DISMISS" onPress={() => router.dismiss()} />
      <Text>PAGE NAME: /explore/explore-modal{'\n'}</Text>
      <Link href={"/tab2/tab2-modal"}>OPEN /tab2/tab2-modal</Link>
    </View>
  );
}
