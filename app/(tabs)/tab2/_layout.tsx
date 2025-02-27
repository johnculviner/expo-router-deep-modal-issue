import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Tab2Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="tab2-modal" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
