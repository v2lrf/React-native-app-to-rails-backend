import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class AppointmentNew extends React.Component { 
  constructor(props){
    super(props)
    console.log("NEW", this.props)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardTitle
          subtitle={"NEW APPOINTLMENT"}
        />
      </Card>
    );
  }
}