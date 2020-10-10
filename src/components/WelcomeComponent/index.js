import React, { useState, useMemo } from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { steps } from './defaultData';

const WelcomeScreen = ({ onFinish }) => {
  const fullWidth = Dimensions.get('window').width;
  const fullHeight = Dimensions.get('window').height;

  const [step, setStep] = useState('first');

  const data = useMemo(() => steps[step], [step]);
  const { title, image, subTitle } = data; 

  const onNext = () => {
    const newStep = step === 'first' 
      ? 'second'
      : 'last';
    setStep(newStep);
    onFinish(step === 'last');
  };

  return (
    <View style={{
      ...localStyles.main,
      width: fullWidth,
      height: fullHeight,
    }}>
      <View>
        <Text style={localStyles.title}>{title}</Text>
        <Text style={localStyles.subTitle}>{subTitle}</Text>
      </View>
      <View>
        <Image
          source={image}
          style={{ width: 228, height: 170 }}
        />
        <View style={localStyles.dottesConent}>
          <View style={{
            ...localStyles.dott,
            ...(step === 'first' && localStyles.selectedDott)
          }}/>
          <View style={{
            ...localStyles.dott,
            ...(step === 'second' && localStyles.selectedDott)
          }}/>
          <View style={{
            ...localStyles.dott,
            ...(step === 'last' && localStyles.selectedDott)
          }}/>
        </View>
      </View>
      <View style={{...localStyles.slideContent, width: fullWidth}}>
        <TouchableOpacity onPress={() => onFinish(true)}>
          <Text style={localStyles.slideTextStyle}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Text style={localStyles.slideTextStyle}>
            {
              step === 'last' ? 'Start' : 'Next'
            }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: '#047cbc',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 18,
  },
  dottesConent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  selectedDott: {
    backgroundColor: '#ff9722',
    width: 8,
    height: 8,
  },
  dott: {
    width: 6,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
  },
  slideContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  slideTextStyle: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WelcomeScreen;