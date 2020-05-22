import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card, Button, Header, Avatar, Icon, SocialIcon } from 'react-native-elements';
import { styles, Colors, Sizes } from '../Css/Styles';


export default class FixedHeaderFooter extends Component {
    render() {
        return (
        <View style={styles.mainContainer}>
            <View style={[styles.headerContainer]}>
                <Header
                    leftComponent={{ 
                        icon: 'menu', 
                        color: Colors.textPrimary, 
                        type: 'simple-line-icon', 
                        name: 'menu'}}
                    centerComponent={{ text: 'Perfil', style: { color: Colors.textPrimary } }}
                    containerStyle= {{backgroundColor: Colors.primary}}
                />
            </View>
            <ScrollView>
                <View style={[styles.bodyContainer]}>
                    <Avatar
                        source= {require('../../assets/icon.png')}
                        size= 'xlarge'
                        rounded
                        containerStyle= {{alignSelf: 'center', justifyContent: 'flex-start', marginTop: 90}}
                    />
                    <Card containerStyle={[styles.box]}
                        title= 'Informacion del perfil'
                        titleStyle= {{color: Colors.textPrimary, fontSize: Sizes.fontHeader}}
                    >
                        <Text style= {styles.bodyText}>Usuario: </Text>
                        <Text style= {styles.bodyText}>Nombre: </Text>
                        <Text style= {styles.bodyText}>Apellidos: </Text>
                        <Text style= {styles.bodyText}>Email: </Text>
                    </Card>
                    
                    <Card containerStyle={[styles.box]}
                        title= 'Redes Sociales'
                        titleStyle= {{color: Colors.textPrimary, fontSize: Sizes.fontHeader}}
                    >

                        <Icon 
                            type='simple-line-icon' 
                            name='plus' 
                            color= {Colors.textPrimary}
                            containerStyle={{alignSelf: 'center'}}
                        />
                        <Text style= {styles.bodyText}>*Solo puedes tomar pedidos si tienes al menos una red social publicada </Text>
                    </Card>
                    <Button 
                        buttonStyle={styles.button} 
                        title='Modificar perfil'
                        icon={
                        <Icon
                            type='simple-line-icon' 
                            name='settings'
                            color= {Colors.textPrimary}
                            iconStyle= {{marginRight: 5}}
                        />} 
                    />
                </View>
            </ScrollView>
            <View style={[styles.footerContainer]}></View>
            </View>
        );
    }
}