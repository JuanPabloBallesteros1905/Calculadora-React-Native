import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../themes/app-theme';
import {CustomButton} from '../components/CustomButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <CustomButton black label="C" color={colors.lighGray} />
        <CustomButton black label="+/-" color={colors.lighGray} />
        <CustomButton black label="del" color={colors.lighGray} />
        <CustomButton color="orange" label="/" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton label="7" />
        <CustomButton label="8" />
        <CustomButton label="9" />
        <CustomButton color="orange" label="%" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton label="4" />
        <CustomButton label="5" />
        <CustomButton label="6" />
        <CustomButton color="orange" label="-" />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CustomButton label="1" />
        <CustomButton label="2" />
        <CustomButton label="3" />
        <CustomButton color="orange" label="+" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton doubleSize label="0" />
        <CustomButton label="." />

        <CustomButton color="orange" label="=" />
      </View>
    </View>
  );
};
