import '../plugins/axios'

export default{
    async getCsrfToken(){
       return await  this.axios.get('/sanctum/csrf-cookie');
      }
}