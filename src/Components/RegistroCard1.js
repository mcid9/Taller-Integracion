import React from 'react';
import { Text } from 'react-native';
import { Input, Card, Button, SocialIcon } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles } from '../Css/Styles';

export default class RegistroCard1 extends React.Component{
    onButtonPress(){
        console.log('Boton Siguiente');
        NavigationService.navigate('Registro2');
    }
    render(){
        return(
                <Card containerStyle={styles.containerCard}>
                    <Text style={styles.title}>Registro</Text>

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Registrarse con Facebook'
                        button
                        type='facebook'
                    />

                    <SocialIcon containerStyle={styles.SocialIcon}
                        title='Registrarse con google'
                        button
                        type='google'
                    />
                    
                    <Input containerStyle={styles.input}
                        label = 'Email'
                        placeholder = 'Ingrese email'
                        leftIcon = {{ type: 'simple-line-icon', name: 'envelope' }}
                        
                    />

                    <Input containerStyle={styles.input}
                        label = 'Usuario'
                        placeholder = 'Ingrese usuario'
                        leftIcon = {{ type: 'simple-line-icon', name: 'user' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Contraseña'
                        placeholder = 'Ingrese contraseña'
                        leftIcon = {{ type: 'simple-line-icon', name: 'lock' }}
                    />

                    <Button
                        title= 'Seleccionar edad'
                        buttonStyle={styles.button}
                    />

                    <Button
                        onPress= {() =>this.onButtonPress()}
                        title= 'Siguiente'
                        buttonStyle={styles.button}
                    />
                </Card>
        );
    }
}