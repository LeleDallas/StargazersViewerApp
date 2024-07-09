import { Image, Text, View } from "react-native";
import { globalStyle } from "../../styles";

type Props = {
    length: number;
    loading: boolean;
}

export default ({ length, loading }: Props) =>
    length === 0 && !loading &&
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../../assets/noData.png')} style={{ width: 200, height: 200, alignSelf: 'center' }} />
        <Text style={globalStyle.text}>No data found</Text>
    </View>

