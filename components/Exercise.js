import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Exercise = ({ item }) => {
  const navigation = useNavigation();

  const navigateToExerciseDetailScreen = () => {
    navigation.navigate("ExerciseDetailScreen", { exercise: item });
  }

  return (
    <Pressable
      onPress={navigateToExerciseDetailScreen}
      style={({ pressed }) => [
        styles.gridItem,
        pressed ? styles.gridItemPressed : null,
      ]}
    >
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.gifUrl,
          }}
        />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.text}>{item.name}</Text>

      </View>
    </Pressable>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    padding: 4,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  gridItemPressed: {
    transform: [{ scale: 0.95 }], 
    filter: "blur(3px)", 
    opacity: 0.4,
    // backgroundColor: "rgba(255, 102, 0, 0.8)", 
  
  },
  tinyLogo: {
    height: 150,
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    padding: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 18,
  },
});

