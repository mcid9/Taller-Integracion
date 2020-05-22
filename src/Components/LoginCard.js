import React from 'react';
import { Text } from 'react-native';
import { Input, Card, Button, SocialIcon } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles } from '../Css/Styles';

export default class LoginCard extends React.Component{
    botonInicio(){
        NavigationService.navigate('Drawer');
    }
    botonRegistrarse(){
        console.log('Boton registrarse presionado');
        NavigationService.navigate('Registro1');
    }
    render(){
        return(
                <Card containerStyle={styles.containerCard}>
                    <Text style={styles.title}>Login</Text>

                    <Input containerStyle={styles.input}
                        label = 'Email'
                        placeholder = 'Ingrese email'
                        leftIcon = {{ type: 'simple-line-icon', name: 'envelope' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Clave'
                        placeholder = 'Ingrese clave'
                        leftIcon = {{ type: 'simple-line-icon', name: 'lock' }}
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
                        onPress= {() =>this.botonInicio()}
                        title= 'Iniciar Sesion'
                        buttonStyle={styles.button}
                    />

                    <Button
                        onPress= {() =>this.botonRegistrarse()}
                        title= 'Registrarse'
                        buttonStyle={styles.button}
                    />
                </Card>
        );
    }
}