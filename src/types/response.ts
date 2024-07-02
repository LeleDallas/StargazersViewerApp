type User = {
    login: string;
    name: string | null;
    id: string;
    avatarUrl: string;
    followers: {
        totalCount: number;
    };
    hasSponsorsListing: boolean;
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isGitHubStar: boolean;
    bio: string | null;
    repositories: {
        totalCount: number;
    };
};

type Repository = {
    name: string;
    description: string | null;
    url: string;
    stargazerCount: number;
    forkCount: number;
    stargazers: {
        totalCount: number;
    };
    primaryLanguage: {
        name: string;
        color: string;
    };
}



export type UsersResponse = {
    data: {
        search: {
            nodes: User[];
        };
    };
};


export type RepositoryResponse = {
    data: {
        user: {
            repositories: Repository[]
        }
    }
} 