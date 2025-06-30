import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert, Modal, TextInput } from 'react-native';

const LaundryScreen = ({ navigation }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  const services = [
    { id: '1', name: 'Kiloan', description: 'Laundry pakaian per kilogram', icon: 'https://png.pngtree.com/element_our/20190602/ourmid/pngtree-blue-scales-illustration-image_1396928.jpg' },
    { id: '2', name: 'Satuan', description: 'Laundry pakaian satuan', icon: 'https://laundryinn.com/wp-content/uploads/2020/03/banner_laundry_satuan.png' },
    { id: '3', name: 'VIP', description: 'Laundry khusus dengan pelayanan premium', icon: 'https://laundrylangganan.com/wp-content/uploads/2024/05/Laundry-Express.webp' },
    { id: '4', name: 'Karpet', description: 'Laundry untuk karpet', icon: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-arabic-carpet-icon-cartoon-style-png-image_5248614.jpg' },
    { id: '5', name: 'Setrika Saja', description: 'Hanya layanan setrika', icon: 'https://png.pngtree.com/png-vector/20211201/ourmid/pngtree-hand-drawn-setrika-listrik-vector-clip-art-png-image_4044550.png' },
    { id: '6', name: 'Ekspres', description: 'Layanan cepat khusus', icon: 'https://hygeira.id/wp-content/uploads/2023/04/laundry-expres-surabaya-2-693x1024.png' },
  ];

  const openOrderModal = (item) => {
    setCurrentOrder(item);
    setModalVisible(true);
  };

  const handleAddOrder = () => {
    if (!quantity) {
      Alert.alert('Error', 'Kuantitas tidak boleh kosong!');
      return;
    }

    const orderDetails = {
      ...currentOrder,
      quantity,
      notes: notes || 'Tidak ada catatan',
    };

    setSelectedOrders([...selectedOrders, orderDetails]);
    setModalVisible(false);
    setQuantity('');
    setNotes('');

    Alert.alert("Pesanan Ditambahkan", `${currentOrder.name} berhasil ditambahkan ke daftar pesanan.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan Laundry</Text>
      
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.serviceItem} onPress={() => openOrderModal(item)}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.serviceDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.ordersButton} onPress={() => navigation.navigate('SelectedOrders', { selectedOrders })}>
        <Text style={styles.ordersText}>View Selected Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeText}>Go to Home</Text>
      </TouchableOpacity>

      {/* Modal for input */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tambah Pesanan</Text>
            <Text style={styles.modalText}>Layanan: {currentOrder?.name}</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan kuantitas"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
            <TextInput
              style={styles.input}
              placeholder="Catatan tambahan (opsional)"
              value={notes}
              onChangeText={setNotes}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.addButton} onPress={handleAddOrder}>
                <Text style={styles.addButtonText}>Tambah</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#E3F2FD', 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000080',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
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
    color: '#1E88E5',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  ordersButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  ordersText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#0D47A1',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  homeText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#D32F2F',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  cancelButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default LaundryScreen;
