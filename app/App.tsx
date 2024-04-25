/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Header from './Header/Header';
import {
  MD3LightTheme as lightTheme,
  MD3DarkTheme as darkTheme,
  PaperProvider,
} from 'react-native-paper';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const theme = isDarkMode ? darkTheme : lightTheme;
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header title="LingoGenius" />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
