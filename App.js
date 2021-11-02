import React from 'react';
import {View} from 'react-native';

import Header from './src/components/Header';
import Form from './src/components/Form';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <View>
      <Header />
      <Form />
      <Footer />
    </View>
  );
};

export default App;
