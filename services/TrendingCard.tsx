import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {Link} from "expo-router";

const TrendingCard = ({movie : {movie_id, title, poster_url}, index} : TrendingCardProps ) => {

    return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className="w-32 relative border-2 border-white rounded-lg ">
            <Image source={{ uri: poster_url }}
                   style={{ width: 138, height: 200, borderRadius: 7 }}
                   resizeMode="cover"
            />
            <View className={`absolute bottom-0 left-0 w-full h-full`}>
                <Text className="text-xl text-white font-bold mt-2" numberOfLines={1}>
                    {index + 1}
                </Text>
            </View>

            <Text className="text-sm font-bold text-white mt-2" numberOfLines={2}>
                {title}
            </Text>
        </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
