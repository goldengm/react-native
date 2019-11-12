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
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Detail1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: true,  
            NumberHolder : 1 ,
            imageURL : require(`../assets/imgs/A-1.png`),
            imageName : `BASICO`,
        };
    }
    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }
    GenerateRandomNumber =() => {
    
        var RandomNumber = Math.floor(Math.random() * 22) + 1 ;        
        var imgURL = require(`../assets/imgs/A-1.png`);
        var imgName = ``;
        
        switch (RandomNumber) {
            case 1:
                imgURL = require(`../assets/imgs/A-1.png`);
                imgName = `BASICO`;
                break;
            case 2:
                imgURL = require(`../assets/imgs/A-2.png`);
                imgName = `INTERMEDIO`;
                break;
            case 3:
                imgURL = require(`../assets/imgs/A-3.png`);
                imgName = `AVANZADO`;
                break;
            case 4:
                imgURL = require(`../assets/imgs/A-4.png`);
                imgName = `RETOS`;
                break;
            case 5:
                imgURL = require(`../assets/imgs/A-5.png`);
                imgName = `RITUALES`;
                break;
            case 6:
                imgURL = require(`../assets/imgs/A-6.png`);
                imgName = `ESPONTANEO`;
                break;
            case 7:
                imgURL = require(`../assets/imgs/A-7.png`);
                imgName = `PLANEADO`;
                break;
            case 8:
                imgURL = require(`../assets/imgs/A-8.png`);
                imgName = `POSITIVAS`;
                break;
            case 9:
                imgURL = require(`../assets/imgs/A-9.png`);
                imgName = `NEGATIVAS`;
                break;
            case 10:
                imgURL = require(`../assets/imgs/A-10.png`);
                imgName = `EMPATIA`;
                break;
            case 11:
                imgURL = require(`../assets/imgs/A-11.png`);
                imgName = `BASICO`;
                break;
            case 12:
                imgURL = require(`../assets/imgs/A-12.png`);
                imgName = `INTERMEDIO`;
                break;
            case 13:
                imgURL = require(`../assets/imgs/A-13.png`);
                imgName = `AVANZADO`;
                break;
            case 14:
                imgURL = require(`../assets/imgs/A-14.png`);
                imgName = `TENER`;
                break;
            case 15:
                imgURL = require(`../assets/imgs/A-15.png`);
                imgName = `HACER`;
                break;
            case 16:
                imgURL = require(`../assets/imgs/A-16.png`);
                imgName = `SER`;
                break;
            case 17:
                imgURL = require(`../assets/imgs/A-17.png`);
                imgName = `ESCUCHAR`;
                break;
            case 18:
                imgURL = require(`../assets/imgs/A-18.png`);
                imgName = `EXPRESAR`;
                break;            
            case 19:
                imgURL = require(`../assets/imgs/A-19.png`);
                imgName = `PERSONAL`;
                break;
            case 20:
                imgURL = require(`../assets/imgs/A-20.png`);
                imgName = `ECONOMICO`;
                break;
            case 21:
                imgURL = require(`../assets/imgs/A-21.png`);
                imgName = `FITNESS`;
                break;
            case 22:
                imgURL = require(`../assets/imgs/A-22.png`);
                imgName = `ESPIRITUAL`;
                break;
            default:
                imgURL = require(`../assets/imgs/A-1.png`);
                imgName = `BASICO`;
        }        
        this.setState({
            NumberHolder : RandomNumber,
            imageURL : imgURL,
            imageName : imgName,
        })
    }
    playClicked = () => {
        this.GenerateRandomNumber();
        this.setState({
            playStatus: !this.state.playStatus,
        })
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 50000
        }).start()
    }
    render() {
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg','36000deg'],
        })
        const animatedStyle = {
            transform: [
                { rotate: interpolateRotation }
            ]
        }
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <ImageBackground source={require("../assets/imgs/empty.png")} style={{width: '100%', height: '100%'}}>
                    {/* Header */}
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Category')}}>
                                <Image source={require("../assets/imgs/back.png")} style={{margin:35,width: 20, height: 20}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 4, justifyContent: 'center'}}>
                            <Text style={{margin: 'auto', color: 'white', fontSize:18, fontWeight:"bold", position:'absolute',top:32}}>RULETA</Text>
                            {/* <Text style={{margin: 'auto', color: 'white', fontSize:18, fontWeight:"bold",marginTop:-50}}>RULETA</Text> */}
                        </View>
                    </View>
                    {/* Body */}
                    <View style={{flex: 5.5, flexDirection: 'row'}}>                        
                        {/* <View style={{flex: 1, flexDirection: 'column'}}> */}
                        <View style={(this.state.playStatus) ? myStyles.ruletaView1 : myStyles.displayNone}>
                            <View style={{flex: 0.5, flexDirection: 'column',alignItems:'center', justifyContent: 'center' }}>
                                <Image source={require("../assets/imgs/arrow.png")} style={{width: 50, height: 20, position: 'relative', top:40, zIndex: 100}}></Image>
                            </View>
                            <Animated.View style={[myStyles.ruletaView, animatedStyle]}>
                                <Image source={require("../assets/imgs/ruleta_notext.png")} style={{width: '100%', height: '100%',zIndex: 0}}></Image>
                            </Animated.View>
                            <View style={{flex: 1, flexDirection: 'column',alignItems:'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={myStyles.button} onPress={this.playClicked}>
                                    <Text style={{color:'#FFFFFF', fontWeight:'bold'}}>Stop</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={(this.state.playStatus) ? myStyles.displayNone : myStyles.ruletaView2}>
                            <View style={{flex: 3, flexDirection: 'column' ,alignItems:'center', justifyContent: 'center' }}>
                                <Text style={{fontSize: 18}}>Cogratulations!{"\n"}</Text>  
                                <Text style={{fontSize: 18}}> You have seleted this category.{"\n"}</Text>
                                {/* <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text> */}
                                {/* <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.imageURL}</Text> */}
                                <Image source={this.state.imageURL} style={{height: 120, width: 120, marginLeft: -10}}></Image>
                                <Text style={{fontSize: 20, color:`#FF1166`}}>{this.state.imageName}</Text>
                                {/* <Image source={require("../assets/imgs/A-6.png")} style={{height: 120, width: 120, marginLeft: -10}}></Image> */}
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent: 'center',marginLeft: 30, marginRight: 30, padding:10 }}>
                                {/* <TouchableOpacity style={myStyles.button} onPress={this.playClicked}>
                                    <Text style={{color:'#FFFFFF', fontWeight:'bold'}}>PLAY AGAIN</Text>                                    
                                </TouchableOpacity> */}

                                <TouchableOpacity style={myStyles.button} onPress = {()=> {this.props.navigation.navigate(`Detail${this.state.NumberHolder}`)}}>
                                    <Text style={{color:'#FFFFFF', fontWeight:'bold'}}>INICIAR</Text>                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                     {/* End Body */}
                </ImageBackground>
            </View>
        );
    }
};
const myStyles = StyleSheet.create({
    ruletaView: {
        flex: 3.5, 
        flexDirection: 'column'
    },
    displayNone: {
        display: 'none',
    },
    ruletaView1: {
        flex: 1, 
        flexDirection: 'column',
    },
    ruletaView2: {
        flex: 1, 
        flexDirection: 'column',        
    },
    button: {
        width:'50%',
        margin:10,
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1166', 
        color: '#FFFFFF',
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
export default Detail1;
