import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type headerProps = {
  title: string;
};

export function HeaderTitle (props: headerProps) {
  return (
    <View style={styles.containerStyles}>
      <Text style={styles.textStyles}>{ props.title }</Text>
      <Link href='/account'>
        <View style={styles.imageContainerStyles}>
          <Image
            style={styles.imageStyles}
            source={require('@/assets/images/react-logo.png')}
          />
        </View>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyles: {
    paddingLeft: 15,
    fontFamily: "ArialBlack",
    fontSize: 24,
    color: "white",
    marginBottom: 10,
  },
  imageStyles: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    backgroundColor: 'white',
  },
  containerStyles: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.theme.background
  },
  imageContainerStyles: {
    width: 40,
    height: 40,
    display: 'flex',
    backgroundColor: 'grey',
    borderRadius: 24,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    overflow: 'hidden',
  }
})
