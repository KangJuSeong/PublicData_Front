import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

class MainScreen extends React.Component {
	
	constructor(props) {
        super(props)
        
        this.state = {
    	}
	}

    componentDidMount() {
    }
	
	render() {
    	return (
      	<View style={styles.container}>
          	<Image
				style={styles.first_logo}
				source={require('../assets/intro_1.png')}/>
			<Image
				style={styles.second_logo}
				source={require('../assets/intro_2.png')}/>
			<Image
				style={styles.third_logo}
				source={require('../assets/intro_3.png')}/>
      	</View>
    	);
  	}
}
export default MainScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	first_logo: {
		flex: 1,
		resizeMode: 'contain'
	},
	second_logo: {
		flex: 2,
		resizeMode: 'contain',
	},
	third_logo: {
		flex: 0.9,
		resizeMode: 'contain'
	}	
});