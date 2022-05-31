import React from "react"
import {View,Text, StyleSheet} from "react-native"

const ComponentsScreen=()=>{
    return(
        <Text style={styles.textStyle}>Hello world</Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginTop:100,
        fontSize:30,
        color:"blue"
    }
})

export default ComponentsScreen;