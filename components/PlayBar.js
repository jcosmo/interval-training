import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlayBarButton from './PlayBarButton';

const PlayBar = props => {
  const guardPlaying = (action) => {
    if (props.isPlaying()) {
      action();
    }
  };

  const guardNotPlaying = (action) => {
    if (!props.isPlaying()) {
      action.apply();
    }
  };

  const isNotPlaying = () => {
    return !props.isPlaying();
  };

  const playOrStopButton = () => {
    if (props.isPlaying())
    {
      return <PlayBarButton onPress={guardPlaying.bind(null, props.onStop)} isDisabled={() => false} iconName='playbarStop'/>;
    }
    else
    {
      return <PlayBarButton onPress={guardNotPlaying.bind(null, props.onPlay)} isDisabled={() => false} iconName='playbarPlay'/>;
    }
  };

  return (
    <View style={styles.container}>
      <PlayBarButton onPress={guardPlaying.bind(null, props.onPrevious)} isDisabled={isNotPlaying} iconName='playbarBack'/>
      {playOrStopButton()}
      <PlayBarButton onPress={guardPlaying.bind(null, props.onNext)} isDisabled={isNotPlaying} iconName='playbarNext'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  icon: {
    height: 20,
    width: 20,
    flexGrow: 0,
    flexShrink: 0
  }
});

export default PlayBar;

