import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RepositoryCard from '../src/components/Card/RepositoryCard';
import { Repository } from '../src/types/response';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

describe('RepositoryCard', () => {
    const repository: Repository = {
        id: '1',
        name: 'test',
        description: 'test description',
        url: 'test url',
        stargazerCount: 5,
        forkCount: 5,
        stargazers: {
            totalCount: 5
        },
        primaryLanguage: {
            name: 'JavaScript',
            color: 'red'
        }
    }

    it('renders the correct repository name', () => {
        const { getByText } = render(
            <RepositoryCard repository={repository} />
        );
        expect(getByText('test')).toBeTruthy();
    });

    it('triggers an action when the star button is clicked', () => {
        const { getByText } = render(
            <RepositoryCard repository={repository} />
        );

        const starButton = getByText('test');
        fireEvent.press(starButton);
    });

    it("show alert when stars are 0", () => {
        const { getByText } = render(
            <RepositoryCard repository={{ ...repository, stargazerCount: 0 }} />
        );
        const starButton = getByText('test');
        fireEvent.press(starButton);
        expect(Alert.alert).toHaveBeenCalledWith("No Stars", "This repository has no stars.");
    })
});