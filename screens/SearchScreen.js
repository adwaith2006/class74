import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { TextInput,FlatList } from 'react-native';
import db from "../config.js";

export default class Searchscreen extends React.Component {
  constructor(){
    super();
    this.state={
      search:"",
      allTransactions:[]
    }
  }
  searchTransactions=async(text)=>{
  var enteredText=text.split("");
  var text=text.toUppercase();
  if(enteredText[0].toUppercase()==="B"){
  const transaction=await db.collection("transactions").where("bookId","===",text).get();
  transaction.docs.map((doc)=>{
  this.setState({
    allTransactions:[...this.state.allTransactions,doc.data()]
  })
  })
  }
  else if(enteredText[0].toUppercase()==="S"){
    const transaction=await db.collection("transactions").where("studentId","===",text).get();
    transaction.docs.map((doc)=>{
    this.setState({
      allTransactions:[...this.state.allTransactions,doc.data()]
    })
    })
  }
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            height:40,
            width:"auto",
            borderWidth:0.5,
            flexDirection:"row",
            alignItems:"center"
          }}>
          <TextInput placeholder="ENTER BOOK ID OR STUDENT ID"
          style={{
            height:50,
            width:300,
            borderWidth:2,
            paddingLeft:10
          }}onChangeText={(text)=>{
         this.setState({
           search:text
         }
          )
       
          }}>
            
           
           
          </TextInput>
          <TouchableOpacity style={{
            width:60,
            height:30,
            backgroundColor:"yellow"
           
          }}
          onPress={
            ()=>{
              this.searchTransactions(this.state.search);
            }
          }>
            <Text style={{
              color="black"
            }}>
              Search
            </Text>
          </TouchableOpacity>
          </View>
          <FlatList>
            
            </FlatList>
       </View>
      );
    }
  }
