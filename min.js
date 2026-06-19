var DEBUG = false;
var VERSION = "2.3.0-Patched-Final";
var STYLESHEET = '*{text-align:center;_j:center;align-items:center;vertical-align:middle;_f-direction:column;_F-size:inherit;border:none;touch-action:manipulation;-webkit-touch-callout:none;_m:0;_p:0;word-break:keep-all;letter-spacing:inherit;color:rgb(var(--cf));line-_h:160%;outline:0;scroll-behavior:var(--sb);}body, button, input, select, table, textarea, *{_F-family:"Inter", "Roobert", "Helvetica Neue", Helvetica, Arial, sans-serif;letter-spacing:-0.01em;}.dc_series{_b:transparent;}html{min-_h:100vh;min-_h:100svh;_b:black;}body{--cs:black;--cbdr:0, 0, 0;--cbd:13, 13, 14;--cb:27, 27, 29;--cbl:51, 51, 51;--cfd:165, 165, 165;--cf:255, 255, 255;--cbo:#0d0d0e;--f:;_o:hidden;_b:rgb(var(--cb));_h:100vh;_h:100svh;letter-spacing:0.02em;_F-size:var(--fs);}.light{--cs:#383838;--cbdr:255, 255, 255;--cbd:232, 232, 232;--cb:255, 255, 255;--cbl:220, 220, 220;--cfd:0, 0, 0;--cf:13, 13, 14;--cbo:white;--f:hue-rotate(-10deg) b_Rness(.8) contrast(1.1);}.f-white{color:white _i;}div, main, a{_d:_f;}span{_d:inline;text-align:_L;align-self:center;}*::placeholder{line-_h:1.7em;_F-size:var(--fs);color:rgb(var(--cfd));}a{cursor:pointer;}a:link, a:visited, a:hover, a:active{text-decoration:none;}.disabled{cursor:default _i;pointer-events:none _i;opacity:0.2 _i;}.abs, .abs-tr, .abs-r, .abs-tl, .o, .modal{_P:_a;}.o, .abs-tr, .abs-tl{_T:0;}.abs-r, .abs-tr{_R:0;}.o, .abs-tl{_L:0;}.fix-tl{_P:fixed;_T:0;_L:0;}.fr, .tab, .opt, main, .sb, .b, .menu{_f-direction:row;float:none;}.o{_w:100vw;_w:100svw;_h:100vh;_h:100svh;z-index:3;pointer-events:none;opacity:0;animation:fade-out 0.2s;_b:transparent;transition:_b-color 0.1s;}.o.wait, .o.drag{animation:fade-in 0.2s;opacity:1;pointer-events:initial;_b:rgba(var(--cbd), 0.8);}.o.drag{z-index:4;}.o>.drop{pointer-events:none;_F-size:30px;_F-weight:bold;}.o *{pointer-events:initial;}.modal{box-shadow:rgb(var(--cbd)) 0 0 2px;_b:rgb(var(--cb));_p:20px 30px;min-_w:200px;animation:fade-in-grow 0.2s;}.modal>.tt{_F-weight:bold;_p:1em 40px;}.modal>.desc{_p-_B:2em;}.modal>.opts{_p:0 10px;}.modal>.opts>a{_m:0 4px;}.modal>.opts>a>.progress{animation:rotate-cw 1s infinite;_F-size:1.6em;_p:0;}.modal>textarea, .modal>input{white-space:pre-wrap;_h:3.2em;_m:18px;}.modal>textarea.ft, .modal>input.ft{border-radius:4px 4px 0 0;_p-_B:_c(10px + 1em);_m-_B:0;color:rgb(var(--cfd));}.modal>textarea.nowrap, .modal>input.nowrap{_h:1.6em;}.modal .b-entry{_w:260px;_f-wrap:wrap;_j:baseline;}.modal .b-entry>.entry{_m:2px 4px;}.ctx{z-index:3 _i;_P:fixed;_p:4px 10px;}.ctx>.b{_w:_x;min-_w:8em;_m:0;_j:_f-start;}.ctx>.b>.icon{_F-size:1em;_m-_R:0.2em;}.ctx>hr{_w:_x;_h:1px;_b:rgb(var(--cfd));_m:4px 0;}.footer-static{_P:_r;border-radius:0 0 4px 4px;_m-_B:20px;_w:_c(_x - 84px);color:rgb(var(--cfd));_b:rgb(var(--cbl));_p:0 24px;}.ipvs{_w:100vw;_w:100svw;_h:100vh;_h:100svh;}.ipvs>.ipv{animation:fade-in-grow 0.2s;max-_h:_c(90vh - 30px);max-_h:_c(90svh - 30px);max-_w:90vw;max-_w:90svw;}.ipvs>.ipv.fo{animation:fade-out-shrink 0.2s;}.has-tooltip:hover .tooltip{opacity:1;}.has-tooltip .tooltip{pointer-events:none;_P:_a;_b:rgb(var(--cb));opacity:0;transition:opacity 0.2s;_p:2px 4px;box-shadow:var(--cs) 0 0 2px;z-index:1;_F-weight:normal;white-space:nowrap;}.has-tooltip .bt{_T:_c(_x + 6px);}.has-tooltip .tp{_B:_c(_x + 6px);}.w{_w:_x;transition:_h 0.5s;_o:hidden;_m-_B:auto;}.w.zero{_h:0;}.w .post, .w .cm{_w:_c(_x - 20px);}.w .cm>.vp{_o:visible;}.w .post{_m:10px 0;}.w .post, .w .pc{_o:visible;}.w .pc, .w .pc *{_F-size:var(--fs);}.w .img{cursor:pointer;scale:1;transition:scale 0.2s;}.w .img:hover{scale:1.02;}.w .sm, .w .ic{color:rgb(var(--cf));min-_h:50px;}.w .sm{_w:_c(_x - 10px);color:rgb(var(--cfd));_b:linear-gradient(rgb(var(--cb)), transparent);box-shadow:rgb(var(--cb)) 0 -2px 2px;}.w .sm>*{color:rgb(var(--cfd));}.w .sm:hover{_b:rgb(var(--cbl));box-shadow:rgb(var(--cb)) 0 0 2px;}.w .cm{_w:_x;}.w .cml .text, .w .cml .text *{_F-size:var(--fs);}.w .ic{_d:_f;_w:_c(_x - 10px);_b:rgb(var(--cb));box-shadow:rgb(var(--cb)) 0 0 2px;_F-weight:bold;_m-_T:10px;}.w .ic:hover{_b:rgb(var(--cbl));}.sb{_d:_f;_m:0 16px;_p:8px 12px;color:white;_F-weight:bold;_b:#7e4ca0;}.sb>*{color:white;}.sb:hover{_b:#691f9c;}.sb>.icon{_F-size:1.4em;_p-_R:0.2em;}.log{_b:black;_P:fixed;_T:0;z-index:4;_w:100vw;_w:100svw;align-items:_f-start;}.log p{text-align:_L;line-break:anywhere;}input, textarea{_F-size:var(--fs);_h:1.6em;_b:rgb(var(--cbl));color:rgb(var(--cf));text-align:_L;_p:10px 24px;border:2px solid transparent;transition:border 0.2s, _b-color 0.2s, color 0.2s;white-space:nowrap;line-break:anywhere;}input:focus, textarea:focus{_b:rgb(var(--cbdr));border:2px solid #7e4ca0;}input, textarea, .b, .r, .p, .sb, .modal, .tooltip{border-radius:4px;}.p{_b:rgb(var(--cb));box-shadow:var(--cs) 0 0 10px;z-index:1;animation:fade-in-grow 0.2s;}.p>.pc{_w:_c(_x - 60px) _i;_p:30px;}.p>.sb{_m:10px;}.tab{_d:_f;border-radius:4px 4px 0 0;z-index:1;min-_h:1.2em;}.tab>*{_m:0 2px;}.tab .close{_d:_f;_p:8px;}.tab .close>.icon{_F-size:inherit;color:rgb(var(--cfd));}.tab .close:hover>icon{color:rgb(var(--cf));}.ex{_d:_f;_w:_x;}.version{color:rgb(var(--cfd));_m:1em;}.pc>*, .cml .text>*{max-_w:_c(_x - 20px);}.pc *, .cml .text *{_d:initial;text-align:_L;max-_w:_x;white-space:initial;}.pc div, .cml .text div{_d:block;}.pc a, .cml .text a{color:#57abff;}.pc a:hover, .cml .text a:hover{text-decoration:underline;}.opts{_h:_c(_x - 20px);_w:_c(_x - 20px) _i;_p:10px;}.opts>.opt{_w:_c(_x - 20px);_p:6px 10px;_j:space-between;cursor:pointer;}.opts>.opt .label>.icon{_F-size:1em;_m-_R:0.8em;}.opts>.opt .value{_P:_r;_h:20px;_w:40px;_b:rgb(var(--cbdr));border-radius:100px;border:2px solid rgb(var(--cfd));transition:all 0.2s;}.opts>.opt .value::after{content:"";_d:block;_P:_a;_h:16px;_w:16px;border-radius:_x;_m:2px;_b:rgb(var(--cfd));transition:all 0.2s;_L:0;_T:0;}.opts>.opt .value>span{_F-size:22px;color:#7e4ca0;}.opts>.opt.chk .value{border:2px solid #7e4ca0;}.opts>.opt.chk .value::after{_b:#7e4ca0;_L:20px;}.opts>.opt.r{_P:_r;}.opts>.opt.r:hover{_b:rgb(var(--cbl));}.opts>.opt.hr{_F-weight:bold;}.chl, .chl>.tt, .cml{_P:_r;_w:_c(_x - 2em);line-_h:1.5em;line-break:anywhere;transition:all 0.2s;}.chl{align-items:baseline;align-self:center;border-radius:4px;}.chl>.tt{cursor:pointer;_w:_c(_x - 12px);_p:5px 6px;}.chl>.tt>span{_w:_x;}.chl>.tt>span .cm{_d:inline-_f;_h:1em;animation:fade-in 0.2s;}.chl>.tt>span .cm>*{color:rgb(var(--cfd));line-break:strict;}.chl>.tt>span .cm>.icon{_p:0 4px;}.chl>.tt>span .cm .nc *{color:var(--cc);filter:var(--f);}.chl>.tt *{_F-size:var(--fs);color:rgb(var(--cf));}.chl.open{_m:0.8em 1.5em;_b:rgb(var(--cbl));}.chl:hover{_b:rgb(var(--cbl));}.chl .ex.alt{min-_h:40px;}.chl.wr{opacity:1 _i;}.chl.wr .ic{_b:#7e4ca0;}.chl.wr .ic:hover{_b:#691f9c;}.chl.wr.rp .ic{_b:rgb(var(--cbd));}.chl.wr.rp .ic:hover{_b:rgb(var(--cb));}.cml{cursor:pointer;_d:_f;_b:rgb(var(--cb));_w:_c(_x - 20px);_p:6px;animation:fade-in 0.2s;_m:0.2em 0;_m-_R:3px;box-shadow:rgb(var(--cb)) 0 0 2px;_j:_f-start;align-self:_f-end;align-items:_f-start;}.cml:hover{_b:rgb(var(--cbl));}.cml *{text-align:_L;_P:initial;}.cml .writer-dlc{_d:inline;text-_o:ellipsis;_o:clip;white-space:nowrap;max-_w:_x;}.cml .text{align-items:_f-start;_w:_x;text-align:_L;}.cml .vp>.page{align-items:center;}.cml.re{_w:_c(_x - 50px);_P:_r;}.cml .re-icon{_P:_a;_L:-25px;_T:7px;}.cml .re-icon *{_F-size:20px;color:rgb(var(--cfd));}.cml.rp{_b:#7e4ca0;}.cml.rp:hover{_b:#691f9c;}.vp{_w:_x;_h:_x;_o-y:scroll;overscroll-behavior:none;_j:_f-start;align-items:_f-start;}.vp>.page{min-_w:_c(_x - 2px);max-_w:_c(_x - 2px);_p:2px 0 12px 0;align-items:baseline;}.vp>.page .notify .tt:hover{_b:transparent;}.vp>.page .notify .tt *{color:rgb(var(--cfd));}.vp>.page.hu .id{_d:none _i;}video.d, img.d{_w:var(--ds);_h:var(--ds);}img.nikcon{_w:1em;_h:1em;_m-_R:0.2em;}.ip{_F-size:10px _i;}.ip::before{_d:inline;content:" (";}.ip::after{_d:inline;content:")";}.name{_F-weight:bold;}*>.hover{_d:none;}*>.not-hover{_d:_f;}*:hover>.hover{_d:_f;}*:hover>.not-hover{_d:none;}.hd{_F-weight:bold;}.b{_d:_f;_p:4px;_m:10px;_F-weight:bold;}.b:hover{_b:rgba(var(--cf), 0.2);}.b.t{_b:rgba(var(--cf), 0.2);}.b.t:hover{_b:rgba(var(--cf), 0.4);}.gray{color:rgb(var(--cfd));}.gray *{color:rgb(var(--cfd));}.gray>span{color:rgb(var(--cfd));_F-size:20px;}.gray:hover{color:rgb(var(--cf));}.gray:hover>span{color:rgb(var(--cf));}.gray-div{color:rgb(var(--cfd));}.gray-div div{color:rgb(var(--cfd));}.go::after{content:"";_d:block;_P:_a;_w:_x;_h:_x;_b:rgba(var(--cbd), 0.8);}::-webkit-scrollbar{_w:2px;_h:2px;}::-webkit-scrollbar-track{_b:transparent;}::-webkit-scrollbar-thumb{border-radius:1px;_b:#888;}::-webkit-scrollbar-thumb:hover{_b:#555;}.hidden, .grecaptcha-badge, .hn img.nikcon, .chl.block{_d:none _i;visibility:collapse _i;}.material-symbols-outlined{_F-variation-settings:"FILL" 0, "GRAD" 0, "wght" 400, "opsz" 48;user-select:none;}.material-symbols-outlined.f{_F-variation-settings:"FILL" 1, "GRAD" 200, "wght" 400, "opsz" 48;}.icon{_p:0;}.icon.sml{_F-size:1em;}main{_j:_f-start;--cw:340px;}main>*{_P:_r;_h:100vh;_h:100svh;}.video{_b:rgb(var(--cbd));_w:_c(_x - var(--cw));}.video>div{_w:_x;}.main{_h:_x;}.main>div{_P:_a;transition:all 0.2s;}.main>div.p{_L:_c(50% - 180px);_h:130px;_w:360px;}.main>div.p>.src{_w:200px;_m:10px;_o-y:hidden;}.main>div.p>.ph{visibility:hidden;_m-_R:_c(-1em - 20px);_m-_L:20px;z-index:1;}.main>div.p.blank>.src{text-indent:14px;}.main>div.p.blank>.ph{visibility:visible;}.r1{_w:_c(_x / var(--rw1));_T:0;_h:var(--r2t);}.r1.c2{_L:_c(_x / var(--rw1));}.r1.c3{_L:_c(200% / var(--rw1));}.r1.c4{_L:_c(300% / var(--rw1));}.r1{_h:var(--r2t);}.c1{_L:0;}.r2{_w:_c(_x / var(--rw2));_T:var(--r2t);}.r2.c2{_L:_c(_x / var(--rw2));}.r2.c3{_L:_c(200% / var(--rw2));}.r2.c4{_L:_c(300% / var(--rw2));}.r2{_h:_c(_x - var(--r2t));}.max{_h:_x;}iframe{_w:_x;_h:_x;transition:all 0.2s;}.drg{z-index:3;transition:none _i;_L:var(--mx) _i;_T:var(--my) _i;pointer-events:none _i;}.grab{_d:none;_P:_a;_b:rgba(var(--cbl), 0.8);_w:_x;_h:_x;}.rlc{cursor:grab;}.rlc .grab{_d:_f;}.menu{_o:hidden;_j:_f-end;_h:50px;_b:rgba(var(--cbl), 0.8);_P:_a;_T:0;z-index:1;transition:_T 0.2s;}.menu.e{_T:-50px;}.menu span{white-space:nowrap;}.menu>.stretch{cursor:pointer;_w:_x;_h:_x;}.chat{_d:grid;_gtemplate-rows:auto 1fr 0;_w:var(--cw);_b:rgb(var(--cb));}.chat>*{_P:_r;_w:var(--cw);}.chat>.vp.r .chl{opacity:0.2;}main.co{--cw:100vw;}main.co>.video{_d:none _i;visibility:collapse _i;}main.co>.chat{_h:100vh;_h:100svh;_T:0;}main.co .f>.i>textarea{_w:_c(100vw - 100px);_w:_c(100svw - 100px);}.li-c, .ci-c{z-index:2;}.hd{_grow:1;_h:50px;border-_B:rgb(var(--cbl)) 1px solid;}.hd .h{_F-weight:bold;}.hd .help{_P:_a;}.hd .help>span{color:rgb(var(--cbl));}.hd .help:hover>span{color:rgb(var(--cf));}.vp{_grow:2;}.fade{opacity:0;}._R{_R:0;border-radius:100px 0 0 100px;}.cb-c{_grow:3;}.cb-c>a{_P:_a;_b:rgba(var(--cbd), 0.8);}.cb-c>a:hover{_b:rgba(var(--cbl), 0.8);}.cb-c>.pd{_B:8px;min-_w:200px;border:rgb(var(--cbl)) 1px solid;_p:6px 12px;z-index:1;}.cb-c>.pd>div{_f-direction:row;}.cb-c>.pd.m{border-radius:100px;_p:6px;min-_w:0;}.cb-c>._R{_m:0;_p:6px 12px 6px 6px;transition:all 0.2s;}.cb-c>._R.sd{_R:-50px;}.ca{_B:105px;}.nt{_B:150px;}.nt>.cnt{_b-color:#d42727;}.cnt{_w:12px;_h:12px;border-radius:12px;transition:all 0.2s;_d:_f;_F-size:8px;}.li-c{_grow:4;}.li-c .ex>.icon{_F-size:12px;}.li-c .ex:hover{_b:linear-gradient(rgb(var(--cbl)) 60%, transparent);}.li-c input{_h:10px;_p:6px 12px;_m:4px;}.li-c>div{_w:_x;}.li-c>div>*{_P:_r;_w:130px;}.li-c>div>a{_P:_r;_h:30px;_m:4px 18px;_b:rgb(var(--cfd));}.li-c>div img{_h:_x;_w:_x;}.ri-c{_grow:5;}.ri-c>div{_w:_x;_p:6px 0;_b:#7e4ca0;}.ri-c>div *{color:white;}.ci-c{_grow:6;}.ci-c>.p{_w:90%;_P:_a;_B:_c(_x + 10px);}.ci-c>.p>div{_w:_x;}.ci-c.wr{_b:linear-gradient(#7e4ca0, rgb(var(--cb)) 80%);}.f{_P:_r;}.f>.i{min-_h:var(--ih);}.f>.i textarea{_o:hidden;_m:4px 0;_w:240px;_h:20px;_p:10px 40px;white-space:pre-wrap;}.f .d, .f .b.up{_P:_a;_m:10px 5px;transition:all 0.02s linear;}.f .d, .f .d *, .f .b.up, .f .b.up *{color:rgb(var(--cfd));}.f .d:hover, .f .d:hover *, .f .b.up:hover, .f .b.up:hover *{color:rgb(var(--cf));}.f .d>.icon.pv, .f .b.up>.icon.pv{_P:_a;_w:_x;_h:_x;}.f .d{_B:0;_R:0;}.sc{align-self:_f-end;_m-_R:8px;}.sc .sb{_m:0;}.p-dccon{max-_h:50vh;max-_h:50svh;_h:400px;_d:grid;_gtemplate-columns:1fr 40px;}.p-dccon>*{_grow:1;_h:_x;max-_h:50vh;max-_h:50svh;_w:_x;}.dcl{_gcolumn:2;}.dcl *{max-_w:_x;}.dcl a{_w:_x;min-_h:30px;}.dcl a .dm{_w:_x;_h:_x;animation:glow 1s infinite;}.dcl .vp{_h:350px;}.dcc{_gcolumn:1;}.dcc div{_w:_x;}.dcc .vp{_w:_c(_x - 10px);_h:350px;}.dcc .hd{border:none;_b:rgb(var(--cbd));_m:10px 0;}.dcc ._f{_f-wrap:wrap;gap:4px;_j:_f-start;}.dcc .dm{_h:100px;}.dcc .d{cursor:pointer;}.p.up{_b:rgb(var(--cbl));_B:_x;_T:auto;box-shadow:rgb(var(--cbd)) 0 0 4px;_L:0;_w:_c(_x - 20px);_m:0;_p:10px;}.pv-vp{_h:auto;}.pv-vp>.page{_h:200px;max-_w:none;align-items:center;_p:0;}.pv{_P:_r;_b:rgb(var(--cb));_h:180px;_w:180px;_m:10px;_p:0;box-shadow:rgb(var(--cbd)) 0 0 2px;}.pv>.image{_P:_r;_h:140px;_w:140px;}.pv>.image>img{max-_h:_x;max-_w:_x;_m:10px;filter:grayscale(_x);}.pv>.image>.error{color:#d42727;}.pv>.image>.pending{animation:glow-color 1s infinite;}.pv>.desc{_w:_c(_x - 20px);_p:0.2em 0;}.pv>.desc>.file-name{max-_w:_x;text-_o:ellipsis;_o:clip;white-space:nowrap;}.pv>.desc>.size{color:rgb(var(--cfd));}.pv>.close{_m:-4px;_b:rgb(var(--cb));box-shadow:rgb(var(--cbd)) 0 0 2px;}.pv>.close:hover{_b:rgb(var(--cbl));}.pv.error>.image>img{filter:blur(4px);}.pv.up>.image>img{filter:none;}.o-f{order:-1;}.o-l{order:1;}@media(max-aspect-ratio:3/4)_s{main{_f-direction:column;align-items:_f-start;}.video{_h:60vw;_h:60svw;_w:100vw;_w:100svw;_P:fixed;_T:0;}.chat{_h:_c(100vh - 60vw);_h:_c(100svh - 60svw);min-_h:0;_w:100vw;_w:100svw;_P:fixed;_T:60vw;_T:60svw;}.chat>*{_w:100vw;_w:100svw;}.chat>.hd{_d:none _i;visibility:collapse _i;}main.co>.chat>.hd{_d:_f _i;visibility:visible _i;}.ci-c{_f-direction:row;}.sc{_m-_R:0px;align-self:center;}.f>.i>textarea{_w:_c(100vw - 200px) _i;_w:_c(100svw - 200px) _i;}}.nc{_d:grid;_gtemplate-columns:0.6em 0.6em 0.6em;_h:1em _i;_o:hidden;_P:_r;}.nc>div{_grow:1;_d:grid;_gtemplate-rows:1em 1em;_T:-1em;_P:_a;}.nc>div>span{_gcolumn:1;_h:_x;max-_w:1em;_p:0;line-_h:1.2em _i;}.nc>div>.old{_grow:1;}.nc>div>.new{_grow:2;}.nc>div.changed{animation:num-change 0.2s;}.nc>.num-0{_gcolumn:3;}.nc>.num-1{_gcolumn:2;}.nc>.num-2{_gcolumn:1;}@keyframes num-change{from{_T:0;}to{_T:-1em;}}.hl{transition:all 0.3s 0.1s;_b:#7e4ca0;}.hl-alt{animation:blink 0.5s;}@keyframes glow{0%{_b-color:rgba(var(--cfd), 0.8);}50%{_b-color:transparent;}_x{_b-color:rgba(var(--cfd), 0.8);}}@keyframes glow-color{0%{color:rgb(var(--cf));}50%{color:rgb(var(--cfd));}_x{color:rgb(var(--cf));}}@keyframes fade-in{from{opacity:0;}to{opacity:1;}}@keyframes fade-out{from{opacity:1;}to{opacity:0;}}@keyframes fade-in-grow{0%{scale:0.6;opacity:0;}50%{scale:1.02;}_x{scale:1;opacity:1;}}@keyframes fade-out-shrink{from{scale:1;opacity:1;}to{scale:0.6;opacity:0;}}@keyframes blink{0%{opacity:1;}25%{opacity:0.5;}50%{opacity:1;}75%{opacity:0.5;}_x{opacity:1;}}.rotate-ccw-half{animation:rotate-ccw-half 0.8s;}@keyframes rotate-ccw-half{0%{rotate:180deg;}_x{rotate:0deg;}}@keyframes rotate-cw{0%{rotate:0deg;}_x{rotate:360deg;}}';

