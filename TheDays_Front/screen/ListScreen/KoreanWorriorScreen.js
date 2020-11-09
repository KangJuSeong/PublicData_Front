import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../../component/Item'

class KoreanWorriorScreen extends React.Component {
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
					title="백성흠 소위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"백성흠 소위"})}/>
				<Item 
					title="김광해 대위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"김광해 대위"})}/>
				<Item 
					title="정성봉 경무관"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"정성봉 경무관"})}/>
				<Item 
					title="김현일 대위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"김현일 대위"})}/>
				<Item 
					title="이계봉 경위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"이계봉 경위"})}/>
				<Item 
					title="박덕원 대령"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"박덕원 대령"})}/>
				<Item 
					title="정영조 소위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"정영조 소위"})}/>
				<Item 
					title="김원희 준장"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"김원희 준장"})}/>
				<Item 
					title="정영조 소위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"정영조 소위"})}/>
				<Item 
					title="송효석 소위"
					onPress={()=>this.props.navigation.navigate('Detail',{title:"송효석 소위"})}/>
			</ScrollView>
		)
    }
}
export default KoreanWorriorScreen;

const styles = StyleSheet.create({
	
})