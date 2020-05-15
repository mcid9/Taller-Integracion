import React , { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Input, Icon, Card, Button, SocialIcon } from 'react-native-elements';
import NavigationService from '../Components/NavigationService';
import DatePicker from 'react-native-modern-datepicker';

class Registro extends Component{
    onButtonPress(){
        console.log('Boton siguiente presionado');
        NavigationService.navigate('Login');
    }
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>

                <Card containerStyle={styles.card}>
                    <Text style={styles.title}>Registro</Text>

                    <SocialIcon
                        title='Registrarse con Facebook'
                        button
                        type='facebook'
                    />

                    <SocialIcon
                        title='Registrarse con google'
                        button
                        type='google'
                    />
                    
                    <Input containerStyle={styles.input}
                        label = 'Email'
                        placeholder = 'Ingrese email'
                        leftIcon = {{ type: 'font-awesome', name: 'envelope' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Usuario'
                        placeholder = 'Ingrese usuario'
                        leftIcon = {{ type: 'font-awesome', name: 'user' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Contraseña'
                        placeholder = 'Ingrese contraseña'
                        leftIcon = {{ type: 'font-awesome', name: 'lock' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Nombre'
                        placeholder = 'Ingrese nombre'
                        leftIcon = {{ type: 'font-awesome', name: 'user' }}
                    />

                    <Input containerStyle={styles.input}
                        label = 'Apellidos'
                        placeholder = 'Ingrese apellidos'
                        leftIcon = {{ type: 'font-awesome', name: 'user' }}
                    />
                    <Text style={styles.subtitle}>Seleccione fecha de nacimiento:</Text>
                    <DatePicker
                        options={{
                            backgroundColor: '#090C08',
                            textHeaderColor: '#fff',
                            textDefaultColor: '#fff',
                            selectedTextColor: '#fff',
                            mainColor: '#6F6D6C',
                            textSecondaryColor: '#fff',
                            borderColor: '#6F6D6C',
                        }}
                        current="2020-07-13"
                        selected="2020-07-23"
                        mode="calendar"
                        minuteInterval={30}
                        style={{ borderRadius: 10 }}
                    />

                    <Text style={styles.subtitle}>Suba una foto de perfil:</Text>

                    <Image
                        source={require('../../assets/icon.png')}
                    />

                    <Button
                        onPress= {() =>this.onButtonPress()}
                        title= 'Finalizar'
                        buttonStyle={styles.button}
                    />

                </Card>
                
            </View>
            </ScrollView>
        );
    }
}

export default Registro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07090F',

    },
    card: {
        flex: 1,
        width: '90%',
        height: '60%',

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
    },
    image: {
        alignContent: 'center',
        alignSelf: 'center'
    }
});