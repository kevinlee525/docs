module.exports = {
    themeConfig: {
        logo: '/assets/img/favicon.ico',
        // navbar:false,
        sidebar: 'auto',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'About',
                link: '/about/'
            },
            {
                text: 'Quanxue',
                link: '/quanxue/'
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'Baidu',
                link: 'https://baidu.com'
            },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese/'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese/'
                    }
                ]
            }
        ]
    },
    plugins: {
        '@vuepress/back-to-top': true
    }
}