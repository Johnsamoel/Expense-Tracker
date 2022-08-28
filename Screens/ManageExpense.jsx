import { useLayoutEffect } from "react";
import { Text, View , StyleSheet} from "react-native";
import CancelButton from "../Components/UI/CancelButton";
import ConfirmButton from "../Components/UI/ConfirmButton";
import GlobalColors from "../utils/Color";


const ManageExpense = ( {route , navigation} ) => {

  const expenseId = route.params?.expenseId;

  const IsEditing =  !!expenseId
 
  useLayoutEffect(() => {
    navigation.setOptions({
      title: IsEditing ? 'Edit Expense' : 'Add New Expense' 
    })
  } , [IsEditing])


  const CancelEventHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.rootContainer}>
      {/* <Text>{expenseName}</Text>
      <Text>{expense}</Text>
      <Text>{date}</Text> */}
      <View style={styles.buttonContainer}>
      <CancelButton onPress={CancelEventHandler} />
      <ConfirmButton onPress={CancelEventHandler}>Confirm</ConfirmButton>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalColors.lighter
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginVertical: 8
  }
})

export default ManageExpense;
