<!-- src/App.vue -->
<template>
  <div class="app-container">
    <nav class="white z-depth-1" style="padding: 10px; margin-bottom: 10px">
      <div class="nav-wrapper">
        <a
          class="brand-logo left"
          href="#"
          style="padding-left: 10px; color: #00695c"
        >
          Recipe Share
        </a>
        <ul id="nav-mobile" class="right">
          <li>
            <a href="#" @click.prevent="scrollToAdd"
              ><i class="material-icons">add</i> Add</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <recipe-form ref="form" @saved="onSaved" />
    <recipe-list ref="list" />
  </div>
</template>

<script>
import RecipeForm from "./components/RecipeForm.vue";
import RecipeList from "./components/RecipeList.vue";

export default {
  components: { RecipeForm, RecipeList },
  methods: {
    onSaved() {
      // when a recipe is saved, tell list to refresh (RecipeList uses realtime listener anyway)
      const list = this.$refs.list;
      if (list && list.fetchRecipes) list.fetchRecipes();
    },
    scrollToAdd() {
      const formEl = this.$refs.form?.$el;
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.brand-logo {
  font-weight: 700;
}
</style>
