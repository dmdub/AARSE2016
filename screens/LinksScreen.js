import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  Linking,
} from 'react-native';
import { Container, Header, Title, Button, Icon, Text, Content, Card, CardItem } from 'native-base';
import Router from '../navigation/Router';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Latest (Announcements)',
    },
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      newsData: ds.cloneWithRows([]),
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchnewsData();
  }

  renderRow(rowData){
    return (
        <TouchableHighlight onPress={this._handleTwTPress} underlayColor='#dddddd'>
          <View style={styles.thumb}>
            <Text style={styles.titletxt}>{rowData.text}</Text>
            <Text style={styles.txt}>{rowData.created_at}</Text>
          </View>
        </TouchableHighlight>
    );
  }

  fetchnewsData() {
    var url = 'http://aarse2016.mak.ac.ug/tweetledee/userjson.php';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        this.setState({
          newsData: this.state.newsData.cloneWithRows(jsonData),
          isLoading: false
        });
      })
    //.catch( error => console.log('Connect to the Internet, Try again: ' + error) );
    .done();
  }

  render() {
    if (this.state.isLoading) {
        return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.newsData}
        renderRow={this.renderRow.bind(this)}
        style={styles.container}
        enableEmptySections={true}
      />
    );
  }

  renderLoadingView() {
      return (
          <View style={styles.loading}>
          <ActivityIndicator
              size='large'/>
              <Text>
                  Collecting Updates...
              </Text>
          </View>
      );
  }

  _handleTwTPress = (rowData) => {
    Linking.openURL(`https://twitter.com/aarse2016`);
  }


}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 0,
    backgroundColor: '#f2f2f2',
  },
  thumb: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    flex: 1,
  },
  titletxt: {
    margin: 10,
    fontSize: 17,
    textAlign: 'left',
    color: '#333333',
    fontWeight: '100',
    fontFamily: 'Cochin',
    lineHeight: 28,
  },
  txt: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
    textAlign: 'left',
    color: '#b02727',
  },
  loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
});
