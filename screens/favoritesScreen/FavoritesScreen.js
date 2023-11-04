import  { useState } from 'react';
import { Text, View, StyleSheet, Modal,  Button, Pressable } from 'react-native';
import useStore from '../../store/store-favorites';


const FavoritesScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const {bears} = useStore()
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal}>
        <Text>Show Modal</Text>
      </Pressable>

      <Modal
        visible={isModalVisible}
        animationType="slide" 
        presentationStyle="pageSheet"
        // transparent={true}
        onRequestClose={toggleModal}

      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>BESRS QUANTTY :{bears}</Text>

            <Pressable title="Закрыть" onPress={toggleModal} />
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


