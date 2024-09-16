import React, {useState} from 'react';

export const CalculadoraHook = () => {
  const [number, setNumber] = useState('0');

  const buildNumber = (newValue: string) => {
    if (number.includes('.') && newValue === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (newValue === '.') {
        return setNumber(number + newValue); 
      }
      if (newValue === '0' && number.includes('.')) {
        return setNumber(number + newValue)
        
      }

      if ( newValue !== '0' && !number.includes('.') ) {
        return setNumber(number + newValue)
        
      }

      if (newValue === '0' && !number.includes('.')) {
        return;
        
      }

      return setNumber(number + newValue)


    }

    setNumber(number + newValue);
  };

  return {
    number,

    buildNumber,
  };
};
