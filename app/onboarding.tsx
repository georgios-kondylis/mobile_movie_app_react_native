import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>onboarding</Text>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
