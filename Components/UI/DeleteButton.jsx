
import { Pressable, View , StyleSheet , Text } from 'react-native';
import GlobalColors from '../../utils/Color';

// importing icons 
import  { Ionicons } from '@expo/vector-icons';

const DeleteButton = ({onPress}) => {
    return (
        <Pressable onPress={onPress} style={( {pressed}) => pressed && styles.pressed }>
        <View style={styles.container}>
        <Ionicons name='trash-outline' color={GlobalColors.text} size={24} />
        </View>
       </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal:8,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalColors.error,
        borderRadius: 15,
        padding: 8,
        marginHorizontal: 55,
        width: 290
    },
    text: {
        fontWeight:'bold',
        fontSize: 20,
        color: GlobalColors.text
    },
    pressed: {
        opacity: 0.5
    }
})

export default DeleteButton;