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

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/home';
import CategoryScreen from './src/pages/categories';
import Category1Screen from './src/pages/category1';
import Category2Screen from './src/pages/category2';
import Category3Screen from './src/pages/category3';
import Category4Screen from './src/pages/category4';
import Category5Screen from './src/pages/category5';
import Category6Screen from './src/pages/category6';
import Category7Screen from './src/pages/category7';
import Category8Screen from './src/pages/category8';
import Detail1Screen from './src/pages/detail1';
import Detail2Screen from './src/pages/detail2';
import Detail3Screen from './src/pages/detail3';
import Detail4Screen from './src/pages/detail4';
import Detail5Screen from './src/pages/detail5';
import Detail6Screen from './src/pages/detail6';
import Detail7Screen from './src/pages/detail7';
import Detail8Screen from './src/pages/detail8';
import Detail9Screen from './src/pages/detail9';
import Detail10Screen from './src/pages/detail10';
import Detail11Screen from './src/pages/detail11';
import Detail12Screen from './src/pages/detail12';
import Detail13Screen from './src/pages/detail13';
import Detail14Screen from './src/pages/detail14';
import Detail15Screen from './src/pages/detail15';
import Detail16Screen from './src/pages/detail16';
import Detail17Screen from './src/pages/detail17';
import Detail18Screen from './src/pages/detail18';
import Detail19Screen from './src/pages/detail19';
import Detail20Screen from './src/pages/detail20';
import Detail21Screen from './src/pages/detail21';
import Detail22Screen from './src/pages/detail22';
import FavoriteScreen from './src/pages/favorite';
import RuletaScreen from './src/pages/ruleta';

export default class MainRouter extends Component {
  render () {
    const MainNavigator = createStackNavigator({
      Home: {screen: HomeScreen},
      Category: {screen: CategoryScreen},
      Category1: {screen: Category1Screen},
      Category2: {screen: Category2Screen},
      Category3: {screen: Category3Screen},
      Category4: {screen: Category4Screen},
      Category5: {screen: Category5Screen},
      Category6: {screen: Category6Screen},
      Category7: {screen: Category7Screen},
      Category8: {screen: Category8Screen},

      Detail1: {screen: Detail1Screen},
      Detail2: {screen: Detail2Screen},
      Detail3: {screen: Detail3Screen},
      Detail4: {screen: Detail4Screen},
      Detail5: {screen: Detail5Screen},
      Detail6: {screen: Detail6Screen},
      Detail7: {screen: Detail7Screen},
      Detail8: {screen: Detail8Screen},
      Detail9: {screen: Detail9Screen},
      Detail10: {screen: Detail10Screen},
      Detail11: {screen: Detail11Screen},
      Detail12: {screen: Detail12Screen},
      Detail13: {screen: Detail13Screen},
      Detail14: {screen: Detail14Screen},
      Detail15: {screen: Detail15Screen},
      Detail16: {screen: Detail16Screen},
      Detail17: {screen: Detail17Screen},
      Detail18: {screen: Detail18Screen},
      Detail19: {screen: Detail19Screen},
      Detail20: {screen: Detail20Screen},
      Detail21: {screen: Detail21Screen},
      Detail22: {screen: Detail22Screen},      

      Favorite: {screen: FavoriteScreen},
      Ruleta: {screen: RuletaScreen},
    },
    {
      initialRouteName: "Home",
      headerMode: "none",
    }
    );
    
    const AppContainer = createAppContainer(MainNavigator);
    return (
        <AppContainer />
    );
  }
}
