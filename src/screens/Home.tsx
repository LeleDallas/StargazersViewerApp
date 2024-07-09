import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import api from '../api';
import UserList from '../components/List/UserList';
import { colors, globalStyle } from '../styles';
import { User } from '../types/response';
import NoData from '../components/NoData';

export default () => {
    const [name, setName] = useState('');
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        await api.user.getAll(name).then(res => setData(res)
        ).finally(() => setLoading(false))
    };

    return (
        <>
            <View style={{ flexDirection: 'row', gap: 8, paddingHorizontal: 8 }}>
                <TextInput
                    placeholderTextColor={colors.textMuted}
                    placeholder="Search a GitHub user"
                    inputMode="text"
                    style={globalStyle.textInput}
                    onChange={(e) => setName(e.nativeEvent.text)}
                />
                <TouchableOpacity
                    testID='touchable-opacity'
                    disabled={name.length === 0}
                    onPress={fetchData}
                    style={[globalStyle.searchButton, {
                        backgroundColor: name.length === 0 ? colors.buttonInactive : colors.buttonActive
                    }]} >
                    <Octicons name="search" color={colors.text} size={20} />
                </TouchableOpacity>
            </View>
            <NoData length={data.length} loading={loading} />
            <UserList users={data} loading={loading} />
        </>
    );
};
