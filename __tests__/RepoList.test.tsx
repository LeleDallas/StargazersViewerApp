import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { mockRepositories } from '../__mocks__/data';
import RepoList from '../src/components/List/RepoList';


describe('UserList component', () => {
    it('renders user list correctly', () => {
        const { getByText } = render(
            <NavigationContainer>
                <RepoList repositories={mockRepositories} loading={false} />
            </NavigationContainer>
        );
        expect(getByText('repo1')).toBeTruthy();
        expect(getByText('repo2')).toBeTruthy();
        expect(getByText('repo3')).toBeTruthy();
    })

    it('renders loading', () => {
        const { queryByText } = render(
            <NavigationContainer>
                <RepoList repositories={mockRepositories} loading />
            </NavigationContainer>
        );
        expect(queryByText('repo1')).toBeNull();
    })
});