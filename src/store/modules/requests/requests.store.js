export default {
    state() {
        return {
            requests: []
        }
    },
    getters: {
        requests(state, _, _2, rootGetters) {
            const coachId = rootGetters.userId;
            return state.requests.filter(req => req.coachId === coachId);
        },
        hasRequests(state, getters) {
            return state.requests && getters.requests.length > 0;
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload)
        },
        setRequests(state, payload) {
            state.request = payload
        }
    },
    actions: {
        async contactCoach(context, payload) {
            const newRequest = {
                
                userEmail: payload.email,
                message: payload.message
            };

            const response = await fetch(`https://vue-test-7513b-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest)
            });

            const responseData = await response.json();

            if(!response.ok) {
                const error = new Error(responseData.message || "Failed to send request");
                throw error;
            }

            newRequest.id = responseData.name;
            newRequest.coachId = payload.coachId;

            context.commit('addRequest', newRequest);
        },

        async fetchRequests(context) {
            const userId = context.rootGetters.userId;
            const response = await fetch(`https://vue-test-7513b-default-rtdb.europe-west1.firebasedatabase.app/requests/${userId}.json`)

            const responseData = await response.json();

            if(!response.ok) {
                const error = new Error(responseData.message || "Failed to fetch requests");
                throw error;
            }

            const requests = [];

            for(const key in responseData) {
                const request = {
                    id: key,
                    coachId: userId,
                    userEmail: responseData[key].userEmail,
                    message: responseData[key].message
                };

                requests.push(request)
            }

            context.commit('setRequests', requests);
        }

    }
}