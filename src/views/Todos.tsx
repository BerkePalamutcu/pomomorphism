import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TodoList from '../components/todoList/TodoList';

const Todos: React.FC = () => {
  return (
    <View style={todoListStyles.listContainer}>
      <TodoList />
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
  },
});
