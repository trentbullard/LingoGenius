import React, {PropsWithChildren} from 'react';
import {Menu} from 'react-native-paper';

type LanguageListProps = PropsWithChildren<{
  onLanguageChange: Function;
}>;

const LanguageList = ({onLanguageChange}: LanguageListProps) => {
  let componentList: React.JSX.Element[] = [];

  Languages.forEach(value => {
    componentList.push(
      <Menu.Item
        onPress={() => onLanguageChange(value)}
        title={value}
        key={value}
      />,
    );
  });

  return componentList;
};

const Languages = ['English', 'Spanish', 'Italian', 'German', 'French'];

export default LanguageList;
