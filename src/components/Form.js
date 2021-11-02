import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import {useSelector, useDispatch} from 'react-redux';

import {incrementCounter} from '../store/form/formActions';

const Form = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);

  const counter = useSelector(state => state.formReducer);
  const dispatch = useDispatch();

  const isValidEmail = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  };

  const isInt = value => {
    return (
      !isNaN(value) &&
      parseInt(Number(value)) == value &&
      !isNaN(parseInt(value, 10))
    );
  };

  const handleSubmitForm = () => {
    let is_valid = true;

    if (!isValidEmail(email)) {
      return (is_valid = false);
    }

    if (!title.length) {
      return (is_valid = false);
    }
    if (title.length > 25) {
      return (is_valid = false);
    }

    if (!isInt(number)) {
      return (is_valid = false);
    }

    if (is_valid) {
      dispatch(incrementCounter());
    }
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text>Number:</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={text => setNumber(text)}
      />

      <RadioForm
        radio_props={[{label: 'option 1'}, {label: 'option 2'}]}
        initial={0}
        onPress={() => {}}
      />
      <Button title="Submit" onPress={handleSubmitForm} />
      <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 40},
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});

export default Form;
