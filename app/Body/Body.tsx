import React, {useState} from 'react';
import {ScrollView, View, TextInput, StyleSheet} from 'react-native';
import {Button, Divider, Icon, useTheme} from 'react-native-paper';
import LanguageMenu from '../LanguageMenu/LanguageMenu';

const Body = () => {
  const theme = useTheme();
  
  const [fromLanguage, setFromLanguage] = useState('English');
  const [toLanguage, setToLanguage] = useState('Spanish');

  const handleFromSelect = (language: string) => {
    setFromLanguage(language);
  };

  const handleToSelect = (language: string) => {
    setToLanguage(language);
  };

  return (
    <View style={styles.view}>
      <LanguageMenu direction="From" onLanguageChange={handleFromSelect} />
      <ScrollView>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Type or paste here..."
          numberOfLines={10}
          selectTextOnFocus={true}
        />
      </ScrollView>
      <Divider style={styles.divider} />
      <LanguageMenu direction="To" onLanguageChange={handleToSelect} />
      <ScrollView>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={10}
          editable={false}
        />
      </ScrollView>
      <Button
        onPress={() => {}}
        buttonColor={theme.colors.tertiary}
        style={styles.button}>
        <Icon source="send" size={24} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  divider: {
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default Body;
