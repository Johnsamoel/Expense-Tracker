import { useLayoutEffect , useContext} from "react";
import { Text, View , StyleSheet, ScrollView} from "react-native";

// my custom buttons
import ConfirmButton from "../Components/UI/ConfirmButton";
import DeleteButton from "../Components/UI/DeleteButton";
import ExpensesForm from '../Components/Expenses/ExpensesFormsData/ExpensesForm';

// my global colors
import GlobalColors from "../utils/Color";

//my context
import { ExpensesContext } from '../Store/ExpensesContext';
 

const ManageExpense = ( {route , navigation} ) => {

  const { DeleteExpenseHandler , AddNewExpenseHandler , EditExpenseHandler , Expenses} = useContext(ExpensesContext)
  
  const expenseId = route.params?.expenseId;

  const selectedExpense = Expenses.find(
    (expense) => expense.id === expenseId
  );

  const IsEditing =  !!expenseId
 
  useLayoutEffect(() => {
    navigation.setOptions({
      title: IsEditing ? 'Edit Expense' : 'Add New Expense' 
    })
  } , [IsEditing])


  const CancelHandler = () => {
    navigation.goBack()
  }


  const UpdateHandler = (data) => {
    if(expenseId) {
      EditExpenseHandler({id: expenseId , ...data})
    }else{
      AddNewExpenseHandler({id: `e2 + ${Math.random()}` , ...data})
    }
    navigation.goBack()
  }


  const DeleteHandler = () => {
    DeleteExpenseHandler(expenseId)
    navigation.goBack()
  }


  return (
    <ScrollView style={{flex: 1 , backgroundColor: GlobalColors.lighter }}>
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
      <ExpensesForm
       onCancel={CancelHandler}
       submitButtonLabel={expenseId? 'Update' : 'Add'} 
       onSubmit={UpdateHandler}
       defaultValues={selectedExpense}
        />
      </View>
      <DeleteButton onPress={DeleteHandler} />
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalColors.lighter,
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonContainer: {
    justifyContent:'space-evenly',
    alignItems:'center',
    marginVertical: 8
  }
})

export default ManageExpense;
