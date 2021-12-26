import React, {memo, useCallback, useMemo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {IC_COMMENT, IC_LIKE, IC_LIKED, IC_OPTION} from '../../../assets';
import {AppColors} from '../../../theme/AppColors';

interface Props {
  id: number;
  name: string;
  onPressComment: () => void;
}

const RenderPostItem = memo((props: Props) => {
  const [isLiked, setisLiked] = useState<boolean>(false);
  const [likeCount, setlikeCount] = useState<number>(0);
  const doLike = useCallback(() => {
    console.log('Like');
    if (isLiked) {
      setisLiked(false);
      setlikeCount(likeCount - 1);
    } else {
      setisLiked(true);
      setlikeCount(likeCount + 1);
    }
  }, [isLiked]);

  const doComment = useCallback(() => {
    console.log('Comment');
    props.onPressComment();
  }, []);

  const doShowOption = useCallback(() => {
    console.log('ShowOption');
  }, []);

  return (
    <View>
      <SContainer>
        <SUserView>
          <SAvatar />

          <SNameAndDateView>
            <STextName>Ha Tan</STextName>
            <STextDate>01/12</STextDate>
          </SNameAndDateView>

          <SOptionView>
            <TouchableWithoutFeedback onPress={doShowOption}>
              <SOptionImage source={IC_OPTION} />
            </TouchableWithoutFeedback>
          </SOptionView>
        </SUserView>

        <SContentView>
          <STextContent>Post bai</STextContent>
        </SContentView>

        <SSeparatorView />

        <SLikeCommentView>
          <TouchableWithoutFeedback onPress={doLike}>
            <SLikeCommentTouch>
              {isLiked && <SLikeImage source={IC_LIKED} />}
              {!isLiked && <SLikeImage source={IC_LIKE} />}
              <STextLikeComment>{likeCount}</STextLikeComment>
            </SLikeCommentTouch>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={props.onPressComment}>
            <SLikeCommentTouch>
              <SCommentImage source={IC_COMMENT} />
              <STextLikeComment>14</STextLikeComment>
            </SLikeCommentTouch>
          </TouchableWithoutFeedback>
        </SLikeCommentView>
      </SContainer>
    </View>
  );
});

const SContainer = styled.View`
  margin-top: 8px;
  background-color: white;
  padding: 12px 16px 12px 16px;
`;

const SUserView = styled.View`
  flex-direction: row;
`;

const SNameAndDateView = styled.View``;

const SAvatar = styled.Image`
  width: 40px;
  height: 40px;
  background-color: green;
  border-radius: 25px;
  margin-right: 18px;
`;

const SOptionView = styled.View`
  align-self: center;
  position: absolute;
  right: 0px;
`;

const SOptionImage = styled.Image`
  width: 22px;
  height: 22px;
`;

const STextName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 2px;
`;

const STextDate = styled.Text`
  font-size: 12px;
  color: ${() => {
    return AppColors.gray;
  }};
`;

const SContentView = styled.View`
  padding: 16px 0px 16px 0px;
`;

const STextContent = styled.Text`
  font-size: 16px;
  color: black;
`;

const SSeparatorView = styled.View`
  height: 0.6px;
  background-color: ${() => {
    return AppColors.lightGray;
  }};
`;

const SLikeCommentView = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

const SLikeCommentTouch = styled.View`
  flex-direction: row;
`;

const SLikeImage = styled.Image`
  width: 23px;
  height: 23px;
`;

const SCommentImage = styled.Image`
  width: 23px;
  height: 23px;
  tint-color: #848d92;
`;

const STextLikeComment = styled.Text`
  font-size: 16px;
  color: black;
  margin: 0px 30px 0px 8px;
`;

export default RenderPostItem;
