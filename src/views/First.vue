<template>
    <div class="first">

        <p>1.请问您的性别是：</p>
        <p><input type="radio" name="man" v-model="check" value="男"/>男
            <input type="radio" name="woman" v-model="check" value="女"/>女
            <input type="radio" name="confidentiality" v-model="check" value="保密"/>保密</p>
        <p><router-link to="/second" @click.native="doClick()">下一步</router-link>
            <a href="#" @click="reset">重置</a></p>
    </div>
</template>

<script>
    export default {
        name: "first",
        data(){
            return{
                check:'',
                // multiSelect:0,
                // isSelect:false,
                // isAddData:false
            }
        },
        methods:{
            doClick(){
                alert(this.check);
                this.$store.commit("addSex",this.check);
            },
            reset(){
                this.check = '保密';
            }
        },
        // save() {
        //     if (this.data.isSelect) {
        //         console.log(this.data);
        //     } else {
        //         alert(this.data.check + '必选');
        //     }
        // }
    }
</script>

<style scoped>
    .first{
        padding: 20px;
    }
    input[type='radio']{
        padding: 10px 20px;
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