import { useRoute } from '@react-navigation/native';
import React,{useEffect} from 'react'
import { ActivityIndicator, StyleSheet, Text, View ,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userByIdRequestAction } from '../store/action';
import { SafeAreaView } from 'react-native-safe-area-context';
  
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
        flexDirection: 'column'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%"
     },
    text: {
        flexWrap: 'wrap',
        marginHorizontal: 10,
        fontSize:17
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    row:{
        flexDirection:"row",
        padding:5,
         justifyContent:"flex-start",
        alignItems:"center"
    },
    col:{
        flexDirection:"column",
        padding:5,
         justifyContent:"center",
        alignItems:"center"
    }
});

const UserDetailsScreen = () =>{
    const route = useRoute()
    const { userId } = route.params

    const usersModel = useSelector(users => users.users)
    const dispatch = useDispatch();
    const requestAPI = () => {
        dispatch(userByIdRequestAction({
              userId: userId
        }))
     }

    useEffect(() => {
        requestAPI();
      }, [userId])


    return (
        <SafeAreaView>
            {
                usersModel.loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
                : 
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.imageContainer}>
                        <Image
                                source={{uri: usersModel.user.avatar}}
                                style={styles.image}
                            />
                        </View>
                    </View>
                <View style={styles.row}>
                <View style={styles.col}>                            
                            <Text style={styles.text}>
                                <Text style={styles.title}>Name: </Text>  
                                {usersModel.user.first_name + " " + usersModel.user.last_name } 
                            </Text>   
                        </View>
                </View>
                <View style={styles.row}>
                <View style={styles.col}>
                        <Text style={styles.text}>
                            <Text style={styles.title}>Email: </Text> 
                            {usersModel.user.email } 
                        </Text>   
                </View>     
                </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.text}>
                            <Text style={styles.title}>Phone: </Text> 
                                {usersModel.user.phone } 
                            </Text>   
                </View>
                </View>        

                </View>
            }
        </SafeAreaView>
    )
}

export default UserDetailsScreen
