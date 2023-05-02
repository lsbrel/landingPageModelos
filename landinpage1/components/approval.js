export default {
    data(){
        return{
            pessoas: [
                {
                    nome: 'João Fernandes',
                    comentario: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus ras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis.`,
                },
                {
                    nome: 'Kevin Oliveira',
                    comentario: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus ras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis.`,
                },
                {
                    nome: 'Marcos Alonso',
                    comentario: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus ras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis.`,
                }
            ]
        }
    },
    methods:{
        ver(){
            console.log(this.pessoas[0].comentario)
        }
    },
    template:`
    <div id="approval" class="card-approval d-flex flex-column justify-content-between">
        <div class="d-flex flex-column text-white align-items-center mt-5">
            <h1>Conheça a historia de clientes</h1>
            <h1>satisfeitos</h1>
        </div>
        <div class="d-flex flex-row gap-3 justify-content-center">
            <div v-for="items, index in pessoas" class="d-flex flex-start mb-4 w-25">
                <div class="card w-100">
                    <div class="card-body p-4">
                    <div class="">
                        <h5>{{ items.nome}}</h5>
                        <p class="small">{{ index+1 }} hours ago</p>
                        <p>
                            {{ items.comentario }}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
    `
}