export default{
    methods:{
        goTo(el){
            window.location.href=`#${el}`
        }
    },
    template:
    `
    <div class="header d-flex flex-column w-100 justify-content-between align-items-center" style="height: 80vh;">
        <div class="navbar d-flex w-100 flex-row justify-content-between mt-4">
            <h4 onclick="window.location.reload()" class="text-white position-relative mb-0">LOREM</h4>
            <ul class="d-flex flex-row text-white align-items-center mb-0">
                <li @click="goTo('sobre')">SOBRE</li>
                <li @click="goTo('contato')">CONTATO</li>
                <li @click="goTo('form')">ADQUIRA</li>
            </ul>
        </div>
        <hr class="w-75 text-white mt-0">
        <h2 class="text-white m-4 z-1" style="font-size: 8rem; z-index: 1;">
            Lorem ipsum
        </h2>
        <p class="text-white m-4 z-1" style="font-size: 1.5rem; z-index: 1;">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
        </p>
    </div>
    `
}