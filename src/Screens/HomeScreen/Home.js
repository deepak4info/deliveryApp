import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
<<<<<<< Updated upstream
  Button,
=======
>>>>>>> Stashed changes
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import HeaderComp from '../../Compoment/HeaderComp/HeaderComp';
import {moderateScale, scale} from '../../style/responsiveSize';
import PickupDropLocationCard from '../../Compoment/LocationComp/PickupDropLocationCard';
<<<<<<< Updated upstream
import {useNavigation} from '@react-navigation/native';
import VehiclesList from '../../Compoment/VehiclesComp/VehiclesList';
import colorStyle from '../../style/colorStyle';
import GoogleMapScreen from '../GoogleMap';
=======
// import {useNavigation} from '@react-navigation/native';
import VehiclesList from '../../Compoment/VehiclesComp/VehiclesList';
>>>>>>> Stashed changes

const Home = ({navigation}) => {
  const flatListRef = useRef(null);
  const [stopLocations, setStopLocations] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({animated: true});
      }
    }, 3000); // Change interval as needed

    return () => clearInterval(interval);
  }, []);

<<<<<<< Updated upstream
  const navigation = useNavigation();
=======
  // const navigation = useNavigation();
>>>>>>> Stashed changes

  const SildesData = [
    {id: 1, make: 'Toyota', model: 'Camry', year: 2020},
    {id: 2, make: 'Honda', model: 'Civic', year: 2019},
    {id: 3, make: 'Ford', model: 'F-150', year: 2021},
    // Add more vehicle data as needed
  ];

  const handlePickupPress = () => {
    navigation.navigate('Search', {type: 'pickup'});
  };

  const handleDropPress = () => {
    navigation.navigate('Search', {type: 'drop'});
  };
  const handleAddStop = () => {
    navigation.navigate('Search', {type: 'stop'});
  };

  const addStopLocation = location => {
    setStopLocations([...stopLocations, location]);
  };
<<<<<<< Updated upstream
  const handleRightPress = () => {
    // Logic for right image press
    console.log('Right image pressed!');
  };
=======
>>>>>>> Stashed changes

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'default'} />
<<<<<<< Updated upstream
      <HeaderComp
        MainText={'Delivery App'}
        RightImage
        LeftImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
=======
      <HeaderComp MainText={'Delivery App'} RightImage LeftImage />
>>>>>>> Stashed changes
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={[1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <View>
                {index === 0 && (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      height: scale(250),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: moderateScale(15),
                    }}>
                    <TouchableOpacity
                      disabled={true}
                      style={{
                        width: '90%',
                        height: '90%',
                        // backgroundColor: 'green',
                        borderRadius: 10,
                      }}>
                      <FlatList
                        ref={flatListRef}
                        data={SildesData}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        automaticallyAdjustsScrollIndicatorInsets
                        // pagingEnabled
                        renderItem={({item, index}) => {
                          return (
                            <View
                              style={{
                                backgroundColor: 'white',
                                padding: 10,
                              }}>
                              {index === 0 && (
                                <View
                                  style={{
                                    flex: 1,
                                    width: scale(250),
                                    height: scale(150),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: moderateScale(5),
                                    backgroundColor: 'coral',
                                    // marginHorizontal: 10
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: 16,
                                      fontWeight: 'bold',
                                      marginBottom: 5,
                                      color: 'white',
                                    }}>
                                    {item.make}{' '}
                                  </Text>
                                </View>
                              )}
                              {index === 1 && (
                                <View
                                  style={{
                                    flex: 1,
                                    width: scale(250),
                                    height: scale(150),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: moderateScale(15),
                                    backgroundColor: 'green',
                                    // marginHorizontal: 10,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: 16,
                                      fontWeight: 'bold',
                                      marginBottom: 5,
                                      color: 'white',
                                    }}>
                                    {item.make}{' '}
                                  </Text>
                                </View>
                              )}
                              {index === 2 && (
                                <View
                                  style={{
                                    flex: 1,
                                    width: scale(250),
                                    height: scale(150),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: moderateScale(15),
                                    backgroundColor: 'black',
                                    // marginHorizontal: 10
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: 16,
                                      fontWeight: 'bold',
                                      marginBottom: 5,
                                      color: 'white',
                                    }}>
                                    {item.make}{' '}
                                  </Text>
                                </View>
                              )}
                            </View>
                          );
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                {index === 1 && (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      height: scale(250),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: moderateScale(15),
                      // backgroundColor:'pink'
                    }}>
<<<<<<< Updated upstream
                    <GoogleMapScreen />
=======
>>>>>>> Stashed changes
                    <View
                      style={{flex: 1, width: '90%', justifyContent: 'center'}}>
                      <PickupDropLocationCard
                        type="Pickup"
                        onPress={handlePickupPress}
                      />
                      <PickupDropLocationCard
                        type="Drop"
                        onPress={handleDropPress}
                      />

                      <TouchableOpacity
                        onPress={handleAddStop}
<<<<<<< Updated upstream
                        style={styles.addStopButtonContainer}>
=======
                        style={styles.addStopontainer}>
>>>>>>> Stashed changes
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
<<<<<<< Updated upstream
                            color: colorStyle.blackColor,
=======
>>>>>>> Stashed changes
                            marginBottom: 5,
                          }}>
                          {' '}
                          + Add Stop
                        </Text>
                      </TouchableOpacity>

                      {/* Display Stop Locations */}
                      {stopLocations.map((location, index) => (
                        <PickupDropLocationCard
                          key={index}
                          type="Stop"
                          location={location}
                          onPress={() => {}}
                        />
                      ))}
                    </View>
                  </View>
                )}
                {index === 2 && (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      height: scale(250),
                      justifyContent: 'center',
                      alignItems: 'center',
<<<<<<< Updated upstream
                      marginVertical: moderateScale(35),
                    }}>
                    <Text
                      style={{
                        color: colorStyle.blackColor,
                        textAlign: 'left',
                      }}>
                      Available Vehicles
                    </Text>

=======
                      marginVertical: moderateScale(15),
                    }}>
>>>>>>> Stashed changes
                    <VehiclesList />
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
<<<<<<< Updated upstream
  addStopButtonContainer: {
=======
  addStopontainer: {
>>>>>>> Stashed changes
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
