import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the Apollo provider and the apollo client
import {createApolloProvider} from "@vue/apollo-option";
import apolloClient from "@/services/apollo-client";

// Initiate the Apollo provide
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

const app = createApp(App)

app.use(router)

//Include the Apollo Provider in the app
app.use(apolloProvider)

app.mount('#app')
