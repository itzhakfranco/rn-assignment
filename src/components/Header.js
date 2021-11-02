import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FlashLight from './Flashlight';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
      <FlashLight />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 1,
    height: 50,
    borderColor: 'black',
  },
});
export default Header;
