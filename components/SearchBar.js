import { useRef, useCallback, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import axios from "axios";
import debounce from "lodash.debounce";

const mockData = [
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/WlAINorahQq46T",
    id: "3294",
    name: "archer push up",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders", "core"],
    instructions: [
      "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      "Extend one arm straight out to the side, parallel to the ground.",
      "Lower your body by bending your elbows, keeping your back straight and core engaged.",
      "Push back up to the starting position.",
      "Repeat on the other side, extending the opposite arm out to the side.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "band",
    gifUrl: "https://v2.exercisedb.io/image/fEUBpidmqfeBwh",
    id: "0975",
    name: "band close-grip push-up",
    target: "triceps",
    secondaryMuscles: ["chest", "shoulders"],
    instructions: [
      "Place a band around your upper arms, just above the elbows.",
      "Assume a push-up position with your hands directly under your shoulders and your body in a straight line from head to heels.",
      "Bend your elbows and lower your chest towards the ground, keeping your elbows close to your sides.",
      "Push through your palms to extend your arms and return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "band",
    gifUrl: "https://v2.exercisedb.io/image/oKbqvTBLZI0zQG",
    id: "0992",
    name: "band push sit-up",
    target: "abs",
    secondaryMuscles: ["shoulders", "chest"],
    instructions: [
      "Attach the band securely to a stable anchor point.",
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Hold the band with both hands and extend your arms straight up towards the ceiling.",
      "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/xXQxD6FKMkPTe6",
    id: "1407",
    name: "calf push stretch with hands against wall",
    target: "calves",
    secondaryMuscles: ["hamstrings"],
    instructions: [
      "Stand facing a wall with your feet hip-width apart.",
      "Place your hands against the wall at shoulder height.",
      "Step back with one foot, keeping your heel on the ground and your leg straight.",
      "Bend your front knee slightly and lean forward, feeling a stretch in your calf.",
      "Hold the stretch for 20-30 seconds.",
      "Switch legs and repeat the stretch.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Wb8yvVD2qJfRAm",
    id: "3216",
    name: "chest tap push-up (male)",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    instructions: [
      "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line.",
      "Lower your body towards the ground by bending your elbows, keeping them close to your sides.",
      "As you lower yourself, tap your chest with your right hand.",
      "Push yourself back up to the starting position.",
      "Repeat the movement, this time tapping your chest with your left hand.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/CAfD4wPmisraPA",
    id: "1273",
    name: "clap push up",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    instructions: [
      "Start in a high plank position with your hands slightly wider than shoulder-width apart.",
      "Lower your body towards the ground by bending your elbows, keeping your core engaged.",
      "Push through your palms explosively to propel your body off the ground.",
      "While in mid-air, clap your hands together before landing back in the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/yMWtSXBdockuVq",
    id: "0258",
    name: "clock push-up",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders", "core"],
    instructions: [
      "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.",
      "Lower your body towards the ground by bending your elbows, keeping them close to your sides.",
      "As you lower, rotate your body to the left, extending your left arm straight out to the side.",
      "Push back up to the starting position, while rotating your body to the center.",
      "Repeat the push-up, this time rotating your body to the right and extending your right arm out to the side.",
      "Continue alternating sides with each repetition.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/iodofG0ad9HYLM",
    id: "0259",
    name: "close-grip push-up",
    target: "triceps",
    secondaryMuscles: ["chest", "shoulders"],
    instructions: [
      "Start in a high plank position with your hands placed close together, directly under your shoulders.",
      "Engage your core and lower your body towards the ground, keeping your elbows close to your sides.",
      "Push through your palms to extend your arms and return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/nvVKlkqPGqFoLx",
    id: "2398",
    name: "close-grip push-up (on knees)",
    target: "triceps",
    secondaryMuscles: ["chest", "shoulders"],
    instructions: [
      "Start by getting on your hands and knees, with your hands shoulder-width apart and your knees hip-width apart.",
      "Lower your upper body towards the ground by bending your elbows, keeping them close to your sides.",
      "Pause for a moment when your chest is just above the ground.",
      "Push through your palms to straighten your arms and return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/fTZKD2ag-fOlTo",
    id: "0279",
    name: "decline push-up",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    instructions: [
      "Place your hands on the ground slightly wider than shoulder-width apart, with your feet elevated on a stable surface.",
      "Keep your body in a straight line from head to toe, engaging your core muscles.",
      "Lower your chest towards the ground by bending your elbows, keeping them close to your body.",
      "Push through your palms to extend your arms and return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
];

const SearchBar = ({ children, navigation }) => {
  const searchTermRef = useRef("");
  const debouncedSearch = debounce(sendSearchRequest, 500);
  const [searchResults, setSearchResults] = useState([]);

  const handleNavigate = (name, result) => {
    navigation.navigate("ExerciseDetailScreen", { name, result });
  };

  async function sendSearchRequest() {
    if (searchTermRef.current.length <= 2) {
      return;
    }

    try {
      const response = await axios.get(
        "https://exercisedb.p.rapidapi.com/exercises/name/" +
          searchTermRef.current.toLowerCase(),
        {
          headers: {
            "X-RapidAPI-Key": "840bb7bd7amsh6e47bf1e8b33fb6p183936jsn9ae639094dfd",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        }
      );

      setSearchResults(mockData);
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = useCallback(
    (text) => {
      searchTermRef.current = text;
      debouncedSearch();
    },
    [debouncedSearch]
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
          onChangeText={handleInputChange}
        />
        <Pressable style={styles.button} onPress={debouncedSearch}>
          <Text style={styles.buttonText}>Search...</Text>
        </Pressable>
      </View>
      <ScrollView>
        {searchResults.map((result) => (
          <Pressable
            key={result.id}
            onPress={() => handleNavigate("name", result)}
          >
            <View style={styles.resultContainer}>
              <View>
                <Text style={styles.resultText}>{result.name}</Text>
              </View>
              <View>
                <Text>➔</Text>
              </View>
            </View>
          </Pressable>
        ))}

        {children}
      </ScrollView>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#f5f5f5", // Светло-серый фон
    paddingBottom: 60,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: "#3498db", // Цвет рамки вокруг текстового поля (синий)
    paddingHorizontal: 20, // Отступы внутри текстового поля
    fontSize: 18, // Размер текста
    color: "white", // Цвет текста (черный)
    borderRadius: 10, // Скругление углов
  },
  button: {
    backgroundColor: "#3498db", // Цвет фона кнопки (синий)
    padding: 15, // Отступы внутри кнопки
    borderRadius: 10, // Скругление углов кнопки
    marginLeft: 10, // Отступ слева
  },
  buttonText: {
    color: "white", // Цвет текста внутри кнопки (белый)
    fontSize: 18,
    fontWeight: "bold", // Жирный шрифт
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "#ff6600",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    padding: 8,
    borderRadius: 10,
    elevation: 4,
  },

  resultText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flexDirection: "row",
  },
});
