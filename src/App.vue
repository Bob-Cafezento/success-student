<template>
  <div data-app>
    <router-view> </router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  created() {
    this.loggedIn ? this.setHeaders() : this.unsetHeaders();
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  methods: {
    ...mapMutations("auth", ["setHeaders", "unsetHeaders"]),
  },
};
</script>
