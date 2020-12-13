import React from 'react';
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import { Header, Card, Avatar, ListItem } from 'react-native-elements';
import { styles, Colors } from '../Css/Styles';
import * as NavigationService from '../Controller/NavigationService';

export default class MisPedidos1 extends React.Component{
    item(){
        NavigationService.navigate('MisPedidos2')
    }
    nuevoPedido(){
        NavigationService.navigate('MisPedidos4')
    }
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
                        centerComponent={{ text: 'Mis Pedidos', style: { color: Colors.textPrimary } }}
                        rightComponent={{ 
                            icon: 'plus', 
                            color: Colors.textPrimary, 
                            type: 'simple-line-icon', 
                            name: 'plus',
                            onPress: () => this.nuevoPedido()
                        }}
                        containerStyle= {{backgroundColor: Colors.primary}}
                    />
                </View>

                <ScrollView>
                    <View style={styles.bodyContainer}>
                        
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                        <ListItem
                            style={styles.containerItem}
                            leftAvatar= { { source: require('../../assets/icon.png') } }
                            title= 'Titulo del pedido hecho por el usuario'
                            subtitle= 'tags'
                            bottomDivider
                            onPress= {() =>this.item()}
                        />
                    </View>
                </ScrollView>

                <View style={styles.footerContainer}>

                </View>
            </View>
        );
    }
}