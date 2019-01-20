import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  buttonClick() {
  	profile = {
  		'body': 'Hello from React Native! This is Nishant Sahoo :3'
  	}
  	axios.post('https://test-app-nishant.herokuapp.com', profile)
  	.then(res => {
    	Alert.alert(
	      'Yo',
	       JSON.stringify(res),
	      [
	        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
	        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	        {text: 'OK', onPress: () => console.log('OK Pressed')},
	      ],
	      { cancelable: false }
	    )
  	})
  	.catch(error => {
  		Alert.alert(
	      'Yo',
	       JSON.stringify(error),
	      [
	        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
	        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	        {text: 'OK', onPress: () => console.log('OK Pressed')},
	      ],
	      { cancelable: false }
	    )	
  	})
  	;

  	
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Button
  			onPress={this.buttonClick.bind(this)}
  			title="Learn More"
  			color="#841584"
  			accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
