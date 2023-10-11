import { Pressable, StyleSheet, Text, View } from "react-native";

const BodyPart = ({ item, onPress }) => {

  return (
    <Pressable
      onPress={() => onPress(item)}
        style={({ pressed }) => [
          styles.bodyPart,
          pressed ? styles.bodyPartPressed : null,
        ]}
    >
      <View>
        <Text>Body part: {item}</Text>
      </View>
    </Pressable>
  );
};

export default BodyPart;

const styles = StyleSheet.create({
  bodyPart: {
    backgroundColor: "#66FF00",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    borderRadius: 4,
  },
  bodyPartPressed: {
    opacity: 0.5,
  },
});
