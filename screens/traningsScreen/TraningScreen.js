import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { useStore, useWorkoutStore } from "../../store/store-favorites";

export default function TraningScreen() {
  const { favExercises } = useStore();
  const { workouts } = useWorkoutStore();

  const [isModalVisible, setModalVisible] = useState(false);

  const [traning, setTraning] = useState([]);
  const [traningName, setTraningName] = useState("");

  const addWorkout = useWorkoutStore((state) => state.addWorkout);
  const addWorkoutOnClick = (exercise) => {
    addWorkout(exercise);
  };

  const addTraning = (exercise) => {
    const isExerciseInTraning = traning.some((item) => item.id === exercise.id);

    if (isExerciseInTraning) {

      const updatedTraning = traning.filter((item) => item.id !== exercise.id);
      setTraning(updatedTraning);
    } else {

      setTraning([...traning, exercise]);
    }
  };

  const isExerciseInTraning = (exercise) =>
    traning.some((item) => item.id === exercise.id);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // console.log(traning);
  // console.log(workouts);

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Training Screen</Text>
      <View style={styles.addButtonContainer}>
        <Pressable onPress={toggleModal} style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD TRAINING</Text>
        </Pressable>
      </View>



      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#888"
              placeholder="Name your training plan"
              onChangeText={setTraningName}
            />
            <FlatList
              data={favExercises}
              renderItem={({ item }) => (
                <View style={styles.exerciseContainer}>
                  <View style={styles.exerciseImageContainer}>
                    <Image
                      style={styles.tinyLogo}
                      source={{ uri: item.gifUrl }}
                    />
                  </View>

                  <View style={styles.exerciseDetailsContainer}>
                    <Text style={styles.exerciseName}>{item.name}</Text>
                  </View>

                  <View>
                    <Pressable
                      onPress={() => {
                        addTraning(item);
                      }}
                      style={[
                        styles.addButton,
                        {
                          backgroundColor: isExerciseInTraning(item)
                            ? "#ff6600"
                            : "#4285F4",
                        },
                      ]}
                    >
                      <Text style={styles.addButtonText}>
                        {isExerciseInTraning(item) ? "Remove" : "Add"}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id + "traning"}
            />

            <View style={styles.createButtonContainer}>
              <Pressable
                style={styles.createButton}
                onPress={() =>
                  addWorkoutOnClick({
                    name: traningName,
                    tranings: traning,
                  })
                }
              >
                <Text style={styles.createButtonText}>Create</Text>
              </Pressable>
            </View>

            <Pressable title="Close" onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  addButtonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    // alignItems: "center",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  exerciseContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: "black",
  },
  exerciseImageContainer: {
    marginRight: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  exerciseDetailsContainer: {
    flex: 1,
  },
  exerciseName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  createButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  createButton: {
    backgroundColor: "#4285F4",
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  createButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButtonText: {
    textAlign: "center",
    marginTop: 10,
    color: "#4285F4",
    textDecorationLine: "underline",
  },
});