import { Text } from "react-native";
import { User } from "../../types/response";
import { globalStyle } from "../../styles";

type Props = {
    user: User;
}

export default ({ user }: Props) => {
    return (
        <>
            <Text numberOfLines={1} style={globalStyle.cardTitleText}>{user.login}</Text>
            {user.name && user.name?.length > 0 && <Text numberOfLines={1} style={globalStyle.cardDescription}>{user.name}</Text>}
            {user.bio && user.bio?.length > 0 && <Text numberOfLines={1} style={globalStyle.bio}>{user.bio}</Text>}
        </>
    )
}