// [id].tsx
import React from 'react';
import { View, Text, } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const MovieDetails = () => {
    const { id } = useLocalSearchParams()
  return (
    <View >
      <Text>MovieDetails {id}</Text>
    </View>
  );
};

export default MovieDetails;
