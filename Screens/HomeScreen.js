import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

    constructor(){
        super();

        this.state = {
            requestedBookList : []
        };
        
        this.requestRef = null;
    }


    getRequestedBookList = async ()=> {
        this.requestRef = await db.collection("requested_items")
        .onSnapshot((snapshot)=>{
            var requested_book_list = snapshot.docs.map( (document) => document.data() );
            this.setState({
                requestedBookList: requested_book_list
            });
            //console.log(requested_book_list);
        });
    }


    componentDidMount(){
        this.getRequestedBookList();
    }


    componentWillUnmount(){
        this.requestRef();
    }


    keyExtractor = (index, item) => index.toString();

    renderItem = ( {i, item} ) => {
        return(
            <ListItem 
              key = {i}
              title = {item.object_name}
              subtitle = {item.object_description}
              titleStyle = {{ color: 'black', fontWeight: 'bold' }}
              rightElement = {
                  <TouchableOpacity
                    style = {styles.button}>
                      <Text style = {{color: '#FFFF', fontSize: 45}}>View</Text>
                  </TouchableOpacity>
              }
              bottomDivider = {true}/>
        )
    }


    render(){
        return(
            <View style = {{flex: 1}}>

                <AppHeader title = "View Requests" />

                <View style = {{flex: 1}}>
                    {
                        this.state.requestedBookList.length === 0 ?
                        (
                            <View style = {styles.subContainer}>
                                <Text style = {{fontSize: 20}}>List of all Requests</Text>
                            </View>
                        ) :
                        (
                            <FlatList 
                              keyExtractor = {this.keyExtractor}
                              data = {this.state.requestedBookList}
                              renderItem = {this.renderItem}/>
                        )
                    }
                </View>

            </View>
        )
    }

}


const styles = StyleSheet.create({

    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#FF5722',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 }
    }

})