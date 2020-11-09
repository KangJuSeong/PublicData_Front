import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class VietnamWorriorScreen extends React.Component {
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
					title="이인호 소령"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"이인호 소령"})}/>
				<Item 
					title="최범섭 중령"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"최범섭 중령"})}/>
				<Item 
					title="김무석 대위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"김무석 대위"})}/>
				<Item 
					title="송서규 대령"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"송서규 대령"})}/>
				<Item 
					title="손태익 소령"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"손태익 소령"})}/>
				<Item 
					title="조경식 소령"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"조경식 소령"})}/>
				<Item 
					title="임동춘 대위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"임동춘 대위"})}/>
				<Item 
					title="지덕칠 중사"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"지덕칠 중사"})}/>
				<Item 
					title="전창우 중위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"전창우 중위"})}/>
			</ScrollView>
		)
    }
}
export default VietnamWorriorScreen;

const styles = StyleSheet.create({
	
})