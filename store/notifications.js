export default {

    namespaced:true,

    state:()=>({
        notifications:[],
        unseenCount:0,
    }),

    getters:{
        getNotifications(state){
            return state.notifications
        },
        getUnseenCount(state){
            return state.unseenCount
        }
    },

    mutations:{
        ADD_NOTIFICATIONS(store,data){
            store.notifications = data
        },
        UNSEEN_COUNT(store,unseen){
            store.unseenCount = unseen
        },
        NOTIFICATION_COUNT_ZERO(store){
            store.unseenCount = 0
        }
    },

    actions:{
        async getNotifications({commit}){
            const notifications = await this.$axios.$get(`/chat/notifications/`)
            const unseenNotificationsCount = notifications.filter(notification => !notification.seen).length;
            commit('ADD_NOTIFICATIONS',notifications)
            commit('UNSEEN_COUNT',unseenNotificationsCount)
        },
        notificationCountZero({commit}){
            commit('NOTIFICATION_COUNT_ZERO')
        }
    }
}