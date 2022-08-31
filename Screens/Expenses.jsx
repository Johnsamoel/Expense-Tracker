import { View , Text , StyleSheet } from "react-native";
import { useContext } from "react";

//global colors
import GlobalColors from "../utils/Color";

//Imoort custom components
import VirtualizedView from "../Components/UI/VirtualizedView";
import ExpensesList from "../Components/Expenses/ExpensesList";
import SumContainer from "../Components/Expenses/SumContainer";

// importing context
import { ExpensesContext } from "../Store/ExpensesContext";

const Expenses = () => {

  const { Expenses } = useContext(ExpensesContext)

    return (
        <View style={styles.rootContainer}>
        <VirtualizedView>
        <View style={styles.rootContainer}>
         <SumContainer expeses={Expenses} periodName={'All Expenses'}  />
        { Expenses.length > 0 ? <ExpensesList expenses={Expenses} /> :
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


export default Expenses;