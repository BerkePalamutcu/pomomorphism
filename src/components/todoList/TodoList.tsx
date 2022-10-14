import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { toggleInputReducer } from '../../redux/slices/todoInputSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const TodoList: React.FC = () => {
  const inputState = useAppSelector((state) => state.todoInputSlice.inputIsOn);
  const todoList = useAppSelector((state) => state.todosSlice.todoData);
  const dispatch = useAppDispatch();

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
    <TouchableWithoutFeedback
      onPress={() => dispatch(toggleInputReducer(false))}
    >
      <ScrollView
        style={
          inputState
            ? [listStyles.listContainer, listStyles.listContainerPassive]
            : listStyles.listContainer
        }
      >
        {todoList.map((item) => (
          <Swipeable
            key={item.id}
            renderLeftActions={rightSwipe}
            renderRightActions={leftSwipe}
          >
            <View style={listStyles.todoWrapper}>
              <Text style={listStyles.todoText}>{item.todoText}</Text>
            </View>
          </Swipeable>
        ))}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default TodoList;
const listStyles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    marginBottom: 90,
  },
  listContainerPassive: {
    opacity: 0.3,
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
    fontWeight: 'bold',
  },
});
