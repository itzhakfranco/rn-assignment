import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

const InputField = ({inputName, inputValue, onChangeText}) => {
  return (
    <>
      <Text>{inputName}:</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={onChangeText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});
export default InputField;
