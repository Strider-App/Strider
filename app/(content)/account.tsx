import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, useColorScheme, View } from "react-native";

export default function AccountScreen () {
  // double question mark means that if useColorScheme() returns
  // null or undefined then the value becomes 'light'
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView
      lightColor={ Colors.theme.background }
      darkColor={ Colors.theme.background }
      style={ styles.mainView }
    >
      <View id="top-tab" style={ [styles.card, styles.selection_card] }>
        <ThemedText style={ styles.headers }>
          Profile
        </ThemedText>
        <ThemedText style={ styles.headers }>
          My Info
        </ThemedText>
      </View>
      <View style={ styles.card }>
        <View style={ styles.card_top }>
          <ThemedText style={ styles.headers }>My Clubs</ThemedText>
        </View>
      </View>
      <View style={ styles.card }>
        <View style={ styles.card_top }>
          <ThemedText style={ styles.headers }>Notifications</ThemedText>
        </View>
      </View>
      <ThemedText>Strider App</ThemedText>
      <ThemedText type="defaultSemiBold">Account</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: Colors.theme.background
  },
  selection_card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: Colors.theme.card,
    marginVertical: 10,
  },
  card_top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headers: {
    fontFamily: 'ArialBlack',
    fontWeight: 'bold',
  }
});
