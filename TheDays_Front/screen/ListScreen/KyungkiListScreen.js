import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class KyungkiListScreen extends React.Component {
	constructor(props) {
        super(props)
        
        this.state = {
			title: 'hello'
        }
    }
	
	
    componentDidMount() {
    }

	
	
    render() {
		return(
			<ScrollView>
				<Item 
					title="의정부지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"의정부지구 전투"})}/>
				<Item 
					title="내촌-태릉지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"내촌-태릉지구 전투"})}/>
				<Item 
					title="신리-김포지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"신리-김포지구 전투"})}/>
				<Item 
					title="미아리지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"미아리지구 전투"})}/>
				<Item 
					title="행주도하 작전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"행주도하 작전"})}/>
				<Item 
					title="한강선방어 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"한강선방어 전투"})}/>
				<Item 
					title="오류동지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"오류동지구 전투"})}/>
				<Item 
					title="경인가도 진격작전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"경인가도 진격작전"})}/>
			</ScrollView>
		);
    }
}


export default KyungkiListScreen;