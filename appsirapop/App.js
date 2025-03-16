import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View
        style={{ width: 80, height: 80, backgroundColor: "#DFFF00" }}
      ></View>
      <View
        style={{ width: 80, height: 80, backgroundColor: "#FFBF00" }}
      ></View>
      <View
        style={{ width: 80, height: 80, backgroundColor: "#FF7F50" }}
      ></View>
    </View>
  );
}
