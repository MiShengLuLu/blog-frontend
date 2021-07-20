<template>
  <Layout>
    <el-card
      shadow="never"
      style="min-height: 400px; margin-bottom: 20px; padding: 0px 0px 20px 0px"
    >
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane
          :label="'粉丝 ' + followersTotal"
          name="followers"
          style="padding: 5px"
        >
          <div>
            <div v-if="$page.followers.edges.length">
              <el-row style="min-height: 200px">
                <el-col
                  :span="8"
                  v-for="item in $page.followers.edges"
                  :key="item.node.id"
                  style="padding: 10px"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px; color: #606266; line-height: 20px"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/followers/${item.node.id}`)"
                      style="text-decoration: none; cursor: pointer"
                      >{{ item.node.name }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.htmlUrl"
                      target="_blank"
                      style="text-decoration: none; cursor: pointer"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.node.cover.url"
                      style="width: 100%; border-radius: 5px; margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center; margin-top: 10px">
                <Pager :info="$page.followers.pageInfo" />
              </div>
            </div>
            <div
              style="
                min-height: 300px;
                margin-bottom: 20px;
                padding: 20px 0px 20px 0px;
                text-align: center;
              "
              v-else
            >
              <font style="font-size: 30px; color: #dddddd">
                <b>(￢_￢) 没有一个粉丝</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          :label="'关注 ' + followingTotal"
          name="following"
          style="padding: 5px"
        >
          <div>
            <div v-if="$page.following.edges.length">
              <el-row style="min-height: 200px">
                <el-col
                  :span="8"
                  v-for="item in $page.following.edges"
                  :key="item.id"
                  style="padding: 10px"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px; color: #606266; line-height: 20px"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/following/${item.node.id}`)"
                      style="text-decoration: none; cursor: pointer"
                      >{{ item.node.name }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.htmlUrl"
                      target="_blank"
                      style="text-decoration: none; cursor: pointer"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.node.cover.url"
                      style="width: 100%; border-radius: 5px; margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center; margin-top: 10px">
                <Pager :info="$page.following.pageInfo" />
              </div>
            </div>
            <div
              style="
                min-height: 300px;
                margin-bottom: 20px;
                padding: 20px 0px 20px 0px;
                text-align: center;
              "
              v-else
            >
              <font style="font-size: 30px; color: #dddddd">
                <b>(￢_￢) 还没有关注一个人</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </Layout>
</template>

<page-query>
query($page: Int) {
  followers: allStrapiFollower (perPage: 9, page: $page) @paginate {
    edges {
      node {
        id
        name
        htmlUrl
        location
        cover {
          url
        }
      }
    }
    pageInfo {
      totalPages
      currentPage
      perPage
    }
  }

  following: allStrapiFollowing (perPage: 9, page: $page) @paginate {
    edges {
      node {
        id
        name
        htmlUrl
        location
        cover {
          url
        }
      }
    }
    pageInfo {
      totalPages
      currentPage
      perPage
    }
  }
}
</page-query>

<script>
import { mapGetters } from "vuex";
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "social",
  },
  name: "Social",
  components: { Pager },
  data() {
    return {
      activeTab: "followers",
    };
  },
  computed: {
    ...mapGetters(["githubUsername", "followersTotal", "followingTotal"]),
  },
};
</script>

<style>
</style>