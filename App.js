import { SafeAreaView, StyleSheet } from "react-native";
import { AppNavigation } from "./screens/navigation";

export default function App() {

  return (
    <SafeAreaView style={styles.safeView}>
      <AppNavigation />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // backgroundColor: "#3A6073",
  },
});
