import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';
const TodoList: React.FC = () => {
  
  const leftSwipe = () => {
    return (
      <TouchableOpacity style={listStyles.buttonWrapper}>
        <Text style={listStyles.todoText}>Delete</Text>
      </TouchableOpacity>
    );
  };
  const rightSwipe = () => {
    return (
      <TouchableOpacity style={listStyles.buttonWrapperComplete}>
        <Text style={listStyles.todoText}>Complete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={listStyles.listContainer}>
      <Swipeable renderLeftActions={rightSwipe} renderRightActions={leftSwipe}>
        <View style={listStyles.todoWrapper}>
          <Text style={listStyles.todoText}>todoList</Text>
        </View>
      </Swipeable>
      <Swipeable renderLeftActions={rightSwipe} renderRightActions={leftSwipe}>
        <View style={listStyles.todoWrapper}>
          <Text style={listStyles.todoText}>todoList</Text>
        </View>
      </Swipeable>
    </ScrollView>
  );
};

export default TodoList;
const listStyles = StyleSheet.create({
  listContainer: {
    display: 'flex',
  },
  todoWrapper: {
    display: 'flex',
    marginTop: 10,
    backgroundColor: '#202a3b',
    padding: 20,
    shadowColor: 'white',
    elevation: 5,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
    marginTop: 10,
    padding: 20,
  },
  buttonWrapperComplete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    color: 'white',
    marginTop: 10,
    padding: 20,
  },
  todoText: {
    color: 'white',
    fontSize: 16,
  },
});
