<!-- ./src/views/HomeView.vue -->


<script>
import {GetArticles} from "@/queries/getArticles";
export default {
    apollo: {
        Articles: GetArticles
    },
    data() {
        return {
            Articles: ''
        }
    },
}
</script>

<template>
    <div>
        <h1>My blog site</h1>
        <ul v-if="Articles">
            <li v-for="article in Articles.items" :key="article._id">

                <!-- Add link to the slug on each article title -->
                <router-link :to="article._slug">{{article.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
