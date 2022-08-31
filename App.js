import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// creating routing Stack
const Stack = createNativeStackNavigator();

//screens.
import ManageExpense  from './Screens/ManageExpense.jsx';

//Bottom Tabs bar
import Tabs from './Components/Routing/Tabs.jsx';

//my colors
import  GlobalColors  from './utils/Color';

// Context Provider
import { ExpensesContextProvider } from './Store/ExpensesContext.jsx';


//device info
// import DeviceInfo from 'react-native-device-info';

export default function App() {

  
  return (
        <>
              <StatusBar style="light" />
              <ExpensesContextProvider>
              <NavigationContainer>
               <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: GlobalColors.background  } , headerTintColor: GlobalColors.text  }}>
                <Stack.Screen name='ExpensesOverView' component={Tabs} options={{headerShown: false }} />
                <Stack.Screen name='ManageExpense' component={ManageExpense} options={{title: 'Manage Expense' , presentation:'modal' , headerTitleStyle:{ color: GlobalColors.grandientFill} , headerTitleAlign:'center' , headerTintColor:GlobalColors.grandientFill }} />
               </Stack.Navigator>
              </NavigationContainer>
               </ExpensesContextProvider>
        </>
  );
}

