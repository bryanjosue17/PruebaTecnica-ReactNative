import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment/moment';
import {PermissionsAndroid, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import VehiculoDataService from '../services/vehiculos.service';
import useLocation from '../customHooks/useLocation';

const HomeScreen = () => {
  const [currentLongitude, currentLatitude] = useLocation();;
  const [objVehiculo, setObjVehiculo] = useState({
    placa: '',
    marca: '',
    modelo: '',
    serie: '',
    color: '',
    latitud: '',
    longitud: '',
    datetime: '',
  });

  const saveVehiculo = () => {
    const data = {
      placa: objVehiculo.placa,
      marca: objVehiculo.marca,
      modelo: objVehiculo.modelo,
      serie: objVehiculo.serie,
      color: objVehiculo.color,
      latitude: currentLatitude,
      longitude: currentLongitude,
      datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    VehiculoDataService.create(data)
      .then(data => {
        setObjVehiculo({
          placa: '',
          marca: '',
          modelo: '',
          serie: '',
          color: '',
          latidud: '',
          longitud: '',
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          alignSelf: 'center',
          marginTop: '2%',
        }}>
        Registro de vehiculos
      </Text>
      <TextInput
        style={{width: '90%', marginVertical: '2%', alignSelf: 'center'}}
        mode="outlined"
        label="Placa"
        placeholder="Ingrese la placa"
        onChangeText={text => setObjVehiculo({...objVehiculo, placa: text})}
        value={objVehiculo.placa}
      />
      <TextInput
        style={{width: '90%', marginVertical: '2%', alignSelf: 'center'}}
        mode="outlined"
        label="marca"
        placeholder="Ingrese la marca"
        onChangeText={text => setObjVehiculo({...objVehiculo, marca: text})}
        value={objVehiculo.marca}
      />
      <TextInput
        style={{width: '90%', marginVertical: '2%', alignSelf: 'center'}}
        mode="outlined"
        label="Modelo"
        placeholder="Ingrese el modelo"
        onChangeText={text => setObjVehiculo({...objVehiculo, modelo: text})}
        value={objVehiculo.modelo}
      />
      <TextInput
        style={{width: '90%', marginVertical: '2%', alignSelf: 'center'}}
        mode="outlined"
        label="Serie"
        placeholder="Ingrese la serie"
        onChangeText={text => setObjVehiculo({...objVehiculo, serie: text})}
        value={objVehiculo.serie}
      />

      <TextInput
        style={{width: '90%', marginVertical: '2%', alignSelf: 'center'}}
        mode="outlined"
        label="Color"
        placeholder="Ingrese el color"
        onChangeText={text => setObjVehiculo({...objVehiculo, color: text})}
        value={objVehiculo.color}
      />

      <Button
        disabled={
          objVehiculo.placa === '' ||
          objVehiculo.marca === '' ||
          objVehiculo.modelo === '' ||
          objVehiculo.serie === '' ||
          objVehiculo.color === '' 
        }
        contentStyle={{flexDirection: 'row-reverse'}}
        style={{
          width: '30%',
          alignSelf: 'center',
          marginVertical: '2%',
        }}
        onPress={() => saveVehiculo()}
        icon="content-save"
        mode="contained">
        Guardar
      </Button>
    </View>
  );
};

export default HomeScreen;
