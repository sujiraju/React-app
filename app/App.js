    
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button,ScrollView,FlatList } from 'react-native'
import { createStackNavigator,createAppContainer } from "react-navigation";

var SQLite = require('react-native-sqlite-storage')
var db =SQLite.openDatabase({name:'test.db',createFromLocation:'~moneydb.db'})

class App extends Component {

   constructor(props)
   {
   super(props) 
      this.state = {
         bf: '',
        lun: '',
        dinner:'',
        snacks:'',
        extra:'',
        amouont:'',
        dbdate:'',
      }

     db.transaction((tx) => {
      tx.executeSql('SELECT * FROM amt where amount =?',[3],(tx,results)=>
      {
         var len = results.rows.length;
         if(len>0)
         {
            var row=results.rows.item(0);
            console.log(row.date);
            this.setState({ dbdate: row.date })
         }

      });
   });
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
            //alert(Number(this.state.bf)+Number(this.state.lun)+Number(this.state.dinner))
             alert(this.state.dbdate)
            console.log(Number(this.state.bf)+Number(this.state.lun)+Number(this.state.dinner))
   }
   register_user = () => {
      var that = this;
      const { bf } = this.state;
      const { lun } = this.state;
      const { dinner } = this.state;
      //alert(user_name, user_contact, user_address);
      if (bf) {
        if (lun) {
          if (dinner) {
            db.transaction((tx) => {
               tx.executeSql( 'INSERT INTO amt (bf, lunch, amount,date) VALUES (?,?,?,?)',
               [bf,lun,dinner,'mon'],(tx,results)=>
               {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    alert('Success You are Registered Successfully'+bf);
                  } else {
                    alert('Registration Failed');
                  }
         
               });
            });
      /*  db.transaction(function(tx) {
              tx.executeSql(
                'INSERT INTO amt (bf, lunch, amount) VALUES (?,?,?)',
                [bf,lun,dinner],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    alert('Success You are Registered Successfully');
                  } else {
                    alert('Registration Failed');
                  }
                }
              );
            }); 
      */

          } else {
            alert('Please fill breakfast');
          }
        } else {
          alert('Please fill lunch');
        }
      } else {
        alert('Please fill amount');
      }
    };

   render() {
      return (
        <ScrollView>
         <View style = {styles.container}>
         <Button  title="view data" onPress={() => this.props.navigation.navigate('viewdata')}/>
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
               onPress = {this.register_user }
               title='click here'>
            </Button>
            
         </View>
         </ScrollView>
      )
   }
}


class vd extends Component 
  {
    constructor(props) 
    {
      super(props);
      this.state = {
        FlatListItems: [],
      };
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM amt', [], (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          this.setState({
            FlatListItems: temp,
          });
        });
      });
    }
    ListViewItemSeparator = () =>
    {
    return ( <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} /> );
    };

    render() {
      return (
        <View>
          <FlatList
            data={this.state.FlatListItems}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View key={item.bf} style={{ backgroundColor: 'white', padding: 20 }}>
                <Text>BreakFast: {item.bf}</Text>
                <Text>Lunch: {item.lunch}</Text>
                <Text>Amount: {item.amount}</Text>
                <Text>Date: {item.date}</Text>
              </View>
            )}
          />
        </View>
      );     
 }
}

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


const MainNavigator = createStackNavigator
({ 
     home:App, 
   viewdata:vd 
});

const Appcontainer = createAppContainer(MainNavigator);
export default Appcontainer;