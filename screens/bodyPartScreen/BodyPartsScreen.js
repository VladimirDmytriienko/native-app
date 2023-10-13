import { useState } from "react";
import { FlatList, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { BodyPartsCat } from "../../body-part";
import BodyPart from "../../components/BodyPart";
// import { useNavigation } from "@react-navigation/native";

const BodyPartsScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const [textInput, setTextInput] = useState('');
  const handleBodyPartPress = (item) => {
    navigation.navigate("BodyPartExercises", { bodyPart: item });
  };
  
  const handleSearch = () => {
    // Обработка нажатия на кнопку поиска
    // Вы можете добавить здесь логику для поиска
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setTextInput}
          value={textInput}
          placeholder="Search ..."
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View> */}

      {/* <Text style={styles.headerText}>Body Parts:</Text> */}

      <FlatList
        data={BodyPartsCat}
        renderItem={({ item }) => <BodyPart item={item} onPress={handleBodyPartPress} />}
      />
  </View>
  );
};

export default BodyPartsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  searchButton: {
    backgroundColor: "#66FF00", 
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "white", 
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});