import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../styles';
import { Repository } from '../../types/response';
import RepoBadgeList from '../Badge/RepoBadgeList';
import StarBottomSheet from '../StarBottomSheet';

type Props = {
    repository: Repository;
}

export default (props: Props) => {
    const { repository } = props;
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [repoId, setRepoId] = useState<string>('');

    const handlePresentModalPress = useCallback(() => {
        if (repository.stargazerCount === 0) {
            Alert.alert('No Stars', 'This repository has no stars.');
        }
        else {
            setRepoId(repository.id);
            bottomSheetModalRef.current?.present();
        }
    }, [repository.id, repository.stargazerCount]);

    return (
        <TouchableOpacity onPress={handlePresentModalPress} >
            <View style={globalStyle.cardContainer}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <View style={{ width: '100%' }}>
                        <Text numberOfLines={1} style={globalStyle.cardTitleText}>
                            {repository.name}
                        </Text>
                        <Text numberOfLines={1} style={globalStyle.cardDescription}>
                            {repository.description}
                        </Text>
                        <RepoBadgeList repository={repository} />
                    </View>
                </View>
            </View>
            <StarBottomSheet repositoryId={repoId} bottomSheetModalRef={bottomSheetModalRef} />
        </TouchableOpacity>
    );
};

