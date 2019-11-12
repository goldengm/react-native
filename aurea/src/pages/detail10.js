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

class Detail10 extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <ImageBackground source={require("../assets/imgs/empty.png")} style={{width: '100%', height: '100%'}}>
                    {/* Header */}
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category4')}}>
                                <Image source={require("../assets/imgs/back.png")} style={{margin:35,width: 20, height: 20}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 4, justifyContent: 'center'}}>
                            <Text style={{margin: 'auto', color: 'white', fontSize:18, fontWeight:"bold",marginTop:-50}}>EMPATIA</Text>
                        </View>
                    </View>
                    {/* Content */}
                    <View style={{flex: 3, flexDirection: 'row'}}>                        
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require("../assets/imgs/A-10.png")} style={{width: '100%', height: '100%'}}></Image>
                        </View>
                    </View> 
                    <View style={{flex: 4, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#EEEEEE'}}>
                            <View style={{flex: 2, marginLeft:'10%', marginRight:'10%',alignItems:'center', justifyContent: 'center'}}>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</Text>
                            </View> 
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Favorite')}} style={{alignItems:'center', justifyContent: 'center' }}>
                                    <Text style={{color:'#FF1166', fontWeight:'bold', fontSize:15}}>INICIAR</Text>
                                </TouchableOpacity>
                            </View> 
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
export default Detail10;
