import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { 
  LoginComponent,
  WelcomeComponent,
} from '../../components';

const PublicScreen = () => {
  const [welcomeFinished, setWelcomeFinished] = useState(false);

  const onFinish = value => {
    setWelcomeFinished(value);
    value && AsyncStorage.setItem('needWelcomdeScreen', JSON.stringify(value))
  };

  const getWelcomeData = async () => {
    try {
      const value = await AsyncStorage.getItem('needWelcomdeScreen')
      if(value !== null) {
        setWelcomeFinished(value);
      }
    } catch(e) {
      setWelcomeFinished(false);
    }
  };

  useEffect(() => {
    getWelcomeData();
  }, []);

  return (
    welcomeFinished 
      ? <LoginComponent/>
      : <WelcomeComponent onFinish={onFinish}/>
  );
};

export default PublicScreen;
