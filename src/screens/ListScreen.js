import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CardInfo from '../components/CardInfo';
import VehiculoDataService from '../services/vehiculos.service';

const ListScreen = () => {
  const [vehiculos, setVehiculos] = useState([]);
  console.log("vehiculos: ", vehiculos);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    VehiculoDataService.getAll()
      .then(response => {
        setVehiculos(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      {vehiculos &&
        vehiculos.map((item, index) => {
          return <CardInfo key={index} item={item} />;
        })}
    </View>
  );
};

export default ListScreen;
