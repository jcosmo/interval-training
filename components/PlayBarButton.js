import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-web';

const PlayBarButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Image style={[styles.icon, styles[props.isDisabled() ? 'disabled' : 'active']]}
             source={require('../assets/' + props.iconName + '.png')}/>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    flexGrow: 0,
    flexShrink: 0
  },
  disabled: {
    filter: 'grayscale(100%) opacity(50%)'
  },
  active: {
  }
});

export default PlayBarButton;

