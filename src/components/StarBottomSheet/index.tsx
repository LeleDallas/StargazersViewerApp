import { BottomSheetBackdrop, BottomSheetModal, BottomSheetVirtualizedList } from '@gorhom/bottom-sheet';
import { RefObject, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import api from '../../api';
import { colors } from '../../styles';
import { Starred } from '../../types/response';
import UserCard from '../Card/UserCard';
import Spinner from '../Spinner';

type Props = {
    repositoryId: string;
    bottomSheetModalRef: RefObject<BottomSheetModal>;
}

export default (props: Props) => {
    const { repositoryId, bottomSheetModalRef } = props;
    const snapPoints = useMemo(() => ['70%', '90%'], []);
    const [data, setData] = useState<Starred[]>([]);
    const [loading, setLoading] = useState(false);
    const getStarred = async () => {
        if (repositoryId === '') return;
        setLoading(true);
        await api.repo.getStars(repositoryId).then((res) => setData(res)).finally(() => setLoading(false));
    }

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
            backgroundStyle={{ backgroundColor: colors.background }}
            backdropComponent={props =>
                <BottomSheetBackdrop
                    {...props}
                    opacity={0.5}
                    enableTouchThrough={false}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    style={[{
                        backgroundColor: 'rgba(0, 0, 0, 1)'
                    },
                    StyleSheet.absoluteFillObject]
                    }
                />
            }
        >
            {loading ? <Spinner /> :
                <>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 8, color: "#fff" }}>Stars</Text>
                    <BottomSheetVirtualizedList<Starred>
                        data={data}
                        keyExtractor={(i) => i.node.id}
                        getItemCount={(data) => data.length}
                        getItem={(data, index) => data[index]}
                        renderItem={({ item }) => <UserCard user={item.node} close={() => bottomSheetModalRef.current?.close()} />}
                    />
                </>
            }
        </BottomSheetModal>);
};
