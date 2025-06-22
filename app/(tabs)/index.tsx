import {Image, Text, View, ScrollView} from "react-native";
import {Link} from "expo-router";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className={`flex-1 bg-primary`}>
        <Image source={require('../../assets/images/bg.png')}
               className="absolute z-0 w-full" />

        <ScrollView className={`flex-1 px-5`} showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ minHeight: '100%', paddingBottom: 10}}>
            <Image source={require('../../assets/icons/logo.png')}
                   className="w-12 h-10 mt-20 mb-5 mx-auto" />
            <View className={`flex-1 mt-5`}>
                <SearchBar />
            </View>
        </ScrollView>

    </View>
  );
}
