import { Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {
    name: string;
    color: string;
}
export default (props: Props) => {
    const { name, color } = props;
    return (
        name !== undefined &&
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
            <Octicons testID='badgeIcon' name={"file-code"} color={color} size={14} />
            <Text style={{ color: '#fff', fontSize: 12 }}>{name}</Text>
        </View>
    );
};
