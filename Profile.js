import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://png.pngtree.com/png-vector/20231016/ourlarge/pngtree-washing-machine-illustration-png-image_10186690.png' }} style={styles.profileImage} />
        <Text style={styles.userName}>Nama Pengguna</Text>
        <Text style={styles.userEmail}>wlnlailatul@gamil.com</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nomor Telepon:</Text>
          <Text style={styles.infoValue}>+62 123 456 789</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Alamat:</Text>
          <Text style={styles.infoValue}>Jl. Arjuna RT 14 RW 03, Kalipare, Malang</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Background biru terang
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0077c2', // Warna biru utama
  },
  userEmail: {
    fontSize: 16,
    color: '#0077c2',
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    color: '#0077c2', // Warna biru
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    color: '#004d73', // Warna biru lebih gelap
  },
  logoutButton: {
    backgroundColor: '#0288d1', // Warna biru gelap untuk tombol logout
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#01579b', // Warna biru lebih gelap untuk tombol Home
    paddingVertical: 12,
    borderRadius: 8,
  },
  homeText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ProfileScreen;
