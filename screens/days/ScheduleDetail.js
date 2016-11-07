import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ScheduleDetail extends React.Component {
  static route = {
    navigationBar: {
      title: 'Event Details..',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}>

        <Text style={styles.titletxt}>{this.props.text}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.subtitletxt}>{this.props.fullschedule}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.subtitletxt}>{this.props.incharge}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.subtitletxt}>{this.props.venue}</Text>
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
  titletxt: {
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitletxt: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    color: '#656565'
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
