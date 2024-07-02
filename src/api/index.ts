import axios from 'axios';
import { getRepositories, starred, userQuery } from './model';

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
    },
});


export default {
    user: {
        getAll: async (name: string) =>
           await api.post('/graphql', { query: userQuery, variables: { query: name } })
        ,
    },
    repo: {
        getRepo: async (owner: string,) =>
            await api.post('/graphql', { query: getRepositories, variables: { username: owner } }),
        getStars: async (repoId: string) =>
            await api.post('/graphql', { query: starred, variables: { repoId } }),
    },
};
