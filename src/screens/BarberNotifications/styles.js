import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.textColor
  },
  notifications: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(90),
    alignItems: 'center',
  },
  notificationText: {
    width: '80%',
    marginVertical: height(1),
    fontSize: width(3.5),
    color: AppColors.white50,
    justifyContent: 'flex-start'
  },
  notificationTime: {
    width: '15%',
    justifyContent: 'flex-end',
    marginVertical: height(1),
    fontSize: width(3.5),
    color: AppColors.white50,
    textAlign: 'center'
  },
  HorizontalLine100: {
    width: width(100),
    backgroundColor: AppColors.cardColor,
  },
});
export default styles;
