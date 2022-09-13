import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {COLORS, FONTS} from '../styles/theme';
import {Card, Text, Button} from 'react-native-paper';
import Responsive from 'react-native-lightweight-responsive';

const CardInfo = props => {
  return (
    <Card
      style={{
        width: '90%',
        margin: '3%',
        padding: '2%',
      }}
      elevation={2}>
      <View style={{width: '100%'}}>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.primary,
            width: '100%',
            fontSize: Responsive.font(12),
          }}>
          Placa:
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            width: '100%',
            fontSize: Responsive.font(12),
          }}>
          {props.item.placa}
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.primary,
            width: '100%',
            fontSize: Responsive.font(12),
          }}>
          Modelo:
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            width: '100%',
            fontSize: Responsive.font(12),
          }}>
          {props.item.modelo}
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.primary,
            width: '100%',
            fontSize: Responsive.font(12),
          }}>
          Serie:
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            width: '100%',
            fontSize: Responsive.font(12),
          }}>
          {props.item.serie}
        </Text>
      </View>
    </Card>
  );
};

export default CardInfo;
