import {  createContext, useReducer } from "react";


const Dummy_Data = [
    {
        id: 'e23',
        desc:'Visa cost',
        amount: 800,
        date: new Date('2022-08-25')
    }
    ,{
    id: 'e1',
    desc:'Laptop',
    amount: 1200.78,
    date: new Date('2022-07-14')
},
 {
        id: 'e5',
        desc:'ipad',
        amount: 250.63,
        date: new Date('2022-04-14')
    },
    {
        id: 'e6',
        desc:'air pods',
        amount: 150.78,
        date: new Date('2022-08-13')
    },
    {
        id: 'e7',
        desc:'iphone 14',
        amount: 1250.45,
        date: new Date('2022-07-09')
    },
    {
        id: 'e8',
        desc:'iphone 11',
        amount: 1200,
        date: new Date('2022-07-05')
    },
    {
        id: 'e15',
        desc:'a pair of shoes',
        amount: 134.46,
        date: new Date('2022-07-17')
    }
]


export const ExpensesContext = createContext({
  Expenses: [],
  AddNewExpenseHandler: () => {},
  DeleteExpenseHandler: () => {},
  EditExpenseHandler: () => {}
});


const ReducerFunction = (state , action) => {
   
    switch (action.type) {
        case 'Add':
        return    state = [ action.payload  , ...state]
            break;

        case 'Edit':
            const newExpense = action.payload;
            const newState = state.filter((item) => item.id !== action.payload.id);
        return    state = [newExpense , ...newState]
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

    const [Expenses , Dispatch] = useReducer(ReducerFunction , Dummy_Data);

    const AddNewExpenseHandler = ({id , desc , amount , date}) => {
        Dispatch({type: 'Add' , payload: {id , desc , amount , date}})
    }

    const DeleteExpenseHandler = (id) => {
    Dispatch({type: 'DELETE' , payload: id})
    }

    const EditExpenseHandler = ({id , desc , amount , date}) => {
        Dispatch({type: 'Edit' , payload: {id , desc , amount , date}})
    }


    const ContextValueObj = {
        Expenses ,
        AddNewExpenseHandler,
        DeleteExpenseHandler,
        EditExpenseHandler
    }

   
  return <ExpensesContext.Provider value={ContextValueObj}>{children}</ExpensesContext.Provider>;
};
