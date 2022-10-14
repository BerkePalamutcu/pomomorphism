import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { toggleInputReducer } from '../../redux/slices/todoInputSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { nanoid } from '@reduxjs/toolkit';
import { postTodo } from '../../redux/slices/todosSlice';
const TodoInput = () => {
  const [inputValue, setInputValue] = React.useState('');

  const dispatch = useAppDispatch();
  const showInput = useAppSelector((state) => state.todoInputSlice.inputIsOn);
  const inputRef: any = React.useRef(null);

  const handleInputFocus = () => {
    return inputRef.current.focus();
  };

  return (
    <KeyboardAvoidingView
      enabled={true}
      style={todoInputStyles.inputContainer}
      behavior={'padding'}
    >
      <View
        style={showInput ? todoInputStyles.visible : todoInputStyles.hidden}
      >
        <TextInput
          onFocus={() => inputRef.current.focus()}
          cursorColor="black"
          onBlur={() => {
            dispatch(toggleInputReducer(false));
          }}
          style={todoInputStyles.textInput}
          ref={inputRef}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          onSubmitEditing={() =>
            dispatch(postTodo({ id: nanoid(), todoText: inputValue }))
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          inputRef.current.blur();
          handleInputFocus();
          dispatch(toggleInputReducer(true));
        }}
        style={todoInputStyles.gradientStyle}
      >
        <LinearGradient
          style={todoInputStyles.gradientStyle}
          colors={['#00B4DB', '#0083B0']}
        >
          <Icon name="add" size={50} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TodoInput;

const todoInputStyles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  gradientStyle: {
    display: 'flex',
    borderRadius: 50,
    shadowColor: '#333b47',
    elevation: 10,
    position: 'absolute',
    bottom: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: 'black',
    backgroundColor: '#fff',
    width: 320,
    height: 40,
    paddingHorizontal: 10,
    display: 'flex',
    borderRadius: 5,
    position: 'absolute',
    bottom: 120,
    left: -160,
  },
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
});
