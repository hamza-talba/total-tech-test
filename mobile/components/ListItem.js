import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Image,Button } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 10
    },
    box: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:"column"
    },
    title: {
        flexWrap: 'wrap',
        marginHorizontal: 10,
    }
});


const ListItem = ({ user }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                 source={{uri: user.avatar}}
                style={styles.image}
            />
            <View style={styles.box}>
                <Text style={styles.title}>
                    {user.first_name + " " +user.last_name } 
                </Text>               
                <Button
                    title="More Details"
                    onPress={() => navigation.navigate('Details', { userId: user.id })}
                />
            </View>            
        </View>
    )
}

export default ListItem