import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import DisplayItems from '../Components/DisplayItems';


export default function ShowData({navigation})
{
    const items = useSelector(state=>state.todo);
    console.log("snbfksjd",items)

    
    const header = () => {
        return (
          <View style={styles.headStyle}>
            <Text style={styles.headtxt}>TO-DO</Text>
          </View>
        );
      };
    return(
        <View style={styles.container}>
           <StatusBar></StatusBar>
            <FlatList
            data ={items}
            horizontal = {false}

            ListHeaderComponent={header}
            renderItem={({item,index})=>{
             return <DisplayItems item ={item} index={index+1}/>
            
       }}

           />
           <TouchableOpacity onPress={()=>navigation.navigate('AddData')} style={styles.plus}>
           <MaterialCommunityIcons name="plus" size ={40} color='white' backgroundColor='#009999'/>
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container :
    {
        flex:1,
        backgroundColor:'#F1FFFF',
    },
    headStyle:
    {
        flex:0.2,
        marginTop:10,
        marginLeft:16,
    },
    headtxt:
    {
        fontSize:20,
        position:'relative',
        fontWeight:'bold',
    },
    del:
    {
        position: 'absolute',
        left:300,
        top:10,
    },
    box:
    {
        flex:1,
        marginTop:20,
        backgroundColor:'#009999',
        height:50,
        width:340,
        borderRadius:15,
        flexDirection:'row',
        marginLeft:10,
    },
    plus:
    {
        marginLeft:300,
        width:40,
        marginTop:20,
        borderRadius:50,
        marginBottom:10,
    },
    add:
    {
        marginTop:100,
        height:20,
        width:20,
        marginLeft:350,
        marginTop:100,
    },

});




//correct data
// import{View,FlatList,Text,TouchableOpacity,StyleSheet} from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
// import React from "react";
// import { Del_to_do } from '../redux/reducer/TodoSlicer';
// import{MaterialCommunityIcons } from "@expo/vector-icons";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect } from 'react';
// import { Button } from 'react-native-web';

// export default function ShowData({navigation})
// {
//     const items = useSelector(state=>state.todo);
//     console.log(items,'items in showdata');
//     const dispatch = useDispatch();

//     const getData = async()=>
//     {
//         const data = await AsyncStorage.getItem('value');
//         console.log(data);

//     }
//     const header = () => {
//         return (
//           <View style={styles.headStyle}>
//             <Text style={styles.headtxt}>TO-DO</Text>
//           </View>
//         );
//       };
//     return(
//         <View style={styles.container}>
//             <Button title='show' onPress={()=>getData()}/>
//             <FlatList
//             data ={items}
//             horizontal = {false}

//             ListHeaderComponent={header}
//             renderItem={({item})=>
//              (
//                 <View style={styles.box}>
//                 <Text style={{paddingLeft:10,top:10,color:'white'}}>{item.text}</Text>
//                 <TouchableOpacity style={styles.del}>
//                 <MaterialCommunityIcons name="delete" size ={20} color='white' onPress={()=>dispatch(Del_to_do(item.id))}/>
//                 </TouchableOpacity>
//                 </View>
//             )
//        }

//            />
//            <TouchableOpacity onPress={()=>navigation.navigate('AddData')} style={styles.plus}>
//            <MaterialCommunityIcons name="plus" size ={40} color='white' backgroundColor='#009999'/>
//            </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container :
//     {
//         flex:1,
//         backgroundColor:'#F1FFFF',
//     },
//     headStyle:
//     {

//         marginTop:10,
//         marginLeft:16,
//     },
//     headtxt:
//     {
//         fontSize:20,
//         fontWeight:'bold',
//     },
//     del:
//     {
//         position: 'absolute',
//         left:300,
//         top:10,
//     },
//     box:
//     {
//         flex:1,
//         marginTop:20,
//         backgroundColor:'#009999',
//         height:50,
//         width:340,
//         borderRadius:15,
//         flexDirection:'row',
//         marginLeft:10,
//     },
//     plus:
//     {
//         marginLeft:340,
//         width:40,
//         height:100,
//         marginTop:250,
//         borderRadius:50,
//     },
//     add:
//     {
//         marginTop:100,
//         height:20,
//         width:20,
//         marginLeft:350,
//         marginTop:100,
//     },

// });
