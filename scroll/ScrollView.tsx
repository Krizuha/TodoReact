// ProfileScreen.tsx
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.role}>React Native Developer</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giới thiệu</Text>
        <Text style={styles.text}>
          Đây là phần giới thiệu dài để minh họa việc cuộn trang. Khi nội dung
          vượt quá chiều cao màn hình, ScrollView cho phép người dùng vuốt lên
          xuống để xem hết nội dung.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kỹ năng</Text>
        {['React Native', 'TypeScript', 'Node.js', 'Firebase'].map((skill) => (
          <Text key={skill} style={styles.skillItem}>
            • {skill}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kinh nghiệm</Text>
        <Text style={styles.text}>
          3 năm làm việc trong lĩnh vực phát triển ứng dụng di động, tham gia
          nhiều dự án thực tế từ startup đến doanh nghiệp lớn.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Liên hệ</Text>
        <Text style={styles.text}>Email: nguyenvana@example.com</Text>
        <Text style={styles.text}>Điện thoại: 0901 234 567</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  skillItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
});