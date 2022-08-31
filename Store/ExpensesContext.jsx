import {  createContext, useReducer } from "react";



export const ExpensesContext = createContext({
  Expenses: [],
  setExpenses: (expenses) => {},
  AddNewExpenseHandler: () => {},
  DeleteExpenseHandler: () => {},
  EditExpenseHandler: () => {}
});


const ReducerFunction = (state , action) => {
   
    switch (action.type) {
        case 'Add':
        return    state = [ action.payload  , ...state]
            break;

        case 'SET':
        const inverted = action.payload.reverse();
        return inverted;
            break;

        case 'Edit':
            const newExpense = action.payload;
            const newState = state.filter((item) => item.id !== action.payload.id);
        return  state = [newExpense , ...newState]  
            break;
            
        case 'DELETE':
        return    state = state.filter((item) => item.id !== action.payload)
            break;
    
        default:
            return state
            break;
    }

}



export const ExpensesContextProvider = ({ children }) => {

    const [Expenses , Dispatch] = useReducer(ReducerFunction , []);

    const AddNewExpenseHandler = ({id , desc , amount , date}) => {
        Dispatch({type: 'Add' , payload: {id , desc , amount , date}})
    }

    const setExpenses = (expenses) => {
    
        Dispatch({ type: 'SET', payload: expenses });
    }

    const DeleteExpenseHandler = (id) => {
    Dispatch({type: 'DELETE' , payload: id})
    }

    const EditExpenseHandler = ({id , desc , amount , date}) => {
        Dispatch({type: 'Edit' , payload: {id , desc , amount , date}})
    }


    const ContextValueObj = {
        Expenses,
        AddNewExpenseHandler,
        DeleteExpenseHandler,
        EditExpenseHandler,
        setExpenses
    }

   
  return <ExpensesContext.Provider value={ContextValueObj}>{children}</ExpensesContext.Provider>;
};
