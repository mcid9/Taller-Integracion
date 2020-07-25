import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../Css/Styles';
import RegistroCard1 from '../Components/RegistroCard1';

export default class Registro1 extends React.Component{
    render(){
        return(
            <View style={styles.mainContainer}>
                <RegistroCard1></RegistroCard1>
            </View>
        );
    }
}
