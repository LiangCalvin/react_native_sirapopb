import { View, Text, Image, ScrollView, Button, Alert, SafeAreaView, StatusBar, Platform, FlatList } from "react-native";
import { styles } from "./styles/style";
import { useState } from "react";
import Person from "./components/Person";
const logo = require("./assets/icon.png");

export default function App() {

  const [data, setData] = useState([
    { id: '1', name: 'Alice', lname: 'Bill', age: 30 },
    { id: '2', name: 'Bob', lname: 'Smith', age: 40 },
    { id: '3', name: 'Charlie', lname: 'Johnson', age: 35 },
    { id: '4', name: 'David', lname: 'Williams', age: 45 },
    { id: '5', name: 'Eve', lname: 'Davis', age: 25 },
  ]);
  const addPerson = () => {
    const newPerson = { id: '3', name: 'Charlie', age: 25 };
    setData([...data, newPerson]); // Update the list with the new person
  };
  
  const removePerson = (item) => {
    setData(data.filter((person) => person.id !== item.id)); // Filter out the person to be removed
    console.log("Delete item number: ",item.id);

  }
  
  const handlePress = () => {
    alert("Button Pressed!");
  };

  const showAlert = (name, lname) => {
    Alert.alert("Hello!", `This is ${name} ${lname}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <FlatList
        data={data}
        renderItem={({ item }) => 
        <Person item={item} onPress={showAlert} removePerson={removePerson} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.headerlist}>People List</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No people available</Text>
          </View>
        }
      ></FlatList>
    </SafeAreaView>
  );
}
