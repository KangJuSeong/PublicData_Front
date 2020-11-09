import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import koreanWar from '../../json_data/koreanWall.json';
import vietnamWar from '../../json_data/vietnamWall.json'
import vietnamWorrior from '../../json_data/vietnamWorrior.json'
import koreanWorrior from '../../json_data/koreanWorrior.json'


class DetailScreen extends React.Component {
	
	constructor(props) {
        super(props)
        
        this.state = {
			data: ""
        }
    }
	
	
    componentDidMount() {
		const { navigation } = this.props;
		const title = navigation.getParam('title')
		for(var i=0;i<200;i++) {
			if(koreanWar.DATA[i].title==title){
				this.setState({
					data: koreanWar.DATA[i].ctnt
				})
			}
		}
		for(var i=0;i<9;i++) {
			if(vietnamWorrior.DATA[i].title==title){
				this.setState({
					data: vietnamWorrior.DATA[i].ctnt
				})
			}
		}
		for(var i=0;i<50;i++) {
			if(vietnamWar.DATA[i].title==title){
				this.setState({
					data: vietnamWar.DATA[i].ctnt
				})
			}
		}
		for(var i=0;i<171;i++) {
			if(koreanWorrior.DATA[i].title==title){
				this.setState({
					data: koreanWorrior.DATA[i].ctnt
				})
			}
		}
    }
	
	

    render() {
		return(
			<WebView
        		originWhitelist={['*']}
        		source={{html:style= "<span style='font-weight: bold;font-size:1.5em;line-height:2.5em';>"+this.state.data+"</span>"}}
      		/>
		)
    }
}
export default DetailScreen;

const styles = StyleSheet.create({
})