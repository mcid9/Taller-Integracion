import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card, Button, Header, Avatar, Icon, SocialIcon } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import * as GlobalValues from '../Controller/GlobalValues';
import { styles, Colors, Sizes } from '../Css/Styles';
import { Value } from 'react-native-reanimated';


export default class Perfil extends Component {
    constructor(props){ 
        super(props) 
        this.state = {
            avatar: '',
            username: '',
            name: '', 
            surname: '',
            email: '',
            socialnetworks: []
        }     
    }

    componentDidMount = async()=>{
        userEmail = await GlobalValues.obtener('user_email');
        this.setState({email:userEmail})
        this.getUserInfo()
    }

    getUserInfo(){
        var body = JSON.stringify({"email": this.state.email})
        
        let data = 
        {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
            body:body
        }
        fetch('http://192.168.1.112:8300/users/perfil',data)
        .then((response) => response.json())
        .then(
            (responseJson) => 
            {
                //console.log(responseJson)
                this.setState({avatar:responseJson.avatar})
                this.setState({username:responseJson.username})
                this.setState({name:responseJson.name})
                this.setState({surname:responseJson.surname})
                this.setState({email:responseJson.email})
                this.setState({socialnetworks:responseJson.socialnetworks})
            }
        )
        .catch(
            (error) => console.error(error) 
        )
    }

    updatePerfil()
    {
        NavigationService.navigate('ModificaPerfil1');
    }
    

    render() {
        let sn;
        if(this.state.socialnetworks.length > 0){
            sn = this.state.socialnetworks.map((myvalue, index) => {
                return(
                    <SocialIcon
                        type={myvalue.name}
                        key={index}
                    />
                )
            });
        }else{
            sn = <Text style= {styles.bodyText}>No tiene redes sociales registradas</Text>
        }

        return (
        <View style={styles.mainContainer}>
            <View style={[styles.headerContainer]}>
                <Header
                    leftComponent={{ 
                        icon: 'menu', 
                        color: Colors.textPrimary, 
                        type: 'simple-line-icon', 
                        name: 'menu'}}
                    centerComponent={{ text: 'Perfil', style: { color: Colors.textPrimary } }}
                    rightComponent={{
                        icon: 'settings',
                        color: Colors.textPrimary,
                        type: 'simple-line-icon', 
                        name: 'settings',
                        onPress: () => this.updatePerfil()
                    }}
                    containerStyle= {{backgroundColor: Colors.primary}}
                />
            </View>
            <ScrollView>
                <View style={[styles.bodyContainer]}>
                    <Avatar
                        source= {{uri: 'data:image/png;base64,'+this.state.avatar}}
                        size= 'xlarge'
                        rounded
                        containerStyle= {{alignSelf: 'center', justifyContent: 'flex-start', marginTop: 90}}
                    />
                    <Card containerStyle={[styles.box]}
                        title= 'Informacion del perfil'
                        titleStyle= {{color: Colors.textPrimary, fontSize: Sizes.fontHeader}}
                    >
                        <Text style= {styles.bodyText}>Usuario: {this.state.username}</Text>
                        <Text style= {styles.bodyText}>Nombre: {this.state.name}</Text>
                        <Text style= {styles.bodyText}>Apellidos: {this.state.surname}</Text>
                        <Text style= {styles.bodyText}>Email: {this.state.email}</Text>
                    </Card>
                    <View style={[styles.box2]}>
                        {sn}
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.footerContainer]}></View>
            </View>
        );
    }
}