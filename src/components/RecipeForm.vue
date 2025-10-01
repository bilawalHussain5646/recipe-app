<!-- src/components/RecipeForm.vue -->
<template>
  <div class="card" style="padding: 16px; margin-bottom: 16px">
    <h5>Add a Recipe</h5>

    <div class="row">
      <div class="input-field col s12">
        <input id="title" v-model="title" type="text" />
        <label class="active" for="title">Title</label>
      </div>

      <div class="input-field col s12">
        <textarea
          id="ingredients"
          v-model="ingredientsStr"
          class="materialize-textarea"
        ></textarea>
        <label class="active" for="ingredients"
          >Ingredients (comma separated)</label
        >
      </div>

      <div class="input-field col s12">
        <textarea
          id="steps"
          v-model="steps"
          class="materialize-textarea"
        ></textarea>
        <label class="active" for="steps">Steps / Instructions</label>
      </div>

      <div class="input-field col s6">
        <input id="category" v-model="category" type="text" />
        <label class="active" for="category">Category (e.g., Dessert)</label>
      </div>

      <div
        class="col s6"
        style="display: flex; align-items: flex-end; justify-content: flex-end"
      >
        <button class="btn teal" @click="saveRecipe">
          <i class="material-icons left">save</i> Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      title: "",
      ingredientsStr: "",
      steps: "",
      category: "",
    };
  },
  methods: {
    async saveRecipe() {
      if (!this.title.trim()) {
        if (window.M && M.toast)
          M.toast({ html: "Title required", classes: "red" });
        return;
      }
      try {
        await addDoc(collection(db, "recipes"), {
          title: this.title.trim(),
          ingredients: this.ingredientsStr
            ? this.ingredientsStr.split(",").map((s) => s.trim())
            : [],
          steps: this.steps.trim(),
          category: this.category.trim() || "Uncategorized",
          createdAt: serverTimestamp(),
        });
        // clear form
        this.title = this.ingredientsStr = this.steps = this.category = "";
        if (window.M && M.toast)
          M.toast({ html: "Recipe saved", classes: "teal" });
        this.$emit("saved");
      } catch (e) {
        console.error(e);
        if (window.M && M.toast)
          M.toast({ html: "Error saving recipe", classes: "red" });
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
}
</style>
