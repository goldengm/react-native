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

class Category7 extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <ImageBackground source={require("../assets/imgs/empty.png")} style={{width: '100%', height: '100%'}}>
                    {/* Header */}
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category')}}>
                                <Image source={require("../assets/imgs/back.png")} style={{margin:35,width: 20, height: 20}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 4, justifyContent: 'center'}}>
                            <Text style={{margin: 'auto', color: 'white', fontSize:18, fontWeight:"bold",marginTop:-50}}>AUREA LOVE COMUNICACION</Text>
                        </View>
                    </View>
                    {/* Content */}
                    <View style={{flex: 7, flexDirection: 'column'}}>
                        <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail17')}} style={{margin: '9%', marginLeft:'22%' , borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                    <Image source={require("../assets/imgs/basico.png")} style={{width: '100%', height: '100%'}}></Image>
                                </TouchableOpacity>
                            </View> 
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail18')}} style={{margin: '9%', marginRight: '22%', borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                    <Image source={require("../assets/imgs/intermedio.png")} style={{width: '100%', height: '100%'}}></Image>
                                </TouchableOpacity>
                            </View> 
                        </View>
                        <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                {/* <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail3')}} style={{margin: '9%', marginLeft:'22%' , borderRadius: 25, elevation: 30, backgroundColor: 'white'}}>
                                    <Image source={require("../assets/imgs/avanzado.png")} style={{width: '100%', height: '100%'}}></Image>
                                </TouchableOpacity> */}
                            </View>
                            <View style={{flex: 1}}>
                            </View>
                        </View>
                        <View style={{flex: 3, flexDirection: 'row'}}>
                            
                        </View>                        

                    </View>                                                            
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
export default Category7;
