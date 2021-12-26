import React, {memo, useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BaseScreen from '../../components/BaseScreen';
import styled from 'styled-components/native';
import {IC_ARROW_LEFT, IC_DELETE, IC_TIM_KIEM} from '../../assets';
import {AppColors} from '../../theme/AppColors';
import {apiService} from '../../helper/ApiService';
import RenderUserItem from './component/RenderUserItem';

const TimKiemScreen = memo((props: any) => {
  const nav = useNavigation();
  const [textSearch, setTextSearch] = useState<string>('');
  const [isEmtyText, setisEmtyText] = useState<boolean>(true);

  const [listData, setListData] = useState<any>([]);

  const doGoback = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const doDeleteText = useCallback(() => {
    setTextSearch('');
    setisEmtyText(true);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getDataFakeApi();
  };

  const getDataFakeApi = useCallback(() => {
    apiService
      .getFakeApi(1)
      .then(data => {
        setListData(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = useCallback(({item}) => {
    return <RenderUserItem avatar={item.name} name={item.name} />;
  }, []);

  return (
    <BaseScreen>
      <SSearchBarView>
        <STouchBack onPress={doGoback}>
          <SImageBack source={IC_ARROW_LEFT} />
        </STouchBack>
        <STextInputView>
          <SImageSearch source={IC_TIM_KIEM} />
          <STextInput
            value={textSearch}
            onChangeText={val => {
              setTextSearch(val);
              if (val === '') {
                setisEmtyText(true);
              } else {
                setisEmtyText(false);
              }
            }}
            placeholder="Tìm bạn bè"
            placeholderTextColor={'#848D92'}
          />
          {!isEmtyText && (
            <TouchableWithoutFeedback onPress={doDeleteText}>
              <SImageDelete source={IC_DELETE} />
            </TouchableWithoutFeedback>
          )}
        </STextInputView>
      </SSearchBarView>
      <SViewContent>
        <SFlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SViewContent>
    </BaseScreen>
  );
});
const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

const SFlatList = styled(FlatList)`
  flex: 1;
`;

const SViewContent = styled.View`
  flex: 94;
`;

const SSearchBarView = styled.View`
  min-height: 50px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${() => {
    return AppColors.mainColor;
  }};
`;

const STouchBack = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  align-content: center;
  justify-content: center;
  position: absolute;
  left: 10px;
`;

const SImageBack = styled.Image`
  width: 25px;
  height: 25px;
  align-self: center;
`;

const STextInputView = styled.View`
  flex-direction: row;
  width: 70%;
  height: 68%;
  border-radius: 8px;
  background-color: white;
`;

const SImageSearch = styled.Image`
  width: 15px;
  height: 15px;
  align-self: center;
  tint-color: #848d92;
  margin: 0px 8px 0px 10px;
`;

const SImageDelete = styled.Image`
  width: 18px;
  height: 18px;
  align-self: center;
  tint-color: #848d92;
  margin: 0px 10px 0px 5px;
`;

const STextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  color: black;
  font-size: 16px;
  padding: 2px 0px 2px 0px;
`;

export default TimKiemScreen;
