import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { scale } from '../../style/responsiveSize';

// Sample vehicle data
const vehiclesData = [
  { id: 1, type: 'Motorcycle', weight: 'Up to 20 kg', size: '0.4m x 0.4m x 0.4m', image: require('../../assets/images/v1.png') },
  { id: 2, type: 'Car', weight: 'Up to 1000 kg', size: '4m x 2m x 1.5m', image: require('../../assets/images/v2.png')  },
  { id: 3, type: 'Truck', weight: 'Up to 5000 kg', size: '6m x 2.5m x 2.5m', image: require('../../assets/images/v3.png') },
  // Add more vehicle data as needed
];


// Component to render each item in the list
const VehicleItem = ({ type, weight, size ,image}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={{
      width:50,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:10
    }} />
  <View>
  <Text>Type: {type}</Text>
    <Text>Weight: {weight}</Text>
    <Text>Size: {size}</Text>
  </View>
  </View>
);

const VehiclesList = () => {
  return (
    <FlatList
      data={vehiclesData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <VehicleItem type={item.type} weight={item.weight} size={item.size}  image={item.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection:"row",
    width:scale(330),
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginVertical:5,
    borderRadius:5,
   
  },
});

export default VehiclesList;
