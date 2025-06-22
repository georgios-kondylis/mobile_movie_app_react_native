import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image} from "react-native";

const SearchBar = () => {
  return (
    <View className={`flex flex-row items-center bg-dark-200 rounded-full px-5 py-4`}>
      <Text className={`text-accent`}>SearchBar</Text>
        <Image source={require('../assets/icons/search.png')} className={`size-5`} tintColor={'#ab8bff'} />
    </View>
  );
};

export default SearchBar;

