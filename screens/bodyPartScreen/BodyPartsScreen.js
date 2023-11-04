import { useState } from "react";
import { FlatList, View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { BodyPartsCat } from "../../body-part";
import BodyPart from "../../components/BodyPart";
import { Button } from "react-native-web";
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


  // async function onPress() {
  //   await fetch(`https://jsonplaceholder.typicode.com/${process.env.EXPO_PUBLIC_API_URL}`)
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Body Parts:</Text>
      {/* <Pressable onPress={onPress} ><Text>Post</Text></Pressable> */}

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

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});