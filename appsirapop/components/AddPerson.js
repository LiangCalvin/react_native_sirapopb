import React from 'react'
import { View } from 'react-native'

export default function AddPerson() {
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
            />
        <Button title="Add Person" onPress={handleSubmit} />
    </View>
  )
}
