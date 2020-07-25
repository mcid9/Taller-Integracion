import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input, Card, Button, SocialIcon } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import * as GlobalValues from '../Controller/GlobalValues';
import DateTimePicker from './DateTimePicker'
import { styles, Colors } from '../Css/Styles';


export default class RegistroCard1 extends React.Component{
    constructor(props){ 
        super(props) 
        this.state = { 
            email: '', 
            user: '',
            password: '', 
            birthdate: '',
            //Mensajes de error
            displayErrorEmail:'none',
            displayErrorUser:'none',
            displayErrorPass:'none',
            displayErrorBirthdate:'none',
        }     
    }

    componentDidMount = async()=>{
        birthdate = await GlobalValues.obtener('birthdate');
        this.setState({birthdate: birthdate})
    }

    botonSiguiente(){
        if(this.state.email==""){
            this.setState({displayErrorEmail:'flex'});
        }else{
            this.setState({displayErrorEmail:'none'});
        }

        if(this.state.user==""){
            this.setState({displayErrorUser:'flex'});
        }else{
            this.setState({displayErrorUser:'none'});
        }

        if(this.state.password==""){
            this.setState({displayErrorPass:'flex'});
        }else{
            this.setState({displayErrorPass:'none'});

            console.log('Boton Siguiente');
            GlobalValues.almacenar("email",this.state.email)
            GlobalValues.almacenar("user",this.state.user)
            GlobalValues.almacenar("password",this.state.password)
            NavigationService.navigate('Registro2');
        }
/*
        if(this.state.birthdate==""){
            this.setState({displayErrorBirthdate:'flex'});
        }else{
            this.setState({displayErrorBirthdate:'none'});
        }
*/
        
    }
    render(){
        const { navigation } = this.props;
        return(
            <View style={styles.mainContainer} navigation = {navigation}>
                <ScrollView>
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
                            labelStyle= {styles.inputLabel}
                            label = 'Email'
                            placeholder = 'Ingrese email'
                            rightIcon = {{ type: 'simple-line-icon', name: 'envelope', color: Colors.textPrimary }}
                            ref={component => this._email = component}
                            errorStyle={{ color: 'red',display:this.state.displayErrorEmail }}
                            errorMessage='Email invalido'
                            onChangeText={(text) => this.setState({email:text})}
                        />

                        <Input containerStyle={styles.input}
                            labelStyle= {styles.inputLabel}
                            label = 'Usuario'
                            placeholder = 'Ingrese usuario'
                            rightIcon = {{ type: 'simple-line-icon', name: 'user', color: Colors.textPrimary }}
                            ref={component => this._user = component}
                            errorStyle={{ color: 'red',display:this.state.displayErrorUser }}
                            errorMessage='Usuario invalido'
                            onChangeText={(text) => this.setState({user:text})}
                        />

                        <Input containerStyle={styles.input}
                            labelStyle= {styles.inputLabel}
                            label = 'Contraseña'
                            placeholder = 'Ingrese contraseña'
                            rightIcon = {{ type: 'simple-line-icon', name: 'lock', color: Colors.textPrimary }}
                            ref={component => this._password = component}
                            errorStyle={{ color: 'red',display:this.state.displayErrorPass }}
                            errorMessage='Contraseña invalida'
                            onChangeText={(text) => this.setState({password:text})}
                        />

                        <DateTimePicker></DateTimePicker>

                        <Button
                            onPress= {() =>this.botonSiguiente()}
                            title= 'Siguiente'
                            buttonStyle={styles.button}
                        />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}