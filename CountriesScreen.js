import React from 'react'
import {View,Text,FlatList, StyleSheet} from 'react-native'
import data from './data/Countries.json'

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            Countries: []
        }
    }
    componrntDidMount(){
        this.setState({
            Countries: data
        })
    }

    render(){  
        return(
        <View>
            <Text style={StyleSheet.screenTittle}>Countries Screen</Text>
            <FlatList data={this.state.Countries}
            keyExtractor={Countries => Countries.id}
            renderItem={({item}) => (
                <View style={styles.cardWrapper}>
                    <Text>City name: {item.name}</Text>
                    <Text>Country name:{item.country}</Text>
                    <Text>City Description: {item.description}</Text>
                </View>
            )}
            ></FlatList>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    screenTittle:{
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold',
    }
})

export default CountriesScreen;