import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DrawerMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://png.pngtree.com/png-vector/20231016/ourlarge/pngtree-washing-machine-illustration-png-image_10186690.png' }}
          style={styles.logo}
        />
        <Text style={styles.userName}>Keluar</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.replace('Login')}>
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingLeft: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

export default DrawerMenu;
