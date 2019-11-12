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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Home extends Component {
  moveToCategory = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Category')
    }, 1000);  
  };
  render() {
      this.moveToCategory();
      return (
          <View>
              <StatusBar barStyle="dark-content" />                
                <View style={myStyles.bgImageWrapper}>                        
                    <Image style={myStyles.bgImage} source={require("../assets/imgs/main.png")} />
                </View>
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
      //flex: 1,
      width: 382,
      height: 652,
      //resizeMode: "stretch"      
  }
});
export default Home;
