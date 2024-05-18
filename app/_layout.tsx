import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import { DefaultNavigator } from "expo-router/build/views/Navigator";
import { useColorScheme } from "react-native";
import { useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Arial: require('../assets/fonts/ARIAL.ttf')
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Login" }}/>
        <Stack.Screen name="(content)" options={{ headerShown: false }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
