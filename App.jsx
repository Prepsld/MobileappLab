/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoForm from './src/ToDoForm';
import ToDoList from './src/ToDoList';


function App() {

  const [tasks, setTasks] = React.useState([  'Do laundry',
  'Go to gym',
  'Walk dog',
  'Make dinner',]);

  return (
    <SafeAreaView>
      
      <ToDoList tasks={tasks} />

      <ToDoForm />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
