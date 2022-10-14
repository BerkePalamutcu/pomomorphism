import { View, StyleSheet } from 'react-native';
import React from 'react';
import TodoList from '../components/todoList/TodoList';
import TodoInput from '../components/todoInput/TodoInput';
const Todos: React.FC = () => {
  return (
    <View style={todoListStyles.listContainer}>
      <TodoList />
      <TodoInput />
    </View>
  );
};

export default Todos;
const todoListStyles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    backgroundColor: '#151414',
    borderTopColor: 'white',
    borderTopWidth: 1,
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
});
