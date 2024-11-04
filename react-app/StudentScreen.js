import { View } from 'react-native-web';
import StudentDetails from './components/StudentDetails';

const StudentScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Student Screen</Text>
            <StudentDetails></StudentDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        merginVertical: 20

    }
})

export default StudentScreen;