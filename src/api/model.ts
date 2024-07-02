
export const userQuery = `#graphql
query GetUsers($query: String!) {
    search(type: USER, query: $query, first: 10) {
        nodes {
            ... on User {
                login
                name
                id
                avatarUrl
                followers {
                    totalCount
                }
                hasSponsorsListing
                isBountyHunter
                isCampusExpert
                isDeveloperProgramMember
                isEmployee
                isGitHubStar
                bio
                repositories {
                    totalCount
                }
            }
        }
    }
}
`;

export const getRepositories = `#graphql
query GetRepositories($username: String!) {
  user(login: $username) {
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        name
        description
        url
        stargazerCount
        forkCount
        stargazers {
          totalCount
        }
        primaryLanguage {
          name
          color
        }
      }
    }
  }
}
`;


export const starred = `#graphql
query GetStargazersByRepoID($repoID: ID!, $first: Int = 100, $after: String) {
  node(id: $repoID) {
    ... on Repository {
      stargazers(first: $first, after: $after) {
        edges {
          node {
            login
            avatarUrl
            url
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
}
`;
