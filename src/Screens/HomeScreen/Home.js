import { FlatList, StyleSheet, Text, View, TouchableOpacity, StatusBar,Button } from 'react-native'
import React, { useEffect, useRef ,useState} from 'react'
import HeaderComp from '../../Compoment/HeaderComp/HeaderComp'
import { moderateScale, scale } from '../../style/responsiveSize'
import PickupDropLocationCard from '../../Compoment/LocationComp/PickupDropLocationCard'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const flatListRef = useRef(null);
  const [stopLocations, setStopLocations] = useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, 3000); // Change interval as needed

    return () => clearInterval(interval);
  }, []);


  const navigation = useNavigation();

  const handlePickupPress = () => {
    navigation.navigate('Search', { type: 'pickup' });
  };

  const handleDropPress = () => {
    navigation.navigate('Search', { type: 'drop' });
  };
  const handleAddStop = () => {
    navigation.navigate('Search', { type: 'stop' });
  };

  const addStopLocation = (location) => {
    setStopLocations([...stopLocations, location]);
  };



  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'default'} />
      <HeaderComp
        MainText={'Delivery App'}
        RightImage
        LeftImage
      />
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <FlatList
          data={[1, 1, 1, 1]}

          renderItem={({ item, index }) => {
            return (
              <View>
                {index === 0 && <View
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
                      data={[1, 1, 1]}
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      automaticallyAdjustsScrollIndicatorInsets
                      // pagingEnabled
                      renderItem={({ item, index }) => {
                        return (
                          <View style={{
                            backgroundColor:'white',
                            padding:10,
                          }}>
                            {index === 0 && <View
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


                            </View>
                            }
                            {index === 1 && <View
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


                            </View>
                            }
                            {index === 2 && <View
                              style={{
                                flex: 1,
                                width: scale(250),
                                height: scale(150),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginVertical: moderateScale(15),
                                backgroundColor:"black",
                                // marginHorizontal: 10
                              }}>

                              {/* <TouchableOpacity
                                disabled={true}
                                style={{
                                  width: '80%',
                                  height: '90%',
                                  backgroundColor: 'blue',
                                  borderRadius: 10,

                                }}>
                                <Text> </Text>
                              </TouchableOpacity> */}
                            </View>
                            }
                          </View>
                        )
                      }}
                    />

                  </TouchableOpacity>
                </View>}
                {index === 1 && <View
                  style={{
                    flex: 1,
                    width: '100%',
                    height: scale(250),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: moderateScale(15),
                    backgroundColor:'pink'
                  }}>
                    <View style={{flex:1, width:'90%', justifyContent:'center'}}> 
             <PickupDropLocationCard type="Pickup"  onPress={handlePickupPress} />
      <PickupDropLocationCard type="Drop"  onPress={handleDropPress} />
      <View style={styles.addStopButtonContainer}>
        <Button title="Add Stop" onPress={handleAddStop} />
      </View>

      {/* Display Stop Locations */}
      {stopLocations.map((location, index) => (
        <PickupDropLocationCard key={index} type="Stop" location={location} onPress={() => {}} />
      ))}

      </View>
                </View>}
                {index === 2 && <View
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
                      backgroundColor: 'orange',
                      borderRadius: 10,

                    }}></TouchableOpacity>
                </View>}
              </View>

            )
          }}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})