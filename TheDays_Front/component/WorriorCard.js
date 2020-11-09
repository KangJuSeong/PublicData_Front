import React, { Component } from 'react';
import {Text, View, Button, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';

class WorriorCard extends React.Component {
	
	
	static defaultProps = {
    	onPress: () => null,
	}

    
    constructor(props) {
        super(props)
        
        this.state = {
			uri : ""
        }
    }
	
    componentDidMount() {
    }
		
    render() {
		return (
    		<View
				style={styles.container}>
				<Image
					onPress={this.props.onPress}
					style={styles.image}
					source={this.state.uri}/>
				<View
					style={styles.textBox}>
					<Text style={styles.text}>{this.props.name}</Text>
					<Text style={styles.text}>{this.props.month}</Text>
				</View>
    	    </View>
  	    );
    }
}

export default WorriorCard;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
	},
	image: {
		width: '100%',
		height: '80%',
	},
	textBox: {
		marginTop: 10,
		flex:1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
	}
	
})