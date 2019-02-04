import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  buttonClick() {
  	var details = {
        'body': 'Hello from React Native app. This is Nishant Sahoo!'
        };
    
      var formBody = [];
      for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }

      formBody = formBody.join("&");
  	fetch('https://test-app-nishant.herokuapp.com/', {
        method: 'POST',
        headers: {
      		Accept: 'application/json',
      		'Content-Type': 'application/x-www-form-urlencoded'
    	},
        body: formBody
      }).then((response) => response.json())
        .then((responseJson) => {
        	Alert.alert(
	      'Working',
	       responseJson,
	      [
	        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
	        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	        {text: 'OK', onPress: () => console.log('OK Pressed in then')},
	      ],
	      { cancelable: false }
	    )  
        })
      .catch((error) => {
        Alert.alert(
	      'Error',
	       JSON.stringify(error),
	      [
	        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
	        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	        {text: 'OK', onPress: () => console.log('OK Pressed in error')},
	      ],
	      { cancelable: false }
	    )
      });
  	
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
