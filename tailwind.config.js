module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'main-image': "url('/images/main.png')"
            },
            colors:{
                transparent: 'transparent',
                current: 'currentColor',
                'gold-1': '#f4ce77',
                'gold-2': '#c2a153'
            }
        },
        container: {
            center: true
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}