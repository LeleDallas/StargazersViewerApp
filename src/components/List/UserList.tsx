import { VirtualizedList } from 'react-native';
import { User } from '../../types/response';
import UserCard from '../Card/UserCard';
import Spinner from '../Spinner';

type Props = {
    users: User[];
    loading: boolean;
}

export default (props: Props) => {
    const { users, loading } = props;
    return (
        loading ? <Spinner /> :
            <VirtualizedList<User>
                style={{ flex: 1, marginTop: 8 }}
                data={users}
                renderItem={({ item }) => <UserCard user={item} />}
                keyExtractor={(item) => JSON.stringify(item.id) ?? Math.random().toString(36).substring(7)}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
            />
    );
};
