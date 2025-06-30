import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const LaundryScreen = ({ route, navigation }) => {
  const { selectedOrders = [] } = route.params || {}; // Default ke array kosong jika tidak ada data
  console.log(selectedOrders); // Pastikan data diterima dengan benar
  

  const handleDelete = (id) => {
    setSelectedOrders(selectedOrders.filter((order) => order.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesanan Terpilih</Text>

      {selectedOrders.length > 0 ? (
        <FlatList
          data={selectedOrders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.serviceItem}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <View style={styles.serviceDetails}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <Text style={styles.serviceDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyMessage}>Tidak ada pesanan yang dipilih.</Text>
      )}

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Main', { screen: 'Home' })}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.ordersButton}
  onPress={() => navigation.navigate('SelectedOrders', { selectedOrders })}
>
 
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000080', // Warna biru untuk layanan laundry
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#FF6B6B', // Warna merah untuk tombol hapus
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  deleteButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#4682B4', // Warna biru untuk tombol
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 50,
  },
});

export default LaundryScreen;
