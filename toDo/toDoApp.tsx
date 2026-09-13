import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { ToDoList } from './toDoList';

interface Task {
  id: number;
  name: string;
  phone: string;
}

export const ToDoApp = () => {
  const [id, setId] = useState<number | null>(null); // null = đang thêm mới, có giá trị = đang sửa
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSave = () => {
    if (name.trim() === '' || phone.trim() === '') return;

    if (id === null) {
      // Thêm mới
      const newTask: Task = {
        id: Date.now(),
        name,
        phone,
      };
      setTasks([...tasks, newTask]);
    } else {
      // Cập nhật task đang sửa
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, name, phone } : task
        )
      );
    }

    // Reset form sau khi lưu
    resetForm();
  };

  const handleEdit = (task: Task) => {
    setId(task.id);
    setName(task.name);
    setPhone(task.phone);
  };

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (id === taskId) resetForm();
  };

  const resetForm = () => {
    setId(null);
    setName('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>
      <Text style={styles.subtitle}>Manage your tasks efficiently</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Tên"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Button
          title={id === null ? 'Thêm' : 'Cập nhật'}
          onPress={handleSave}
        />
      </View>
      <ToDoList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    gap: 8,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: '#fff',
  },
  list: {
    width: '100%',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  taskName: {
    fontSize: 16,
    fontWeight: '600',
  },
  taskPhone: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  edit: {
    color: '#007AFF',
  },
  delete: {
    color: 'red',
  },
});