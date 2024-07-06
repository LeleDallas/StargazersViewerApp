
export const userQuery = `#graphql
query GetUsers($query: String!) {
    search(type: USER, query: $query, first: 100) {
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
    repositories(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes {
        id
        name
        archivedAt
        updatedAt
        createdAt
        watchers {
          totalCount
        }
        diskUsage
        licenseInfo {
          key
        }
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
              name
              id
              avatarUrl
              followers {
                  totalCount
              }
              hasSponsorsListing
              isBountyHunter
              isDeveloperProgramMember
              isEmployee
              isGitHubStar
              bio
              repositories {
                  totalCount
              }
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
