import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { commonStyle } from '../../styles';
import { User } from '../../types/response';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/routes';
import RepositoryBadge from '../Badge/RepositoryBadge';
import HasIconBadge from '../Badge/HasIconBadge';
type Props = {
    user: User;
}
export default (props: Props) => {
    const { user } = props;
    const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
    const onPress = () => navigation.navigate('Repositories', { user });

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.trackItemContainer}>
                <View>
                    <Image source={{ uri: user.avatarUrl }} style={commonStyle.image} />
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
                            style={styles.trackTitleText}
                        >
                            {user.login}
                        </Text>
                        <Text numberOfLines={1} style={styles.trackArtistText}>
                            {user.name}
                        </Text>
                        <Text numberOfLines={1} style={styles.bio}>
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


const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: '#1F2429',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        gap: 8,
        borderColor: '#46515B',
        justifyContent: 'space-around',
        borderWidth: 1,
        minHeight: 110
    },
    trackPlayingIconIndicator: {
        position: 'absolute',
        top: 18,
        left: 16,
        width: 16,
        height: 16
    },
    trackPausedIndicator: {
        position: 'absolute',
        top: 14,
        left: 14
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50
    },
    trackTitleText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        maxWidth: '90%'
    },
    trackArtistText: {
        // ...defaultStyles.text,
        color: '#9ca3af',
        fontSize: 14
    },
    bio: {
        color: '#9ca3af',
        fontSize: 12,
        marginVertical: 4
    }
});
