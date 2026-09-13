import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface Task {
    id: number;
    name: string;
    phone: string;
}

interface TodoListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

export const ToDoList = ({ tasks, onEdit, onDelete}: TodoListProps) => {
    return (
        <FlatList
        style={styles.list}
        data = {tasks}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
            <Text style={styles.emptyText}> Chưa có công việc nào </Text>
        }

        renderItem={({item}) => (
            <View style={styles.taskItem}>
                <View>
                    <Text style={styles.taskName}> {item.name} </Text>
                    <Text style={styles.taskPhone}> {item.phone} </Text>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity onPress={() => onEdit(item)}>
                        <Text style={styles.edit}> Sửa </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <Text style={styles.delete}> Xóa </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        />

    
    );
};

const styles = StyleSheet.create({
    list: {
        width: '100%'
    },
    emptyText: {
        textAlign: 'center',
        color: '#888',
        marginTop: 20,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffff',
        padding:12,
        borderRadius: 8,
        marginBottom: 8,
    },
    taskName: {
        fontSize: 16,
        fontWeight: '600',
    },
    taskPhone: {
        fontSize: 14,
        color: '#666'
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
    },
    edit: {
        color: 'green'
    },
    delete: {
        color: 'red'
    }
});