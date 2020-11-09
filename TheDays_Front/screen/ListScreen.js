import React, { Component } from 'react';
import {Text, View, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import {requestArea} from '../module/dataRequest';
import axios from 'axios';

class ListScreen extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            area_num: 0,
            data: []
        }
		this.areaNumset = this.areaNumSet.bind(this)
		this.dataInsert = this.dataInsert.bind(this)
    }
	
    
    componentDidMount() {
		this.areaNumset()
		
    }
	
	areaNumSet = () => {
		const {navigation} = this.props;
		const area_num = navigation.getParam("area_num")
		this.setState({area_num : area_num})
	}
    
    dataInsert = (area_num) => {
        requestArea(area_num).then((data)=>{
            this.setState({data})
            var size = Number(data['size'])
            for(var i=0;i<size;i++) {
                this.setState({
                    data: data.concat({ key: data[String(i)]})
				})
            }
		}
    )}
		
    render() {
		return (
    		<View>
    	    </View>
  	    );
    }
}

export default ListScreen;

const styles = StyleSheet.create({
	
})