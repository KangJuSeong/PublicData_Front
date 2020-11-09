import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class VietnamListScreen extends React.Component {
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
					title="추수작전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"추수작전"})}/>
				<Item 
					title="푸락 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"푸락 전투"})}/>
				<Item 
					title="루챤 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"루챤 전투"})}/>
				<Item 
					title="동트룽 전투"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"동트룽 전투"})}/>
				<Item 
					title="샛별작전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"샛별작전"})}/>
				<Item 
					title="번개66-7호 작전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"번개66-7호 작전"})}/>
				<Item 
					title="전진1호작전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"전진1호작전"})}/>
				<Item 
					title="룩레 수색정찰전"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"룩레 수색정찰전"})}/>
			</ScrollView>
		)
    }
}


export default VietnamListScreen;