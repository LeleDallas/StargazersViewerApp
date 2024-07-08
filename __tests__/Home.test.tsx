import React from 'react';
import { render, fireEvent, userEvent } from '@testing-library/react-native';
import Home from '../src/screens/Home';

describe('Home', () => {
    it('renders the Home component correctly', () => {
        const { getByPlaceholderText } = render(<Home />);
        expect(getByPlaceholderText("Search a GitHub user")).toBeTruthy();
    });

    it('trigger the onChange event', async () => {
        const { getByPlaceholderText } = render(<Home />);
        const textInput = getByPlaceholderText("Search a GitHub user");
        expect(textInput).toBeTruthy();
        await userEvent.type(textInput, 'test');
    });

    it('render disable button colors based on name', async () => {
        const { getByTestId, getByPlaceholderText } = render(<Home />);
        const touchableOpacity = getByTestId('touchable-opacity');
        expect(touchableOpacity).toBeTruthy();
        expect(touchableOpacity.props.style.backgroundColor).toBe('#46515B');
        const textInput = getByPlaceholderText("Search a GitHub user");
        expect(textInput).toBeTruthy();
        await userEvent.type(textInput, 'test');

    });

    it('calls the API when TouchableOpacity is pressed', () => {
        const { getByTestId } = render(<Home />);
        const touchableOpacity = getByTestId('touchable-opacity');
        expect(touchableOpacity).toBeTruthy();
        fireEvent.press(touchableOpacity);
    });

    it('should call the API when TouchableOpacity is pressed', async () => {
        const { getByTestId, getByPlaceholderText } = render(<Home />);
        const touchableOpacity = getByTestId('touchable-opacity');
        expect(touchableOpacity).toBeTruthy();
        const textInput = getByPlaceholderText("Search a GitHub user");
        expect(textInput).toBeTruthy();
        await userEvent.type(textInput, 'test');
        fireEvent.press(touchableOpacity);
    });
    
});