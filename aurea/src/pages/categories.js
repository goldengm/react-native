/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Categories extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <ImageBackground source={require("../assets/imgs/bg0.png")} style={{width: '100%', height: '100%'}}>
                   <View style={{flex: 0.8}}></View> 
                   <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Ruleta')}} style={{margin: '9%', marginLeft:'22%' , borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/ruleta.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category1')}} style={{margin: '9%', marginRight: '22%', borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/coaching.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                    </View> 
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category2')}} style={{margin: '9%', marginLeft:'22%' , borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/conexion.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category3')}} style={{margin: '9%', marginRight: '22%', borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/romance.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                    </View> 
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category4')}} style={{margin: '9%', marginLeft:'22%' , borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/emociones.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category5')}} style={{margin: '9%', marginRight: '22%', borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/sexo.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                    </View>
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category6')}} style={{margin: '9%', marginLeft:'22%' , borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/gratitud.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                        <View style={{flex: 2}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category8')}} style={{margin: '9%', marginRight: '22%', borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                <Image source={require("../assets/imgs/crecimiento.png")} style={{width: '100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </View> 
                    </View>
                    <View style={{flex: 0.2}}></View>
                </ImageBackground>
            </View>
        );
    }
};
const myStyles = StyleSheet.create({
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
    }
  });
export default Categories;
