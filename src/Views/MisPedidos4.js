import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Header, Input, Card, Avatar, Divider, Button } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import { styles, Colors } from '../Css/Styles';
import * as GlobalValues from '../Controller/GlobalValues';
import TagInput from 'react-native-tags-input';

export default class MisPedidos4 extends React.Component{
    constructor(props){ 
        super(props) 
        this.state = { 
            email: '',
            titulo: '', 
            tags: {
                tag: '',
                tagsArray: []
            },
            descripcion:'',
            imagen:''
        }     
    }

    componentDidMount = async()=>{
        userEmail = await GlobalValues.obtener('user_email');
        this.setState({email:userEmail});
    }

    updateTagState = (state) => {
        this.setState({
            tags: state
        })
    };

    botonPublicar(){
        var bodyEnviar = JSON.stringify({
            "email": String(this.state.email),
            "title": String(this.state.titulo),
            "description": String(this.state.descripcion),
            "image": String(this.state.imagen),
            "tags": this.state.tags.tagsArray
        })
        console.log(bodyEnviar);

        let data = 
        {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
            body:bodyEnviar
        }
        fetch("http://192.168.1.112:8300/orders/store", data)
        .then((response) => response.json())
        .then(
            (responseJson) => 
            {
                //console.log(responseJson) 
                NavigationService.navigate('Drawer');
            }
        )
        .catch(
            (error) => console.error(error) 
        )
        
    }

    render(){
        return(
            <View style= {styles.mainContainer}>
                <StatusBar hidden />
                <View styles={styles.headerContainer}>
                    <Header
                        leftComponent= {{
                            icon: 'arrow-left',
                            color: Colors.textPrimary, 
                            type: 'simple-line-icon', 
                            name: 'arrow-left'
                        }}
                        centerComponent={{ text: 'Publicar pedido', style: { color: Colors.textPrimary } }}
                        containerStyle= {{backgroundColor: Colors.primary}}
                    />
                </View>

                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <Card containerStyle={styles.containerCard}>
                            <Input 
                                containerStyle={styles.input}
                                labelStyle= {styles.inputLabel}
                                label = 'Titulo'
                                placeholder = 'Ingrese titulo'
                                ref={component => this._titulo = component}
                                onChangeText={(text) => this.setState({titulo:text})}
                            />

                            <TagInput
                                updateState={this.updateTagState}
                                tags={this.state.tags}
                                placeholder="Ingrese tags"                            
                                label='Presione espacio para agregar tags'
                                labelStyle={{color: Colors.textPrimary}}
                                containerStyle={styles.input}
                                autoCorrect={false}
                                tagStyle={{backgroundColor:Colors.lightPrimary}}
                            />

                            <Input 
                                
                                containerStyle={styles.input}
                                labelStyle= {styles.inputLabel}
                                multiline
                                label = 'Descripcion'
                                placeholder = 'Ingrese descripcion'
                                ref={component => this._descripcion = component}
                                onChangeText={(text) => this.setState({descripcion:text})}
                            />
                        </Card>

                        <Button 
                            buttonStyle= {styles.button}
                            containerStyle= {{marginTop: 3}}
                            title= 'Publicar'
                            onPress= {() =>this.botonPublicar()}
                        />

                    <Text>{this.state.email}</Text>

                    </View>
                </ScrollView>

                <View style={styles.footerContainer}>
                    
                </View>
            </View>
        );
    }
}