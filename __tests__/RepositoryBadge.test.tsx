import React from 'react';
import RepositoryBadge from '../src/components/Badge/RepositoryBadge';
import { render } from '@testing-library/react-native';

describe('RepositoryBadge', () => {
    it('renders the correct count', () => {
        const { getByText } = render(
            <RepositoryBadge count={5} />
        );
        expect(getByText('5')).toBeTruthy();
    });
});