import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import api from '../api';
import UserBadgeList from '../components/Badge/UserBadgeList';
import RepoList from '../components/List/RepoList';
import UserText from '../components/Text/UserText';
import { globalStyle } from '../styles';
import { Repository, User } from '../types/response';


export default () => {
    const route = useRoute();
    const { user } = route.params as { user: User };
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(false);

    const getRepo = async () => {
        setLoading(true);
        await api.repo.getRepo(user.login).then((res) => setRepositories(res)).finally(() => setLoading(false))
    };

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
                <Image testID='user-image' source={{ uri: user.avatarUrl }} style={[globalStyle.userImage, { marginBottom: 8 }]} />
                <UserText user={user} />
                <UserBadgeList user={user} />
            </View>
            <RepoList repositories={repositories} loading={loading} />
        </>
    );
};
