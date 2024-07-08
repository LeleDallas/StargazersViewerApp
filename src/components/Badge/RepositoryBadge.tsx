import { Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {
    count?: number;
}

export default ({ count }: Props) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#e0e0e0',
            paddingHorizontal: 8,
            paddingVertical: 4,
            gap: 8
        }}>
            <Octicons name="repo" color="#fff" size={14} />
            <Text style={{ color: '#fff', fontSize: 12 }}>{count ?? 0}</Text>
        </View>
    );
};
