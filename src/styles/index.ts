import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#fc3c44',
    background: '#24292E',
    text: '#fff',
    textMuted: '#9ca3af',
    buttonActive: '#117F7F',
    buttonInactive: '#46515B'
};

export const globalStyle = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1
    },
    text: {
        color: 'white'
    },
    textInput: {
        color: 'white',
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        textAlign: 'center'
    },
    searchButton: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    card: {
        backgroundColor: '#1F2429',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        borderColor: colors.buttonInactive,
        justifyContent: 'space-around',
        borderWidth: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    userImage: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    userInfo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: '#1F2429',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        gap: 8,
        borderColor: colors.buttonInactive,
        justifyContent: 'space-around',
        borderWidth: 1,
        minHeight: 110
    },
    cardTitleText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        maxWidth: '90%'
    },
    cardDescription: {
        color: colors.textMuted,
        fontSize: 14
    },
    bio: {
        color: colors.textMuted,
        fontSize: 12,
        marginVertical: 4
    }
});


export const theme = {
    dark: true,
    colors: {
        primary: globalStyle.text.color,
        background: globalStyle.background.backgroundColor,
        card: globalStyle.background.backgroundColor,
        text: globalStyle.text.color,
        border: globalStyle.text.color,
        notification: globalStyle.text.color
    }
};
