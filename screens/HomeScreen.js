import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

const SectionHeader = ({title}) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );
};

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/aarse2016_header.png')}
              style={styles.welcomeImage}
            />
          </View>


          <View style={styles.getStartedContainer}>


            <Text style={styles.getStartedText}>
            Welcome to the 11th International Conference of the African Association of Remote Sensing
            of the Environment (AARSE).
            </Text>

            <Text style={styles.getStartedText}>
              Take alook at these links for more.
            </Text>

            <TouchableOpacity onPress={this._handleWebPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                AARSE2016.ORG
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleFBPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Facebook @aarse2016
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleTwTPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Twitter @aarse2016
              </Text>
            </TouchableOpacity>
            <SectionHeader title="Conference Venue (Map + info)" />
            <TouchableOpacity onPress={this._handleMapPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Hotel Africana
              </Text>
              <Text style={styles.helpLinkText}>
                Plot 2 - 4 Wampewo Avenue
              </Text>
            </TouchableOpacity>


          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleEmailPress}>
              <Text style={styles.tabBarInfoText}>
                Tap here to drop us an email!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


  _handleWebPress = () => {
    Linking.openURL('http://aarse2016.org');
  }

  _handleFBPress = () => {
    Linking.openURL('https://www.facebook.com/aarse2016');
  }

  _handleTwTPress = () => {
    Linking.openURL('https://www.twitter.com/aarse2016');
  }

  _handleEmailPress = () => {
    Linking.openURL('mailto:info@aarse2016.org?subject=Feedback&body=I%20need%20assistance%20in!');
  }

  _handleMapPress = () => {
    Linking.openURL('https://www.google.com/maps/place/Hotel+Africana/@0.3198943,32.5940047,15z/data=!4m5!3m4!1s0x0:0xbfe9fbc83950a083!8m2!3d0.3198943!4d32.5940047');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 65,
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 5,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 5,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#b02727',
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  sectionHeaderText: {
    fontSize: 14,
    alignItems: 'center',
  },
});
