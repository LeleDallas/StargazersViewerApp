import { VirtualizedList } from 'react-native';
import { Repository } from '../../types/response';
import RepositoryCard from '../Card/RepositoryCard';
import Spinner from '../Spinner';

type Props = {
    repositories: Repository[];
    loading: boolean;
}

export default (props: Props) => {
    const { repositories, loading } = props;
    return (
        loading ? <Spinner /> :
            <VirtualizedList<Repository>
                testID='virtualized-list'
                style={{ flex: 1, marginTop: 8 }}
                data={repositories}
                renderItem={({ item }) => <RepositoryCard repository={item} />}
                keyExtractor={(item) => item.id}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
            />
    );
};
