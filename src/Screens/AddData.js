import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import { addItem } from "../redux/action/addTodo";
import { useState } from "react";


export default function AddData(props) {
  const items = useSelector((state) => state.todo);
  
  const [data,setData] = useState({
    name:"",
  });
  
  function InputData(type,text)
  {
    setData({...data,[type]:text})
  }
  function saveData()
  {
    if(data.name!=="")
    {
      const obj = {id:Math.random(),data};
      addItem([...items,obj]);
      setData({
        name:"",
      });
      
    }
  
  }
  
  const showData = () => {
    props.navigation.navigate("ShowData");
  };
  return (
    <View style={styles.container}>
      <TextInput  
        style={styles.input}
        onChangeText={(text)=>{
          InputData("name",text);
        }}
        value={data.name}
        name="name"
        placeholder={"Add your todo here"}
      />
      <TouchableOpacity style={styles.btn} onPress={() => saveData()}>
        <Text style={styles.btntxt}>ADD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => showData()}>
        <Text style={styles.btntxt}>SHOW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderBottomWidth: 2,
    padding: 10,
    borderRadius: 3,
    width: 150,
    borderBottomColor: "#009999",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1FFFF",
  },
  btn: {
    height: 40,
    width: 170,
    backgroundColor: "#009999",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btntxt: {
    fontWeight: "bold",
    color: "white",
  },
});


























//correct
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { useDispatch,useSelector } from "react-redux";
// import { Add_to_do } from "../redux/reducer/TodoSlicer";
// import { useState,  } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function AddData(props) {
//   const items = useSelector((state) => state.todo);
//   // console.log(items, "dsfghj");
//   // const setData = async () => {
//   //   try {
//   //     await AsyncStorage.setItem("value", JSON.stringify(items));
//   //   } catch (error) {
//   //     console.log("error", error);
//   //   }
//   // };
//   const [input, updatedvalue] = useState("");
//   console.log(input, "input");
//   const [id, setID] = useState(1);
//   const dispatch = useDispatch();

//   const addToHandler = () => {
//     if (!input.trim()) {
//       return;
//     }
//     dispatch(
//       Add_to_do({
//         id: id,
//         text: input,
//       })
//     );
//     setData();
//     // updatedvalue('');
//     setID((nextId) => nextId + 1);
//   };
//   const showData = () => {
//     props.navigation.navigate("ShowData");
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         onChangeText={updatedvalue}
//         value={input}
//         placeholder={"Add your todo here"}
//       />
//       <TouchableOpacity style={styles.btn} onPress={() => addToHandler()}>
//         <Text style={styles.btntxt}>ADD</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.btn} onPress={() => showData()}>
//         <Text style={styles.btntxt}>SHOW</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 0,
//     borderBottomWidth: 2,
//     padding: 10,
//     borderRadius: 3,
//     width: 150,
//     borderBottomColor: "#009999",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F1FFFF",
//   },
//   btn: {
//     height: 40,
//     width: 170,
//     backgroundColor: "#009999",
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   btntxt: {
//     fontWeight: "bold",
//     color: "white",
//   },
// });


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { Add_to_do } from "../redux/reducer/TodoSlicer";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function AddData(props) {
//   const [input, updatedvalue] = useState("");
//   const [id, setID] = useState(1);
//   const items = useSelector((state) => state.todo);
//   const dispatch = useDispatch();


//   const addToHandler = () => {
//     if (!input.trim()) {
//       return;
//     }
//     dispatch(
//       Add_to_do({
//         id: id,
//         text: input,
//       })
//     );
//     setData();
//     // updatedvalue('');
//     setID((nextId) => nextId + 1);
//   };

//   const setData = async () => {
//     try {
//       await AsyncStorage.setItem("value", JSON.stringify(items));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const showData = () => {
//     props.navigation.navigate("ShowData");
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         onChangeText={updatedvalue}
//         value={input}
//         placeholder={"Add your todo here"}
//       />
//       <TouchableOpacity style={styles.btn} onPress={addToHandler}>
//         <Text style={styles.btntxt}>ADD</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.btn} onPress={showData}>
//         <Text style={styles.btntxt}>SHOW</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 0,
//     borderBottomWidth: 2,
//     padding: 10,
//     borderRadius: 3,
//     width: 150,
//     borderBottomColor: "#009999",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F1FFFF",
//   },
//   btn: {
//     height: 40,
//     width: 170,
//     backgroundColor: "#009999",
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   btntxt: {
//     fontWeight: "bold",
//     color: "white",
//   },
// });
