import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Header, Input, Card, Avatar, Divider, Button, Badge } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles, Colors } from '../Css/Styles';

export default class PedidosTomados2 extends React.Component{
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
                        centerComponent={{ text: 'Detalle pedido tomado', style: { color: Colors.textPrimary } }}
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
                                    <Text style= {styles.bodyText} >Titulo del pedido</Text>
                                </View>
                            </View>

                            <Divider style={styles.divider} />

                            <Text style= {{alignSelf: "center", color: Colors.textPrimary}} >Tags</Text>

                            <Divider style={styles.divider} />

                            <Text style= {{alignSelf: "center", justifyContent: 'center', color: Colors.textPrimary}} >Descripcion pedido:</Text>
                            
                            <Divider style={styles.divider} />
                            
                            
                        </Card>

                        <Button 
                            buttonStyle= {styles.button}
                            containerStyle= {{marginTop: 3}}
                            title= 'Revisar boceto enviado'
                        />

                        <Badge 
                            status= 'success'
                            value= 'Pedido terminado'
                        />

                    </View>
                </ScrollView>

                <View style={styles.footerContainer}>
                    
                </View>
            </View>
        );
    }
}