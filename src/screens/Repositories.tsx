import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, View, VirtualizedList } from 'react-native';
import api from '../api';
import RepositoryCard from '../components/Card/RepositoryCard';
import { globalStyle } from '../styles';
import { Repository, User } from '../types/response';


export default () => {
    const route = useRoute();
    const { user } = route.params as { user: User };
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const getRepo = async () => await api.repo.getRepo(user.login).then((res) => setRepositories(res));

    useEffect(() => {
        getRepo();
        return () => { };
    }, [user.login]);

    return (
        <>
            <View style={{
                marginTop: 22,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image testID='user-image' source={{ uri: user.avatarUrl }} style={globalStyle.userImage} />
            </View>
            <VirtualizedList<Repository>
                testID='virtualized-list'
                style={{ flex: 1, marginTop: 8 }}
                data={repositories}
                renderItem={({ item }) => <RepositoryCard repository={item} />}
                keyExtractor={(item) => item.id}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
            />
        </>
    );
};
