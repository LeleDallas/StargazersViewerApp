import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { mockUsers } from '../__mocks__/data';
import UserCard from '../src/components/Card/UserCard';

describe('UserCard', () => {

    it('renders user information correctly', () => {
        const { getAllByText } = render(
            <NavigationContainer>
                <UserCard user={mockUsers[0]} />
            </NavigationContainer>
        );

        expect(getAllByText('5')).toBeTruthy();
    });

    it('shows 0 when repositories count is not available', () => {
        const { getByText } = render(
            <NavigationContainer>
                <UserCard user={{ ...mockUsers[0], repositories: { totalCount: undefined } }} />
            </NavigationContainer>
        );
        expect(getByText('0')).toBeTruthy();
    });

    it('trigger the onPress event', () => {
        const { getByText } = render(
            <NavigationContainer>
                <UserCard user={mockUsers[0]} />
            </NavigationContainer>
        );
        expect(getByText('test')).toBeTruthy();
        fireEvent.press(getByText('test'));
    });
});