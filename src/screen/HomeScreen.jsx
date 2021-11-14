import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>We are on HomeScreen</Text>
      <Button title="Settings" onPress={goToSettings} />
    </View>
  );
}
