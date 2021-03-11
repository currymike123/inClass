<template>
  <div id="my-wall">
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <div class="content-item">
          <div class="card">
            <div class="card-content">
              <form @submit.prevent="addPost">
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Owner</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="text"
                          placeholder="Name"
                          v-model="newPost.user.name"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p
                        class="control is-expanded has-icons-left has-icons-right"
                      >
                        <input
                          class="input is-success"
                          type="email"
                          placeholder="Handle"
                          v-model="newPost.user.handle"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Picture URL</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-danger"
                          type="text"
                          placeholder="e.g. Partnership opportunity"
                          v-model="newPost.src"
                        />
                      </div>
                      <p class="help is-danger">
                        This field is required
                      </p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Caption</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <textarea
                          class="textarea"
                          placeholder="Tells us what you think"
                          v-model="newPost.caption"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-label">
                    <!-- Left empty for spacing -->
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <button class="button is-primary">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="content-item" v-for="(post, i) in posts" :key="i">
          <ContentCard :post="post" @delete="deletePost(i)" />
        </div>
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ContentCard from "../components/ContentCard";
import ContentCreation from "../components/ContentCreation.vue";
import { GetMyPosts } from "../model/Posts";

export default {
  data: () => ({
    newPost: {
      user: {},
    },
    posts: [],
  }),
  mounted() {
    this.posts = GetMyPosts();
  },
  components: {
    ContentCard,
  },
  methods: {
    addPost() {
      this.post.unshift(this.newPost);
      this.newPost = { user: {} };
    },
    deletePost(i) {
      this.posts.splice(i, 1);
    },
  },
};
</script>

<style>
.content-item {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
