import React, { Component } from 'react';
import { Button, View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'

export default class MapScreen extends React.Component {
	
	render() {
		return (
			<View 
				style={styles.bigContainer}>
                <ImageBackground 
					source={require('../assets/map2.png')}
					style={styles.image}>
					<View style={styles.smallContainer_1}>
						<TouchableOpacity
							style = {styles.button_kyungki}
							onPress = {()=>this.props.navigation.navigate('KyungkiList')}>
						</TouchableOpacity>
						<TouchableOpacity
							style = {styles.button_kangwon}
							onPress = {()=>this.props.navigation.navigate('KangwonList')}>
						</TouchableOpacity>
					</View>
		
					<View style={styles.smallContainer_2}>
						<TouchableOpacity
							style = {styles.button_chungchung}
							onPress = {()=>this.props.navigation.navigate('ChungchungList')}>
						</TouchableOpacity>
						<TouchableOpacity
							style = {styles.button_kyungsang_1}
							onPress = {()=>this.props.navigation.navigate('GyungsangList')}>
						</TouchableOpacity>
					</View>
					<View style={styles.smallContainer_3}>
						<TouchableOpacity
							style = {styles.button_junra}
							onPress = {()=>this.props.navigation.navigate('JunraList')}>
						</TouchableOpacity>
						<TouchableOpacity
							style = {styles.button_kyungsang_2}
							onPress = {()=>this.props.navigation.navigate('GyungsangList')}>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
		backgroundColor: "#ffffff",
    },
	smallContainer_1: {
		flex: 1.8,
		flexDirection: 'row',
	},
	smallContainer_2: {
		flex: 1.2,
		flexDirection: 'row',
	},
	smallContainer_3: {
		flex: 2.5,
		flexDirection: 'row',
	},
	buttonContainer_1: {
		borderWidth: 2,
		flex: 1,
	},
	buttonContainer_2: {
		borderWidth: 2,
		flex: 1,
	},
	image: {
		flex: 1,
    	resizeMode: "contain",
		marginTop: '5%'
	},
	button_kyungki: {
		marginLeft: "15%",
		marginTop: "20%",
		width: "30%",
		height: "60%",
	},
	button_kangwon: {
		marginLeft: "7%",
		marginTop: "10%",
		width: "30%",
		height: "70%",
	},
	button_chungchung: {
		marginLeft: "18%",
		marginTop: "10%",
		width: "35%",
		height: "60%",
	},
	button_kyungsang_1: {
		marginLeft: "7%",
		marginTop: "5%",
		width: "30%",
		height: "100%",
	},
	button_kyungsang_2: {
		marginLeft: "5%",
		width: "40%",
		height: "45%",
	},
	button_junra: {
		marginLeft: "15%",
		width: "30%",
		height: "70%",
	}
})