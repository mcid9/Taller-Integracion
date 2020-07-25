import React from 'react';
import { View, Text } from 'react-native';
import { Button, Image, Avatar } from 'react-native-elements';
import { styles, Colors } from '../Css/Styles';
import * as GlobalValues from '../Controller/GlobalValues';
//Para subir una imagen o tomar una foto
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class ImageUp extends React.Component{
    state = {
        image: null,
        base64: ''
    };

    render(){
        let { image } = this.state;
        return(
            <View>
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
            /*      <Image 
                        source={{ uri: image }} 
                        style={{ 
                            width: 200, 
                            height: 200, 
                            alignContent: 'center', 
                            borderRadius: 100 
                        }} 
                    />*/
                    
                    <Avatar
                        source= {{uri: image}}
                        size= 'xlarge'
                        rounded
                        containerStyle= {{alignSelf: 'center'}}
                    />
                )}
            </View>
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
                this.setState({ base64: result.base64});
                GlobalValues.almacenar("avatar", result.base64)
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
                this.setState({ base64: result.base64});
                GlobalValues.almacenar("avatar",result.base64)
            }
    
          //console.log(result);
        } catch (E) {
          //console.log(E);
        }
    };
}