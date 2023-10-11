import {  SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BodyPartsScreen from "./screens/BodyPartsScreen";
import BodyPartExercises from './screens/BodyPartExercises/BodyPartExercises'
import ExerciseDetailScreen from "./screens/BodyPartExercises/exerciseDetailScreen/ExerciseDetailScreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeView}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="BodyPartsScreen" component={BodyPartsScreen} />
            <Stack.Screen name="BodyPartExercises" component={BodyPartExercises} />
            <Stack.Screen name="ExerciseDetailScreen" component={ExerciseDetailScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "#3A6073",
  },
  container: {
    flex: 1,
    // backgroundColor: '#3A6073',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
