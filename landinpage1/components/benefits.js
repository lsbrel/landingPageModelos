export default{
    data(){
        return{

        }
    },
    template:`
    <div id="sobre" class="d-flex flex-column justify-content-center align-items-center" style="margin-top: 10rem">
        <div class="d-flex flex-column">
            <h3 style="font-size: 3rem">O lanche mais saboroso que você</h3>
            <h3 style="margin: auto; color: #1E63CC;font-size: 3rem">vai conhecer.</h3>
        </div>
        <div class="benefits-card d-flex flex-row align-items-center">
            <img class="w-50 p-4" src="../lib/imgs/hamburger.png" />
            <div class="d-flex flex-column text-white justify-content-around">
                <h3 style="font-size: 2rem">Seu lanche suas <label style="color: #fcb900;">regras.</label></h3>
                <p style="font-size: 1.2rem">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
        </div>
    </div>
    `
}