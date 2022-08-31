import { useLayoutEffect , useContext , useState} from "react";
import { Text, View , StyleSheet, ScrollView} from "react-native";

// my custom buttons
import ConfirmButton from "../Components/UI/ConfirmButton";
import DeleteButton from "../Components/UI/DeleteButton";
import ExpensesForm from '../Components/Expenses/ExpensesFormsData/ExpensesForm';
import ErrorOverlay from "../Components/UI/ErrorOverlay";
import LoadingOverlay from "../Components/UI/LoadingOverlay";

// my global colors
import GlobalColors from "../utils/Color";

//my context
import { ExpensesContext } from '../Store/ExpensesContext';

// my helper http function
import { storeExpense , deleteExpense , updateExpense } from "../utils/Http";
 

const ManageExpense = ( {route , navigation} ) => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState('');

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


  async function DeleteHandler() {
    setIsSubmitting(true);
      try {
        await deleteExpense(expenseId);
        DeleteExpenseHandler(expenseId);
      } catch (error) {
        setError('Could not delete expense - please try again later!');
        setIsSubmitting(false);
      }
    navigation.goBack()
  }


  async function UpdateHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (IsEditing) {
        EditExpenseHandler({...expenseData , id: expenseId});
        await updateExpense(expenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        AddNewExpenseHandler({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  }

  // async function deleteExpenseHandler() {
  //   setIsSubmitting(true);
  //   try {
  //     await deleteExpense(editedExpenseId);
  //     expensesCtx.deleteExpense(editedExpenseId);
  //     navigation.goBack();
  //   } catch (error) {
  //     setError('Could not delete expense - please try again later!');
  //     setIsSubmitting(false);
  //   }
  // }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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
