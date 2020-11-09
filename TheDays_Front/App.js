import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import ListScreen from './screen/ListScreen';
import MenuScreen from './screen/MenuScreen'
import WorriorScreen from './screen/WorriorScreen'
import MainScreen from './screen/MainScreen'
import KangwonListScreen  from './screen/ListScreen/KangwonListScreen'
import ChungchungListScreen from './screen/ListScreen/ChungchungListScreen'
import GyungsangListScreen from './screen/ListScreen/GyungsangListScreen'
import KyungkiListScreen from './screen/ListScreen/KyungkiListScreen'
import JunraListScreen from './screen/ListScreen/JunraListScreen'
import KoreanWorriorScreen from './screen/ListScreen/KoreanWorriorScreen'
import VietnamWorriorScreen from './screen/ListScreen/VietnamWorriorScreen'
import DetailScreen from './screen/DetailScreen/DetailScreen'
import VietnamListScreen from './screen/ListScreen/VietnamListScreen'

const App_3 = createStackNavigator(
	{
		Main: {
			screen: MainScreen,
			navigationOptions: {
				title: "그날들"
    	    }
		}
	},
	{initialRouteName: 'Main'}
)

const App = createStackNavigator(
    {
	    Map: {
		    screen: MapScreen,
			navigationOptions: {
				title: "6.25 전쟁 지역 보기",
    	    }
	    },
        List: {
            screen: ListScreen,
        },
		KangwonList: {
            screen: KangwonListScreen,
			navigationOptions: {
				title: "강원도"
    	    }
        },
		KyungkiList: {
            screen: KyungkiListScreen,
			navigationOptions: {
				title: "경기도"
    	    }
        },
		JunraList: {
            screen: JunraListScreen,
			navigationOptions: {
				title: "전라도"
    	    }
        },
		GyungsangList: {
            screen: GyungsangListScreen,
			navigationOptions: {
				title: "경상도"
    	    }
        },
		ChungchungList: {
            screen: ChungchungListScreen,
			navigationOptions: {
				title: "충청도"
    	    }
        },
		Detail: {
			screen: DetailScreen,
			navigationOptions: {
				title: "상세내용"
    	    }
		},
		VietnamList: {
			screen: VietnamListScreen,
			navigationOptions: {
				title: "베트남 전쟁"
    	    }
		},
		Menu: {
			screen: MenuScreen,
			navigationOptions: {
				title: "메뉴"
    	    }
		},
		KoreanWorrior: {
			screen: KoreanWorriorScreen,
			navigationOptions: {
				title: "한국전쟁 용사"
    	    }
		},
		VietnamWorrior: {
			screen: VietnamWorriorScreen,
			navigationOptions: {
				title: "월남전쟁 용사"
    	    }
		}
    },
    {initialRouteName: 'Menu'}
)

const App_2 = createStackNavigator(
	{
		Worrior: {
			screen: WorriorScreen,
			navigationOptions: {
				title: "이달의 용사"
    	    }
		}
	},
	{initialRouteName: 'Worrior'}
)

const TabNavigator = createBottomTabNavigator(
    {
		Home: App_3,
		Map: App,
		Worrior: App_2,
    },
	{initialRouteName: 'Home'}
);

const AppStack = createStackNavigator(
	{
		Intro: {
		    screen: HomeScreen,
		    navigationOptions: {
				header: null,
				title: "그날들"
    		},
		},
		TabNavigator: {
            screen: TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null,
            }),
        },
	},
	{initialRouteName: 'Intro'}
)

export default createAppContainer(AppStack)