import { View } from "react-native"
import RepositoryBadge from "./RepositoryBadge"
import HasIconBadge from "./HasIconBadge"
import { User } from "../../types/response"

type Prop = {
    user: User
}

export default ({ user }: Prop) => {
    return (
        <View style={{ marginTop: 12, flexDirection: 'row', gap: 8, flexWrap: 'wrap', alignContent: 'center', justifyContent: 'flex-start' }}>
            <RepositoryBadge count={user.repositories?.totalCount ?? 0} />
            <HasIconBadge count={user.followers?.totalCount} name='people' hasBadge />
            <HasIconBadge hasBadge={user.isDeveloperProgramMember} name="cpu" />
            <HasIconBadge hasBadge={user.isGitHubStar} name="star-fill" />
            <HasIconBadge hasBadge={user.hasSponsorsListing} name="code-of-conduct" />
        </View>
    )
}