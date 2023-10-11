import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";

const ExerciseDetailScreen = () => {
  const route = useRoute();
  const exercise = route.params?.exercise;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: exercise.gifUrl }}
        style={styles.gifImage}
      />
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.subtitle}>{exercise.bodyPart} | {exercise.equipment}</Text>
      <Text style={styles.targetMuscles}>Target Muscles: {exercise.target}</Text>
      <Text style={styles.secondaryMuscles}>Secondary Muscles: {exercise.secondaryMuscles.join(", ")}</Text>
      <Text style={styles.instructionsTitle}>Instructions:</Text>
      <View>
        {exercise.instructions.map((step, index) => (
          <Text key={index} style={styles.instructions}>{`${index + 1}. ${step}`}</Text>
        ))}
      </View>

    </View>
  );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  gifImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  targetMuscles: {
    marginTop: 10,
  },
  secondaryMuscles: {
    fontStyle: "italic",
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 8,
  },
});


