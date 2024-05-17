import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View, useColorScheme, StyleSheet } from "react-native";

export default function Index() {
  // double question mark means that if useColorScheme() returns
  // null or undefined then the value becomes 'light'
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView
      lightColor="#D0D0D0"
      darkColor="#191919"
      style={styles.mainView}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <Collapsible title="Things to do">
        <ThemedText type='default'>Things!!!</ThemedText>
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});