import React, { useState } from 'react'
import { use } from 'react'
import { Button, TextInput, View } from 'react-native'
import { styles } from '../styles/style';

export default function AddPerson({addPerson}) {
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleNameChange = (text) => {
        const trimmedText = text.trim();
        setName(trimmedText);
    }
    const handleLnameChange = (text) => setLname(text);
    const handleAgeChange = (text) => setAge(text);
    const handleEmailChange = (text) => setEmail(text);
    const handlePassChange = (text) => {
        if (text.length >= 8) {
            setPass(text); // If password is long enough, update state
        } else {
            setPass(text); // Update password field anyway (but you can show an error message)
            console.log('Password must be at least 8 characters');
        }
    };

    const handleSubmit = () => {
        if (!name || !lname || !age || !email || !pass) {
            alert("Please fill in all fields!");
            return;
        }
        // Call addPerson with the collected form data
        addPerson(name, lname, parseInt(age), email, pass);

        // Clear inputs after submission
        setName('');
        setLname('');
        setAge('');
        setEmail('');
        setPass('');
    };
  return (
    <View>
        <TextInput
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
                placeholder="Enter first name"
            />
            <TextInput
                style={styles.input}
                value={lname}
                onChangeText={handleLnameChange}
                placeholder="Enter last name"
            />
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={handleAgeChange}
                placeholder="Enter age"
                keyboardType="numeric"
                // keyboardType="number-pad"
            />
            <TextInput
                style={styles.input}
                value={email}
                keyboardType="email-address" // Shows a keyboard suited for email input
                onChangeText={handleEmailChange}
                placeholder="Enter email"
            />
            <TextInput
                style={styles.input}
                value={pass}
                onChangeText={handlePassChange}
                secureTextEntry={true}
                placeholder="Enter password"
            />  
        <Button title="Add Person" onPress={handleSubmit} />
    </View>
  )
}
