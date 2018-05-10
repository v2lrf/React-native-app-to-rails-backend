import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import AppointmentShow from './Show';
import navigation from '../../redux/reducers/navigation';

export default class AppointmentCard extends React.Component { 
  constructor(props){
    super(props)
    console.log(this.props)
    this.seeAppointmentDetail = this.seeAppointmentDetail.bind(this);
  } 

  seeAppointmentDetail(appointment) {
    this.props.navigation.navigate("Show", {appointment})
  }

  render() {
    return (
      <Card>
        <CardTitle
          subtitle={this.props.appointment.title}
        />
        <CardContent text={this.props.appointment.body} />
        <CardAction 
          separator={true} 
          inColumn={false}>
          <CardButton
            onPress={ () => {this.seeAppointmentDetail(this.props.appointment)} }
            title="See detail"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Edit"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Delete"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    );
  }
}