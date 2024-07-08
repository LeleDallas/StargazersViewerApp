import { Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {
    hasBadge: boolean;
    name: string;
    count?: number
    color?: string;
}
export default (props: Props) => {
    const { hasBadge, name, count, color = "#fff" } = props;
    return (
        hasBadge &&
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
            <Octicons testID='badgeIcon' name={name} color={color} size={14} />
            {count != undefined && <Text style={{ color: '#fff', fontSize: 12 }}>{count ?? 0}</Text>}
        </View>
    );
};
