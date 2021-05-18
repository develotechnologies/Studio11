import React, { useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from './styles';
import AppointmentCard from '../../components/AppointmentCard';
import Header from '../../components/Header';
import HorizontalLine from '../../components/HorizontalLine';
import { useDispatch, useSelector } from 'react-redux';
import ScreenWrapper from '../../components/ScreenWrapper';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import ScheduleCard from '../../components/ScheduleCard';
import InputModal from '../../components/inputModal';
import CustomModal from '../../components/customModal';
import Button from '../../components/Button';
export default function CustomerAppoinmentBarber(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [CancelModalVisible, setCancelModalVisible] = useState(false);
  const scheduledAppointments = [
    {
      id: '1',
      barberName: 'Michael Fox',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Sunday, 07 March, 06:16 AM',
      Notes: 'Delectus voluptas qui est delectus recusandae eveniet assumenda fuga earum.',
      appointmentImage: require('../../assets/images/appointments/1.png'),
      timeLeft: '3 days left',
    },
    {
      id: '2',
      barberName: 'Tomas Ernser',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Saturday, 09 January, 10:42 AM',
      Notes: 'Iste eos dolores.',
      appointmentImage: require('../../assets/images/appointments/2.png'),
      timeLeft: '3 days left',
    },
    {
      id: '3',
      barberName: 'Carole Quigley',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Sunday, 28 March, 09:59 PM',
      Notes: 'Consequatur assumenda earum fuga et quos aperiam quos.',
      appointmentImage: require('../../assets/images/appointments/3.png'),
      timeLeft: '3 days left',
    },
    {
      id: '4',
      barberName: 'Michael Fox',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Sunday, 07 March, 06:16 AM',
      Notes: 'Delectus voluptas qui est delectus recusandae eveniet assumenda fuga earum.',
      appointmentImage: require('../../assets/images/appointments/4.png'),
      timeLeft: '3 days left',
    },
    {
      id: '5',
      barberName: 'Tomas Ernser',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Saturday, 09 January, 10:42 AM',
      Notes: 'Iste eos dolores.',
      appointmentImage: require('../../assets/images/appointments/5.png'),
      timeLeft: '3 days left',
    },
    {
      id: '6',
      barberName: 'Carole Quigley',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Sunday, 28 March, 09:59 PM',
      Notes: 'Consequatur assumenda earum fuga et quos aperiam quos.',
      appointmentImage: require('../../assets/images/appointments/6.png'),
      timeLeft: '3 days left',
    },
    {
      id: '7',
      barberName: 'Carole Quigley',
      cuttingName: 'Crew Cut',
      scheduledTime: 'Sunday, 28 March, 09:59 PM',
      Notes: 'Consequatur assumenda earum fuga et quos aperiam quos.',
      appointmentImage: require('../../assets/images/appointments/7.png'),
      timeLeft: '3 days left',
    }
  ];
  return (
    <ScreenWrapper scrollEnabled transclucent statusBarColor={AppColors.transparent}
      headerUnScrollable={() => <Header headerTitle={'Customer Appoinments'} leadingIcon={'arrow-left'} onPressLeadingIcon={() => props.navigation.goBack()} />}>

      <View style={styles.mainViewContainer}>
        <ScheduleCard scheuledCardStyle={{backgroundColor:AppColors.transparent,marginVertical:0,padding:0}}
          onpressAppointmentcard={() => props.navigation.navigate('CustomerAppoinmentBarber')}
          barberName={'Michael Fox'}
          cuttingName={'Crew Cut'}
          scheduledTime={'Sunday, 07 March, 06:16 AM'}
          additionalNotes={'Delectus voluptas qui est delectus recusandae eveniet assumenda fuga earum.'}
          timeLeft={'3 days left'}
          appointmentImage={require('../../assets/images/appointments/a1.png')}
        onpressMessage={() => props.navigation.navigate('Chat')} 
        />
        <HorizontalLine lineColor={{marginBottom:height(2)}} />
        <Button containerStyle={{ paddingVertical: height(2), borderRadius: width(4) }} title={'Change Time & Date'}
        onPress={() => setModalVisible(true)} />
        <Button planButton containerStyle={{
          backgroundColor: AppColors.cardColor, paddingVertical: height(2),
          borderRadius: width(4)}}  onPress={() => setCancelModalVisible(true)}
          textStyle={{ color: AppColors.primaryGold }} title={'Cancel Appointment'} />

      </View>
      <InputModal isVisible={modalVisible} onClose={() => setModalVisible(false)}
        modalTitle={'Change Date & Time'} firstLabel={'Day & Date'} secondLabel={'Time'}
        firstValue={'Monday, 4 March, 2021'} secondValue={'7:00 PM'}
        buttonLine firstButtonTitle={'Change'} secondButtonTitle={'Cancel'}
        onpressFirstButton={() => setModalVisible(false)} onpressSecondButton={() => setModalVisible(false)}
      />
       <CustomModal isVisible={CancelModalVisible} onClose={() => setCancelModalVisible(false)}
        buttonLine firstButtonTitle={'Cancel'} secondButtonTitle={'No'}
        onpressFirstButton={() => setCancelModalVisible(false)} onpressSecondButton={() => setCancelModalVisible(false)}
        iconName={"closecircle"} description={'Do you really want to cancel this appointment?'} />
    </ScreenWrapper>
  );
};