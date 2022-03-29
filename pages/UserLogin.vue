<template>
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed h-full w-full pt-20">

      

        <!-- Form -->

        <div>
            <UserLoginForm />
        </div>

      
        
    </div>
</template>

<script>

import UserLoginForm from "../components/UserLoginPage/UserLoginForm.vue";


export default {
    layout:'center',
    components: { UserLoginForm  }
}

</script>