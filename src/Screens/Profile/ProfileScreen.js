import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colorStyle from '../../style/colorStyle';
// import { colors } from '';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyle.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: colorStyle.gray2,
  },
  editProfileButton: {
    backgroundColor: colorStyle.lighPink,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editProfileButtonText: {
    color: colorStyle.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
