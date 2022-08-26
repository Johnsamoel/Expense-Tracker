
import { FlatList , StyleSheet , View} from 'react-native';
import ExpenseItem from './ExpenseItem';


const renderMethod =  ({item}) => <ExpenseItem expenseName={item.desc} expense={item.amount} />

const ExpensesList = ({expenses}) => {
    return (
        <View style={styles.rootContainer}>
        <FlatList data={expenses}  keyExtractor={(item) => item.id} renderItem={renderMethod}   />
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent:"center",
        width:'100%',
       marginBottom: 15
    }
})

export default ExpensesList;