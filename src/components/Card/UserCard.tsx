import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../styles';
import { User } from '../../types/response';
import { RootStackParamList } from '../../types/routes';
import HasIconBadge from '../Badge/HasIconBadge';
import RepositoryBadge from '../Badge/RepositoryBadge';

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
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <View style={{ width: '100%' }}>
                        <Text
                            numberOfLines={1}
                            style={globalStyle.cardTitleText}
                        >
                            {user.login}
                        </Text>
                        <Text numberOfLines={1} style={globalStyle.cardDescription}>
                            {user.name}
                        </Text>
                        <Text numberOfLines={1} style={globalStyle.bio}>
                            {user.bio}
                        </Text>
                        <View style={{
                            flexDirection: 'row', gap: 8, flexWrap: 'wrap', alignContent: 'center',
                            justifyContent: 'flex-start'
                        }}>
                            <RepositoryBadge count={user.repositories?.totalCount ?? 0} />
                            <HasIconBadge hasBadge={user.isDeveloperProgramMember} name="cpu" />
                            <HasIconBadge hasBadge={user.isGitHubStar} name="star" />
                            <HasIconBadge hasBadge={user.hasSponsorsListing} name="code-of-conduct" />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};

