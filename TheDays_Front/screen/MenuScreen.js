import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

class MenuScreen extends React.Component {
	constructor(props) {
        super(props)
        
        this.state = {
        }
    }
	
	
    componentDidMount() {
    }

	
	
    render() {
		return(
			<View sytle={styles.mainContainer}>
				<Text style={styles.title}>한국 전쟁</Text>
				<View style={styles.subContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={()=>this.props.navigation.navigate("Map")}>
						<Text style={styles.subTitle}>한국 전쟁 보기</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={()=>this.props.navigation.navigate("KoreanWorrior")}>
						<Text style={styles.subTitle}>한국 전쟁 호국선열 보기</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>베트남 전쟁</Text>
				<View style={styles.subContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={()=>this.props.navigation.navigate("VietnamList")}>
						<Text style={styles.subTitle}>월남 전쟁 보기</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={()=>this.props.navigation.navigate("VietnamWorrior")}>
						<Text style={styles.subTitle}>월남 전쟁 호국선열 보기</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
    }
}
export default MenuScreen;

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: 'center',
	},
	subContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 1,
		borderWidth: 2,
		marginTop: 10,
		height: 200,
		borderRadius: 5,
	},
	button: {
		borderRadius: 1,
		borderWidth: 2,
		marginTop: 30,
		marginBottom: 30,
		height: 140,
		width: "45%",
		alignItems: 'center',
		justifyContent: 'space-around',
		marginLeft: 5,
		borderRadius: 10,
	},
	title: {
		fontSize: 50,
		marginTop: 20,
	},
	subTitle: {
		fontSize: 17,
		fontWeight: 'bold'
	}
	
})