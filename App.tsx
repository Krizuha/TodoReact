import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<{ id: string; text: string; done: boolean }[]>([]);

  const addTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now().toString(), text: task, done: false }]);
    setTask('');
  };

  const toggleDone = (id: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc..."
          value={task}
          onChangeText={setTask}
        />
        <Button title="Thêm" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => toggleDone(item.id)} style={{ flex: 1 }}>
              <Text style={[styles.todoText, item.done && styles.doneText]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Text style={styles.delete}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 60 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 16 
  },
  inputRow: { 
    flexDirection: 'row', 
    marginBottom: 16, 
    gap: 8 
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  todoText: { 
    fontSize: 16 
  },
  doneText: { 
    textDecorationLine: 'line-through', 
    color: 'gray' 
  },
  delete: { 
    color: 'red', 
    marginLeft: 10 
  },
});