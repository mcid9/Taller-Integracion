import React from 'react';
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import { Header, Card, Avatar, ListItem } from 'react-native-elements';
import { styles, Colors } from '../Css/Styles';
import * as NavigationService from '../Controller/NavigationService';

export default class Pedidos1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listRequest: ''
        }
    }

    componentDidMount = () =>{
        this.getRequest()
    }

    getRequest = async() =>{
        const url = 'http://192.168.1.112:8300/orders/index'
        let data =
        {
            method: 'POST',
            headers: {Accept:'aplication/json','Content-Type':'aplication/json'}
        }
        fetch(url,data).then((response) => response.json()).then((responseJson) =>
            {
                console.log(responseJson)
                this.setState({listRequest:responseJson})
            }
        )
    }
 /*   item(){
        NavigationService.navigate('Pedidos2')
    }*/
    render(){
        return(
            <View style= {styles.mainContainer}>
                <StatusBar hidden />
                <View styles={styles.headerContainer}>
                    <Header
                        leftComponent={{ 
                            icon: 'menu', 
                            color: Colors.textPrimary, 
                            type: 'simple-line-icon', 
                            name: 'menu'
                        }}
                        centerComponent={{ text: 'Pedidos', style: { color: Colors.textPrimary } }}
                        rightComponent={{
                            icon: 'magnifier', 
                            color: Colors.textPrimary, 
                            type: 'simple-line-icon', 
                            name: 'magnifier'
                        }}
                        containerStyle= {{backgroundColor: Colors.primary}}
                    />
                </View>

                <View style={styles.bodyContainer}>
                    <FlatList
                        style= {{width: '100%'}}
                        data = {this.state.listRequest.slice(0,this.state.visible)}
                        renderItem = {
                            ({item}) =>
                            <ListItem
                                style={styles.containerItem}
                                leftAvatar= { { source: require('../../assets/icon.png') } }
                                key = {String(item.id)}
                                title = {item.description}
                                subtitle = {item.id_client}
                                topDivider={true}
                                bottomDivider={true}
                                onPress={ () => NavigationService.navigate('Pedidos2')}
                            />
                        }
                        keyExtractor={item => String(item.id)}
                    />
                </View>

                <View style={styles.footerContainer}>

                </View>
            </View>
        );
    }
}