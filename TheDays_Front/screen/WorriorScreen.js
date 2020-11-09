import React, { Component } from 'react';
import {Text, View, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
import WorriorCard from '../component/WorriorCard'

class WorriorScreen extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
	
    
    componentDidMount() {
    }
	
    render() {
		return (
			<ScrollView style={styles.view}>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/1-1.png")}/>
					<Text style={styles.text}>김홍일</Text>
					<Text style={styles.text}>1월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/2-2.png")}/>
					<Text style={styles.text}>이정숙</Text>
					<Text style={styles.text}>2월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/3-3.png")}/>
					<Text style={styles.text}>한정일</Text>
					<Text style={styles.text}>3월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/4-4.png")}/>
					<Text style={styles.text}>김점곤</Text>
					<Text style={styles.text}>4월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/5-5.png")}/>
					<Text style={styles.text}>J. Frank Dalley</Text>
					<Text style={styles.text}>5월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/6-6.png")}/>
					<Text style={styles.text}>조보배</Text>
					<Text style={styles.text}>6월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/7-7.png")}/>
					<Text style={styles.text}>김교수</Text>
					<Text style={styles.text}>7월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/8-8.png")}/>
					<Text style={styles.text}>고종석</Text>
					<Text style={styles.text}>8월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/9-9.png")}/>
					<Text style={styles.text}>William H. Shaw</Text>
					<Text style={styles.text}>9월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/10-10.png")}/>
					<Text style={styles.text}>전구서</Text>
					<Text style={styles.text}>10월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/11-11.png")}/>
					<Text style={styles.text}>Charles Green</Text>
					<Text style={styles.text}>11월</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sub_container}>
					<Image
						style={styles.image}
						source={require("../assets/imgsrc/12-12.png")}/>
					<Text style={styles.text}>홍대선</Text>
					<Text style={styles.text}>12월</Text>
				</TouchableOpacity>
			</ScrollView>
  	    );
    }
}

export default WorriorScreen;

const styles = StyleSheet.create({
	view:  {
		flex: 1,
	},
	sub_container: {
		alignItems: 'center',
		flex: 1,
		marginBottom: 15,
	},
	image: {
		resizeMode: 'contain',
	},
	text: {
		fontSize: 20,
	}
})