import React, {useState} from 'react';

export const CalculadoraHook = () => {
  const [number, setNumber] = useState('0');

  const deleteLastNumber = () => {
    console.log(number);

    let newNumber = number.substring(0, number.length - 1);

    if (newNumber.length === 0) {

      newNumber = '0'
    }

    setNumber(newNumber);
  };

  const deleteNumber = () => {
    setNumber('0');
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar 000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    number,

    buildNumber,

    deleteNumber,

    deleteLastNumber,
  };
};
