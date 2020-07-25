import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input, Card, Button, Image } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import * as GlobalValues from '../Controller/GlobalValues';
import { styles, Colors } from '../Css/Styles';
import ImageUp from './ImageUp'

export default class RegistroCard2 extends React.Component{
    constructor(props){ 
        super(props) 
        this.state = { 
            //Variables globales
            email: "",
            user: "",
            password: "",
            birthdate: "",
            avatar: "",
            //Variables de este componente
            name: "",
            surname: "",
            //Mensajes de error
            displayErrorName:'none',
            displayErrorSurname:'none',
        }     
    }

    componentDidMount = async()=>{
        email = await GlobalValues.obtener('email');
        this.setState({email:email})
        user = await GlobalValues.obtener('user');
        this.setState({user:user})
        password = await GlobalValues.obtener('password');
        this.setState({password:password})
        birthdate = await GlobalValues.obtener('birthdate');
        this.setState({birthdate:birthdate})
        avatar = await GlobalValues.obtener('avatar');
        this.setState({avatar:avatar})
    }

    botonFinalizar(){
        var bodyEnviar = JSON.stringify({
            "username": String(this.state.user),
            "email": String(this.state.email),
            "password": String(this.state.password),
            "type_user": "user",
            "name": String(this.state.name),
            "surname": String(this.state.surname),
            "birthdate": String(this.state.birthdate),
            "avatar": String(this.state.avatar)
        })
        console.log('Boton finalizar');
        //console.log(bodyEnviar)

        let data = 
        {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
            body:bodyEnviar
        }
        fetch("http://192.168.1.112:8300/users/store", data)
        .then((response) => response.json())
        .then(
            (responseJson) => 
            {
                //console.log(responseJson) 
                NavigationService.navigate('Login');
            }
        )
        .catch(
            (error) => console.error(error) 
        )
        
    }
    
    render(){
        const { navigation } = this.props;
        return(
            <View style={styles.mainContainer} navigation = {navigation}>
                <ScrollView>
                    <Card containerStyle={styles.containerCard}>
                        <Text style={styles.title}>Registro</Text>

                        <Input containerStyle={styles.input}
                            labelStyle= {styles.inputLabel}
                            label = 'Nombre'
                            placeholder = 'Ingrese nombre'
                            rightIcon = {{ type: 'simple-line-icon', name: 'user', color: Colors.textPrimary }}
                            ref={component => this._name = component}
                           /* errorStyle={{ color: 'red',display:this.state.displayErrorEmail }}
                            errorMessage='Email invalido'*/
                            onChangeText={(text) => this.setState({name:text})}
                        />

                        <Input containerStyle={styles.input}
                            labelStyle= {styles.inputLabel}
                            label = 'Apellidos'
                            placeholder = 'Ingrese apellidos'
                            rightIcon = {{ type: 'simple-line-icon', name: 'user', color: Colors.textPrimary }}
                            ref={component => this._surname = component}
                           /* errorStyle={{ color: 'red',display:this.state.displayErrorEmail }}
                            errorMessage='Email invalido'*/
                            onChangeText={(text) => this.setState({surname:text})}
                        />

                        <ImageUp></ImageUp>

                        <Button
                            onPress= {() =>this.botonFinalizar()}
                            title= 'Finalizar'
                            buttonStyle={styles.button}
                            
                        />
                    </Card>
                </ScrollView>
            </View>
        );
    }

}