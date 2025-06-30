import { Stack } from "expo-router";
import './globals.css';
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (

      <>
          <StatusBar hidden={true} />   {/*// hide status bar.. battery, time, etc*/}
        <Stack>
           <Stack.Screen name='(tabs)' options={{ headerShown: false }}/>
           <Stack.Screen name='movies/[id]' options={{ headerShown: false }}/>
        </Stack>
      </>
  )}