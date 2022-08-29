import axios from 'axios';

export function storeExpense(expenseData) {
    console.log(expenseData)
    axios.post(
    'https://react-native-course-9da33-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}