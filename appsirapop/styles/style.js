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
    },
    input: {
      margin: 10,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "gray",
      width: 300,
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
    },
    modalContainer: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 5,  // Shadow for Android
    },
    iconButton: {
      marginLeft: 10,
      padding: 5,
    },
    buttonRow: {
      flexDirection: "row",  // Make elements align in the same line
      alignItems: "center",  // Align them vertically in the center
      justifyContent: "space-between",  // Space them properly
      marginTop: 5,
    },
    
    detailButton: {
      backgroundColor: "#007bff",  // Blue button (optional)
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
    },
    detailText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    
  });