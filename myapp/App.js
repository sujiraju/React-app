/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,TextInput, StyleSheet, Text, View, Button,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: '',text1: '',text2: '',text3: '',text4:'' };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
 <TextInput
        style={{height: 40,width:80, borderColor: 'red', borderWidth: 1,justifyContent: 'space-between'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
  />
    <TextInput
      style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
      onChangeText={(text1) => this.setState({text1})}
      value={this.state.text1}
    />

    <TextInput
    style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
    onChangeText={(text2) => this.setState({text2})}
    value={this.state.text2}
  />
  <TextInput
  style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
  onChangeText={(text3) => this.setState({text3})}
  value={this.state.text3}
/>
<TextInput
style={{height: 40,width:80, borderColor: 'red', borderWidth: 1}}
onChangeText={(text4) => this.setState({text4})}
value={this.state.text4}
/>

      <Button
      onPress={() => {
        Alert.alert('You tapped the button!'+this.state.text);
      }}
      title="Learn More"
      color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
