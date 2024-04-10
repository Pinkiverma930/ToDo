import { StyleSheet, Text, View, Button, Alert,TouchableOpacity } from "react-native";
import React from "react";
import { Del_to_do } from "../redux/reducer/TodoSlicer";
import { asyncRemoveData } from "../utils/asyncStorage";
import { remove } from "../redux/action/removeItem";
import{MaterialCommunityIcons } from "@expo/vector-icons";

const DisplayItems = ({ item,index }) => {
  console.log("display",item)
  return (
    <View style={styles.element}>
      <MaterialCommunityIcons name='arrow-right-bold' size={18} color='white'/>
      <Text  style={styles.txt}>{item.data.name}</Text>
      
 
       <TouchableOpacity onPress={()=>{remove("key",item.id)}} style={styles.del}>
           <MaterialCommunityIcons name="delete" size ={20} color='white'/>
           </TouchableOpacity>
    </View>
  );
};

export default DisplayItems;

const styles = StyleSheet.create({
  element: {
    flexDirection: "row",
    height: "max-height",
    alignItems:'center',
    backgroundColor: "#009999",
    margin: 10,
    padding:15,
    borderRadius: 10,
    width:"95%"
  },
  txt:
  {
    color:'white',
    fontSize:16,
    paddingLeft:18,
  },
  del:
  {
    position:'absolute',
      paddingLeft:300,  
  },
});


