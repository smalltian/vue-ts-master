<template>
    <div id="app">
        <nav class="nav">
            <!--<img alt="Vue logo" src="./assets/logo.png">-->
            <!--<strong>TypeScript</strong>-->
        </nav>

        <router-view/>
    </div>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 15px;
    }

    body{
        background: #f7f7f7;
    }
    .nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        background: #eee;
        padding-left: 40px;

        img {
            width: 40px;
        }

        strong {
            font-size: 20px;
        }
    }
    #app{
        padding-top: 80px;
    }
    ul,li{
        list-style: none;
    }
    a{
        list-style: none;
        text-decoration: none;
        color: #333333;
    }
</style>
