import { Colors } from "@/constants/Colors";
import { SessionProvider } from "@/ctx";
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { useColorScheme } from "react-native";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Arial: require('../assets/fonts/ARIAL.ttf'),
    ArialBlack: require('../assets/fonts/ARIBLK.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(content)" options={{ headerShown: false }}/>
          <Stack.Screen name="login" options={{ title: "Login" }}/>
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SessionProvider>
  );
}
