import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import Schedule from '../screens/Schedule';
import DayOne from '../screens/days/DayOne';
import DayTwo from '../screens/days/DayTwo';
import DayThree from '../screens/days/DayThree';
import DayFour from '../screens/days/DayFour';
import DayFive from '../screens/days/DayFive';
import ScheduleDetail from '../screens/days/ScheduleDetail';
import SpeakersList from '../screens/SpeakersList';
import SpeakersDetails from '../screens/SpeakersDetails';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  schedule: () => Schedule,
  scheduledetail: () => ScheduleDetail,
  dayone: () => DayOne,
  daytwo: () => DayTwo,
  daythree: () => DayThree,
  dayfour: () => DayThree,
  dayfive: () => DayThree,
  speakerslist: () => SpeakersList,
  speakersdetails: () => SpeakersDetails,
  rootNavigation: () => RootNavigation,
}));
