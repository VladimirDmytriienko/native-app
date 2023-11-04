import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
const BodyPart = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [
        styles.bodyPart,
        pressed ? styles.bodyPartPressed : null,
      ]}
    >

      <View >
        <Text style={styles.bodyPartText}>{item}</Text>
      </View>
      <View>
        <Entypo name="chevron-right" size={24} color="white" />
      </View>
    </Pressable>
  );
};

export default BodyPart;

const styles = StyleSheet.create({
  bodyPart: {
    backgroundColor: "#ff6600",
    flexDirection: "row", 
    justifyContent: "space-between", 
    margin: 8,
    padding: 12,
    borderRadius: 10,
    elevation: 4,
  },
  bodyPartPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  bodyPartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flexDirection: "row", 
  },
});


