// (tabs)/_layout-tsx
import React from 'react';
import { Tabs } from "expo-router";
import { ImageBackground, Text, Image, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={require('../../assets/images/highlight.png')}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-6 justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-2">
                    {title}
                </Text>
            </ImageBackground>
        );
    } else {
        return (
            <View className="mt-2 size-full rounded-full justify-center items-center">
                <Image source={icon} tintColor="#a8b5d5" className="size-5 mt-4" />
            </View>
        );
    }
};

const _layout = () => {
    return (
        <Tabs screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0f0d23',
                    borderColor: '#0f0d23',
                    borderStyle: 'solid',
                    borderWidth: 0,
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom:40,
                    height:52,
                    position:'absolute',
                    overflow:'hidden',
                }
            }}
        >
            <Tabs.Screen name="index" options={{ tabBarIcon: ({ focused }) => (
                       <TabIcon focused={focused} icon={require('../../assets/icons/home.png')} title={'home'} />
                    )}} />

            <Tabs.Screen name="saved" options={{ tabBarIcon: ({ focused }) => (
                         <TabIcon focused={focused} icon={require('../../assets/icons/save.png')} title={'saved'} />
                     )}}/>

            <Tabs.Screen name="search" options={{ tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} icon={require('../../assets/icons/search.png')} title={'search'} />
            )}} />

            <Tabs.Screen name="profile" options={{ tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={require('../../assets/icons/person.png')} title={'profile'} />
            )}} />
        </Tabs>
    );
};

export default _layout;

// this  <Tabs>...</Tabs> creates automatically the bottom navbar with the routes
// `focused` is a built-in prop from React Navigation — it's true when the tab is active, false otherwise.
