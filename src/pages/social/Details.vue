<template>
  <Layout>
    <el-card shadow="never" style="min-height: 400px; margin-bottom: 20px">
      <div slot="header" class="clearfix">
        <span>{{ result.name }}</span>
        <el-button
          @click="$router.go(-1)"
          style="float: right; padding: 3px 0"
          type="text"
          icon="el-icon-d-arrow-left"
          >返回</el-button
        >
      </div>
      <el-row>
        <el-col :span="9" style="padding: 0px 10px 20px 0px">
          <img
            v-if="result.avatarUrl"
            :src="result.avatarUrl.url"
            style="width: 100%; border-radius: 5px"
          />
          <div style="padding: 10px">
            <font style="font-size: 26px; line-height: 40px; font-weight: 600"
              >{{ result.name }}
              <br />
            </font>
            <!-- <font
              style="
                font-size: 20px;
                font-style: normal;
                font-weight: 300;
                line-height: 35px;
                color: #666;
              "
              >{{ githubUsername }}
              <br />
            </font> -->
            <font
              style="font-size: 14px; line-height: 20px; color: #606266"
              v-if="result.location"
            >
              <i class="el-icon-location-outline"></i>&nbsp;&nbsp;{{
                result.location
              }}
              <br />
            </font>
            <font
              style="font-size: 14px; line-height: 20px; color: #606266"
              v-if="result.email"
            >
              <i class="el-icon-message"></i>&nbsp;&nbsp;{{ result.email }}
              <br />
            </font>
            <font style="font-size: 14px; color: #606266" v-if="result.blog">
              <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
              <a :href="$util.addHttp(result.blog)" target="_blank">{{
                result.blog
              }}</a>
              <br />
            </font>
          </div>
        </el-col>
        <el-col :span="15" style="padding: 0px 20px 20px 10px">
          <div
            style="
              width: 100%;
              min-height: 300px;
              border-radius: 5px;
              border: 1px solid #ebeef5;
              padding: 10px;
              font-size: 16px;
              color: #6a737d;
            "
            v-if="result.bio"
          >
            {{ result.bio }}
          </div>
          <div
            style="
              width: 100%;
              min-height: 300px;
              border-radius: 5px;
              border: 1px solid #ebeef5;
              padding: 30px;
              text-align: center;
              font-size: 30px;
              color: #dddddd;
            "
            v-else
          >
            <b>◔ ‸◔？没有简介</b>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </Layout>
</template>

<script>
import { mapGetters } from "vuex";
import * as SocialApi from "@/api/social";
export default {
  name: "SocialDetails",
  computed: {
    ...mapGetters(["githubUsername"]),
  },
  data() {
    return {
      result: {},
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.getDetail();
  },
  methods: {
    getDetail() {
      SocialApi[this.$route.query.api + "Single"](this.$route.query.id)
        .then((res) => {
          this.result = res.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>