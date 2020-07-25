import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../Css/Styles';
import RegistroCard2 from '../Components/RegistroCard2';

export default class Registro2 extends React.Component{
    render(){
        return(
            <View style={styles.mainContainer}>
                <RegistroCard2></RegistroCard2>
            </View>
        );
    }
}
