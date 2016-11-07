import React from 'react';
import {
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  SharedElement,
  SharedElementGroup,
  withNavigation,
} from '@exponent/ex-navigation';
import { Container, Header, Title, Button, Icon, Content } from 'native-base';
import Router from '../navigation/Router';

@withNavigation
export default class SpeakersList extends React.Component {
  static route = {
    navigationBar: {
      title: 'Conference Speakers',
    },
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      speakersData: ds.cloneWithRows([]),
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchspeakersData();
  }

  renderRow(rowData){
    return (

        <TouchableOpacity onPress={this._onPressDetail.bind(this, rowData)}>

        <View style={styles.row}>
          <View style={styles.details}>
              <View style={styles.speakerInfo}>
                <Image style={styles.speakerAvatar} source={{uri:rowData.profile_pic.src}} />
                <View style={styles.speakerDescription}>
                  <Text style={styles.title}>{rowData.title}</Text>
                  <Text style={styles.speakerName}>{rowData.designation}</Text>
                </View>
              </View>

            <View style={styles.separator}></View>
          </View>
        </View>

        </TouchableOpacity>

    );
  }

  fetchspeakersData() {
    var url = 'http://aarse2016.mak.ac.ug/keynote-speakers-json';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        this.setState({
          speakersData: this.state.speakersData.cloneWithRows(jsonData.nodes),
          isLoading: false
        });
      })
    .catch( error => console.log('Connect to the Internet, Try again: ' + error) );
  }

  render() {
    if (this.state.isLoading) {
        return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.speakersData}
        //renderRow={this.renderRow}
        renderRow={this.renderRow.bind(this)}
        style={styles.list}
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
                  Lets get them together...
              </Text>
          </View>
      );
  }

  _onPressDetail = (rowData) =>  {
    this.props.navigator.push(
      Router.getRoute('speakersdetails', {
      text: rowData.title,
      description: rowData.bio,
      profpic: rowData.profile_pic.src,
      designation: rowData.designation,
    }));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 0
  },
  // ListView
  list: {
    flex: 1,
    marginTop: 20,
  },
  // SectionHeader
  sectionHeader: {
    marginBottom: 15,
    backgroundColor: '#a70208',
    height: 30,
    justifyContent: 'center'
  },
  sectionHeaderText: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center'
  },
  // Row
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 15
  },
  timeContainer: {
    width: 40
  },
  timeText: {
    color: '#cccccc',
    textAlign: 'right'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#88C057',
    position: 'absolute',
    left: -5,
    top: 0
  },
  details: {
    borderColor: '#f7cd45',
    borderLeftWidth: 1,
    flexDirection: 'column',
    flex: 2,
    marginLeft: 15,
    paddingLeft: 20
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#a70208',
    marginBottom: 6
  },
  titleSingle: {
    marginBottom: 0
  },
  speakerInfo: {
    flexDirection: 'row',
    flex: 3,
  },
  speakerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  speakerDescription: {
    flex: 1
  },
  separator: {
    height: .5,
    backgroundColor: '#cccccc',
    marginTop: 15,
    marginBottom: 15,
  },
  loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
});
