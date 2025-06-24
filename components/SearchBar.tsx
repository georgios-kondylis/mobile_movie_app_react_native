import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image, TextInput} from "react-native";

interface SearchBarProps {
    placeholder: string,
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ( { placeholder, onPress, value, onChangeText } : SearchBarProps) => {
  return (
    <View className={`flex flex-row items-center bg-dark-200 rounded-full px-5 py-4`}>
        <Image source={require('../assets/icons/search.png')} className={`size-5`} tintColor={'#ab8bff'} />
        <TextInput className={`flex-1 ml-2 text-white`}
                   onPress={onPress}
                   placeholder={placeholder}
                   placeholderTextColor={'#ab8bff'}
                   value={value}
                   onChangeText={onChangeText}
        />
    </View>
  );
};

export default SearchBar;
