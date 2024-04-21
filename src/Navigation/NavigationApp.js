import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack';
import AuthStack from './AuthStack';

const NavigationApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default NavigationApp;
