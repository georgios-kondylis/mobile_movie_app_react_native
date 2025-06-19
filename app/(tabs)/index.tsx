import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={`flex flex-col items-center justify-center h-[100vh]`}>
      <Text className={`text-accent text-[3rem]`}>Gamiese.</Text>
        <Link href={`/profile`}>Profile</Link>
        <Link href={`/movies/avengers`}>see avengers</Link>
    </View
     >
  );
}
