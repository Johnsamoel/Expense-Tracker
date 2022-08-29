import React from 'react';
import { Pressable, View , StyleSheet , Text} from 'react-native';
import GlobalColors from '../../utils/Color';

const CancelButton = ({onPress}) => {
    return (
        <Pressable onPress={onPress} style={( {pressed}) => pressed && styles.pressed }>
        <View style={styles.container}>
        <Text style={styles.text}>Cancel</Text>
       </View>
       </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal:5,
        marginVertical:5,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:GlobalColors.error,
        borderRadius: 15,
        padding: 10,
        
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

export default CancelButton;