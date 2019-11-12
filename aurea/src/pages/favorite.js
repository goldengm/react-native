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
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { ButtonGroup } from 'react-native-elements';
import { BlurView } from "@react-native-community/blur";
import Swiper from "react-native-web-swiper";

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewRef: null,
            allClicked: true,
            favClicked: false
        };
    }

    allClick = () => {
        if (!this.state.allClicked) {
            this.setState({
                allClicked: true,
                favClicked: false
            })
        }
    }

    favClick = () => {
        if (!this.state.favClicked) {
            this.setState({
                allClicked: false,
                favClicked: true
            })
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row',}}>
                <StatusBar barStyle="dark-content" />
                <ImageBackground source={require("../assets/imgs/empty.png")} style={{width: '100%', height: '100%'}}>
                    {/* Header */}
                    <View style={{flex: 1.2, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category')}}>
                                <Image source={require("../assets/imgs/back.png")} style={{margin:35,width: 20, height: 20}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 4, justifyContent: 'center'}}>
                            <Text style={{margin: 'auto', color: 'white', fontSize:18, fontWeight:"bold", position:'absolute',top:32}}>AUREA LOVE COACHING</Text>
                        </View>
                    </View>
                    {/* Content */}
                    <View style={{flex: 0.5, flexDirection: 'row', marginTop: 70, marginLeft: 30, marginRight: 30}}>
                        <TouchableOpacity 
                        style={(this.state.allClicked) ? myStyles.clicked : myStyles.unClicked}
                        onPress={this.allClick}>
                            <Text style={(this.state.allClicked) ? myStyles.textClicked : myStyles.textUnClicked}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={(this.state.favClicked) ? myStyles.clicked : myStyles.unClicked}
                        onPress = {this.favClick} >
                            <Text style={(this.state.favClicked) ? myStyles.textClicked : myStyles.textUnClicked}>Favorite</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style={(this.state.allClicked) ? myStyles.viewDisplay : myStyles.viewDisplayOff}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            {/* <View style={{flex: 2, marginLeft:'10%', marginRight:'10%',alignItems:'center', justifyContent: 'center'}}> */}
                            <Swiper
                                from={1}
                                minDistanceForAction={0.1}
                                controlsProps={{
                                //dotsTouchable: true,                                
                                //prevPos: 'left',
                                nextPos: 'bottom',
                                //nextTitle: 'Next',
                                nextTitleStyle: { color: 'white', fontSize: 20, position:"absolute", bottom:30 },
                                PrevComponent: ({ onPress }) => (
                                    <TouchableOpacity onPress={onPress}>
                                    {/* <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                                        {'<'}
                                    </Text> */}
                                    </TouchableOpacity>
                                ),
                                }}
                            >
                                <View style={myStyles.sliderView}>
                                    <Text>Question 1</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Question 2</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Question 3</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Question 4</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Question 5</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Question 6</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>                                            
                            </Swiper>                            
                        </View>
                    </View>
                    <View style={(this.state.favClicked) ? myStyles.viewDisplay : myStyles.viewDisplayOff}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            {/* <View style={{flex: 2, marginLeft:'10%', marginRight:'10%',alignItems:'center', justifyContent: 'center'}}> */}
                            <Swiper
                                from={1}
                                minDistanceForAction={0.1}
                                controlsProps={{
                                //dotsTouchable: true,                                
                                //prevPos: 'left',
                                nextPos: 'bottom',
                                //nextTitle: 'Next',
                                nextTitleStyle: { color: 'white', fontSize: 20, position:"absolute", bottom:30 },
                                PrevComponent: ({ onPress }) => (
                                    <TouchableOpacity onPress={onPress}>
                                    {/* <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                                        {'<'}
                                    </Text> */}
                                    </TouchableOpacity>
                                ),
                                }}
                            >
                                <View style={myStyles.sliderView}>
                                    <Text>Favorite Question 1</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Favorite Question 2</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Favorite Question 3</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Favorite Question 4</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Favorite Question 5</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>
                                <View style={myStyles.sliderView}>
                                    <Text>Favorite Question 6</Text>
                                    <Text>Thanks for this question.</Text>
                                </View>                                            
                            </Swiper>                            
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
};
const myStyles = StyleSheet.create({
    viewDisplay: {
        flex: 7, 
        flexDirection: 'row'
    },
    viewDisplayOff: {
        flex: 7, 
        flexDirection: 'row', 
        display:'none'
    },
    sliderView: {
        flex:1,
        alignItems:"center",
        justifyContent:"center", 
        marginLeft:25, 
        marginRight:25,
        marginTop:20,
        marginBottom:35, 
        borderRadius: 30, 
        elevation: 30, 
        backgroundColor: 'white'
    },
    textClicked: {
        color:'#FFFFFF', 
        fontWeight:'bold',
    },
    textUnClicked: {
        color:'#000000', 
        //fontWeight:'bold',
    },
    clicked: {
        width:'50%',
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1166', 
        color: '#FFFFFF',
    },
    unClicked: {
        width:'50%',
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        color: '#000000',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    viewStyleFlex1: {
        flex: 1, 
        flexDirection: 'row'
    },
    buttonAll: {
        color:'red',
        textAlign: 'center'
    },
    buttonFavorite: {
        flex: 1, 
        flexDirection: 'row'
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
export default Favorite;
