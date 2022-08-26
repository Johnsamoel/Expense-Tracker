import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//screens.
import ManageExpense  from './Screens/ManageExpense.jsx';

//Bottom Tabs bar
import Tabs from './Components/Routing/Tabs.jsx';

export default function App() {
  return (
        <>
              <StatusBar style="light" />
              <NavigationContainer>
               <Stack.Navigator>
                <Stack.Screen name='ExpensesOverView' component={Tabs} options={{headerShown: false }} />
                <Stack.Screen name='ManageExpense' component={ManageExpense} />
               </Stack.Navigator>
              </NavigationContainer>
        </>
  );
}

