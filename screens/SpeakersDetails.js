import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class SpeakersDetails extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile Details',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}>
        <Image style={styles.profilePic} source={{uri:this.props.profpic}} />
        <View style={styles.separator}></View>
        <Text style={styles.titletxt}>{this.props.text}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.subtitletxt}>{this.props.designation}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.description}>{this.props.description}</Text>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  titletxt: {
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#333333',
    alignSelf: 'center',
  },
  subtitletxt: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    color: '#656565',
    alignSelf: 'center',
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565',
    lineHeight: 24,
  },
  separator: {
    height: .5,
    backgroundColor: '#cccccc',
    marginTop: 15,
    marginBottom: 15
  },
});
