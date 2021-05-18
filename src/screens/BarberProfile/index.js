import React from 'react';
import { Text, View, Image, FlatList, ImageBackground } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import ScreenWrapper from '../../components/ScreenWrapper';
import HighlightedText from '../../components/HighlightedText';
import Header from '../../components/Header';
import HairStyle from '../../components/HairStyle';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import HorizontalLine from '../../components/HorizontalLine';
import Button from '../../components/Button';
import { height, width } from 'react-native-dimension';
import Video from 'react-native-video';
import AppColors from '../../utills/AppColors';
import ReviewCard from '../../components/ReviewCard';
import PostReview from '../../components/PostReview';
import Thumbnail from '../../components/Thumbnail';
export default function BarberProfile(props) {
  const cuttingImages = [
    {
      id: '1',
      title: 'Crew Cut',
      image: require('../../assets/images/barbers/b1.png'),
    },
    {
      id: '2',
      title: 'Undercut',
      image: require('../../assets/images/barbers/b2.png'),
    },
    {
      id: '3',
      title: 'Low Fade',
      image: require('../../assets/images/barbers/b3.png'),
    },
    {
      id: '4',
      title: 'Mid Fade',
      image: require('../../assets/images/barbers/b4.png'),
    },
    {
      id: '5',
      title: 'High Fade',
      image: require('../../assets/images/barbers/b5.png'),
    },
    {
      id: '6',
      title: 'Side Part',
      image: require('../../assets/images/barbers/b6.png'),
    },
  ];
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const videoUrl = require('../../assets/Videos/1.mp4');
  const reviewList = [
    {
      id: '1',
      ReviewerName: 'Jared',
      ratings: '4.9',
      Review: 'Mollitia labore autem sed rem magnam labore. Excepturi cum quasi quidem illo qui quidem id. Dolorum facere natus at minus earum autem rerum. Cumque quia eum et.',
      reviewerImage: require('../../assets/images/reviewers/r1.png')
    },
    {
      id: '2',
      ReviewerName: 'Elwyn',
      ratings: '3.7',
      Review: 'Doloribus et et ea commodi. Porro blanditiis sit eaque. Et quam quod sed est magnam a et tempore.',
      reviewerImage: require('../../assets/images/reviewers/r2.png')
    },
    {
      id: '3',
      ReviewerName: 'Ivory',
      ratings: '3.5',
      Review: 'Mollitia labore autem sed rem magnam labore. Excepturi cum quasi quidem illo qui quidem id. Dolorum facere natus at minus earum autem rerum. Cumque quia eum et.',
      reviewerImage: require('../../assets/images/reviewers/r3.png')
    },
  ];
  const ThumbnailList = [
    {
      id: '1',
      videoTitle: 'Alias quia nostrum.',
      views: '412',
      thumbnailImage: require('../../assets/Videos/1.png')
    },
    {
      id: '2',
      videoTitle: 'Ipsa ratione accusamus labore',
      views: '706',
      thumbnailImage: require('../../assets/Videos/2.png')
    },
    {
      id: '3',
      videoTitle: 'Sequi explicabo iusto reiciendis',
      views: '791',
      thumbnailImage: require('../../assets/Videos/3.png')
    },
    {
      id: '4',
      videoTitle: 'lusto occaecati omnis culpa nihil',
      views: '4.9',
      thumbnailImage: require('../../assets/Videos/4.png')
    },
    
  ];
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
    <ScreenWrapper scrollEnabled headerUnScrollable={() =>
      <Header headerTitle={'Barber Profile'} leadingIcon={'arrow-left'}
        onPressLeadingIcon={() => props.navigation.goBack()} />
    } transclucent statusBarColor={AppColors.transparent}>
      <View style={styles.mainViewContainer}>
        <View style={styles.ProfileDetail}>
          <View style={styles.textSection}>
            <View>
              <Text style={styles.stylerTitle}>Dorris Ortiz</Text>
              <Text style={styles.white50}>415 Haircuts</Text>
              <View style={styles.stylerRating}>
                <Icon style={styles.ratingIcon} name="star" />
                <Text style={styles.ratingText}>4.7</Text>
                <Text style={styles.ratingText}>(367 reviews)</Text>
              </View>
            </View>
            <Text style={styles.white50}>$83</Text>
          </View>
          <Image style={styles.imageSection} source={require('../../assets/images/cuttings/1.png')} />
        </View>
        <View style={styles.textRow}>
          <Button containerStyle={{ width: '60%', margin: 0 }}
            onPress={() => props.navigation.navigate('GetAppointment')}
            title={'Get an appointment'} />
          <Button containerStyle={{ width: '35%', backgroundColor: AppColors.cardColor, margin: 0 }}
            textStyle={{ color: AppColors.white }}
            onPress={() => props.navigation.navigate('Chat')}
            planButton title={'Message'} />
        </View>
        <HorizontalLine />
        <View style={styles.textRow}>
          <Text style={styles.whiteText}>Hair Styles</Text>
          <HighlightedText text={'View all'} onPress={() => props.navigation.navigate('HairStyles')} />
        </View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: width(8), }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={cuttingImages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <HairStyle onPress={() => props.navigation.navigate('HairStylesBarber')} cuttingImage={item.image} cuttingTitle={item.title} />
            );
          }}
        />
        <HorizontalLine />
        <View style={styles.textRow}>
          <Text style={styles.whiteText}>Video Uploads</Text>
          <HighlightedText text={'View all'}
          onPress={() => props.navigation.navigate('VideoUploads')} 
          />
        </View>
        {/* <Video
          resizeMode="contain"
          controls
          source={require('../../assets/Videos/1.mp4')}   // Can be a URL or a local file.
          paused
          style={{
            width: width(30), height: width(50),
            alignSelf: 'center',
            elevation: 1,
          }}
        /> */}
        <FlatList
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: width(8) }}
          data={ThumbnailList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <Thumbnail thumbnailImage={item.thumbnailImage}
                onPress={() => props.navigation.navigate('VideoPlay')}
                videoTitle={item.videoTitle}
                views={item.views} />
            );
          }}
        />

        <HorizontalLine />
        <View style={styles.textRow}>
          <Text style={styles.whiteText}>Reviews</Text>
          <HighlightedText text={'View all'} onPress={() => props.navigation.navigate('Reviews')} />
        </View>
        <FlatList
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: width(5) }}
          data={reviewList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <ReviewCard
                containerstyle={{ marginHorizontal: width(2) }}
                ReviewerName={item.ReviewerName}
                ratings={item.ratings}
                Review={item.Review}
                reviewerImage={item.reviewerImage}
              />
            );
          }}
        />
        <PostReview label={'Write a review:'} />
      </View>
    </ScreenWrapper>
  );
};