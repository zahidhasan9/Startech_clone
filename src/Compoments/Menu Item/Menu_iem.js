export const menuitem=
[
    {
        id: 1,
        link: '/',
        linkText: 'Home'
    },
    {
        id: 1,
        linkText: 'About',
        child: true,
        submenu: [
            {
                id: 11,
                link: '/',
                linkText: 'Home One'
            },
            {
                id: 12,
                link: '/hometwo',
                linkText: 'Home Two'
            },
            {
                id: 13,
                link: '/homethree',
                linkText: 'Home Three'
            },
        ]
    },
    {
        id: 2,
        linkText: 'Pages',
        child: true,
        submenu: [
            {
                id: 21,
                link: '/about',
                linkText: 'About us'
            },
            {
                id: 22,
                link: '/team',
                linkText: 'Our Team'
            },
            {
                id: 23,
                link: '/teamdetail',
                linkText: 'Team Details'
            },
            {
                id: 24,
                link: '/careers',
                linkText: 'Careers'
            },
            {
                id: 25,
                link: '/faq',
                linkText: 'FAQ'
            },
        ]
    },
]