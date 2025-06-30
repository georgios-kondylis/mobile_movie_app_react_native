import {Image, Text, View, ScrollView, ActivityIndicator, FlatList} from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch"; // useFetch is a custom hook I created
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard"; // this is a function I created to make API calls to TMDB is a movie database
import {getTrendingMovies} from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
    const router = useRouter();

    const {
        data : trendingMovies,
        loading: trendingLoading,
        error: trendingError} = useFetch(getTrendingMovies);

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError, } = useFetch(() => fetchMovies({query: '' }))

  return (
    <View className={`flex-1 bg-primary`}>
        <Image source={require('../../assets/images/bg.png')}
               className="absolute z-0 w-full"
        />

        <ScrollView className={`flex-1 px-5`} showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ minHeight: '100%', paddingBottom: 10}}>
             {/*LOGO*/}
            <Image source={require('../../assets/icons/logo.png')} className=" w-[120px] h-[70px] mt-20 mb-5 mx-auto" />

            { moviesLoading || trendingLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
                ) : moviesError || trendingError ? (
                    <Text className="text-white text-center mt-5">
                        Error: {moviesError?.message || trendingError?.message}
                    </Text>
                ) : (
                    <View className="flex-1 mt-5">
                        <SearchBar
                            onPress={() => router.push("/search")}
                            placeholder="Search for a movie"
                        />

                        {trendingMovies && (
                            <View className={`mt-10`}>
                                <Text className={`text-lg text-white font-bold mt-5 mb-3`}>
                                    Trending Movies
                                </Text>
                                
                                <FlatList className={`mb-4 mt-3`}
                                          horizontal
                                          ItemSeparatorComponent={() => <View className='w-4'></View>}
                                          keyExtractor={(item) => item.movie_id.toString() }
                                          data={trendingMovies} renderItem={({item, index}) => (
                                    <TrendingCard movie={item} index={index} />
                                )} />
                            </View>
                        )}

                        <Text className="text-white font-bold mt-5 mb-3">
                            Latest Movies
                        </Text>

                        <FlatList
                            data={movies}
                            renderItem={({ item }) => <MovieCard {...item} />}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={3}
                            columnWrapperStyle={{
                                justifyContent: "flex-start",
                                gap: 20,
                                paddingRight: 5,
                                marginBottom: 10,
                            }}
                            className="mt-2 pb-32"
                            scrollEnabled={false}
                        />
                    </View>
                )
            }
        </ScrollView>
    </View>
  );
}