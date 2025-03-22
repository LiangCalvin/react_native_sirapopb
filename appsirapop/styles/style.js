import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: "column",
      // justifyContent: "space-between",
      // justifyContent: "center",
      // alignItems: "center",
      padding: Platform.OS === "ios" ? 30 : 40,
      marginVertical: 50,
      marginHorizontal:10,

    },
    textstyle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    boxstyle: {
      width: 500,
      height: 500,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
    },
    headerlist: {
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
    },
    content: {
     backgroundColor: "lightblue",
     padding: 10,
     margin: 10,
     borderRadius: 10,
     width: 300,
     alignItems: "center",
    },
    button: {
      margin: 5,
      padding: 5,
      borderRadius: 5,
      width: 100,
    }
  });