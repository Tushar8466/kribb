import { useAuth } from "@clerk/expo";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0061FF" />
      </View>
    );
  }

  // If the user is NOT signed in, redirect them to the sign-in/sign-up page
  if (!isSignedIn) {
    return <Redirect href="/sign-up" />;
  }

  // If signed in, just render the child routes (like tabs)
  return <Slot />;
}
