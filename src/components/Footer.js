import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginTop: 60,
  },
});

export default Footer;
