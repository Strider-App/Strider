import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors"

export default function Index() {
  // double question mark means that if useColorScheme() returns
  // null or undefined then the value becomes 'light'
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView
      lightColor={ Colors.light.background }
      darkColor={ Colors.dark.background }
      style={ styles.mainView }
    >
      <ThemedText>Strider App</ThemedText>
      <Collapsible title="Things to do">
        <ThemedText type='default'>Seems to be working now</ThemedText>
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});