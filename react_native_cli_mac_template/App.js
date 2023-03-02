
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

const [name,setName] = useState('suresh');
const [age, setAge] = useState('30');
const [email,setEmail] = useState('')


return (
    <View style={styles.container}>
        <Text>Enter Name: </Text> 
        <TextInput 
        style={styles.input}
        placeholder='Enter Your name' 
        onChangeText={(val)=>{setName(val)}}/>

        <Text>Enter Age: </Text> 
        <TextInput 
        keyboardType='numeric'
        imputMode='numeric'
        style={styles.input}
        placeholder='Enter Your Age' 
        onChangeText={(val)=>{setAge(val)}}/>

        <Text>Email id: </Text> 
        <TextInput 
        inputMode='email'
        style={styles.input}
        placeholder='Enter Your email address' 
        onChangeText={(val)=>{setEmail(val)}}/>

        <Text> Name: {name}, Age :{age} , Email: {email}</Text>
        
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
     }
});