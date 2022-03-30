import * as React from 'react';
import { useEffect, useState } from 'react';
import {View,Text, ActivityIndicator, Button, StyleSheet} from 'react-native'
import ListItem from '../components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { usersListRequestAction } from '../store/action';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
 
const style =  StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 15,
        marginHorizontal: 10
    },
    loading: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    emptyText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
const UsersListScreen = () =>{
    let [page, setPage] = useState(1);
    const usersModel = useSelector(users => users.users)
    const dispatch = useDispatch();
    const requestAPI = () => {
        dispatch(usersListRequestAction({
              page: page
        }))
    }

    useEffect(() => {
        requestAPI();
     }, [page])

    const fetchMoreData = () => {
        if (!usersModel.isListEnd && !usersModel.moreLoading) {
             setPage(page + 1)
        }
    }

    const renderHeader = () => (
        <Text style={style.title}>Users</Text>
    )

    const renderFooter = () => (
        <View style={style.footerText}>
            {usersModel.moreLoading && <ActivityIndicator />}
            {usersModel.isListEnd && <Text>No more Users</Text>}
        </View>
    )

    const renderEmpty = () => (
        <View style={style.emptyText}>
            <Text>No Data !</Text>
            <Button onPress={() => requestAPI()} title='Refresh'/>
        </View>
    )
    return (
        <SafeAreaView style={style.container}>
            {usersModel.loading ?
                <View style={style.loading}>
                    <ActivityIndicator size='large' />
                </View>
                :
                <FlatList
                contentContainerStyle={{flexGrow: 2}}
                    data={usersModel.usersList}
                    renderItem={({ item }) => (
                        <ListItem user={item}/>
                    )}
                    keyExtractor={(item,index) => index}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    ListEmptyComponent={renderEmpty}
                    onEndReachedThreshold={0.2}
                    onEndReached={fetchMoreData}
                />
            }

        </SafeAreaView>
    )
 
}

export default UsersListScreen