<template>
    <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
            <header>
                <h2>Request received</h2>
            </header>
            <div v-if="isLoading">
                <base-spinner></base-spinner> 
            </div>
            <ul v-else-if="hasRequests && !isLoading">
                <request-item v-for="req in receviedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
            </ul>
            <h3 v-else>You haven`t received any reuest yet!`</h3>
        </base-card>
    </section>
    </div>
</template>

<script>
import RequestItem from '@/components/RequestItem.vue';

    export default {
        components: {
          RequestItem,  
        },
        data() {
            return {
                isLoading: false,
                error: null,
            }
        },
        computed: {
            receviedRequests() {
                return this.$store.getters.requests
            },
            hasRequests() {
                return this.$store.getters.hasRequests
            }
        },
        created() {
            this.loadRequests();
        },
        methods: {
            async loadRequests() {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('fetchRequests');
                } catch (err) {
                    this.error = err.message || "Something goes wrong!"
                }
                this.isLoading = false;
                
            },

            handleError() {
                this.error = null;
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