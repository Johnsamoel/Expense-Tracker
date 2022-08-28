import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import  { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//screens
import RecentExpenses from "../../Screens/RecentExpenses";
import Expenses from "../../Screens/Expenses";

//colors
import GlobalColors from "../../utils/Color";
import HeaderIconComponent from "../UI/HeaderIconComponent";

const Tabs = () => {

const OS = Platform.OS

   return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.lighter},
        headerTintColor: GlobalColors.grandientFill,
        headerTitleAlign: "center",
        tabBarStyle: {backgroundColor: GlobalColors.dark , height: OS === 'ios' ? 90 : 60  },
        tabBarActiveBackgroundColor: GlobalColors.lighter,
        tabBarActiveTintColor: GlobalColors.grandientFill,
        
      }}
    >
      <Tab.Screen
        name="RecentExpense"
        component={RecentExpenses}
        options={ ({navigation}) => ( { tabBarLabel: "Recent" , tabBarIcon: ({color , size}) => <Ionicons name="timer-outline" size={size} color={color}/> ,
         headerRight: ({tintColor }) => { return <HeaderIconComponent color={tintColor} size={24} name='add-circle-outline' onpress={() => {navigation.navigate('ManageExpense')}} /> } }) } 
      />
      <Tab.Screen
        name="AllExpenses"
        component={Expenses}
        options={{ tabBarLabel: "All" , tabBarIcon: ({color , size}) => <Ionicons name="logo-buffer" size={size} color={color}/>}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
