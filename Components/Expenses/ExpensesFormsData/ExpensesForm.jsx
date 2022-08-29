import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// my components
import Input from './Input';
import CancelButton  from '../../UI/CancelButton';
import ConfirmButton from '../../UI/ConfirmButton';

// global colors
import GlobalColors from '../../../utils/Color';

// helper fucntions
import {getFormattedDate} from '../../../utils/DateFunction'

function ExpensesForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    desc: {
      value: defaultValues ? defaultValues.desc : '',
      isValid: true,
    },
  });



  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      desc: inputs.desc.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.desc.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          desc: {
            value: curInputs.desc.value,
            isValid: descriptionIsValid,
          },
        };
      });

      return;
    }
    

    onSubmit(expenseData);
  }


  const formIsInvalid = !inputs.amount.isValid ||  !inputs.date.isValid ||  !inputs.desc.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />

      <Input
        label="Description"
        invalid={!inputs.desc.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'desc'),
          value: inputs.desc.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <CancelButton onPress={onCancel} />
        <ConfirmButton style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </ConfirmButton>
      </View>
    </View>
  );
}

export default ExpensesForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  }, errorText: {
    textAlign: 'center',
    color: GlobalColors.error,
    margin: 8,
    maxWidth: 280
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});