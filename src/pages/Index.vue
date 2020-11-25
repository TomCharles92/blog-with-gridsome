<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" 
      :style="{ backgroundImage: `url(${GRIDSOME_STRAPI_URL}${general.cover.url})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.allStrapiPost.edges" :key="edge.node.id">
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }} 
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">Tommy</a>
              {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id"
                style="margin-right: 10px;">
                <g-link :to="'/tag/' + tag.id">{{ tag.title }}</g-link>
              </span>
            </p>
            <hr />
          </div>

          <Pager :info="$page.allStrapiPost.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

// $page: Int 这个参数就是动态路由的参数
<page-query>
query ($page: Int) {
  allStrapiPost(perPage: 2, page: $page, order: ASC) @paginate {
    pageInfo {
      totalPages
      currentPage
    },
    edges {
      node {
        id,
        title,
        created_at,
        tags {
          id,
          title
        }
      }
    }
  },
  allStrapiGeneral {
    edges {
      node {
        id,
        title,
        subtitle,
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  name: "HomePage",
  components: { Pager },
  computed: {
    general () {
      return this.$page.allStrapiGeneral.edges[0].node
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