(async() => {
String.prototype.r = function(regex, string) { return this.replace(regex, string); };
let decoder = new TextDecoder();
function decode(encoded) {
    let binary = atob(encoded.r(/-/g, '+').r(/_/g, '/').r(/\./g, '='));
    let bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) { bytes[i] = binary.charCodeAt(i); }
    return decoder.decode(bytes);
}

let str_dclivechat = decode('REMg65287J2067iM7LGX');
let str_recently = decode('7LWc6re8IOyCrOyaqQ..');
let str_lineBreak = decode('PHA-PGJyPjwvcD4.');
let str_nullNickname = decode('64uJ64Sk7J6E7J2EIOyeheugpe2VmOyEuOyalC4.');
let str_shortPassword = decode('67mE67CA67KI7Zi466W8IDLsnpDrpqwg7J207IOBIOyeheugpe2VmOyEuOyalC4.');
let str_nullCode = decode('64-E67CwIOuwqeyngCDsvZTrk5zrpbwg7J6F66Cl7ZWY7IS47JqULg..');
let str_noGalleryUrl = decode('7J20IOq4sOuKpeydgCBEQ-yduOyCrOydtOuTnCDqsKTrn6zrpqzsl5DshJzrp4wg7IKs7Jqp7ZWgIOyImCDsnojsirXri4jri6Qu');
let str_noGalleryPageUrl = decode('7J20IOq4sOuKpeydgCDquIAg66qp66GdIO2OmOydtOyngOyXkOyEnOunjCDsgqzsmqntlaAg7IiYIOyeiOyKteuLiOuLpC4.');
let str_noSupportMobile = decode('UEPrsoTsoIQg7Y6Y7J207KeA7JeQ7IScIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQu');
let str_logout = decode('66Gc6re47JWE7JuD');
let str_confirm = decode('7ZmV7J24');
let str_cancel = decode('7Leo7IaM');
let str_yes = decode('64Sk');
let str_noValidUrl = decode('7KO87IaM6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6Qu');
let str_openUrlTitle = decode('7J20IOuwqeyGoeydhCDsi5zssq3tlZjsi5zqsqDsirXri4jquYw_');
let str_openInNew = decode('7IOIIOywveyXkOyEnCDsl7TquLA.');
let str_placeholderVideo = decode('7IOd67Cp7IahIOyjvOyGjA..');
let str_placeholderMessage = decode('66mU7Iuc7KeAIOuztOuCtOq4sA..');
let str_placeholderReply = decode('64u16riAIOyeheugpQ..');
let str_placeholderComment = decode('64yT6riAIOyeheugpQ..');
let str_chatHeader = decode('7IOd67Cp7IahIOyxhO2MhQ..');
let str_pullDown = decode('7Iqk7YGs66Gk7ZW07IScIOyxhO2MheydtCDrqYjst4TsirXri4jri6Q.');
let str_pullDownHover = decode('7IOIIOuplOyLnOyngCDrs7TquLA.');
let str_pullDownHover_zero = decode('67O06riw');
let str_pullDownHover_over = decode('MjDqsJwg7J207IOB');
let str_pullDownHover_count = decode('6rCc');
let str_pullDownHover_common = decode('7IOIIOuplOyLnOyngCA.');
let str_nickname = decode('64uJ64Sk7J6E');
let str_password = decode('67mE67CA67KI7Zi4');
let str_code = decode('7L2U65OcIOyeheugpQ..');
let str_replyTo = decode('7JeQ6rKMIOuLteq4gA..');
let str_commentTo = decode('7JeQ6rKMIOuMk-q4gA..');
let str_writeComment = decode('64yT6riAIOyTsOq4sA..');
let str_writeNewComment = decode('7IOIIOuMk-q4gCDsk7DripQg7KSR');
let str_loading = decode('66Gc65Sp7KSR7J6F64uI64ukLg..');
let str_settings = decode('7LGE7YyFIOyEpOyglQ..');
let str_settings_mado = decode('64uk7KSRIO2ZlOuptCDsgqzsmqkgKOuniOuPhCk.');
let str_settings_smoothScroll = decode('67aA65Oc65-s7Jq0IOyKpO2BrOuhpCDslaDri4jrqZTsnbTshZg.');
let str_settings_bigFont = decode('7Y-w7Yq4IO2BrOq4sCDtmZXrjIA.');
let str_settings_showUnfixId = decode('67CY6rOg64uJIOyVhOydtOuUlCDtkZzsi5w.');
let str_settings_smallDccon = decode('65SU7Iuc7L2YIO2BrOq4sCDspITsnbTquLA.');
let str_settings_appendLink = decode('6riAIOuCtOyaqeyXkCDrp4Htgawg7LaU6rCA');
let str_settings_lowLatency = decode('7Ken7J2AIOyxhO2MhSDsp4Dsl7Dsi5zqsIQ.');
let str_settings_chatOnly = decode('67Cp7IahIOyXhuydtCDssYTtjIXssL3rp4wg7IKs7Jqp');
let str_settings_hideLogin = decode('7Jyg64-ZIOuhnOq3uOyduCDsiKjquLDquLA.');
let str_settings_darkMode = decode('64uk7YGsIOuqqOuTnA..');
let str_settings_chat = decode('7LGE7YyFIO2RnOyLnCDrsKnrspU.');
let str_settings_write = decode('7J6Q64-Z7Kek67CpIOuwjyDqvKzrpqzrp5A.');
let str_settings_useZzal = decode('7J6Q64-Z7Kek67CpIOyCrOyaqQ..');
let str_settings_footer = decode('6rys66as66eQIOyImOyglQ..');
let str_settings_nikcon = decode('64uJ64Sk7J6EIOyVhOydtOy9mCDtkZzsi5w.');
let str_chat = decode('7LGE7YyF');
let str_nullContent = decode('7IKt7KCc65CY7JeI6rGw64KYIOyhtOyerO2VmOyngCDslYrripQg6rKM7Iuc66y87J6F64uI64ukLg..');
let str_notice = decode('6rO17KeA');
let str_survey = decode('7ISk66y4');
let str_greeting = decode('7LGE7YyF67Cp7JeQIOyYpOyLoCDqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIQ..');
let str_reconnected = decode('7LGE7YyF7LC97JeQIOuLpOyLnCDsl7DqsrDtlojsirXri4jri6Qu');
let str_error_generic = decode('7JWMIOyImCDsl4bripQg7Jik66WY');
let str_error_blockKey = decode('7JWMIOyImCDsl4bripQg7Jik66WYIChibG9ja19rZXkp');
let str_error_badRequest = decode('7J6Y66q765CcIOyalOyyreyeheuLiOuLpC4.');
let str_imageTooBig = decode('7J2066-47KeA6rCAIOuEiOustCDtgb3ri4jri6Qu');
let str_uploadFail = decode('7J2066-47KeAIOyXheuhnOuTnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
let str_deleteFail = decode('7J2066-47KeAIOyCreygnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
let str_pendingUpload = decode('7JWE7KeBIOyXheuhnOuTnCDspJHsnbgg7J2066-47KeA6rCAIOyeiOyKteuLiOuLpC4.');
let str_postErrorImageTitle = decode('7J2066-47KeAIOyXhuydtCDsmKzrpqzsi5zqsqDsirXri4jquYw_');
let str_postErrorImageDesc = decode('7JeF66Gc65Oc7JeQIOyLpO2MqO2VnCDsnbTrr7jsp4DqsIAg7J6I7Iq164uI64ukLg..');
let str_notifyChatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQmOyXiOyKteuLiOuLpC4.');
let str_runningAlready = decode('7J2066-4IOyLpO2WieykkeyeheuLiOuLpC4.');
let str_tooltip_upload = decode('7J2066-47KeAIOyyqOu2gA..');
let str_dragAndDrop = decode('65Oc656Y6re4IOyVpCDrk5zroa3snLzroZwg7J2066-47KeAIOyYrOumrOq4sA..');
let str_notImage = decode('7J2066-47KeA66eMIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
let str_chatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQnCDqsKTrn6zrpqzsnoXri4jri6Qu');
let str_blanks = decode('4oCA4oCB4oCE4oCF4oCG4oCH4oCI4oCJ4oCK');
let str_settings_commentHighlight = decode('64yT6riA7IiYIO2VmOydtOudvOydtO2KuA..');
let str_addVideo = decode('7JiB7IOBIOy2lOqwgA..');
let str_relocate = decode('67Cw7LmYIOuwlOq-uOq4sA..');
let str_relocateDone = decode('67Cw7LmYIOyZhOujjCE.');
let str_askMado = decode('66qo67CU7J28IO2ZmOqyveyXkOyEnOuKlCDqtozsnqXtlZjsp4Ag7JWK7Iq164uI64ukLgrqt7jrnpjrj4Qg7IKs7Jqp7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
let str_closeAll = decode('7KCE7LK0IOuLq-q4sA..');
let str_download = decode('64uk7Jq066Gc65Oc');
let str_tooltip_close = decode('64ur6riw');
let str_askDeleteZzal = decode('7J6Q64-Z7Kek67CpIOydtOuvuOyngOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw_');
let str_uploadImage = decode('7J2066-47KeAIOyXheuhnOuTnA..');
let str_uploadZzal = decode('7J6Q64-Z7Kek67CpIOyXheuhnOuTnA..');
let str_update = decode('67KE7KCEIOyXheuNsOydtO2KuOuQqA..');
let str_changelog = decode('7KCE7LK0IOuzgOqyveyCrO2VrSDrs7TquLA.');
let str_notBought = decode('6rWs66ek7ZWY7KeAIOyViuydgCDrlJTsi5zsvZjsnoXri4jri6Qu');
let str_delete = decode('7IKt7KCc');
let str_deleteTitle = decode('7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
let str_deleteDesc = decode('7IKt7KCc65CcIOqyjOyLnOusvOydgCDrs7XqtaztlaAg7IiYIOyXhuyKteuLiOuLpC4.');
let str_copyUrl = decode('VVJMIOuzteyCrA..');
let str_block_id = decode('SUQg7LCo64uo');
let str_block_ip = decode('SVAg7LCo64uo');
let str_block_name = decode('64uJ64Sk7J6EIOywqOuLqA..');
let str_blockUserTitle = decode('64uk7J2MIOydtOyaqeyekOulvCDssKjri6jtlZjsi5zqsqDsirXri4jquYw_');
let str_block_word = decode('7YKk7JuM65OcIOywqOuLqA..');
let str_blockAll = decode('7KCE7LK0IOywqOuLqA..');
let str_blockGall = decode('6rCk65-s66asIOywqOuLqA..');
let str_add = decode('7LaU6rCA');
let str_settings_block = decode('7LCo64uoIOyEpOyglQ..');
let str_features = decode('7J207KCcIOq4gOydhCDsmKTrpbjsqr0g7YG066at7ZWY66m0PGJyPuuLpOydjCDrqZTribTrpbwg7IKs7Jqp7ZWgIOyImCDsnojsirXri4jri6Qh');

let doc = document;
let body = doc.body;
let head = doc.head;
let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
let intervalPresets = [ 5000, 3000, 1000 ];
let minInterval = 2000; 
let maxPost = 80;
let maxCommentOnPage = 20;
let maxOpened = 5;
let commentSignitureLength = 8;
let highlightDuration = 500;

let getElementsByClassName = 'getElementsByClassName';
let getElementsByTagName = 'getElementsByTagName';
let querySelector = 'querySelector';
let innerText = 'innerText';
let placeholder = 'placeholder';
let onclick = 'onclick';

let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

let hidden = 'hidden';
let disabled = 'disabled';
let divString = 'div';
let spanString = 'span';

let grecaptchaToken = 'g-recaptcha-token';
let grecaptchaResponse = 'g-recaptcha-response';
let grecaptchaBlock = '6Lc-Fr0UAAAAAOdqLYqPy53MxlRMIXpNXFvBliwI';

let sub = 'subdirectory_arrow_right';
let arrow = 'arrow_downward';

let newRegex = (string, g = true) => {
    string = string.r('?', '\\?');
    if (g) return new RegExp(string, 'g');
    return new RegExp(string);
};

let regexDccon = /:([^,:]+), ([^,:]+):/g;
let regexDcconId = /dccon\.php\?no=([a-z0-9]+)/;
let regexTwitch = /twitch.tv\/(\?channel=)?([A-Za-z0-9_-]+)/;
let regexTwitchLink = /href="(https?:\/\/)?(www.)?twitch.tv\/([^"]+)"/g;
let regexYoutube = /youtu(.be\/|be.com\/watch\?v=|be.com\/v\/|be.com\/shorts\/|be.com\/live\/|be.com\/embed\/)([A-Za-z0-9_-]+)/;
let regexYoutubeLink = /href="(https?:\/\/)?(www.)?youtu(.be\/|be.com\/watch\?v=|be.com\/v\/|
