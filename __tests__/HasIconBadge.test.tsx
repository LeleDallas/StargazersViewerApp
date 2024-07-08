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

    it('renders the correct color based on the color prop', () => {
        const { getByTestId } = render(
            <HasIconBadge hasBadge={true} name="star" color="#E2B340" />
        );
        expect(getByTestId('badgeIcon').props.color).toBe('#E2B340');
    });

    it('renders the correct count based on the count prop', () => {
        const { getByText } = render(
            <HasIconBadge hasBadge={true} name="star" count={5} />
        );
        expect(getByText('5')).toBeTruthy();
    });

    it('renders the correct count when count is zero', () => {
        const { queryByText } = render(
            <HasIconBadge hasBadge={true} name="star" count={undefined} />
        );
        expect(queryByText('0')).toBeNull();
    });

});