import { Stack } from 'expo-router';


export default function ExploreLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="test-modal" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
