<template>
  <el-card class="card">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名/邮箱" prop="identifier">
        <el-input v-model="ruleForm.identifier" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        identifier: "celina520524",
        password: "12345678",
      },
      rules: {
        identifier: [
          { required: true, message: "请输入用户名/邮箱", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("GetInfo", this.ruleForm).then((res) => {
            if (res) {
              this.$router.push("/blog");
            }
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>