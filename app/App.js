import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button,ScrollView } from 'react-native'


class Inputs extends Component {
   state = {
      bf: '',
     lun: '',
     dinner:'',
     snacks:'',
     extra:'',
     amouont:'',
   }
   handleamount = (text) =>{
     this.setState({amouont:text})
   }
   handlebreakfast = (text) => {
      this.setState({ bf: text })
   }
   handlelunch = (text) => {
      this.setState({ lun: text })
   }
   handledinner = (text) => {
    this.setState({ dinner: text })
 }
 handlesnacks = (text) => {
  this.setState({ snacks: text })
}
handleextra = (text) => {
  this.setState({ extra: text })
}
   login = () => {
             alert(Number(this.state.bf)+Number(this.state.lun)+Number(this.state.dinner))
            console.log(Number(this.state.bf)+Number(this.state.lun)+Number(this.state.dinner))
   }
   render() {
      return (
        <ScrollView>
         <View style = {styles.container}>
         <Text style={{fontSize:20 , margin: 15,height: 25}}>Amount</Text>
         <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Initial amount in your hand"
             placeholderTextColor = "#9a73ef"
             keyboardType="numeric"
             onChangeText = {this.handleamount}/>
      
         <Text style={{fontSize:20 , margin: 15,height: 25}}>Breakfast</Text>
           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Breakfast amount"
               placeholderTextColor = "#9a73ef"
               keyboardType="numeric"
               onChangeText = {this.handlebreakfast}/>
        
          <Text style={{fontSize:20 , margin: 15,height: 25}}>Lunch</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Lunch Amount"
               placeholderTextColor = "#9a73ef"
               keyboardType="numeric"
               onChangeText = {this.handlelunch}/>
    
          <Text style={{fontSize:20 , margin: 15,height: 25}}>Dinner</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Dinner Amount"
                  placeholderTextColor = "#9a73ef"
                  keyboardType="numeric"
                  onChangeText = {this.handledinner}/>  
                  
           <Text style={{fontSize:20 , margin: 15,height: 25}}>Snacks</Text>
               <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Snacks Amount"
                placeholderTextColor = "#9a73ef"
                keyboardType="numeric"
                onChangeText = {this.handlesnacks}/>    
          <Text style={{fontSize:20 , margin: 15,height: 25}}>Extra</Text>
               <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Extra Amount"
                 placeholderTextColor = "#9a73ef"
                 keyboardType="numeric"
                onChangeText = {this.handleextra}/>    

           <Text style={{fontSize:20 , margin: 15,height: 25}}>Balance</Text>
            <Text style = {{ margin: 15,height: 40,borderColor: '#7a42f4',borderWidth: 1,color:"#9a73ef"}}>
           {Number(this.state.amouont)-(Number(this.state.bf)+Number(this.state.lun)+Number(this.state.dinner)+Number(this.state.snacks)+Number(this.state.extra))} 
           </Text>
            
            <Button
               style = {styles.submitButton}
               onPress = {this.login }
               title='click here'>
            </Button>
            
         </View>
         </ScrollView>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 20
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})