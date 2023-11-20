import  { useState } from 'react';
import { Text, View, StyleSheet, Modal,  Button, Pressable, FlatList } from 'react-native';
import {useStore} from '../../store/store-favorites';
import Exercise from '../../components/Exercise';


const FavoritesScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const {bears, favExercises} = useStore()
  // console.log(favExercises);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal}>
        <Text>Сreate a workout</Text>
      </Pressable>
      <FlatList 
        data={favExercises} 
        renderItem={({ item }) => <Exercise style={styles.item} item={item} />}
        /> 


      <Modal
        visible={isModalVisible}
        animationType="slide" 
        presentationStyle="pageSheet"
        // transparent={true}
        onRequestClose={toggleModal}

      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* <Text>BESRS QUANTTY :{bears}</Text>
            <Text>Fav :{favExercises[0].name}</Text> */}
            <Pressable title="Close" onPress={toggleModal}><Text>Close</Text></Pressable>

            



          </View>
        </View>
      </Modal>
    </View>
  );
};
export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    height: 'auto',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  
});


