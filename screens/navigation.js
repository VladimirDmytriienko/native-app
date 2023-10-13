import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BodyPartsScreen from "./bodyPartScreen/BodyPartsScreen";
import BodyPartExercises from "./bodyPartScreen/BodyPartExercises/BodyPartExercises";
import ExerciseDetailScreen from "./bodyPartScreen/BodyPartExercises/exerciseDetailScreen/ExerciseDetailScreen";
import FavoritesScreen from "./favoritesScreen/FavoritesScreen";
import SearchScreen from "./searchScreen/SearchScreen";
import TargetEquipmentScreen from "./searchScreen/target-equipment-skreen/TargetEquipmentScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Parts = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Stack.Screen name="Body Parts" component={BodyPartsScreen} />
      <Stack.Screen name="BodyPartExercises" component={BodyPartExercises}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          title: route.params?.bodyPart.toUpperCase(),
        })}
      />
      <Stack.Screen name="ExerciseDetailScreen" component={ExerciseDetailScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          title: route.params?.exercise.name.toUpperCase(),
        })}
      />
    </Stack.Navigator>
  );
}
const Search = () => {
  return (
    <Stack.Navigator
        screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Search screen" component={SearchScreen}/>
      <Stack.Screen name="Target Equipment" component={TargetEquipmentScreen}/>
      <Stack.Screen name="ExerciseDetailScreen" component={ExerciseDetailScreen}
        // options={({ route }) => ({
        //   headerBackTitleVisible: false,
        //   title: route.params?.exercise.name.toUpperCase(),
        // })}
      />
    </Stack.Navigator>
  )

}
export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Parts" component={Parts} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
