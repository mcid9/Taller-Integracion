import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Header, Input, Card, Avatar, Divider, Button } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles, Colors } from '../Css/Styles';

export default class MisPedidos3 extends React.Component{
    enviarSolicitud(){
        NavigationService.navigate('Drawer');
    }
    render(){
        return(
            <View style= {styles.mainContainer}>
                <StatusBar hidden />
                <View styles={styles.headerContainer}>
                    <Header
                        leftComponent= {{
                            icon: 'arrow-left',
                            color: Colors.textPrimary, 
                            type: 'simple-line-icon', 
                            name: 'arrow-left'
                        }}
                        centerComponent={{ text: 'Solicitud de pedido', style: { color: Colors.textPrimary } }}
                        containerStyle= {{backgroundColor: Colors.primary}}
                    />
                </View>

                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <Card containerStyle={styles.boxPedido}>
                            <View style= {{
                                flexDirection: 'row'
                            }}>
                                <Avatar 
                                    rounded
                                    source= {require('../../assets/icon.png')}
                                    size= 'large'
                                    containerStyle= {{marginRight: 5}}
                                />
                                <View style= {{
                                    flexDirection: 'column',
                                    alignSelf: 'center'
                                }}>
                                    <Text style= {styles.bodyText} >Usuario del tatuador</Text>
                                </View>
                            </View>

                            <Divider style={styles.divider} />

                            <Text style= {{alignSelf: "center", color: Colors.textPrimary}} >Diseño a presentar</Text>

                            <Divider style={styles.divider} />

                            <Text style= {{alignSelf: "center", justifyContent: 'center', color: Colors.textPrimary}} >Comentario del tatuador:</Text>
                            
                            <Divider style={styles.divider} />
                            
                            
                        </Card>

                        <Button 
                            buttonStyle= {styles.button}
                            containerStyle= {{marginTop: 3}}
                            title= 'Aceptar'
                        />

                        <Button 
                            buttonStyle= {styles.button}
                            containerStyle= {{marginTop: 3}}
                            title= 'Rechazar'
                        />
                    </View>
                </ScrollView>

                <View style={styles.footerContainer}>
                    
                </View>
            </View>
        );
    }
}