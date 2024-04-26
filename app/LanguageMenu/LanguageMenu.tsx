import React, {PropsWithChildren, useState} from 'react';
import {Button, Icon, Menu, Text, useTheme} from 'react-native-paper';
import LanguageList from './LanguageList';
import {StyleSheet, View} from 'react-native';

type LanguageMenuProps = PropsWithChildren<{
  direction: 'From' | 'To';
  onLanguageChange: Function;
}>;

const LanguageMenu = ({direction, onLanguageChange}: LanguageMenuProps) => {
  const theme = useTheme();

  const [language, setLanguage] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleSelect = (selection: string) => {
    setLanguage(selection);
    toggleMenu();
    onLanguageChange(selection);
  };

  return (
    <Menu
      visible={menuVisible}
      onDismiss={toggleMenu}
      anchor={
        <Button
          onPress={toggleMenu}
          style={styles.button}
          buttonColor={theme.colors.onBackground}
          textColor={theme.colors.onPrimary}>
          {language ? language : direction}
          <Icon
            source="chevron-down"
            size={24}
            color={theme.colors.onPrimary}
          />
        </Button>
      }
      style={styles.menu}>
      <LanguageList onLanguageChange={handleSelect} />
    </Menu>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
  },
  menu: {
    display: 'flex',
  },
});

export default LanguageMenu;
