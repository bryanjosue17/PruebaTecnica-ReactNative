import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import useLocation from '../customHooks/useLocation';
import VehiculoDataService from '../services/vehiculos.service';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import {Marker} from 'react-native-maps';

const MapScreen = ({navigation}) => {
  const [coordenadas, setCoordenadas] = useState([]);
  const [currentLongitude, currentLatitude] = useLocation();

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    VehiculoDataService.getAll()
      .then(response => {
        setCoordenadas(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MapView
        initialRegion={{
          latitude: 37.4220936,
          longitude: -122.083922,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        //onRegionChangeComplete runs when the user stops dragging MapView
        onRegionChangeComplete={region => setRegion(region)}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}>
        {coordenadas &&
          coordenadas.map((item, index) => {
            return (
              <Marker
                image={require('../assets/imgs/marker.png')}
                key={index}
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}
                title={item.placa}
                description={item.serie}
              />
            );
          })}
      </MapView>
    </View>
  );
};

export default MapScreen;
