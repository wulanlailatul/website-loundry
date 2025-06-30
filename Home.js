import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image source={{ uri: 'https://1010dry.id/static/images/5b4687ef02617035e08f7c5205afe15e.jpg' }} style={styles.profileImage} />
          <View>
            <Text style={styles.welcomeText}>Selamat Datang,</Text>
            <Text style={styles.username}>Wulan Lailatul Mufidah</Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceRow}>
            <Image source={{ uri: 'https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-hand-drawn-cute-dollar-bill-sack-bag-illustration-png-image_6569166.png' }} style={styles.balanceImage} />
            <View>
              <Text style={styles.balanceText}>Saldo: Rp. 100.000</Text>
              <Text style={styles.pointsText}>Antar Point: 100 points</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add Saldo</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Get Point</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Layanan Kami</Text>
        <View style={styles.servicesRow}>
          <ServiceButton label="Kiloan" imageUrl="https://png.pngtree.com/element_our/20190602/ourmid/pngtree-blue-scales-illustration-image_1396928.jpg" />
          <ServiceButton label="Satuan" imageUrl="https://laundryinn.com/wp-content/uploads/2020/03/banner_laundry_satuan.png" />
          <ServiceButton label="VIP" imageUrl="https://laundrylangganan.com/wp-content/uploads/2024/05/Laundry-Express.webp" />
        </View>
        <View style={styles.servicesRow}>
          <ServiceButton label="Karpet" imageUrl="https://png.pngtree.com/png-clipart/20200224/original/pngtree-arabic-carpet-icon-cartoon-style-png-image_5248614.jpg" />
          <ServiceButton label="Setrika Saja" imageUrl="https://png.pngtree.com/png-vector/20211201/ourmid/pngtree-hand-drawn-setrika-listrik-vector-clip-art-png-image_4044550.png" />
          <ServiceButton label="Ekspres" imageUrl="https://hygeira.id/wp-content/uploads/2023/04/laundry-expres-surabaya-2-693x1024.png" />
        </View>
      </View>

      <View style={styles.ordersContainer}>
        <Text style={styles.sectionTitle}>Pesanan Aktif</Text>
        <OrderCard orderId="0002142" status="Sudah selesai" imageUrl="https://png.pngtree.com/png-clipart/20220620/ourlarge/pngtree-laundry-washing-machine-png-image_5229519.png" />
        <OrderCard orderId="0002142" status="Masih dicuci" imageUrl="https://png.pngtree.com/png-clipart/20220620/ourlarge/pngtree-laundry-washing-machine-png-image_5229519.png" />
      </View>
    </ScrollView>
  );
};

const ServiceButton = ({ label, imageUrl }) => (
  <TouchableOpacity style={styles.serviceButton}>
    <Image source={{ uri: imageUrl }} style={styles.serviceImage} />
    <Text style={styles.serviceLabel}>{label}</Text>
  </TouchableOpacity>
);

const OrderCard = ({ orderId, status, imageUrl }) => (
  <View style={styles.orderCard}>
    <Image source={{ uri: imageUrl }} style={styles.orderImage} />
    <Text>Pesanan No. {orderId}</Text>
    <Text style={{ color: status === 'Sudah selesai' ? 'green' : 'orange' }}>{status}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Background biru terang
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3', // Warna biru untuk header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#FFF', // Warna teks putih
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF', // Warna teks putih
  },
  balanceContainer: {
    marginTop: 10,
    backgroundColor: '#64B5F6', // Warna biru lebih terang
    padding: 10,
    borderRadius: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  balanceText: {
    fontSize: 16,
    color: '#FFF', // Warna teks putih
  },
  pointsText: {
    fontSize: 14,
    color: '#FFF', // Warna teks putih
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1E88E5', // Warna biru untuk tombol
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF', // Warna teks putih pada tombol
  },
  servicesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E88E5', // Warna biru untuk judul section
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  serviceButton: {
    backgroundColor: '#BBDEFB', // Warna biru terang untuk tombol layanan
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  serviceImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  serviceLabel: {
    fontSize: 14,
    color: '#1E88E5', // Warna biru untuk teks layanan
  },
  ordersContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  orderCard: {
    backgroundColor: '#BBDEFB', // Warna biru terang untuk kartu pesanan
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default App;
