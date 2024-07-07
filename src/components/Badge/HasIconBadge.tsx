import { View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {
    hasBadge: boolean;
    name: string;
}
export default (props: Props) => {
    const { hasBadge, name } = props;

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
            <Octicons testID='badgeIcon' name={name} color="#fff" size={14} />
        </View>
    );
};
