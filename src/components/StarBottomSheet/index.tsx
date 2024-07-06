import { BottomSheetModal, BottomSheetVirtualizedList } from '@gorhom/bottom-sheet';
import { RefObject, useEffect, useMemo, useState } from 'react';
import api from '../../api';
import { Starred } from '../../types/response';
import UserCard from '../Card/UserCard';

type Props = {
    repositoryId: string;
    bottomSheetModalRef: RefObject<BottomSheetModal>;
}

export default (props: Props) => {
    const { repositoryId, bottomSheetModalRef } = props;
    const snapPoints = useMemo(() => ['50%', '90%'], []);
    const [data, setData] = useState<Starred[]>([]);

    const getStarred = async () => repositoryId !== '' && await api.repo.getStars(repositoryId).then((res) => setData(res))

    useEffect(() => {
        getStarred();
        return () => { };
    }, [repositoryId]);


    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            enableDismissOnClose
            enablePanDownToClose
            snapPoints={snapPoints}

        >
            <BottomSheetVirtualizedList<Starred>
                data={data}
                keyExtractor={(i) => i.node.id}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                renderItem={({ item }) => <UserCard user={item.node} />}
            // contentContainerStyle={styles.contentContainer}
            />
        </BottomSheetModal>);
};
