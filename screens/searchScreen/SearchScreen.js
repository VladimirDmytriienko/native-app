import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Accordion from "../../components/Accordion";
import { target } from "../../utils/exercises/target";
import { equipment } from "../../utils/exercises/equipment-list";
import SearchBar from "../../components/SearchBar";

const SearchScreen = ({navigation}) => {
  const [textInput, setTextInput] = useState("");

  const handleSearch = () => {
    // Search logic
  };
  
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.header}>Search Screen</Text>
      <View style={styles.searchContainer}>
        <SearchBar navigation={navigation} >
            <ScrollView style={styles.scrollView}>
              <Accordion title="Target Muscle" content={target} />
              <Accordion title="Equipment" content={equipment} />
            </ScrollView>
        </SearchBar>
      </View>



    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    backgroundColor: "#36393f", 
    paddingHorizontal: 8,
    paddingBottom: 8
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff", 
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 8,
  },


  searchButtonText: {
    color: "#ffffff",
  },
  scrollView: {
    marginTop: 16,
  },
  
});


