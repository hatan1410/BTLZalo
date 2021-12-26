import React, {memo} from 'react';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import styled from 'styled-components/native';

interface Props {
  uri: string | null | undefined;
  resizeMode?: ResizeMode;
  style?: any;
}

const BaseImageView = memo((props: Props) => (
  <FastImage
    style={props.style}
    source={{
      uri: props.uri ?? '',
      priority: FastImage.priority.normal,
    }}
    resizeMode={props.resizeMode ?? FastImage.resizeMode.cover}
  />
));

export default BaseImageView;
