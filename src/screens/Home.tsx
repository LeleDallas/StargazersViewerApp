import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import api from '../api';
import UserList from '../components/List/UserList';
import { commonStyle } from '../styles';
import { User } from '../types/response';

export default () => {
    const [name, setName] = useState('');
    const [data, setData] = useState<User[]>([]);
    const fetchData = async () =>
        await api.user.getAll(name).then(res => setData(res));

    return (
        <>
            <View style={{ flexDirection: 'row', gap: 8, paddingHorizontal: 8 }}>
                <TextInput placeholder="Type here to translate!"
                    inputMode="text"
                    style={commonStyle.textInput}
                    onChange={(e) => { setName(e.nativeEvent.text); }}
                />
                <TouchableOpacity
                    disabled={name.length === 0}
                    onPress={fetchData}
                    style={{
                        backgroundColor: name.length === 0 ? '#46515B' : '#117F7F',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 8
                    }} >
                    <Octicons name="search" color="#fff" size={20} />
                </TouchableOpacity>
            </View>
            <UserList users={data} />
        </>
    );
};
