import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class GyungsangListScreen extends React.Component {
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
					title="왜관 탈환전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"왜관 탈환전"})}/>
				<Item 
					title="가산, 팔공산-청주진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"가산, 팔공산-청주진격전"})}/>
				<Item 
					title="김천지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"김천지구 전투"})}/>
				<Item 
					title="영덕-강구지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"영덕-강구지구 전투"})}/>
				<Item 
					title="남대리지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"남대리지구 전투"})}/>
				<Item 
					title="신녕-조림산 진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"신녕-조림산 진격전"})}/>
				<Item 
					title="가산, 팔공산-청주진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"가산, 팔공산-청주진격전"})}/>
				<Item 
					title="안강-38도선 진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"안강-38도선 진격전"})}/>
				<Item 
					title="마산-군산 진격전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"마산-군산 진격전"})}/>
				<Item 
					title="포항-흥해지구 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"포항-흥해지구 전투"})}/>
			</ScrollView>
		)
    }
}


export default GyungsangListScreen;