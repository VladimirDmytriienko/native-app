import axios from 'axios'; 
import { StyleSheet, View, Text, FlatList } from "react-native"
import { useRoute } from "@react-navigation/native";

import { useLayoutEffect, useState } from "react";

import { backReasponse } from './http-response';
import Exercise from '../../../components/Exercise';



const BodyPartExercises = () => {
  const route = useRoute();
  const bodyPart = route.params?.bodyPart;
  const [data, setData] = useState(null);
  useLayoutEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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

  return (

    <View style={styles.container}>
                  {/* <Text  style={styles.bodyPartText} >{bodyPart}</Text> */}
    <FlatList
      numColumns={2}
      data={data || backReasponse}
      renderItem={({ item }) => <Exercise style={styles.item} item={item} />}
    />
  </View>

  )
}

export default BodyPartExercises

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
  },
  bodyPartText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff",
  },
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