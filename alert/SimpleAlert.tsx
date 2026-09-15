import {View, Button, Alert, StyleSheet} from 'react-native';
import React from 'react';

export const SimpleAlert = () => {
    const showAlert = () => {
        Alert.alert('Thông báo', 'Bạn đã lưu thành công');
    };

    return(
        <View style={styles.alert}>
            <Button title="Hiển thị thông báo" onPress={showAlert} />
        </View>
    )
}

const styles = StyleSheet.create({
    alert: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})