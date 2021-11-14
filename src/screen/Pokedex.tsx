import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/routers";

export default function PokedexScreen({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  return (
    <View>
      <Text>We are on PokedexScreen</Text>
      <Button
        title="Go to pokemon"
        onPress={() => navigation.navigate("Pokemon")}
      />
    </View>
  );
}
