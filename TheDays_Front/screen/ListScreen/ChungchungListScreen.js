import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class ChungchungListScreen extends React.Component {
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
					title="대평리-공주지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"대평리-공주지구 전투"})}/>
				<Item 
					title="충주-수안보지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"충주-수안보지구 전투"})}/>
				<Item 
					title="전의지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"전의지구 전투"})}/>
				<Item 
					title="창녕-논산 진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"창녕-논산 진격전"})}/>
			</ScrollView>
		)
    }
}


export default ChungchungListScreen;