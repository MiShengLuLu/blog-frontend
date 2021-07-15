<template>
  <Layout>
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ $page.tag.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <ul>
            <li v-for="item in $page.tag.posts" :key="item.id">
              <g-link :to="'/post/' + item.id">{{ item.title }}</g-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag: strapiTag(id: $id) {
    id
    title
    posts {
      id
      title
    }
  }
}
</page-query>

<script>
export default {
  name: "TagPage",
};
</script>