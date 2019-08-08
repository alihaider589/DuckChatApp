// Import the screens
import Main from './components/Main';
// import Chat from './components/Chat';
// // Import React Navigation
// import { createStackNavigator,createAppContainer } from 'react-navigation'

// // Create the navigator
// const Navigator = createStackNavigator({
//   Main: {
//      screen: Main 
//     },
//   Chat: {
//      screen: Chat
//      },
// });

// const Navigation = createAppContainer(Navigator)


// export default Navigation


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Application from './src/App'
import Chat from './src/components/ChatUI'

export default class App extends Component {
  render() {
    return (
     <Chat />
    // <Application />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ChatApp', () => ChatApp);
