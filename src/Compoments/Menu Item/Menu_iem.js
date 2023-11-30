export const menuitem=
[
    {
        id: 0,
        link: '/',
        linkText: 'Desktop',
        child:true,
        submenu:[
            {
            id: 0,
            link: '/',
            linkText: 'Desktop Offer',
            },
            {
                id: 0,
                link: '/',
                linkText: 'Desktop',
                child:true,
                submenu:[
                    {
                        id: 0,
                        link: '/',
                        linkText: 'Star PC',
                        child: true,
                    },
                    {
                        id: 1,
                        link: '/',
                        linkText: 'Ryzen PC',
                        child: true,
                    }
                    
                ]
            }
        ]
    },
    {
        id: 1,
        linkText: 'Leptop',
        link: '/',
        child: false,
       
    },
    {
        id: 2,
        linkText: 'Component',
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
                linkText: 'FAQ',
                child: true,
                submenu: [
                    {
                        id: 21,
                        link: '/',
                        linkText: ' One'
                    },
                    {
                        id: 22,
                        link: '/two',
                        linkText: ' Two'
                    },
                    {
                        id: 23,
                        link: '/three',
                        linkText: ' Three'
                    },
                ]
            },
        ]
    },
    {
        id: "Monitor",
        linkText: 'Leptop',
        link: '/',
        child: false,
       
    },
]