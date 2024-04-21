import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, {
  Callout,
  Circle,
  Marker,
  Polygon,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default function GoogleMapScreen() {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapshots = useMemo(() => ['5%', '15%', '50%', '60%'], []);
  const [markerList, setMarkerList] = useState([
    {
      id: 1,
      latitude: 29.6288599,
      longitude: 75.641602,
      title: 'Team A',
      description: 'This is Team A current location',
    },
    {
      id: 2,
      latitude: 29.62639670538351,
      longitude: 75.65130364463676,
      title: 'Team B',
      description: 'This is my current location',
    },
  ]);
  const handleOpenBottomSheet = () => {
    setShowBottomSheet(true);
  };

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false);
  };
  const CustomMarketView = () => {
    return (
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={require('../../assets/images/car.png')}
      />
    );
  };
  const CustomCollout = () => {
    return (
      <View
        style={{
          width: 300,
          height: 100,
          borderWidth: StyleSheet.hairlineWidth,
          backgroundColor: 'powderblue',
        }}>
        <Text>Your Location</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <MapView
          loadingEnabled
          userLocationPriority="high"
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 29.6288599,
            longitude: 75.6471365,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          <Marker
            coordinate={{
              latitude: 29.60629091556488,
              longitude: 75.67620046116116,
            }}>
            <CustomMarketView />

            <Callout>
              <CustomCollout />
            </Callout>
          </Marker>
          {markerList.map(marker => {
            return (
              <Marker
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                draggable
                onDragEnd={e => console.log({x: e.nativeEvent.coordinate})}
                title={marker.title}
                description={marker.description}
              />
            );
          })}
          <Circle
            center={{
              latitude: 29.62778130930461,
              longitude: 75.66262182845078,
            }}
            radius={200}
            fillColor="powderblue"
            strokeColor="blue"
            strokeWidth={3}
          />
          <Polyline
          strokeWidth={3}
            coordinates={[
              {
                latitude: 29.59654646852036, 
                longitude: 75.64133101213244,
              },
              {
                latitude: 29.59666624917622,
                longitude:  75.67370326213853
              },
            ]}
          />
           {/* <Polygon
           fillColor='powderblue'
          strokeWidth={3}
            coordinates={[
              {
                latitude: 29.59654646852036, 
                longitude: 75.64133101213244,
              },
              {
                latitude:29.609617, 
                longitude:75.661071
              },
              {
                latitude: 29.59666624917622,
                longitude:  75.67370326213853
              },{
                latitude:29.58774229176581,
                longitude: 75.66091299695245
              }
            ]}
          /> */}
        </MapView>
      </View>
      <View
        style={{
          //   backgroundColor: '#003',
          flex: 1,
          //   height: '30%',
          //   width: '100%',
          //   borderWidth: 1,
          //   bottom:10,
          //   position:'absolute',
        }}>
        {/* <Button title="Open Bottom Sheet" onPress={handleOpenBottomSheet} />
        {showBottomSheet && ( */}
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapshots}
          index={1}
          onDismiss={handleCloseBottomSheet}>
          <View
            style={{
              alignItems: 'center',
              margin: 10,
              padding: 20,
            }}>
            <Text>Notification</Text>
            <Button title="close" onPress={handleCloseBottomSheet} />
          </View>
        </BottomSheet>
        {/* )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
