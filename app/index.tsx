import { Pressable, Text, View, useColorScheme, StyleSheet } from "react-native";
import { Link } from 'expo-router'

export default function LoginScreen () {

  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>Login Here</Text>
      <Link href="/home" style={ styles.loginButton }>
        <Pressable>
          <Text>Go Home</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  loginButton: {
    width: 100,
    height: 30
  }
})