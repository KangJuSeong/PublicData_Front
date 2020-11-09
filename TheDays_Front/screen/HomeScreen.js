import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

class HomeScreen extends React.Component {
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
					source = {require('../assets/title.png')}
					style = {styles.title}/>
				<Image 
					source = {require('../assets/mainPicture.png')}
					style = {styles.image}/>
				<TouchableOpacity 
					style={styles.button}
					onPress = {()=>this.props.navigation.navigate('Menu')}>
					<Text
						style={styles.btnText}>
						그날로 돌아가기</Text>
				</TouchableOpacity>
    		</View>
  	    );
    }
}


export default HomeScreen;

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	padding: 24,
		backgroundColor: "#ffffff",
		alignItems: 'center'
  	},
	title: {
		color: "#20232a",
		textAlign: "center",
		fontSize: 50,
		fontWeight: "bold",
	},
	image: {
		height: "60%"
	},
	button: {
		marginTop: 10,
	},
	btnText: {
		marginTop: 50,
		fontWeight: "bold",
		fontSize: 30
	}
})