import { Text, View, FlatList, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import ExerciseDetail from "../../../components/ExerciseDetail";
import Exercise from "../../../components/Exercise";

const TargetEquipmentScreen = () => {

  const [data, setData] = useState( )

  const route = useRoute();
  const { title, item, name } = route.params;
  const exerciseParams = title === "Equipment" ? "equipment" : "target"
  console.log(exerciseParams);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/${exerciseParams}/${item || name}`,
          {
            params: { limit: '30' },
            headers: {
              'X-RapidAPI-Key':
                '840bb7bd7amsh6e47bf1e8b33fb6p183936jsn9ae639094dfd',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
          }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [])

  const renderFunction = (data) => {
  
    return( exerciseParams === "name" ? <ExerciseDetail exercise={data} /> : (

      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <Exercise style={styles.item} item={item} />}
      />
    ))
  }
 
  return (
    <View>
      <Text>{title}</Text>
      <Text>{item || name}</Text>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <Exercise style={styles.item} item={item} />}
      />
      {/* {renderFunction(data)} */}
    </View>
  );
}

export default TargetEquipmentScreen;


const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 8,
    padding: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
