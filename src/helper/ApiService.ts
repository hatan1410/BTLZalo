import FakeApiModel from '../model/FakeApiModel';
import {Fetch} from './fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useState} from 'react';

const page = '1';
const page_size = '20';

class ApiService {
  baseUrl = 'https://zalo-server.herokuapp.com/';
  getFakeApi = async (postId: number) => {
    return await Fetch.get<FakeApiModel[]>('comments', {
      params: {
        postId: postId,
      },
    });
  };

  getFakeApi2 = async () => {
    return await Fetch.get<FakeApiModel[]>('comments');
  };

  postSignUp = async (
    username: string,
    password: string,
    phone: string,
    confirm_password: string,
  ) => {
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    bodyFormData.append('phone', phone);
    bodyFormData.append('confirm_password', confirm_password);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/auth/signup`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postSignIn = async (username: string, password: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/auth/signin`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postUserProfile = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/user/profile`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postUserUpdate = async (name: string, password: string, image: any) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('name', name);
    bodyFormData.append('password', password);
    bodyFormData.append('image', image);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/user/update`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postListPost = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('page', page);
    bodyFormData.append('page_size', page_size);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/list`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postLikePost = async (post_id: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('id', post_id);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/like`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postCreatePost = async (content: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('content', content);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/create`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postEditPost = async (post_id: string, content: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('id', post_id);
    bodyFormData.append('content', content);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/edit`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postRemovePost = async (post_id: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('id', post_id);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/remove`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postListComment = async (post_id: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('feed_id', post_id);
    bodyFormData.append('page_size', page_size);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/comment/list`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postCreateComment = async (post_id: string, content: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('feed_id', post_id);
    bodyFormData.append('content', content);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/feed/comment/create`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postUserSearch = async (search: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('q', search);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/user/search`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postUserFollowList = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/user/follow.list`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  postUserFollow = async (id: string) => {
    const access_token = await AsyncStorage.getItem('access_token');
    const bodyFormData = new FormData();
    bodyFormData.append('access_token', access_token);
    bodyFormData.append('id', id);
    return await axios({
      method: 'post',
      url: `${this.baseUrl}api/user/follow`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };
}

export const apiService = new ApiService();
