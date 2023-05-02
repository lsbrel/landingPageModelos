<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LnadingPage</title>
    <!-- IMPORTANDO CDN DE BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <!-- AXIOS -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <!-- STYLES -->
    <link rel="stylesheet" href="./lib/css/styles.css" />
    <!-- Importando FontsAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div id="main">
        <header-component></header-component>
        <benefits-component></benefits-component>
        <approval-component></approval-component>
        <form-component></form-component>
        <footer-component></footer-component>
    </div>
</body>
<script type="module">
    import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
    // Componentes
    import headerComponent from './components/header.js'
    import formComponent from './components/form.js'
    import footerComponent from './components/footer.js'
    import benefitComponent from './components/benefits.js'
    import approvalComponent from './components/approval.js'

    const app = createApp({
        components:{
            'header-component': headerComponent,
            'form-component': formComponent,
            'footer-component': footerComponent,
            'benefits-component': benefitComponent,
            'approval-component': approvalComponent
        },
    }).mount('#main')
</script>
</html>