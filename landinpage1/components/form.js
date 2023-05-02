export default{
    data(){
        return{
            form:{
                email: "",
                senha: ""
            }
        }
    },
    methods:{
        registerForm(){
            console.log(this.form)
        }
    },
    template:`
    <div class="aside d-flex flex-row justify-content-between align-items-center mb-5">
        <form id="form" class="formulario w-75 d-flex flex-column align-items-center">
            <h2>ASSINE JÁ</h2>
            <input type="text" placeholder="e-mail" v-model="form.email" />
            <input type="password" placeholder="senha" v-model="form.senha" autocomplete="off"/>
            <button @click="registerForm">ASSINE-JÁ</button>
        </form>
        <div class="formulario w-50 d-flex flex-column align-items-center">
            <img src="../lib/imgs/hamburger.png" />
        </div>
    </div>
    `
}