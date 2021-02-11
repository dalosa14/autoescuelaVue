//ejemplo de mixin
export let mixins = {
    created: function () {
      this.getCsrfToken()
    },
    methods: {
         async getCsrfToken(){
            try {
                return await this.axios.get("/sanctum/csrf-cookie");
        
            } catch (error) {
                console.log(error)
            }
        }
    }
  }
