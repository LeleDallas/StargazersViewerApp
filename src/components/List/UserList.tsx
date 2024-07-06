import { VirtualizedList } from 'react-native';
import { User } from '../../types/response';
import UserCard from '../Card/UserCard';

type Props = {
    users: User[];
}

export default (props: Props) => {
    const { users } = props;
    return (
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
