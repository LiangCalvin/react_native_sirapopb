import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/style";
export default function Person({ item, onPress, removePerson }) {
    const handlePress = () => {
        alert("Successfully Deleted");
        console.log(item.id);
        removePerson(item);  // Call removeItem to remove the item from the list
      };

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.content}>
      <Text style={styles.header} > Name: {item.name}  Age: {item.age} </Text>
      <View style={styles.button}>
        <Button title="Detail" onPress={() => onPress(item.name, item.lname)} />
      </View>
    </View>
    </TouchableOpacity>
  );
}
