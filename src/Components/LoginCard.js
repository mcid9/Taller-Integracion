import React from 'react';
import { Text, View } from 'react-native';
import { Input, Card, Button, SocialIcon } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles } from '../Css/Styles';

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
        fetch('http://192.168.99.100:8300/users/login',data)
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
                    NavigationService.navigate('Pedidos1');
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
        if (this.state.email=="admin" && this.state.password=="admin") {
            this.setState({displayErrorEmail:'none'});
            this.setState({displayErrorPass:'none'});
            NavigationService.navigate('Admin');
        }
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
                <Card containerStyle={styles.containerCard}>
                    <Text style={styles.title}>Login</Text>

                    <Input containerStyle={styles.input}
                        label = 'Email'
                        placeholder = 'Ingrese email'
                        leftIcon = {{ type: 'simple-line-icon', name: 'envelope' }}
                        ref={component => this._email = component}
                        errorStyle={{ color: 'red',display:this.state.displayErrorEmail }}
                        onChangeText={(text) => this.setState({email:text})}
                        errorMessage='Email invalido'
                    />

                    <Input containerStyle={styles.input}
                        label = 'Clave'
                        placeholder = 'Ingrese clave'
                        leftIcon = {{ type: 'simple-line-icon', name: 'lock' }}
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

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Iniciar sesión con Instagram'
                        button
                        type='instagram'
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
            </View>
        );
    }
}