<template>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
            <base-spinner></base-spinner> 
    </div>
   <section v-else>
    <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
   </section>
</template>

<script>
import CoachForm from '@/components/CoachForm.vue';
export default {
    components: {
        CoachForm
    },
    data() {
        return {
            isLoading: false,
            error: null
        }
    },
    methods: {
        async saveData(data) {
            this.isLoading = true;
            try {
                await this.$store.dispatch('registerCoach', data);
            } catch (err) {
                this.error = err.message || 'Something went wrong!';
            }
            this.isLoading = false;
            this.$router.replace('/coaches');
        },
        handleError() {
            this.error = null;
        }
    },
    
}
</script>