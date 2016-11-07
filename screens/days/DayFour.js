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
import Router from '../../navigation/Router';

@withNavigation
export default class DayFour extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      scheduleData: ds.cloneWithRows([]),
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchscheduleData();
  }

  renderRow(rowData){
    return (
      <Container>
      <Content style={styles.OutContent}>
        <TouchableOpacity onPress={this._onPressDetail.bind(this, rowData)}>

        <View style={styles.row}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{rowData.time}</Text>
          </View>
          <View style={styles.details}>
            <View style={[styles.circle]}></View>

              <View style={styles.speakerInfo}>
                <Image style={styles.speakerAvatar} source={{uri:rowData.image.src}} />
                <View style={styles.speakerDescription}>
                  <Text style={styles.title} numberOfLines={3}>{rowData.title}</Text>
                  <Text style={styles.speakerName} numberOfLines={1}>{rowData.moderator} {rowData.venue}</Text>
                </View>
              </View>

            <View style={styles.separator}></View>
          </View>
        </View>

        </TouchableOpacity>
        </Content>
        </Container>
    );
  }

  fetchscheduleData() {
    var url = 'http://aarse2016.mak.ac.ug/conference-schedule-json-day4';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        this.setState({
          scheduleData: this.state.scheduleData.cloneWithRows(jsonData.nodes),
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
        dataSource={this.state.scheduleData}
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
                  Lets Update the Schedule...
              </Text>
          </View>
      );
  }

  _onPressDetail = (rowData) =>  {
    this.props.navigator.push(
      Router.getRoute('scheduledetail', {
      text: rowData.title,
      description: rowData.details,
      fullschedule: rowData.expanded_time,
      incharge: rowData.moderator,
      venue: rowData.venue,
    }));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    borderColor: '#88C057',
    borderLeftWidth: 1,
    flexDirection: 'column',
    flex: 2,
    marginLeft: 20,
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
    width: 40,
    height: 40,
    borderRadius: 20,
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
