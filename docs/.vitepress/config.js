import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MY 博客",
    base: '/blog-2/',
    description: "前端，博客",
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            // { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: '知识',
                collapsed: true,
                items: [
                    { text: 'api-examples', link: '/api-examples' },
                    { text: 'markdown-examples', link: '/markdown-examples' },
                ],
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
