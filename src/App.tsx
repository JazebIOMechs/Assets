/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

import {
  useGetPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useNewPostMutation,
} from './api/api';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {postsAPI} from './api/api';
import Home from './api/Home';
// import {Provider} from 'react-redux';

function App() {
  return (
    <ApiProvider api={postsAPI}>
      <Home />
    </ApiProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
