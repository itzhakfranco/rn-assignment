import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flashlight = () => {
  return (
    <View style={styles.flashlight}>
      <Text>Flashlight</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flashlight: {borderWidth: 1, borderColor: 'black'},
});

export default Flashlight;
