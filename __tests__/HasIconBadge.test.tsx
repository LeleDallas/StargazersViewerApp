import React from 'react';
import HasIconBadge from '../src/components/Badge/HasIconBadge';
import { render } from '@testing-library/react-native';

describe('HasIconBadge', () => {
    it('renders without badge when hasBadge prop is false', () => {
        const { queryByTestId } = render(
            <HasIconBadge hasBadge={false} name="star" />
        );
        expect(queryByTestId('badgeIcon')).not.toBeTruthy();
    });

    it('renders with badge when hasBadge prop is true', () => {
        const { getByTestId } = render(
            <HasIconBadge hasBadge={true} name="star" />
        );
        expect(getByTestId('badgeIcon')).toBeTruthy();
    });

    it('renders the correct icon based on the name prop', () => {
        const { getByTestId } = render(
            <HasIconBadge hasBadge={true} name="star" />
        );
        expect(getByTestId('badgeIcon').props.name).toBe('star');
    });

});