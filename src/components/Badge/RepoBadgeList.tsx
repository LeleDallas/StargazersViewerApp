import { View } from "react-native"
import { Repository } from "../../types/response"
import HasIconBadge from "./HasIconBadge"
import LanguageBadge from "./LanguageBadge"

type Prop = {
    repository: Repository
}

export default ({ repository }: Prop) => {
    return (
        <View style={{
            marginTop: 12,
            flexDirection: 'row',
            gap: 8,
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'flex-start'
        }}>
            <HasIconBadge hasBadge name='star-fill' color='#E2B340' count={repository.stargazerCount} />
            <HasIconBadge hasBadge name='git-branch' count={repository.forkCount} />
            <LanguageBadge {...repository.primaryLanguage} />
        </View>
    )
}