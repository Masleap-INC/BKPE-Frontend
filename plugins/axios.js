// plugins/axios.js
export default function ({ $axios, redirect, store }) {
    $axios.onError(error => {
      // Handle errors here, for example, you can show error messages or redirect to an error page
      console.error('Axios Error:', error.response.data.detail)

      // You can also handle specific error codes or messages
      if (error.response.status === 401) {
        // Redirect to login page or handle unauthorized access
        store.dispatch("auth/logout")
        redirect('/')
        store.dispatch('alert/addAlert',{message:error.response.data.detail,type:"error"})
      }else{
        redirect('/')
        store.dispatch('alert/addAlert',{message:"An error occured",type:"error"})
      }
      
      // Return a Promise to suppress the error
      return Promise.reject(error)
    })
  
    $axios.onRequest(config => {
      // You can modify the request configuration here, for example, add headers or tokens
      const token = localStorage.getItem("accessToken")
      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`
      }
      return config
    })
  
    $axios.onResponse(response => {
      // You can handle the response here, for example, log the response data
      console.log('Axios Response:', response.data)
      return response
    })
  }
  