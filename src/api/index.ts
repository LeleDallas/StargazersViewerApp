import axios from 'axios';
import { getRepositories, starred, userQuery } from './model';
import { RepositoryResponse, StarredResponse, UsersResponse } from '../types/response';

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    }
});


export default {
    user: {
        getAll: async (name: string) =>
            await api.post('/graphql', { query: userQuery, variables: { query: name } })
                .then(res => (res.data as UsersResponse).data.search.nodes)
                .catch(() => [])
    },
    repo: {
        getRepo: async (owner: string,) =>
            await api.post('/graphql', { query: getRepositories, variables: { username: owner } })
                .then(res => (res.data as RepositoryResponse).data.user.repositories.nodes
                    .sort((a, b) => b.stargazerCount - a.stargazerCount)
                )
                .catch(() => []),
        getStars: async (repoID: string) =>
            await api.post('/graphql', { query: starred, variables: { repoID } })
                .then(res =>
                    (res.data as StarredResponse).data.node.stargazers.edges)
                .catch(() => [])
    }
};
