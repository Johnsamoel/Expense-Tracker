import React from "react";
import { Pressable , View , StyleSheet } from "react-native";
import  { Ionicons } from '@expo/vector-icons';


const HeaderIconComponent = ({name , color , size , onpress}) => {

  return <Pressable onPress={onpress} style={( {pressed}) => pressed && styles.pressed }>
    <View style={styles.iconContainer}>
        <Ionicons style={styles.icon} name={name} color={color} size={size} />
    </View>
  </Pressable>;
};

const styles = StyleSheet.create({
    iconContainer:{
      marginHorizontal: 20,
      
    },
    icon:{
      fontSize: 25,
      fontWeight:'bold'
    },
    pressed: {
      opacity: 0.5
    }
})

export default HeaderIconComponent;
