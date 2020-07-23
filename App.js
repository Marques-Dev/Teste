import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './screens/home';
import Chat from './screens/chat';


export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key='Home' title="Home" component={Home}/>
        <Scene key='chat' Chat title="Chat" component={Chat}/>
      </Scene>
    </Router>
    
  );
}

