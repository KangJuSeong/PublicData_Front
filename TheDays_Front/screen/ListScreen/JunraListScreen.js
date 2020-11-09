import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class JunraListScreen extends React.Component {
	constructor(props) {
        super(props)
        
        this.state = {
        }
    }
	
	
    componentDidMount() {
    }

	
	
    render() {
		return(
			<ScrollView>
				<Item 
					title="전주-임실-남원지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"전주-임실-남원지구 전투"})}/>
			</ScrollView>
		)
    }
}


export default JunraListScreen;