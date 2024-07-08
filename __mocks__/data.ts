import { Repository, User } from "../src/types/response";

export const mockUsers: User[] = [
    {
        avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        bio: 'test bio',
        id: '1',
        login: 'test',
        name: 'John Doe',
        repositories: { totalCount: 5 },
        followers: { totalCount: 5 },
        isDeveloperProgramMember: true,
        isGitHubStar: true,
        hasSponsorsListing: true,
        isBountyHunter: true,
        isEmployee: true,
    },
    {
        avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        bio: 'test bio',
        id: '2',
        login: 'test',
        name: 'Jane Smith',
        repositories: { totalCount: 5 },
        followers: { totalCount: 5 },
        isDeveloperProgramMember: true,
        isGitHubStar: true,
        hasSponsorsListing: true,
        isBountyHunter: true,
        isEmployee: true,
    },
    {
        avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
        bio: 'test bio',
        id: '3',
        login: 'test',
        name: 'Alex Johnson',
        repositories: { totalCount: 5 },
        followers: { totalCount: 5 },
        isDeveloperProgramMember: true,
        isGitHubStar: true,
        hasSponsorsListing: true,
        isBountyHunter: true,
        isEmployee: true,
    }
]

export const mockRepositories: Repository[] = [
    {
        id: '1',
        name: 'repo1',
        description: 'test description',
        stargazerCount: 5,
        forkCount: 5,
        primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
        stargazers: { totalCount: 5 },
        url: ''
    },
    {
        id: '2',
        name: 'repo2',
        description: 'test description',
        stargazerCount: 5,
        forkCount: 5,
        primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
        stargazers: { totalCount: 5 },
        url: ''
    },
    {
        id: '3',
        name: 'repo3',
        description: 'test description',
        stargazerCount: 5,
        forkCount: 5,
        primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
        stargazers: { totalCount: 5 },
        url: ''
    }
]