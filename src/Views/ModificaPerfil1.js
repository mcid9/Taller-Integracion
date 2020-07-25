import React, { Component } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { Header, ListItem, Input, Icon, SocialIcon, Card, Button } from 'react-native-elements';
import * as GlobalValues from '../Controller/GlobalValues';
import * as NavigationService from '../Controller/NavigationService';
import ImageUp from '../Components/ImageUp';
import { styles, Colors, Sizes } from '../Css/Styles';

const options = [
    {
        title: 'Modificar nombre de usuario',
        key: 'usuario'
    },
    {
        title: 'Modificar clave',
        key: 'clave'
    },
    {
        title: 'Modificar avatar',
        key: 'avatar'
    }
]

export default class ModificaPerfil1 extends Component {
    constructor(props){ 
        super(props) 
        this.state = {
            option: '',
            email: '',
            username: '',
            password: '',
            name: '',
            surname: '',
            avatar: '',
            //variables de visibilidad
            showUser: false,
            showPassword: false,
            showAvatar: false,
            showButton: false
        }     
    }

    componentDidMount = async()=>{
        userEmail = await GlobalValues.obtener('user_email');
        this.setState({email:userEmail})
    }

    selectedItem(selectedOption){
        this.setState({option:selectedOption})
        
        if (selectedOption == 'usuario') {
            this.state.showUser = true
            this.state.showPassword = false
            this.state.showAvatar = false
            this.state.showAvatar = false
        }if (selectedOption == 'clave') {
            this.state.showUser = false
            this.state.showPassword = true
            this.state.showAvatar = false
        }if (selectedOption == 'avatar') {
            this.state.showUser = false
            this.state.showPassword = false
            this.state.showAvatar = true
        }
    }

    botonEliminar(){
        Alert.alert(
            "Alerta",
            "¿Esta seguro de eliminar su cuenta?",
            [
                {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Si", onPress: () => this.borrarUsuario() }
            ],
            { cancelable: false }
        );
    }

    borrarUsuario(){
        var bodyEnviar = JSON.stringify({
            "email": String(this.state.email)
        })

        const url = 'http://192.168.1.112:8300/users/delete'
        let data =
        {
            method: 'POST',
            headers: {Accept:'aplication/json','Content-Type':'aplication/json'},
            body:bodyEnviar
        }
        fetch(url,data).then((response) => response.json()).then((responseJson) =>
            {
                console.log(responseJson)
                
            }
        )
    }

    actualizaUsuario(){
        var bodyEnviar = JSON.stringify({
            "email": String(this.state.email),
            "username": String(this.state.username),
            "password": String(this.state.password),
            "name": String(this.state.name),
            "surname": String(this.state.surname),
            "avatar": String(this.state.avatar),
        })

        const url = 'http://192.168.1.112:8300/users/update'
        let data =
        {
            method: 'POST',
            headers: {Accept:'aplication/json','Content-Type':'aplication/json'},
            body:bodyEnviar
        }
        fetch(url,data).then((response) => response.json()).then((responseJson) =>
            {
                console.log(responseJson)
                NavigationService.navigate('Perfil')
            }
        )
    }

    render() {
        
        return (
        <View style={styles.mainContainer}>
            
            <ScrollView>
                <View style={[styles.bodyContainer]}>                    
                    {
                        options.map((o, i) => (
                            <ListItem
                                style= {styles.containerItem}
                                key={i}
                                title={o.title}
                                onPress={() => this.selectedItem(o.key)}
                                bottomDivider
                                chevron
                            />
                        ))
                    }
                    {this.state.showUser ? (
                        <Card containerStyle={styles.containerCard}>
                            <Input 
                                containerStyle={styles.input}
                                labelStyle= {styles.inputLabel}
                                label = 'Usuario'
                                placeholder = 'Ingrese usuario a modificar'
                                rightIcon = {{ type: 'simple-line-icon', name: 'user', color: Colors.textPrimary }}
                                ref={component => this._username = component}
                                onChangeText={(text) => this.setState({username:text})}
                            />
                            <Button
                                title= 'Actualizar usuario'
                                buttonStyle={styles.button}
                                onPress= {() =>this.actualizaUsuario()}
                            />
                        </Card>
                    ) : null}

                    {this.state.showPassword ? (
                        <Card containerStyle={styles.containerCard}>
                            <Input 
                                containerStyle={styles.input}
                                labelStyle= {styles.inputLabel}
                                label = 'Clave'
                                placeholder = 'Ingrese clave a modificar'
                                rightIcon = {{ type: 'simple-line-icon', name: 'lock', color: Colors.textPrimary }}
                                ref={component => this._password = component}
                                onChangeText={(text) => this.setState({password:text})}
                            />
                            <Button
                                title= 'Actualizar clave'
                                buttonStyle={styles.button}
                                onPress= {() =>this.actualizaUsuario()}
                            />
                        </Card>
                    ) : null}

                    {this.state.showAvatar ? (
                        <Card containerStyle={styles.containerCard}>
                            <ImageUp></ImageUp>
                            <Button
                                title= 'Actualizar avatar'
                                buttonStyle={styles.button}
                                onPress= {() =>this.actualizaUsuario()}
                            />
                        </Card>
                    ) : null}
                    <Button
                        onPress= {() =>this.botonEliminar()}
                        buttonStyle={styles.buttonRed}
                        title= 'Borrar cuenta'
                    />
                </View>
            </ScrollView>
            <View style={[styles.footerContainer]}></View>
            </View>
        );
    }
}