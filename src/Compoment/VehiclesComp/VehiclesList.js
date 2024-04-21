import React from 'react';
import {FlatList, View, Text, StyleSheet, Image} from 'react-native';
import {scale} from '../../style/responsiveSize';
import colorStyle from '../../style/colorStyle';

// Sample vehicle data
const vehiclesData = [
  {
    id: 1,
    type: 'Motorcycle',
    weight: 'Up to 20 kg',
    size: '0.4m x 0.4m x 0.4m',
    image: require('../../assets/images/v1.png'),
  },
  {
    id: 2,
    type: 'Car',
    weight: 'Up to 1000 kg',
    size: '4m x 2m x 1.5m',
    image: require('../../assets/images/v2.png'),
  },
  {
    id: 3,
    type: 'Truck',
    weight: 'Up to 5000 kg',
    size: '6m x 2.5m x 2.5m',
    image: require('../../assets/images/v3.png'),
  },
  // Add more vehicle data as needed
];

// Component to render each item in the list
const VehicleItem = ({type, weight, size, image}) => (
  <View style={styles.itemContainer}>
    <Image
      source={image}
      style={{
        width: 100,
        height: 100,
        resizeMode: 'contain', // or 'contain' depending on your preference
        marginHorizontal: 10,
      }}
    />
    <View>
      <Text
        style={{
          color: colorStyle.blackColor,
        }}>
        Type: {type}
      </Text>
      <Text
        style={{
          color: colorStyle.blackColor,
        }}>
        Weight: {weight}
      </Text>
      <Text
        style={{
          color: colorStyle.blackColor,
        }}>
        Size: {size}
      </Text>
    </View>
  </View>
);

const VehiclesList = () => {
  return (
    <FlatList
      data={vehiclesData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <VehicleItem
          type={item.type}
          weight={item.weight}
          size={item.size}
          image={item.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: scale(330),
    backgroundColor: 'white', // Add a background color to see the shadow
    elevation: 5, // Add elevation to create a shadow effect
    padding: 20, // Add padding to the card for better spacing
    borderRadius: 8, // Add border radius for rounded corners
    height: 100,
  },
  text: {
    color: 'black',
  },
});

export default VehiclesList;
