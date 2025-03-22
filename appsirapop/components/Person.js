import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
export default function Person({ item, onPress, removePerson }) {
    const handlePress = () => {
        alert("Successfully Deleted");
        console.log(item.id);
        removePerson(item);  // Call removeItem to remove the item from the list
      };

  return (
    // <TouchableOpacity onPress={handlePress}>
    // <View style={styles.content}>
    //   <Text style={styles.header} > Name: {item.name}  Age: {item.age} </Text>
    //   <View style={styles.button}>
    //     <Button title="Detail" onPress={() => onPress(item.name, item.lname)} />
    //     <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
    //     <Ionicons name="trash-outline" size={24} color="red" />
    //   </TouchableOpacity>
    //   </View>
     
    // </View>
    // </TouchableOpacity>
    <View style={styles.content}>
    <Text style={styles.header}> Name: {item.name} Age: {item.age} </Text>

    {/* Detail Button & Trash Icon in the same row */}
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.detailButton} onPress={() => onPress(item.name, item.lname)}>
        <Text style={styles.detailText}>Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
        <AntDesign name="delete" size={24} color="black" />      
      </TouchableOpacity>
    </View>
  </View>
  );
}
