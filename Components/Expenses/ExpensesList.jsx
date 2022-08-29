
import { FlatList , StyleSheet , useWindowDimensions, View } from 'react-native';
import ExpenseItem from './ExpenseItem';




const renderMethod =  ({item}) => <ExpenseItem expenseName={item.desc} expense={item.amount} date={item.date} id={item.id} />

const ExpensesList = ({expenses}) => {

     const {width } = useWindowDimensions()
    return (
        <View style={styles.rootContainer}>

         { width > 600 ? <FlatList key={'#'} data={expenses}  keyExtractor={(item) => '#' + item.id} renderItem={renderMethod} numColumns={2}  horizontal={false}    /> 
        : <FlatList key={'-'} data={expenses}  keyExtractor={(item) =>'-' + item.id} renderItem={renderMethod} numColumns={1} horizontal={false}  />}

        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent:"center",
        width:'100%',
       marginBottom: 15,
       alignItems:'center'
    }
})

export default ExpensesList;