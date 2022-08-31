import { View, StyleSheet, Text } from 'react-native';

import GlobalColors from '../../utils/Color';

const  ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Something went Wrong!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalColors.dark,
  },
  text: {
    color: GlobalColors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ErrorOverlay;