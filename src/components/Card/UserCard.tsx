import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../styles';
import { User } from '../../types/response';
import { RootStackParamList } from '../../types/routes';
import HasIconBadge from '../Badge/HasIconBadge';
import RepositoryBadge from '../Badge/RepositoryBadge';
import UserBadgeList from '../Badge/UserBadgeList';
import UserText from '../Text/UserText';

type Props = {
    user: User;
}
export default (props: Props) => {
    const { user } = props;
    const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
    const onPress = () => navigation.navigate('Repositories', { user });

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={globalStyle.cardContainer}>
                <View>
                    <Image source={{ uri: user.avatarUrl }} style={globalStyle.image} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '100%' }}>
                        <UserText user={user} />
                        <UserBadgeList user={user} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};

