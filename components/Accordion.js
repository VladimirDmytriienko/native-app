import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Animated, Easing } from 'react-native';

const Accordion = ({ title, content }) => {
  const navigation = useNavigation();

  const [isExpanded, setIsExpanded] = useState(false);

  // Добавим анимацию с использованием Animated
  const animatedHeight = new Animated.Value(0);
  const contentHeight = isExpanded ? (content.length - 1)  * 38.4 : 0; // Здесь 50 - это высота каждого элемента контента

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: contentHeight,
      duration: 300, // Длительность анимации в миллисекундах
      easing: Easing.ease, // Тип анимации
      useNativeDriver: false, // Включаем или выключаем использование нативного драйвера
    }).start();
  }, [isExpanded, contentHeight]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavigate = (title, item) => {
    navigation.navigate("Target Equipment", { title, item });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.icon}>{isExpanded ? '▼' : '▲'}</Text>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.content, { height: animatedHeight }]}>
        {content.map((item, index) => (
          <Pressable key={index + item} onPress={() => handleNavigate(title, item)}>
            <View style={styles.contentItem}>
              <Text style={styles.contentText}>{item}</Text>
            </View>
          </Pressable>
        ))}
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    marginVertical: 4,
    backgroundColor: '#1E1E1E',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2E2E2E',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  icon: {
    fontSize: 20,
    color: '#FFF',
  },
  content: {
    // padding: 8,
    overflow: 'hidden'
  },
  contentItem: {
    borderBottomWidth: 1,
    borderColor: '#333',
    // paddingVertical: 8,
    padding: 8
  },
  contentText: {
    fontSize: 16,
    color: '#DDD',
  },
});


