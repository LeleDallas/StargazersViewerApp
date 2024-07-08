import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserList from '../src/components/List/UserList';
import { User } from '../src/types/response';
import { mockUsers } from '../__mocks__/data';


describe('UserList component', () => {
    it('renders user list correctly', () => {
        const { getByText } = render(
            <NavigationContainer>
                <UserList users={mockUsers} loading={false} />
            </NavigationContainer>
        );
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByText('Jane Smith')).toBeTruthy();
        expect(getByText('Alex Johnson')).toBeTruthy();
    })

    it('renders loading', () => {
        const { queryByText } = render(
            <NavigationContainer>
                <UserList users={mockUsers} loading />
            </NavigationContainer>
        );
        expect(queryByText('John Doe')).toBeNull();
    })
});