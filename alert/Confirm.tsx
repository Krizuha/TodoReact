import {View, Button, Alert, StyleSheet} from 'react-native';

export const ConfirmDeleteAlert = () => {
    const handleDelete = () => {
        Alert.alert(
            'Xác nhận xóa',
            'Bạn có chắc chắn muốn xóa công việc này không?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => {
                        // Thực hiện xóa công việc ở đây
                        console.log('Công việc đã được xóa');
                    },
                },
            ]
        );
    };

return (
    <View 
    style={
        styles.button
        }>
        <Button 
        title="Xóa công việc" 
        onPress={handleDelete} 
        />
    </View>
);

}

const styles = StyleSheet.create({
    button: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' }
});