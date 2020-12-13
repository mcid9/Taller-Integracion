import {StyleSheet,PixelRatio} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var FONT_BODY   = 15;
var ICON_SIZE   = 30;
var FONT_HEADER   = 17;
var FONT_TITLE = 30;
var statusBarHeight ='20%';



//LOGIN
export const Sizes={
    icon:ICON_SIZE,
    statusBarHeight:statusBarHeight,
    fontBase:FONT_BODY,
    fontHeader:FONT_HEADER,
    fontTitle:FONT_TITLE
}
//Stilo principal 
export const Colors = {    
    darkPrimary:'#071E43',
    primary:'#0C316F',
    lightPrimary:'#D5D2CD',
    accent:'#07090F',
    textPrimary:'#fff',
    secondaryText:'#6F6D6C',
}

const baseContainerStyles = {                                
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};
export const styles = StyleSheet.create({
    mainContainer: {
        width: wp('100%'),
        height: hp('100%'),
        flexDirection: 'column',
        backgroundColor: Colors.lightPrimary
    },

    headerContainer: {
        height: 75,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 10
    },
    bodyContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40
    },
    footerContainer: {
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.lightPrimary
    },
    box: {
        width: wp('90%'),
        height: 155,
        backgroundColor: Colors.primary,
        marginBottom: 10,
        borderRadius: 6,
        borderColor: Colors.accent,
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    box2: {
        width: wp('90%'),
        flexDirection: 'row',
        height: 85,
        backgroundColor: Colors.primary,
        marginBottom: 10,
        borderRadius: 6,
        borderColor: Colors.accent,
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    boxPedido: {
        width: wp('90%'),
        height: hp('90%'),
        backgroundColor: Colors.primary,
        marginBottom: 10,
        borderRadius: 6,
        borderColor: Colors.accent,
        paddingVertical: 5,
        paddingHorizontal: 10
    },


    bodyText: {
        fontSize: Sizes.fontBase, 
        color: Colors.textPrimary
    },

    containerView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: Colors.lightPrimary,
        width: '100%',
        height: '100%'
    },

    containerInfo:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        height: '50%'
    },

    containerItem: {
        width: wp('98%'),
        marginLeft: 4,
        marginRight: 4
    },

    containerCard: {
        flex: 1,
        backgroundColor: Colors.primary,
        borderColor: Colors.accent,
        borderRadius: 6,
        width: wp('90%'),
        marginTop: 35,
        marginBottom: 30
    },
    
    title: {
        alignSelf: 'center',
        fontSize: FONT_TITLE,
        color: Colors.textPrimary,
        marginBottom: 5
    },
    divider: {
        backgroundColor: Colors.textPrimary,
        margin: 4
    },
    input: {
        width: wp('80%'),
        
    },
    inputLabel:{
        color: Colors.textPrimary,
        
    },
    SocialIcon: {
        marginBottom: 5
    },
    button: {
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: Colors.accent,
        borderRadius: 6,
    },
    buttonRed: {
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: 'red',
        borderRadius: 6,
    },
    Drawer: {
        backgroundColor: Colors.primary,
        width: 240,
        
    },

});
