import api from '../src/api';
import mockAxios from 'jest-mock-axios';
import { getRepositories, starred, userQuery } from '../src/api/model';

jest.mock('axios');

afterEach(() => {
    mockAxios.reset();
});

describe('API Tests', () => {

    it('should call getAll method with the correct parameters', () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        const name = 'john_doe';
        api.user.getAll(name)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: userQuery, variables: { query: name } });
    });

    it('should call getAll method and handle successful response', async () => {
        const name = 'john_doe';
        const response = { data: { user: { id: 1, name: 'John Doe' } } };
        mockAxios.post.mockResolvedValue(response);
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        await api.user.getAll(name)
            .then((data) => {
                expect(data).toEqual([]);
                expect(thenFn).not.toHaveBeenCalled();
                expect(catchFn).not.toHaveBeenCalled();
            });

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: userQuery, variables: { query: name } });
    });

    it('should call getRepo method with the correct parameters', () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        const owner = 'john';
        api.repo.getRepo(owner)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: getRepositories, variables: { username: owner } });
    });

    it('should call getRepo method and handle successful response', async () => {
        const owner = 'john';
        const response = { data: { user: { repositories: [{ name: 'repo1' }, { name: 'repo2' }] } } };
        mockAxios.post.mockResolvedValue(response);
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        await api.repo.getRepo(owner)
            .then((data) => {
                expect(data).toEqual([]);
                expect(thenFn).not.toHaveBeenCalled();
                expect(catchFn).not.toHaveBeenCalled();
            });

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: getRepositories, variables: { username: owner } });
    });

    it('should call getStars method with the correct parameters', () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        const repoID = '123';
        api.repo.getStars(repoID)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: starred, variables: { repoID } });
    });

    it('should call getStars method and handle successful response', async () => {

        const repoID = '123';
        const response = { data: { user: { repositories: [{ name: 'repo1' }, { name: 'repo2' }] } } };
        mockAxios.post.mockResolvedValue(response);
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        await api.repo.getStars(repoID)
            .then((data) => {
                expect(data).toEqual([]);
                expect(thenFn).not.toHaveBeenCalled();
                expect(catchFn).not.toHaveBeenCalled();
            });

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: starred, variables: { repoID } });
    });

});
