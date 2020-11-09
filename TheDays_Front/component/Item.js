import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Item extends React.Component {
	
	static defaultProps = {
    	onPress: () => null,
  	}

	constructor(props) {
        super(props)
        
        this.state = {
			title: ""
        }
    }
	
	
    componentDidMount() {
    }

    render() {
		return(
			<TouchableOpacity
				style={styles.button}
				onPress={this.props.onPress}>
				<Text
					style = {styles.text}>
					{this.props.title}</Text>
			</TouchableOpacity>
		)
    }
}
export default Item;

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 2,
		borderRadius: 1,
		alignItems: 'center'
	},
	text: {
		fontSize: 40, 
	}
})