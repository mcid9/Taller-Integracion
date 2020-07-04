import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles, Colors } from '../Css/Styles';
import LoginCard from '../Components/LoginCard';

export default class Login extends React.Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.mainContainer}>
                    <LoginCard></LoginCard>
                </View>
            </ScrollView>
        );
    }
}
