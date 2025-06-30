// [id].tsx
import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {router, useLocalSearchParams} from "expo-router";
import {fetchMovieDetails, fetchMovies} from "@/services/api";
import  useFetch  from "@/services/useFetch";

type MovieInfoProps = {
    label: string,
    value?: string | number | null
}

const MovieInfo = ({label, value} : MovieInfoProps) => (
    <View className={`flex flex-col gap-y-2 mt-5`}>
        <Text className={`text-light-200 text-sm font-normal`}>
            {label}
        </Text>
        <Text className={`text-light-100 text-sm font-bold`}>
            {value || 'N/A' }
        </Text>
    </View>
)

const MovieDetails = () => {
    const { id } = useLocalSearchParams()
    const {data : movie, loading} = useFetch(() => fetchMovieDetails(id as string))

  return (
    <View className={`bg-primary flex-1`}>
        <ScrollView contentContainerStyle={{paddingBottom: 120}}>
            <View>
                <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}
                       className={`w-full h-[60vh] rounded-lg`} resizeMode={"cover"} />
                <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-white flex items-center justify-center">
                    <Image
                        source={require('../../assets/icons/play.png')}
                        className="w-6 h-7 ml-1"
                        resizeMode="stretch"
                    />
                </TouchableOpacity>
            </View>

            <View className={`flex flex-col items-start mt-5 px-5`}>
                <Text className={`text-white text-xl font-bold`}>
                    {movie?.title}
                </Text>
                <View className={`flex flex-row items-center gap-4 mt-2`}>
                    <Text className={`text-light-200 text-sm`}>
                        {movie?.release_date?.split('-')[0]}
                    </Text>
                    <Text className={`text-light-200 text-sm`}>
                        {movie?.runtime}m
                    </Text>
                </View>

                <View className={`flex flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2`}>
                    <Image source={require('../../assets/icons/star.png')} className={`size-4`} />
                    <Text className={`text-white text-sm`}>
                        {Math.round(movie?.vote_average ?? 0)} /10
                    </Text>
                    <Text className={`text-light-200 text-sm`}>
                      ({movie?.vote_count} Votes)
                    </Text>
                </View>

                <View>
                    <MovieInfo label="Overview" value={movie?.overview} />
                    <MovieInfo label="Genges"
                               value={movie?.genres?.map((genre) => genre.name).join(' - ') || 'N/A'}
                    />
                    <MovieInfo label="Budget"
                        value={ movie?.budget
                                ? `$${(movie.budget / 1_000_000).toFixed(1)} Million`
                                : 'N/A'}
                    />
                    <MovieInfo label="Revenue"
                        value={ movie?.revenue
                                ? `$${Math.round(movie.revenue / 1_000_000)} Million`
                                : 'N/A'}
                    />
                </View>
            </View>

        </ScrollView>
        <TouchableOpacity
            className="absolute bottom-10 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
            onPress={router.back}
        >
            <Image
                source={require('../../assets/icons/arrow.png')}
                className="size-5 mr-1 mt-0.5 rotate-180"
                tintColor="#fff"
            />
            <Text className="text-white font-semibold text-base">Go Back</Text>
        </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
