import React from "react"
import {View,Text, StyleSheet,FlatList} from "react-native"

const ListScreen=()=>{
    const friends = [
    {name: "Friend10", Age:15},
    {name: "Friend11", Age:20},
    {name: "Friend12", Age:35},
    {name: "Friend13", Age:35},
    {name: "Friend14", Age:45},
    {name: "Friend15", Age:55},
    {name: "Friend16", Age:65},
    {name: "Friend17", Age:33},
    {name: "Friend18", Age:54},
    {name: "Friend19", Age:56},
    
    ]
    return(
        <FlatList 
      //  horizontal
      //  showsHorizontalScrollIndicator={false}
        keyExtractor={(f)=>f.name}
        data={friends} 
        renderItem={({item})=>{
            //item===friend10, index=0
           return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>
        }}/>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginTop:50,
        fontSize:30,
        color:"blue"
    }
})

export default ListScreen;