<template>
  <div>
    <!-- Heading -->

    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
      <h2 class="text-4xl font-semibold">Notifications</h2>
    </div>

    <!-- Notifications -->

    <div class="w-full">

        <ul>

            <li v-for="notification in notifications" :key="notification.id" class="w-full mb-5">
                <h2 class="w-fit p-3 bg-blue-400 bg-opacity-30 rounded-xl lg:w-1/2 md:w-5/6 sm:w-full">

                    <span class="block w-fit ml-auto mb-2">

                        <!-- Date -->

                        <span class="mr-3">{{new Date(notification.created_at).getDate()+"/"+(new Date(notification.created_at).getMonth()+1)+"/"+new Date(notification.created_at).getFullYear()}}</span>

                        <!-- Time -->

                        <span class="mr-3">{{ formatTime(notification.created_at) }}</span>

                        <!-- View Button -->

                        <span>
                            <button @click="() => deleteNotification(notification.id)" class="inline-block rounded-xl text-white font-semibold text-md border-2 border-white px-2 hover:bg-white hover:text-blue-600 duration-300">Delete</button>
                        </span>

                    </span>

                    <!-- Message -->

                    <span class="block">

                        <span class="mr-5 text-lg">{{ notification.message_description }}</span>

                    </span>

                </h2>
            </li>

        </ul>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters({
            notifications:'notifications/getNotifications'
        }),
    },
    watch: {
        notifications(val, oldVal) {
            this.markNotificationsAsSeen();
        }
    },
    // mounted() {
    //     this.markNotificationsAsSeen();
    // },
    methods: {
        formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
        },
        async markNotificationsAsSeen() {
            console.log(this.notifications)
            try {
                for (const notification of this.notifications) {
                    if(!notification.seen){
                        await this.$axios.put(`/chat/notifications/${notification.id}/`, {
                        seen: true
                    });
                    }
                }
                this.$store.dispatch('notifications/notificationCountZero')
            } catch (error) {
                console.error('Error marking notifications as seen:', error);
            }
        },
        async deleteNotification(id){
            await this.$axios.delete(`/chat/notifications/${id}/`)
            this.$store.dispatch('notifications/getNotifications')
        }
    },
        
};
</script>
