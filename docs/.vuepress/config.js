module.exports = {
    themeConfig: {
        logo: '/assets/img/favicon.ico',
        theme: 'reco',
        sidebar: 'auto',
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认文案 “标签”
            }
        },
        nav: [{
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'About',
                link: '/about/',
                icon: 'eco-coding'
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
    // navbar:false,
    plugins: ['@vuepress/back-to-top']
}