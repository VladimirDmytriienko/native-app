import { useRoute } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import ExerciseDetail from "../../../../components/ExerciseDetail";

const ExerciseDetailScreen = () => {
  const route = useRoute();
  const exercise = route.params?.exercise || route.params?.result;
  // console.log(route);
  // console.log(exercise);
  return (
    <ExerciseDetail exercise={exercise} />
  );
};

export default ExerciseDetailScreen;


