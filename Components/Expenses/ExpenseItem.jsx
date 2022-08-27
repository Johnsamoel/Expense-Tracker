import { Text, View , StyleSheet} from 'react-native';
import GlobalColors from '../../utils/Color';

import { useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ExpenseItem = ({expenseName , expense , date}) => {

  const { width , height } = useWindowDimensions();


  const styles = StyleSheet.create({
    rootContainer: {
        width: width > 350 ? 350 : '90%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        // backgroundColor: GlobalColors.lighter,
        padding:5,
        margin:5,
        marginHorizontal:15,
        borderRadius:15,
        minWidth:320,
        backgroundColor: GlobalColors.bcglinear
    },
    container: {
        flex:1,
        backgroundColor: GlobalColors.lighter,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        height:  60,
        borderRadius: 25,
        marginHorizontal: 15,
        marginVertical: 12,
        width: width >= 600 ? 400 : 350
    },
    leftContainer:{
        flex:2,
    justifyContent:'space-around',
    alignItems:'flex-start',
    paddingLeft:15
    },
    Rightcontainer:{
        flex:1,
    alignItems:'flex-start',
    justifyContent:'center'
    },
    name: {
        color: GlobalColors.text,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    expense: {
        color: GlobalColors.text,
        fontWeight: 'bold',
        fontSize: 20
    }
})


    return (
        <LinearGradient style={styles.rootContainer}  start={{x: 0.7, y: 0}}  colors={['rgba(97, 74, 211, 1)', 'rgba(228, 44, 100, 1)']} end ={ [0 , 0.82]}>
        <View style={styles.rootContainer}>
        <View style={styles.leftContainer}>
        <Text style={styles.name}>{expenseName}</Text>
        <Text style={styles.date}>{`${date.getFullYear().toString()} / ${date.getMonth().toString()} / ${date.getDay().toString()}`}</Text>
        </View>
        
       <View style={styles.Rightcontainer} >
        <Text style={styles.expense}>{expense}</Text>
       </View>
       </View>
       </LinearGradient>
    );
};


export default ExpenseItem;