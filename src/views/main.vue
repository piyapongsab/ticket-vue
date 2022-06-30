<template>
  <div>

    <v-tabs fixed-tabs background-color="primary">
      <v-tab> Option </v-tab>
      <v-tab> Another Selection </v-tab>
      <v-tab> Items </v-tab>
      <v-tab> Another Screen </v-tab>
    </v-tabs>
  </div>
</template>
<script>
import { sync } from "vuex-pathify";

export default {
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  computed: {
    ...sync("*"),
  },
};
</script>
