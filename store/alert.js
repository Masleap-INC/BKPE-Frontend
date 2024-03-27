export default {

    namespaced: true,

    state: () => ({
        alerts: []
    }),

    getters: {
        getAlerts(state){
            return state.alerts
        }
    },

    mutations: {
        ADD_ALERT(state, alert) {
            state.alerts.push(alert)
        },
        REMOVE_ALERT(state, index) {
            state.alerts.splice(index, 1)
        }
    },

    actions: {
        addAlert({commit},alert){
            commit('ADD_ALERT',alert)
        },
        removeAlert({commit},index){
            commit('REMOVE_ALERT',index)
        }
    }




}
