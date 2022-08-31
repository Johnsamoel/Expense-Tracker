import { useContext , useEffect , useState} from 'react';
import { View , StyleSheet , Text} from 'react-native';

// my custom components
import ExpensesList from '../Components/Expenses/ExpensesList';
import Summary from '../Components/Expenses/Summary';
import VirtualizedView from '../Components/UI/VirtualizedView';
import ErrorOverlay from '../Components/UI/ErrorOverlay';
import LoadingOverlay from '../Components/UI/LoadingOverlay';

// importing context
import { ExpensesContext } from '../Store/ExpensesContext';

// importing helper functions
import {getDateMinusDays} from '../utils/DateFunction';
import { fetchExpenses } from '../utils/Http';
 
import GlobalColors from '../utils/Color';



const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const { Expenses , setExpenses } = useContext(ExpensesContext)


    useEffect(() => {
      async function getExpenses() {
        try {
          const expenses = await fetchExpenses();
          setExpenses(expenses);
        } catch (error) {
          setError('Could not fetch expenses!');
        }

        setIsFetching(false)
      }
        
      getExpenses();
    }, []);


    const recentExpenses = Expenses.filter((expense) => {
        const today = new Date();
        const date30DaysAgo = getDateMinusDays(today, 30);
    
        return expense.date >= date30DaysAgo ;
    });


    

      if (error && !isFetching) {
        return <ErrorOverlay message={error} />;
      }
    
      if (isFetching) {
        return <LoadingOverlay />;
      }

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