import { FlatList, View, Text } from "react-native";
import { BodyPartsCat } from "../body-part";
import BodyPart from "../components/BodyPart";
import { useNavigation } from "@react-navigation/native";

const BodyPartsScreen = ({navigation}) => {
  // const navigation = useNavigation();

  const handleBodyPartPress = (item) => {
    navigation.navigate("BodyPartExercises", { bodyPart: item });
  };
  
  return (
    <View>
      <Text>BodyPartsScreen</Text>

      <View>
        <FlatList
          data={BodyPartsCat}
          renderItem={({ item }) => <BodyPart item={item} onPress={handleBodyPartPress}/>}
        />

      </View>
    </View>
  );
};

export default BodyPartsScreen;
