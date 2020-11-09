import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class KangwonListScreen extends React.Component {
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
					title="춘천지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"춘천지구 전투"})}/>
				<Item 
					title="원주지구 공방전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"원주지구 공방전"})}/>
				<Item 
					title="철원-곡산 진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"철원-곡산 진격전"})}/>
				<Item 
					title="고성-고저 진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"고성-고저 진격전"})}/>
				<Item 
					title="홍천지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"홍천지구 전투"})}/>
			</ScrollView>
		)
    }
}


export default KangwonListScreen;