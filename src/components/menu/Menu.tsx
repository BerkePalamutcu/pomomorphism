import { TouchableHighlight } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu: React.FC = () => {
  const iconSize = 40;
  const navigation: any = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.openDrawer()}
      style={menuStyles.MenuContainer}
    >
      <Icon
        style={menuStyles.IconStyle}
        size={iconSize}
        name="menu"
        color="black"
      />
    </TouchableHighlight>
  );
};

export default Menu;

const menuStyles = StyleSheet.create({
  MenuContainer: {
    display: 'flex',
    marginTop: 40,
  },
  IconStyle: {
    backgroundColor: '#F7E8E1',
    borderRadius: 35,
    padding: 5,
  },
});
