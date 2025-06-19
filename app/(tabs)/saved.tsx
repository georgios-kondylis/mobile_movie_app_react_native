import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const saved = () => {
  return (
    <View style={styles.container}>
      <Text>saved</Text>
    </View>
  );
};

export default saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
