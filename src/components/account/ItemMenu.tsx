import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ItemMenuProps {
  title: string;
  text: string;
}

export const ItemMenu: React.FC<ItemMenuProps> = ({ text, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  title: {
    width: 130,
    fontWeight: "bold",
  },
});
