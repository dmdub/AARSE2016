import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';

import Router from '../navigation/Router';
import aarseTheme from './Themes/aarseTheme';
import TabOne from './days/DayOne';
import TabTwo from './days/DayTwo';
import TabThree from './days/DayThree';
import TabFour from './days/DayFour';
import TabFive from './days/DayFive';

export default class Schedule extends React.Component {

  static route = {
    navigationBar: {
      title: 'AARSE 2016 Schedule',
    },
  }
    render() {
        return (
            <Container>
                <Content theme={aarseTheme}>
                    <Tabs>
                        <TabOne tabLabel='Day 1' />
                        <TabTwo tabLabel='Day 2' />
                        <TabThree tabLabel='Day 3' />
                        <TabFour tabLabel='Day 4' />
                        <TabFive tabLabel='Day 5' />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}
