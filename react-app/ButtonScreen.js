import react from "react"
import { TouchableOpacity } from "react-native";
import { View,Text,StyleSheet,Button } from 'react-native'

const ButtonScreen =() =>{
    
    return(
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button title="Click me" color ='purple' onPress={()=> console.log('Button Clicked!')}/>

                <TouchableOpacity style={styles.touchableBtn} onPress={()=> console.log('touchable opacity clicked: ', counterT++)}>
                    <Text style={styles.btnText}>Clicked Touchable Element</Text>
                </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10
    },
        touchableBtn: {
            backgroundColor: 'purple',
            marginVertical: 15,
            paddingVertical: 20,
            borderRadius: 6,
            marginHorizontal:20
    },
        btnText:{
            color: 'white',
            textAlign: 'center',
            fontSize: 25
    }
    
});

export default ButtonScreen;