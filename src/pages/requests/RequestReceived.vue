<template>
    <section>
        <base-card>
            <header>
                <h2>Request received</h2>
            </header>
            <ul v-if="hasRequests">
                <request-item v-for="req in receviedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
            </ul>
            <h3 v-else>You haven`t received any reuest yet!`</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '@/components/RequestItem.vue';

    export default {
        components: {
          RequestItem,  
        },
        computed: {
            receviedRequests() {
                return this.$store.getters.requests
            },
            hasRequests() {
                return this.$store.getters.hasRequests
            }
        }
    }
</script>

<style scoped>
    header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>