import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import colorStyle from '../../style/colorStyle';


const OrderStatus = ({ onPressOrder }) => {
  // Dummy data for orders
  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      deliveryAddress: '123 Main St, Cityville',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      deliveryAddress: '456 Elm St, Townsville',
      status: 'In Progress',
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      deliveryAddress: '789 Oak St, Villagetown',
      status: 'Completed',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressOrder(item.id)} style={styles.orderItem}>
            <Text style={styles.orderTitle}>Order #{item.id}</Text>
            <Text>Customer: {item.customerName}</Text>
            <Text>Address: {item.deliveryAddress}</Text>
            <Text>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorStyle.whiteColor,
      padding: 10,
    },
    orderItem: {
      backgroundColor: colorStyle.gray5,
      marginBottom: 10,
      padding: 15,
      borderRadius: 8,
    },
    orderTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    orderDetail: {
      fontSize: 16,
    },
    orderStatus: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });
  

export default OrderStatus;
