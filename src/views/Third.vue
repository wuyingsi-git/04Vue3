<template>
    <div class="third">

        <p>3.请介绍一下自己</p>
        <p><textarea v-model="introduction"></textarea></p>
        <p><router-link to="/fourth" @click.native="doClick()">提交</router-link>
            <router-link to="/second" >上一步</router-link>
            <a href="#" @click="reset">重置</a></p>
    </div>
</template>

<script>
    export default {
        name: "third",
        data(){
            return{
                introduction:''
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addText",this.introduction);
                alert(this.$store.state.text);
            },
            reset(){
                this.introduction = '';
            }
        }
    }
</script>

<style scoped>
    .third{
        padding: 20px;
    }
    textarea{
        width: 400px;
        height: 170px;
    }
    p{
        font-size: 18px;
    }
    p a{
        text-decoration: none;
        padding: 15px;
        font-weight: bold;
        color: #7b68ee;
    }

</style>