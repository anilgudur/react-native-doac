// @flow

import React, {Component} from "react";
import {StatusBar, Text, ToastAndroid, View, ActivityIndicator} from "react-native";
import {Button, Icon} from "react-native-elements";

// Services
import appService from "../App/AppService";

import * as css from "../Styles/Styles";


export class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkingAppService: true,
            isIntroRead: false
        }
    }

    componentDidMount() {

        appService.getIntroInfo((err, isIntroReadPara) => {
            if (err == null) {
                console.log("isIntroReadPara");
                console.log(isIntroReadPara);
                this.setState({
                    checkingAppService: false,
                    isIntroRead: isIntroReadPara
                });
                if (isIntroReadPara === false) {
                    //const { navigate } = this.props.navigation;
                    //navigate('IntroRoute', {param1: "Anil"});
                }
            } else {
                console.log("err");
                console.log(err);
                this.setState({
                    checkingAppService: false,
                    isIntroRead: false
                });
                const { navigate } = this.props.navigation;
                navigate('IntroRoute', {param1: "Anil"});
            }
        });

    }

  render() {
    const msg1 = `Home`;
    const msg2 = `More coming soon!`;
  
    const {navigate} = this.props.navigation;
    
    return (
      <View style={css.global.v_container}>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.background_dark}
        />
  
        <Text style={css.global.title}>{msg1}</Text>
  
        <Text style={css.global.body1}>{msg2}</Text>
  
        <View style={css.global.h_container}>
          <Button
            onPress={() => navigate('DetailsRoute', {param1: msg2})}
            backgroundColor={css.colors.button_bg}
            color={css.colors.button_fg}
            title='Detail Screen'
            fontFamily={css.values.font_body}
            fontsize={css.values.font_body_size}
            icon={{
              name: 'android',
              color: css.colors.button_fg
            }}
            borderRadius={css.values.border_radius}
          />
          <Icon
            onPress={() => navigate('LoginRoute', {param1: msg2})}
            reverse
            name='heartbeat'
            type="font-awesome"
            color={css.colors.button_bg}
          />
          <Button
            onPress={() => ToastAndroid.show('Info button pressed', 10000)}
            backgroundColor={css.colors.button_bg}
            color={css.colors.button_fg}
            title='Info'
            fontFamily={css.values.font_body}
            icon={{
              name: 'bug-report',
              color: css.colors.button_fg
            }}
            fontsize={css.values.font_body_size}
            borderRadius={css.values.border_radius}
          />
          <Icon
            onPress={() => navigate('IntroRoute', {param1: msg2})}
            reverse
            name='heartbeat'
            type="font-awesome"
            color={css.colors.button_bg}
          />
          <Icon
            onPress={() => navigate('SwiperTwoRoute', {param1: msg2})}
            reverse
            name='heartbeat'
            type="font-awesome"
            color={css.colors.button_bg}
          />
        </View>

        {
            this.state.checkingAppService && 
            <View style={[css.global.loading]}>
                <ActivityIndicator
                    animating
                    size="large"
                />
            </View>
        }

      </View>
    );
  }
  
}