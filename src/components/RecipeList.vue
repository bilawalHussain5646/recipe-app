<!-- src/components/RecipeList.vue -->
<template>
  <div>
    <h5 style="margin-bottom: 8px">Recipes</h5>
    <div v-if="recipes.length === 0" class="card-panel grey lighten-4">
      No recipes yet.
    </div>

    <div
      v-for="r in recipes"
      :key="r.id"
      class="card"
      style="padding: 12px; margin-bottom: 10px"
    >
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div>
          <h6 style="margin: 0">{{ r.title }}</h6>
          <small class="grey-text">
            {{ r.category }} • {{ formatDate(r.createdAt) }}
          </small>
        </div>
        <div>
          <button class="btn-flat" @click="deleteRecipe(r.id)" title="Delete">
            <i class="material-icons red-text">delete</i>
          </button>
        </div>
      </div>

      <div style="margin-top: 8px">
        <strong>Ingredients:</strong>
        <ul style="margin: 8px 0; padding-left: 20px">
          <li v-for="(ing, idx) in r.ingredients" :key="idx">{{ ing }}</li>
        </ul>

        <strong>Steps:</strong>
        <p style="white-space: pre-wrap">{{ r.steps }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      recipes: [],
      unsubscribe: null,
    };
  },
  mounted() {
    this.fetchRecipes();
  },
  beforeUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  },
  methods: {
    fetchRecipes() {
      // Query recipes ordered by createdAt desc
      const q = query(collection(db, "recipes"), orderBy("createdAt", "desc"));
      if (this.unsubscribe) this.unsubscribe();
      this.unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          this.recipes = snapshot.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
              id: docSnap.id,
              title: data.title,
              ingredients: data.ingredients || [],
              steps: data.steps || "",
              category: data.category || "",
              createdAt: data.createdAt || null,
            };
          });
        },
        (err) => {
          console.error("Firestore listen error:", err);
        }
      );
    },

    formatDate(ts) {
      try {
        if (!ts) return "";
        // ts is a Firestore Timestamp object
        const d = ts.toDate();
        return d.toLocaleString();
      } catch (e) {
        return "";
      }
    },

    async deleteRecipe(id) {
      if (!confirm("Delete this recipe?")) return;
      try {
        await deleteDoc(doc(db, "recipes", id));
        if (window.M && M.toast)
          M.toast({ html: "Recipe deleted", classes: "red" });
      } catch (e) {
        console.error(e);
        if (window.M && M.toast)
          M.toast({ html: "Delete failed", classes: "red" });
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
