import { useSession } from '@/ctx';
import { Link, router } from 'expo-router';
import { Button, StyleSheet, Text, View, useColorScheme } from "react-native";

export default function LoginScreen () {

  const {signIn } = useSession();

  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>Login Here</Text>
      <Button title="Login" onPress={
        () => {
          signIn();
          router.replace('/');
        }
      }/>
    </View>
  )
}

const styles = StyleSheet.create({
  loginButton: {
    width: 100,
    height: 30,
    backgroundColor: 'white',
  }
})