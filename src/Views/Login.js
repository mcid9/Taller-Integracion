import React , { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Icon, Card, Button, SocialIcon } from 'react-native-elements';
import NavigationService from '../Components/NavigationService';

class Login extends Component{
    onButtonPress(){
        console.log('Boton login presionado');
        NavigationService.navigate('Registro');
    }
    render(){
        return(
            <View style={styles.container}>

                <Card containerStyle={styles.card}>
                    <Text style={styles.title}>Login</Text>
                    <Input containerStyle={styles.input}
                        label = 'Email'
                        placeholder = 'Ingrese email'
                        leftIcon = {{ type: 'font-awesome', name: 'envelope' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Clave'
                        placeholder = 'Ingrese clave'
                        leftIcon = {{ type: 'font-awesome', name: 'lock' }}
                        secureTextEntry={true}
                    />

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Iniciar sesión con Facebook'
                        button
                        type='facebook'
                    />

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Iniciar sesión con google'
                        button
                        type='google'
                    />

                    <Button
                        title= 'Iniciar Sesion'
                        buttonStyle={styles.button}
                    />

                    <Button
                        onPress= {() =>this.onButtonPress()}
                        title= 'Registrarse'
                        buttonStyle={styles.button}
                    />
                </Card>
                
            </View>
            
        );
    }
}

//make this component available to the app
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07090F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        backgroundColor: '#0C316F',
        borderRadius: 6,
        borderColor: '#0C316F',
        marginTop: 35,
        marginBottom: 30
    },
    title: {
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 25,
        color: '#D5D2CD',
        marginBottom: 5
    },
    subtitle:{
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
        color: '#D5D2CD',
        marginBottom: 5
    },
    button: {
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: '#07090F',
        borderRadius: 6
    },
    input: {
        width: '98%',
        marginBottom: 3,
    },
    SocialIcon: {
        marginBottom: 5
    }
});