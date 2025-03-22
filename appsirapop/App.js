import { View, Text, Image, ScrollView, Button, Alert, SafeAreaView, StatusBar, Platform, FlatList, Modal } from "react-native";
import { styles } from "./styles/style";
import { useState } from "react";
import Person from "./components/Person";
import AddPerson from "./components/AddPerson";
const logo = require("./assets/icon.png");

export default function App() {

  const [data, setData] = useState([
    { id: '1', name: 'Alice', lname: 'Bill', age: 30 },
    { id: '2', name: 'Bob', lname: 'Smith', age: 40 },
    { id: '3', name: 'Charlie', lname: 'Johnson', age: 35 },
    { id: '4', name: 'David', lname: 'Williams', age: 45 },
    { id: '5', name: 'Eve', lname: 'Davis', age: 25 },
  ]);
  const [modalVisible, setModalVisible] = useState(false); // State to control the modal visibility

  const addPerson = (name, lname, age, email, pass) => {
    const newPerson = {
      id: (data.length + 1).toString(),
      name,
      lname,
      age,
      email,
      pass,
    };
    setData([...data, newPerson]); // Add the new person to the list
    console.log("Added new person:", newPerson);
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
      
       <Button title="Add Person" onPress={() => setModalVisible(true)} />

{/* Modal for adding a person */}
<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)} // Close modal on back press (Android)
>
  <View style={styles.modalBackground}>
    <View style={styles.modalContainer}>
      {/* Pass addPerson and closeModal props to the AddPerson form */}
      <AddPerson addPerson={addPerson} closeModal={() => setModalVisible(false)} />
    </View>
  </View>
</Modal>
    </SafeAreaView>
  );
}
