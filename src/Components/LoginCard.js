import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input, Card, Button, SocialIcon } from 'react-native-elements';
import * as GlobalValues from '../Controller/GlobalValues';
import * as NavigationService from '../Controller/NavigationService';
import { styles, Colors } from '../Css/Styles';

export default class LoginCard extends React.Component{
    constructor(props){ 
        super(props) 
        this.state = { 
            email: '', 
            password: '', 
            displayErrorPass:'none',
            displayErrorEmail:'none',
        }     
    }

    componentDidMount = async()=>{
        GlobalValues.remover('user_email');
        GlobalValues.remover("email")
        GlobalValues.remover("user")
        GlobalValues.remover("password")
        GlobalValues.remover('birthdate');
        GlobalValues.remover('avatar');
    }

    _botonInicio() { 
        var body = JSON.stringify({"email": this.state.email,"password" : this.state.password})
        console.log(body);

        if (this.state.email=="") {
            this.setState({displayErrorEmail:'flex'});
        }
        else{
            this.setState({displayErrorEmail:'none'});
        }
        if (this.state.password=="") {
            this.setState({displayErrorPass:'flex'});
        }
        else{
            this.setState({displayErrorPass:'none'});
        }
        
        let data = 
        {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
            body:body
        }
        fetch('http://192.168.1.112:8300/users/login',data)
        .then((response) => response.json())
        .then(
            (responseJson) => 
            {
                console.log(responseJson) 
                console.log(responseJson.permission) 
                console.log(responseJson.type_user) 
                if (responseJson.permission=="1" && responseJson.type_user=="user") {
                    this.setState({displayErrorEmail:'none'});
                    this.setState({displayErrorPass:'none'});
                    GlobalValues.almacenar('user_email',this.state.email);
                    NavigationService.navigate('Drawer');
                }
                else if (responseJson.permission=="1" && responseJson.type_user=="admin") {
                    this.setState({displayErrorEmail:'none'});
                    this.setState({displayErrorPass:'none'});
                    NavigationService.navigate('Admin');
                }
            }
        )
        .catch(
            (error) => console.error(error) 
        )
        //console.log(this.state.email); 
        //console.log(this.state.password);
    } 

    _botonRegistrarse(){
        console.log('Boton registrarse presionado');
        NavigationService.navigate('Registro1');
    }
    render(){
        const { navigation } = this.props;
        return(
            <View style={styles.mainContainer} navigation = {navigation}>
                <ScrollView>
                <Card containerStyle={styles.containerCard}>
                    <Text style={styles.title}>Login</Text>

                    <Input containerStyle={styles.input}
                        labelStyle= {styles.inputLabel}
                        label = 'Email'
                        placeholder = 'Ingrese email'
                        rightIcon = {{ type: 'simple-line-icon', name: 'envelope', color: Colors.textPrimary }}
                        ref={component => this._email = component}
                        errorStyle={{ color: 'red',display:this.state.displayErrorEmail }}
                        onChangeText={(text) => this.setState({email:text})}
                        errorMessage='Email invalido'
                    />

                    <Input containerStyle={styles.input}
                        labelStyle= {styles.inputLabel}
                        label = 'Clave'
                        placeholder = 'Ingrese clave'
                        rightIcon = {{ type: 'simple-line-icon', name: 'lock', color: Colors.textPrimary }}
                        secureTextEntry={true}
                        ref={component => this._password = component}
                        errorStyle={{ color: 'red',display:this.state.displayErrorPass }}
                        onChangeText={(text) => this.setState({password:text})}
                        errorMessage='Clave invalida'
                    />

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Iniciar sesión con Facebook'
                        button
                        type='facebook'
                    />

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Iniciar sesión con Google'
                        button
                        type='google'
                    />

                    <Button
                        onPress= {() =>this._botonInicio()}
                        title= 'Iniciar Sesion'
                        buttonStyle={styles.button}
                    />

                    <Button
                        onPress= {() =>this._botonRegistrarse()}
                        title= 'Registrarse'
                        buttonStyle={styles.button}
                    />
                </Card>
                </ScrollView>
            </View>
        );
    }
}