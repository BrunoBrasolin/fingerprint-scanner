import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 36,
    paddingTop: 40 + Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 80,
  },
  label: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    height: 40,
    width: '80%',
  },
});
