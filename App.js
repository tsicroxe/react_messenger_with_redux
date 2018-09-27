import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './screens/loading'
import SignUp from './screens/signup'
import Login from './screens/login'
import Main from './screens/main'

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
