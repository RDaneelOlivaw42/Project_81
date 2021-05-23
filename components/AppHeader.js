import React from 'react';
import { View, Text } from 'react-native';

const AppHeader = (props) => {
    return(
        <View style = {{ backgroundColor: '#5C96B6', width: '100%', height: 70, justifyContent: 'center' }}>
            <Text style = {{ fontFamily: 'big caslon', textAlign: 'center', fontSize: 30 }}>{props.title}</Text>
        </View>
    )
}

export default AppHeader;