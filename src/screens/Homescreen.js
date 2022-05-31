import React from "react"
import {View,Text, StyleSheet,Button,TouchableOpacity,Image,ImageBackground,TextInput} from "react-native"
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps"

const HomeScreen=({navigation})=>{
    return(
        <View>
            <Image source={require("../../assets/logo.png")} 
                style={{marginTop:20,marginLeft:25,width:350,height:100}}/>        
                <Text style={styles.textStyle}>Home</Text>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Components")}>
                    <Text style={styles.buttonText}>Interviewer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonStyle} 
                    onPress={()=>navigation.navigate("List")}>
                    <Text style={styles.buttonText}>Candiadte</Text>
                </TouchableOpacity>

                <View>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Email">
                </TextInput>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Password">
                </TextInput>

                <TouchableOpacity 
                    style={styles.buttonStyle} 
                    onPress={()=>navigation.navigate("List")}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginTop:100,
        fontSize:30,
        color:"blue",
        textAlign:"center",
    },
    buttonStyle:{
        marginTop:25,
        width:200,
        height:50,
        backgroundColor:"purple",
        marginLeft:75,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"

    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        alignItems:"center",

        
    },
    inputBox:{
        marginLeft:75,
        marginBottom:10,
        width:200,
        height:50,
        borderColor:"green",
        borderWidth:5
    }
})

export default HomeScreen;