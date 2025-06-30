import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {Link} from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";

const TrendingCard = ({movie : {movie_id, title, poster_url}, index} : TrendingCardProps ) => {

    return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className="w-32 relative pl-1" >
            <Image source={{ uri: poster_url }}
                   className="w-32 h-48 rounded-lg"
                   resizeMode="cover"
            />
            <View className="absolute bottom-[-120px] -left-2"
           >
                <MaskedView className={"absolute bottom-7"} maskElement={
                    <Text className="font-bold text-white text-6xl">{index + 1}</Text>
                    }>
                    <Image source={require('../assets/images/rankingGradient.png')}
                        className="size"
                        resizeMode="cover"/>
                </MaskedView>
            </View>

            <Text className="font-bold text-white mt-2" numberOfLines={2}>
                {title}
            </Text>
        </TouchableOpacity>
    </Link>
  );
};

// @ts-ignore
export default TrendingCard;