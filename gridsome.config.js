// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost', // 数据类型
        path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://111.231.33.253:1337',
        queryLimit: 1000, // Defaults to 100 查询数据的数量限制
        contentTypes: ['post', 'tag'], // 数据类型
        singleTypes: ['general'], // 设置单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // 设置登录信息，获取 token
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        // 默认会去找 templates 下的同名文件，这里是 StrapiTag.vue
        // component: './src/templates/StrapiTag.vue'
      }
    ]
  }
}
