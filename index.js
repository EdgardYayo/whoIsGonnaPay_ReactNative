import { registerRootComponent } from 'expo';
import { MyProvider } from './src/context';
import React from 'react';
import App from './App';


const provider = () => (
    <MyProvider>
        <App />
    </MyProvider>
)


export default registerRootComponent(provider);