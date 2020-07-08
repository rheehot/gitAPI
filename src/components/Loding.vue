<template>
    <div class="U_loding" :class="lodingAction" >
        <div class="U_ct_box01 T_wd_full">
            <div class="U_loding_log">
                <img :src="require('@/assets/GitHub-Mark-Light.png')" alt="">      
                <span class="U_loding_txt T_ds_block U_ft_cfff T_ft_rem14">
                    Loding
                    <span class="U_loding_point ">{{point}}</span>
                </span>          
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loding',
    data: function () {
        return {
            point:''
        }
    },
    computed:{
        lodingAction(){
            return this.$store.state.lodingAction ? 'on' : '';
        },   
    },
    created: function (){
        const vueThis = this;
        setInterval(() => {
            if(vueThis.point == '.....'){
                vueThis.point = '.';
            }else{
                vueThis.point += '.';
            }
        }, 600);
    }
}
</script>

<style>
    .U_loding{background:#000;width:100%;height:100%;transition: 1s all;opacity: 1;}
    .U_loding.on{opacity: 0;}
    .U_loding_log{width:100%;text-align: center;}
    .U_loding_txt{margin-top:20px;letter-spacing: 1px;}
</style>