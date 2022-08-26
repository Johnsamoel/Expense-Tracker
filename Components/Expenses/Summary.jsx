import { View, Text, StyleSheet } from "react-native";

import GlobalColors from "../../utils/Color";

import { useWindowDimensions } from "react-native";

const Summary = ({expeses , periodName}) => {
  const { width, height } = useWindowDimensions();

  const sum = expeses? expeses.reduce((sum , expese) => {
    return sum += expese.amount
  }, 0) : 0

  const styles = StyleSheet.create({
    rootContainer: {
      height: height > 600 ? 200 : 150,
      width: width > 400 ? 300 : 250,
      backgroundColor: GlobalColors.lighter,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
      marginVertical: 25,
      
    },
    container: {
      margin: 15
    },
    number: {
        fontSize: 25,
        fontWeight: 'bold',
        color: GlobalColors.grandientFill
    },
    text: {
      color: GlobalColors.text,
      fontSize: 18,
      fontWeight: "bold",
      textTransform:'uppercase',
      width: '100%'
    },
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{periodName}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.number}>${sum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Summary;