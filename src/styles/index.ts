import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#fc3c44',
    background: '#24292E',
    text: '#fff',
    textMuted: '#9ca3af',
    icon: '#fff',
    maximumTrackTintColor: 'rgba(255,255,255,0.4)',
    minimumTrackTintColor: 'rgba(255,255,255,0.6)'
};

export const fontSize = {
    xs: 12,
    sm: 16,
    base: 20,
    lg: 24
};


export const commonStyle = StyleSheet.create({
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
    card: {
        backgroundColor: '#1F2429',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        borderColor: '#46515B',
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
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

