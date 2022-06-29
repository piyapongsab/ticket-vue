<template>
    <div>
        <v-flex md2>

            <v-text-field md2
              label="Regular"
            ></v-text-field>
        </v-flex>
        <v-select
            :items="items"
            label="Outlined style"
            outlined
          ></v-select>
    </div>
</template>
<script>
import { sync } from 'vuex-pathify'

export default {
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

    }
  },
  computed: {
    ...sync('*'),
  },
}
</script>
