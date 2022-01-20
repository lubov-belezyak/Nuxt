module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'main-image': "url('/images/main.png')",
                'card-gold': "url('/images/card-personal-gold.png')",
                'card-gray': "url('/images/card-personal-gray.png')",
                'card-green': "url('/images/card-personal-green.png')",
                'card-dark' : "url('/images/card-dark.png')"
            },
            colors:{
                transparent: 'transparent',
                current: 'currentColor',
                'gold-1': '#f4ce77',
                'gold-2': '#c2a153',
                'back-gray': '#212123',
                'back-card': '#2D2D2F',
                'back-block-3':'#27272B',
                'green-1': '#9ED27E',
                'green-2': '#639D41'
            }
        },
        container: {
            center: true
        },
        listStyleType: {
            dash: 'dash'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}