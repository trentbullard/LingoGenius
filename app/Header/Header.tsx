import React, {PropsWithChildren} from 'react';
import {Appbar} from 'react-native-paper';

type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({title}: HeaderProps) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
