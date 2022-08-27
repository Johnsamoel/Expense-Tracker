import { View , Text , StyleSheet, ScrollView, FlatList, ViewComponent } from 'react-native';


import ExpensesList from '../Components/Expenses/ExpensesList';
import Summary from '../Components/Expenses/Summary';
import VirtualizedView from '../Components/UI/VirtualizedView';


import GlobalColors from '../utils/Color';

const Dummy_Data = [{
    id: 'e1',
    desc:'Laptop',
    amount: 1200.78,
    date: new Date('2020-12-25')
},
 {
        id: 'e5',
        desc:'ipad',
        amount: 250.63,
        date: new Date('2020-12-25')
    },
    {
        id: 'e6',
        desc:'air pods',
        amount: 150.78,
        date: new Date('2020-12-25')
    },
    {
        id: 'e7',
        desc:'iphone 14',
        amount: 1250.45,
        date: new Date('2020-12-25')
    },
    {
        id: 'e8',
        desc:'iphone 11',
        amount: 1200,
        date: new Date('2020-12-25')
    },
    {
        id: 'e15',
        desc:'a pair of shoes',
        amount: 134.46,
        date: new Date('2020-12-25')
    }
]

const RecentExpenses = ({expeses , periodName}) => {
    return (
        <View style={styles.rootContainer}>
        <VirtualizedView>
        <View style={styles.rootContainer}>
         <Summary expeses={Dummy_Data} periodName={'Last 7 Days'}  />
         <ExpensesList expenses={Dummy_Data} />
        </View>
        </VirtualizedView>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalColors.background,
        alignItems:'center'
    },
    
})

export default RecentExpenses;