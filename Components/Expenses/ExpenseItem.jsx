import { Text, View , StyleSheet} from 'react-native';
import GlobalColors from '../../utils/Color';

const ExpenseItem = ({expenseName , expense}) => {


    return (
       <View style={styles.container} >
        <Text style={styles.name}>{expenseName}</Text>
        <Text style={styles.expense}>{expense}</Text>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: GlobalColors.lighter,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        height:  60,
        borderRadius: 25,
        marginHorizontal: 20,
        marginVertical: 12
    },
    name: {
        color: GlobalColors.text,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    expense: {
        color: GlobalColors.grandientFill,
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default ExpenseItem;