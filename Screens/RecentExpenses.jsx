import { useContext, useLayoutEffect } from 'react';
import { View , StyleSheet , Text} from 'react-native';

// my custom components
import ExpensesList from '../Components/Expenses/ExpensesList';
import Summary from '../Components/Expenses/Summary';
import VirtualizedView from '../Components/UI/VirtualizedView';

// importing context
import { ExpensesContext } from '../Store/ExpensesContext';

// importing helper functions
import {getDateMinusDays} from '../utils/DateFunction';

import GlobalColors from '../utils/Color';



const RecentExpenses = () => {

    const { Expenses } = useContext(ExpensesContext)

    const recentExpenses = Expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 30);
    
        return expense.date >= date7DaysAgo && expense.date <= today;
      });
    

    return (
        <View style={styles.rootContainer}>
        <VirtualizedView>
        <View style={styles.rootContainer}>
         <Summary expeses={recentExpenses} periodName={'Last 30 Days'}  />
        { recentExpenses.length > 0 ? <ExpensesList expenses={recentExpenses} /> :
        <Text style={styles.message}>No Expenses to show</Text>
        }
        </View>
        </VirtualizedView>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalColors.background,
        alignItems:'center',

    },
    message: {
        fontSize: 20,
        color: GlobalColors.grandientFill,
        fontWeight: 'bold'
    }
})

export default RecentExpenses;