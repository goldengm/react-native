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

class Category6 extends Component {
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
                            <Text style={{margin: 'auto', color: 'white', fontSize:18, fontWeight:"bold",marginTop:-50}}>AUREA LOVE GRATITUD</Text>
                        </View>
                    </View>
                    {/* Content */}
                    <View style={{flex: 7, flexDirection: 'column'}}>
                        <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={myStyles.viewStyle1}>
                                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail14')}}>
                                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center', width:'100%'}}>
                                        <Image source={require("../assets/imgs/A-14.png")} style={{height: 120, width: 120, marginLeft: 0}}></Image>
                                    </View>
                                    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginBottom:10}}>
                                        <Text style={{color:'#FF1166', fontWeight:'bold', fontSize:18}}>TENER</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={myStyles.viewStyle2}>
                                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail15')}}>
                                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center', width:'100%'}}>
                                        <Image source={require("../assets/imgs/A-15.png")} style={{height: 120, width: 120, marginLeft: 0,marginTop:10}}></Image>
                                    </View>
                                    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginBottom:10}}>
                                        <Text style={{color:'#FF1166', fontWeight:'bold', fontSize:18}}>HACER</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', marginTop:20, marginRight:45}}>
                            <View style={myStyles.viewStyle1}>
                                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail16')}}>
                                <View style={{flex: 3, justifyContent: 'center',alignItems: 'center', width:'100%'}}>
                                    <Image source={require("../assets/imgs/A-16.png")} style={{height: 120, width: 120, marginLeft: 10,marginTop:10}}></Image>
                                </View>
                                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginBottom:10}}>
                                    <Text style={{color:'#FF1166', fontWeight:'bold', fontSize:18}}>SER</Text>
                                </View>
                                </TouchableOpacity>
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
    viewStyle1: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:30, 
        marginRight:10, 
        borderRadius: 25, 
        elevation: 30, 
        backgroundColor:'white'
    },
    viewStyle2: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10, 
        marginRight:30, 
        borderRadius: 25, 
        elevation: 30, 
        backgroundColor:'white'
    },
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
export default Category6;
