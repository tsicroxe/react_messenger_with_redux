// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebaseService  from '../firebase.js'

export default class Main extends React.Component {
	state = { 
	  currentUser: null 
	}

	handleLogout = () => {
		firebaseService.auth().signOut()
	  	.then(function() {
	  	})
	  .catch(function(error) {
	    console.log(error);
	 	});
	  }

	componentDidMount() {
	    const { currentUser } = firebaseService.auth()
	    this.setState({ currentUser })
	}

	render() {
	    const { currentUser } = this.state
	return (
	      <View style={styles.container}>
	        <Text>
	          Hi {currentUser && currentUser.email}!
	        </Text>
	        <Button title="Logout" onPress={this.handleLogout} />
	      </View>
	    )
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})