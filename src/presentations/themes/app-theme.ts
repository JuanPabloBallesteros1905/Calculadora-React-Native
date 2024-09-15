import {StyleSheet} from 'react-native';

export const colors = {
  darkgray: '#2D2D2D',
  lighGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },

  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '300',
  },

  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },

  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 28,
    paddingHorizontal: 18,
  },

  button: {
    margin: 6,
    height: 80,
    width: 80,
    backgroundColor: colors.darkgray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,

  },
});
