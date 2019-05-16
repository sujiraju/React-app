/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import {Platform,TextInput,TouchableOpacity, StyleSheet, Text, View, Button,Alert,ScrollView,KeyboardAvoidingView} from 'react-native';
var db = openDatabase({ name: 'events.db' });

const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      Breakfast: '',
      Initial_Amount: '',
      Lunch: '',
      Snacks: '',
      Dinner:'',
      Balance:'',
      petrol:'' };
  }




   action = () =>{
    console.log("entered addedSource");
   }

  register_user = () => {
    var that = this;
    const { Breakfast } = this.state;
    const { Initial_Amount } = this.state;
    const { Lunch } = this.state;
    const {Snacks} = this.state;
    const {Dinner} = this.state;
    const {Balance} = this.state;
    const {petrol} = this.state;

Alert(Breakfast, Initial_Amount, Lunch,Snacks,Dinner);
    if (Breakfast) {
      if (Initial_Amount) {
        if (Lunch) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO  (Breakfast, Initial_Amount, Lunch,Snacks,Dinner,Balance,petrol) VALUES (?,?,?)',
              [Breakfast,  Initial_Amount, Lunch,Snacks,Dinner,Balance,petrol],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              }
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  };


  render() {
    return (
     <ScrollView keyboardShouldPersistTaps="handled"> 
     <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
       <Text style={styles.welcome}>Welcome to React Native!</Text>
 
       <TextInput
        style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
        onChangeText={( Breakfast) => this.setState({ Breakfast})}
     
  />

    <TextInput
      style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
      onChangeText={(Initial_Amount) => this.setState({Initial_Amount})}
      
/>
    <TextInput
    style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
    onChangeText={(Lunch) => this.setState({Lunch})}
  />
  <TextInput
  style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
  onChangeText={(Snacks) => this.setState({Snacks})}
  
/>
<TextInput
style={{height: 40,width:80, borderColor: 'red', borderWidth: 1, }}
onChangeText={(Dinner) => this.setState({Dinner})}
/>
<TextInput
        style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
        onChangeText={(Balance) => this.setState({Balance})}
       
  />
    <TextInput
      style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
      onChangeText={(petrol) => this.setState({petrol})}
          />

        <Button
        title="Update User"
        onPress={this.action} 
          />
      
        </KeyboardAvoidingView>
        </ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
