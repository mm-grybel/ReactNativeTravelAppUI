import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../../styles/styles';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={colors.text}
        />
    );
};

export default CustomHeaderButton;
