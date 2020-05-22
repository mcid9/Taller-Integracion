import React from 'react';
import { Text } from 'react-native';
import { Input, Card, Button, Image } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles } from '../Css/Styles';
//Para subir una imagen o tomar una foto
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class RegistroCard1 extends React.Component{
    state = {
        image: null,
    };
    
    onButtonPress(){
        console.log('Boton finalizar');
        NavigationService.navigate('Login');
    }
    
    render(){
        let { image } = this.state;
        return(
            <Card containerStyle={styles.containerCard}>
                <Text style={styles.title}>Registro</Text>
                
                <Input containerStyle={styles.input}
                    label = 'Nombre'
                    placeholder = 'Ingrese nombre'
                    leftIcon = {{ type: 'simple-line-icon', name: 'user' }}
                />

                <Input containerStyle={styles.input}
                    label = 'Apellidos'
                    placeholder = 'Ingrese apellidos'
                    leftIcon = {{ type: 'simple-line-icon', name: 'user' }}
                />

                <Text style= {styles.bodyText}>Elija su imagen de perfil: </Text>

                <Button
                    buttonStyle = {styles.button}
                    title="Seleccionar imagen" 
                    onPress={this._pickImage} 
                />

                <Button
                    buttonStyle = {styles.button}
                    title="Tomar foto " 
                    onPress={this._takePicture} 
                />

                {image && (
                    <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 100 }} />
                )}

                <Button
                    onPress= {() =>this.onButtonPress()}
                    title= 'Finalizar'
                    buttonStyle={styles.button}
                    
                />
            </Card>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
        this.getPermissionCameraAsync();
    }
    
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!");
            }
        }
    };
    getPermissionCameraAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!");
            }
        }
    };
    
    //Funcion que permite tomar una foto con la camara
    _takePicture = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        
          //console.log(result);
        } catch (E) {
          //console.log(E);
        }
    };
    
    //Funcion que permite seleccionar una foto
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
    
          //console.log(result);
        } catch (E) {
          //console.log(E);
        }
    };
}