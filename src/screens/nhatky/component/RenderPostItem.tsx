import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {IC_COMMENT, IC_LIKE, IC_LIKED, IC_OPTION} from '../../../assets';
import {apiService} from '../../../helper/ApiService';
import {AppColors} from '../../../theme/AppColors';

interface Props {
  content: string;
  likes: number;
  comments: number;
  since: number;
  name: string;
  avatar: string;
  opPressLike: () => void;
  onPressComment: () => void;
  onPressOption: () => void;
}

const RenderPostItem = memo((props: Props) => {
  const [isLiked, setisLiked] = useState<boolean>(false);
  const [likeCount, setlikeCount] = useState<number>(props.likes);
  const date = new Date(props.since * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  useEffect(() => {
    setlikeCount(props.likes);
  }, []);

  const doLike = useCallback(() => {
    console.log('Like');

    if (isLiked) {
      setisLiked(false);
      setlikeCount(likeCount - 1);
    } else {
      setisLiked(true);
      setlikeCount(likeCount + 1);
      props.opPressLike();
    }
  }, [isLiked]);

  const doShowOption = useCallback(() => {
    console.log('ShowOption');
    props.onPressOption();
  }, []);

  return (
    <View>
      <SContainer>
        <SUserView>
          <SAvatar source={{uri: `${apiService.baseUrl}${props.avatar}`}} />

          <SNameAndDateView>
            <STextName>{props.name}</STextName>
            <STextDate>
              {day}/{month}
            </STextDate>
          </SNameAndDateView>

          <SOptionView>
            <TouchableWithoutFeedback onPress={doShowOption}>
              <SOptionImage source={IC_OPTION} />
            </TouchableWithoutFeedback>
          </SOptionView>
        </SUserView>

        <SContentView>
          <STextContent>{props.content}</STextContent>
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

          <TouchableOpacity onPress={props.onPressComment}>
            <SLikeCommentTouch>
              <SCommentImage source={IC_COMMENT} />
              <STextLikeComment>{props.comments}</STextLikeComment>
            </SLikeCommentTouch>
          </TouchableOpacity>
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
  background-color: gray;
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
  font-weight: 500;
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
