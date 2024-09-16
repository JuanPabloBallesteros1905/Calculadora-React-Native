import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../themes/app-theme';
import {CustomButton}  from '../components/CustomButton';
import { CalculadoraHook } from '../hooks/CalculadoraHook';

export const CalculatorScreen = () => {

  const {number, buildNumber } = CalculadoraHook()

  return (
    <View style={styles.calculatorContainer}>
      <View  
      
      style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>{number}</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <CustomButton onPress={() => console.log("hola")} black label="C" color={colors.lighGray} />
        <CustomButton onPress={() => console.log("hola")} black label="+/-" color={colors.lighGray} />
        <CustomButton onPress={() => console.log("hola")} black label="del" color={colors.lighGray} />
        <CustomButton onPress={() => console.log("hola")} color="orange" label="/" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton onPress={() => buildNumber('7')} label="7" />
        <CustomButton onPress={() => buildNumber('8')} label="8" />
        <CustomButton onPress={() => buildNumber('9')} label="9" />
        <CustomButton onPress={() => buildNumber('')} color="orange" label="%" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton onPress={() => buildNumber('4')} label="4" />
        <CustomButton onPress={() => buildNumber('5')} label="5" />
        <CustomButton onPress={() => buildNumber('6')} label="6" />
        <CustomButton onPress={() => console.log("hola")} color="orange" label="-" />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CustomButton onPress={() => buildNumber('1')} label="1" />
        <CustomButton onPress={() => buildNumber('2')} label="2" />
        <CustomButton onPress={() => buildNumber('3')} label="3" />
        <CustomButton onPress={() => console.log("hola")} color="orange" label="+" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton onPress={() => console.log("hola")} doubleSize label="0" />
        <CustomButton onPress={() => console.log("hola")} label="." />

        <CustomButton onPress={() => console.log("hola")} color="orange" label="=" />
      </View>
    </View>
  );
};
