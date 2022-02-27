<template>
<div class="info">
      <a-descriptions title="Post" v-for="post in posts" :key="post.id">
        <a-descriptions-item label="Table 1: Title">
          {{post.title }}
        </a-descriptions-item>
        <a-descriptions-item label="Table 1: Description">
          {{post.description }}
        </a-descriptions-item>
        <a-descriptions-item label="Table 2: User">
         {{post.user.name }}
        </a-descriptions-item>
        <a-descriptions-item label="Table 3: Tag">
         {{post.tag.name }}
        </a-descriptions-item>
      </a-descriptions>
</div>
</template>

<script>
import { server } from "@/utils/helper";
import axios from "axios";

export default {
  data() {
    return {
      posts: {
        title:'',
        description: '',
        user:{
          userName: ''
        },
        tag:{
          tagName:''
        }
      },
    };
  },
  created() {
    this.fetchPosts();
    
  },
  methods: {
    fetchPosts() {
      axios
        .get(`${server.baseURL}/post`)
        .then(data => {
          this.posts = data.data
          console.log(data);
          });
        },
      },

};
</script>
<style scoped>
.info {
  margin-left: 4em;
  margin-right: 4em;
}
</style>