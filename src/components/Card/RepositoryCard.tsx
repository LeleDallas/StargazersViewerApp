import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Repository } from '../../types/response';
import StarBottomSheet from '../StarBottomSheet';
type Props = {
    repository: Repository;
}
export default (props: Props) => {
    const { repository } = props;
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [repoId, setRepoId] = useState<string>('');
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        if (repository.stargazerCount === 0) {
            Alert.alert('No Stars', 'This repository has no stars.');
        }
        else {
            setRepoId(repository.id);
            bottomSheetModalRef.current?.present();
        }
    }, []);

    return (
        <TouchableOpacity onPress={handlePresentModalPress} >
            <View style={styles.trackItemContainer}>
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
                            {repository.name}
                        </Text>
                        <Text numberOfLines={1} style={styles.trackArtistText}>
                            {repository.description}
                        </Text>
                        <Text numberOfLines={1} style={styles.bio}>
                            {repository.forkCount}
                        </Text>
                        <Text numberOfLines={1} style={styles.bio}>
                            {repository.stargazerCount}
                        </Text>
                        <View style={{
                            flexDirection: 'row', gap: 8, flexWrap: 'wrap', alignContent: 'center',
                            justifyContent: 'flex-start'
                        }}>
                            {/* <RepositoryBadge count={repository.repositories?.totalCount ?? 0} /> */}
                        </View>
                    </View>
                </View>
            </View>
            <StarBottomSheet repositoryId={repoId} bottomSheetModalRef={bottomSheetModalRef} />
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
