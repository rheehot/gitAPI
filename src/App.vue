<template>
  <div id="app">
    <Loding v-if="!loding"/>
    <Login v-if="loding && !isMember" />
    <Content v-if="loding && isMember"/>
  </div>
</template>

<script>
//import axios from 'axios';
//<img alt="Vue logo" class="U_log_vue01" src="./assets/logo.png">

import Login from '@/components/Login';
import Loding from '@/components/Loding';
import Content from '@/components/Content';

export default {
  name: 'App',
  computed:{
      loding(){
        return this.$store.state.loding;
      },
      isMember(){
        return this.$store.state.userId !== '' ? true : false
      } 
  },
  components: {
    Login,
    Loding,
    Content
  },
  mounted: function(){
      if(!this.loding){
        const vueThis = this;
        setTimeout(() => {
          vueThis.$store.state.lodingAction = true;
          setTimeout(() => {
            vueThis.$store.state.loding = true;
          },1000);
        }, 2500);
      }
  }
}
</script>

<style lang="scss" >

//reset setting

html, body{
  width:100%;height:100%;background:#000;
  @media only screen and (min-width: 320px) {font-size:12px}
	@media only screen and (min-width: 360px) {font-size:13px}
	@media only screen and (min-width: 768px) {font-size:14px} 
	@media only screen and (min-width: 1250px) {font-size:16px} 
}
html {overflow-y:auto} 
body {margin:0;padding:0;font-family:'Noto Sans KR', 'Spoqa Han Sans', sans-serif;background:#fff;font-weight:400;letter-spacing :-0.5px;line-height: 1;color:#666;word-break:keep-all;line-height:1}
html, h1, h2, h3, h4, h5, h6, form, fieldset, img {margin:0;padding:0;border:0}
h1, h2, h3, h4, h5, h6 {font-size:inherit;font-family:'Noto Sans KR', sans-serif;font-weight:inherit}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block}
em{font-style:normal} 
strong{font-weight:600}
ul, dl,dt,dd {margin:0;padding:0;list-style:none}
legend {position:absolute;margin:0;padding:0;font-size:0;line-height:0;text-indent:-9999em;overflow:hidden}
label, input, button, select, img {vertical-align:middle;font-size:inherit}
input, button {margin:0;padding:0;font-family: inherit;font-size:inherit;color:inherit}
input[type="submit"]{cursor:pointer}
button {cursor:pointer;letter-spacing:inherit}   
input[type=submit] {-webkit-appearance:none;}  
textarea, input[type=text], input[type=password]{ -webkit-appearance:none; /* 그림자 */ ;border-color: #d9d9d9;}
img {-ms-interpolation-mode:bicubic;}  
table{border-spacing:0px;border-collapse:collapse} 
input{border-radius:0}
input::-webkit-input-placeholder {color:#c1c1c1}
input:-ms-input-placeholder {color:#c1c1c1}  
input:focus{color:#333}
textarea, select {font-family:inherit;font-size:inherit;border-color:#ddd;height:40px;background-color:#fff;padding:0 10px}
select {margin:0}
p {margin:0;padding:0;word-break:keep-all;line-height: 1.6}  
hr {display:none}
pre {overflow-x:scroll;font-size:1.1em}
a {color:inherit;text-decoration:none;font-size:inherit}
select { border-radius:0; /* 아이폰 사파리 보더 없애기 */ -webkit-appearance:none; /* 화살표 없애기 for chrome*/ -moz-appearance:none; /* 화살표 없애기 for firefox*/ appearance:none /* 화살표 없애기 공통*/ } 
select::-ms-expand{ display:none /* 화살표 없애기 for IE10, 11*/ }
em{font-weight:500}
select {background:#fff url("/img/icon_aw_btm01.gif")no-repeat;background-position:calc(100% - 15px) center;padding-right: 35px;border:1px solid #d9d9d9;color:#333}
select:focus{background-image:url("/img/icon_aw_top01.gif");color:#333;background-repeat: no-repeat;background-position:  calc(100% - 15px) center}
button{border:0;background:none}
*, :after, :before {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}

//Jmodule mixin
@mixin clear {content:'';clear:both;display:block}
@mixin area {margin-left:auto;margin-right:auto}
@mixin ps_center($size) {left:0;margin-left:auto;margin-right:auto;right:0;width: $size;}
@mixin bg_base01($url) {background:url($url)no-repeat center}
@mixin bg_ch_url($url){background-image: url($url);}
@mixin r_img($mode,$max){
	$mode: '가로'!default;
	$max: 100% !default;
	@if($mode='가로'){width:100%;max-width: $max;}
	@if($mode='세로'){height:100%;max-height:$max;}
}



//Jmodule respones

$S_M: 640px; 
$S_T: 1024px;
$S_W: 1200;
@mixin respond-to($media) {
  @if $media == handhelds {
    @media only screen and (max-width: $S_M) { @content; }
  }
  @else if $media == medium-screens {
    @media only screen and (min-width: $S_M + 1) and (max-width: $S_T - 1) { @content; }
  }
  @else if $media == wide-screens {
    @media only screen and (min-width: $S_T - 1 ) { @content; }
  }
}

//Jmodule repones-theme-setting
@mixin responde-pk01($device) {
    &wd{
        &_full {width:100%}
        @for $i from 1 through 100{
          &_p#{$i}, &_p#{$i}_cd > * {width: $i+"%"}
        }
        @for $i from 1 through 200{
          &_sz#{$i*5},&_Csz#{$i*5} > * {width: $i*5+px}
        }
      }
		
		&ht{
        &_full {height:100%}       
        @for $i from 1 through 100{
          &_p#{$i*1} ,  &_Cp#{$i*1} > * {height: $i+"%"}
        }
        @for $i from 1 through 200{
          &_sz#{$i*5}, &_Csz#{$i*5} > * {height: $i*5+px}
        }    
      }
		
		&ps_{
			&rl, &Crl >*{position:relative}
			&ab, &Cab >*{position:absolute} 
			&st, &Cst >*{position:static}
			&fx, &Cfx >*{position:fixed}
		}

		&sound_only, &blind{position:absolute;left:-9999px;width:0;height:0;overflow:hidden;text-indent:-9999px;font-size:0}
	
		&ds_{
			&block,&Cblock > *,&block_a a,&block_span span , &block_div, &block_strong strong, &block_em em,&block_p p{display: block}
			&inbl,&Cinbl > *,&inbl_a a,&inbl_span span , &inbl_div, &inbl_strong strong, &inbl_em em,&inbl_p p{display: inline-block} 
			&in,&Cin > *,&in_a a,&in_span span , &in_div, &in_strong strong, &in_em em,&in_p p{display: inline}
			&table,&Ctable > *,&table_a,&table_span span , &table_div, &table_strong table, &table_em em,&table_p p{display: table}
            &cell,&Ccell > *,&cell_a a,&cell_span span , &cell_div, &cell_strong table, &cell_em em,&cell_p p{display: table-cell}
			&non,&Cnon > *,&non_a a,&non_span span , &non_div, &non_strong table, &non_em em,&non_p p{display:none}
		} 
	
		&fl_{
			&lt{float:left}
			&rt{float:right}
			&Clt > *{float:left} 
			&non{float:none}
			&Crt > *{float:right}
		}
	
		&ft_{
			@for $i from 10 through 50{
				&sz#{$i}, &sz#{$i}_span span, &sz#{$i}_a a,&sz#{$i}_strong strong,&sz#{$i}_em em,&sz#{$i}_p p,&sz#{$i}_li li{font-size:$i+px}
			}  
		
		
			@for $i from 1 through 30{
				&rem#{$i},&rem#{$i}_span span,&rem#{$i}_a a,&rem#{$i}_strong strong ,&rem#{$i}_em em ,&rem#{$i}_p p , &rem#{$i}_div div, &rem#{$i}_em em{font-size:($i*0.1)+rem}
				&rem#{$i}hf, &rem#{$i}hf_span span , &rem#{$i}hf_a a ,&rem#{$i}hf_strong strong, &rem#{$i}hf_em em, &rem#{$i}hf_p p, &rem#{$i}hf_div div, &rem#{$i}hf_div em{font-size:(($i*0.1)+0.05)+rem}
			}  

			&ct{text-align:center}
			&lt{text-align:left}
			&rt{text-align:right}
		
			@for $i from 1 through 9{
				&wh#{$i*100} ,&Cwh#{$i*100} > * , &wh#{$i*100}_p p, &wh#{$i*100}_em em, &wh#{$i*100}_span span, &wh#{$i*100}_strong strong, &wh#{$i*100}_a a , &wh#{$i*100}_button button{font-weight:($i*100)}
				&Cwh#{$i*100} *{font-weight:($i*100)}
			}
		}
		
		&vt_md{vertical-align:middle} &vt_top{vertical-align:top} &vt_btm{vertical-align:bottom}&vt_us{vertical-align: unset;}&vt_sp{vertical-align: super;}&vt_bs{vertical-align: baseline;}&vt_tp{vertical-align: text-top;}
			
		&lh{
            @for $i from 0 through 30{
				&_#{$i}{line-height:(0.1*$i)}
			}
			@for $i from 0 through 50{ 
				&_px#{$i+10}{line-height:(10+$i)+px}
			}
		}
		
			&ly_{  
				@for $i from 2 through 16{
					&#{$i} > *{float: left;width:calc( 100% / #{$i})}
					&#{$i}:after{@include clear} 
				}
			}
		
			&ht_ct{display:table}
			&ht_ct > * {display:table-cell;vertical-align:middle;height:100%;text-align:center}

			&box_{
				&bd{box-sizing: border-box;}
				&ct{box-sizing: content-box;}
			}
	}

.M_, .TM_{
	@include respond-to(handhelds) {
		@include responde-pk01('M');
	}
}
.TM_, .TAB_, .PT_{
	@include respond-to(medium-screens) {
		@include responde-pk01('TAB');
	} 
}
.PC_, .PT_ {
	@include respond-to(wide-screens) {
		@include responde-pk01('PC');
	}
}  
.T_{
	@include responde-pk01('ALL');
}


//Jmodule User-common-setting

.U_{
	&mg_ct{margin-left:auto;margin-right:auto}

	&bg_{
		&cfff{background:#fff}
		&cf9{background:#f9f9f9}
		&cf8{background:#f8f8f8}
		&cf7{background:#f7f7f7}
		&ca7{background:#a7a7a7}
		&cd9{background:#ddd}
		&cccc{background:#ccc}
		&ceb{background:#ebebeb}
		&c333{background:#333}
		&c777{background:#777}
		&c000{background:#000}
		&cf0{background: #f0f0f0;}
		&cf3{background: #f3f3f3;}
	}

	&ft_{
		&ctsp{color:transparent}
		&cfff{color:#fff}
		&c000{color:#000}
		&c333{color:#333}
		&c555{color:#555}
		&c666{color:#666}
		&c777{color:#777}
		&c999{color:#999}
		&caaa{color:#aaa}
		&cccc{color:#ccc}
		&ca7a7a7{color:#a7a7a7}
		&c6c6c6c{color:#6c6c6c}
		&c6a6a6a{color:#6a6a6a}
		&c767676{color:#767676}
		&cb9b9b9{color:#b9b9b9}
		&c8c8c8c{color:#8c8c8c}
		&ce2e2e2{color:#e2e2e2}
		&c868686{color:#868686}
		&cd9d9d9{color:#d9d9d9}
		&ca4a4a4{color:#a4a4a4}
		&ce70000{color:#e70000}
		&ce50b0b{color:#e50b0b}
		&fm01{font-family: 'Noto Sans KR', sans-serif;}
		&fm02{font-family: 'Montserrat', sans-serif;}
		&fm03{font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }
		&fm04{font-family: 'Black Han Sans', sans-serif;}
		&fm05{font-family: 'Jua', sans-serif;}
	}


	&area01{
		width:100%;max-width:1250px;margin-left:auto;margin-right:auto;
		@include respond-to(handhelds) {padding-left:6.25%;padding-right:6.25%}
		@include respond-to(medium-screens) {padding-left:4.25%;padding-right:4.25%}
	} 
	&area02{ 
		width:100%;max-width:1050px;margin-left:auto;margin-right:auto;
		@include respond-to(handhelds) {padding-left:6.25%;padding-right:6.25%}
		@include respond-to(medium-screens) {padding-left:4.25%;padding-right:4.25%}
	} 
	&area03{
		width:100%;max-width:600px;margin-left:auto;margin-right:auto;
		@include respond-to(handhelds) {padding-left:6.25%;padding-right:6.25%}
	}
	&img_box01 img{width:100%;height:auto}
	&ct_box01{display: table;height: 100%;
		> * {display:table-cell;vertical-align: middle;}
	}
	&ct_box02{display: table;
		> * {display:table-cell;vertical-align: middle;}
	}
	&bd_rd{border-radius: 9999px;}

	&ov_hd{overflow: hidden;}

	&ov_at{overflow: auto;}

	&lt_sp05{letter-spacing: -0.5px;}

	&bd_top01{border-top:1px solid #d9d9d9}
	&bd_top02{border-top:1px dashed #d9d9d9}
	&bd_left01{border-left:1px solid #d9d9d9}
	&bd_left02{border-left:1px dashed #d9d9d9}
	&bd_right01{border-right:1px solid #d9d9d9}
	&bd_right02{border-right:1px dashed #d9d9d9}
	&bd_btm01{border-bottom:1px solid #d9d9d9} 
	&bd_btm02{border-bottom:1px dashed #d9d9d9}
	&bd_all01{border:1px solid #d9d9d9}
	&bd_all02{border:1px dashed #d9d9d9}

	&bd_c000{border-color: #000;} 
 
	&bd_cbd {border-color:#bdbdbd}
	@for $i from 1 through 100{
		&op_#{$i}{opacity: ($i * 0.01)}
	}

	@for $i from 1 through 20{
		&ts_#{$i*5}{transition: ($i * 0.5s) all;}
	}

	@for $i from 1 through 10{
		&ts_dl#{$i*1}{transition-delay: ($i * 0.1s)}
	}

	&hv_Cft{
		&000 a:hover,&000 button:hover{color:#000}
	}

} 

//vue setting

#app {
  width:100%;
  height:100%;
  background:#000;
}



</style>
