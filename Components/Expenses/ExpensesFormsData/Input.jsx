import { StyleSheet, Text, TextInput, View } from 'react-native';

import  GlobalColors  from '../../../utils/Color';

const  Input = ({ label, invalid, style, textInputConfig }) => {

  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: GlobalColors.text,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalColors.dark,
    color: GlobalColors.text,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    width: 300
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel: {
    color: GlobalColors.grandientFill
  },
  invalidInput: {
    backgroundColor: GlobalColors.error
  }
});