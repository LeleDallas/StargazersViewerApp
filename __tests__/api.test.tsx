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

    it('should call getRepo method with the correct parameters', () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        const owner = 'john';
        api.repo.getRepo(owner)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: getRepositories, variables: { username: owner } });
    });

    it('should call getStars method with the correct parameters', () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn();
        const repoId = '123';
        api.repo.getStars(repoId)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith('/graphql', { query: starred, variables: { repoId } });
    });

});
