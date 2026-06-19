var DEBUG = false;
var VERSION = "2.3.0-Patched-Final";
var STYLESHEET = '*{text-align:center;_j:center;align-items:center;vertical-align:middle;_f-direction:column;_F-size:inherit;border:none;touch-action:manipulation;-webkit-touch-callout:none;_m:0;_p:0;word-break:keep-all;letter-spacing:inherit;color:rgb(var(--cf));line-_h:160%;outline:0;scroll-behavior:var(--sb);}body, button, input, select, table, textarea, *{_F-family:"Inter", "Roobert", "Helvetica Neue", Helvetica, Arial, sans-serif;letter-spacing:-0.01em;}.dc_series{_b:transparent;}html{min-_h:100vh;min-_h:100svh;_b:black;}body{--cs:black;--cbdr:0, 0, 0;--cbd:13, 13, 14;--cb:27, 27, 29;--cbl:51, 51, 51;--cfd:165, 165, 165;--cf:255, 255, 255;--cbo:#0d0d0e;--f:;_o:hidden;_b:rgb(var(--cb));_h:100vh;_h:100svh;letter-spacing:0.02em;_F-size:var(--fs);}.light{--cs:#383838;--cbdr:255, 255, 255;--cbd:232, 232, 232;--cb:255, 255, 255;--cbl:220, 220, 220;--cfd:0, 0, 0;--cf:13, 13, 14;--cbo:white;--f:hue-rotate(-10deg) b_Rness(.8) contrast(1.1);}.f-white{color:white _i;}div, main, a{_d:_f;}span{_d:inline;text-align:_L;align-self:center;}*::placeholder{line-_h:1.7em;_F-size:var(--fs);color:rgb(var(--cfd));}a{cursor:pointer;}a:link, a:visited, a:hover, a:active{text-decoration:none;}.disabled{cursor:default _i;pointer-events:none _i;opacity:0.2 _i;}.abs, .abs-tr, .abs-r, .abs-tl, .o, .modal{_P:_a;}.o, .abs-tr, .abs-tl{_T:0;}.abs-r, .abs-tr{_R:0;}.o, .abs-tl{_L:0;}.fix-tl{_P:fixed;_T:0;_L:0;}.fr, .tab, .opt, main, .sb, .b, .menu{_f-direction:row;float:none;}.o{_w:100vw;_w:100svw;_h:100vh;_h:100svh;z-index:3;pointer-events:none;opacity:0;animation:fade-out 0.2s;_b:transparent;transition:_b-color 0.1s;}.o.wait, .o.drag{animation:fade-in 0.2s;opacity:1;pointer-events:initial;_b:rgba(var(--cbd), 0.8);}.o.drag{z-index:4;}.o>.drop{pointer-events:none;_F-size:30px;_F-weight:bold;}.o *{pointer-events:initial;}.modal{box-shadow:rgb(var(--cbd)) 0 0 2px;_b:rgb(var(--cb));_p:20px 30px;min-_w:200px;animation:fade-in-grow 0.2s;}.modal>.tt{_F-weight:bold;_p:1em 40px;}.modal>.desc{_p-_B:2em;}.modal>.opts{_p:0 10px;}.modal>.opts>a{_m:0 4px;}.modal>.opts>a>.progress{animation:rotate-cw 1s infinite;_F-size:1.6em;_p:0;}.modal>textarea, .modal>input{white-space:pre-wrap;_h:3.2em;_m:18px;}.modal>textarea.ft, .modal>input.ft{border-radius:4px 4px 0 0;_p-_B:_c(10px + 1em);_m-_B:0;color:rgb(var(--cfd));}.modal>textarea.nowrap, .modal>input.nowrap{_h:1.6em;}.modal .b-entry{_w:260px;_f-wrap:wrap;_j:baseline;}.modal .b-entry>.entry{_m:2px 4px;}.ctx{z-index:3 _i;_P:fixed;_p:4px 10px;}.ctx>.b{_w:_x;min-_w:8em;_m:0;_j:_f-start;}.ctx>.b>.icon{_F-size:1em;_m-_R:0.2em;}.ctx>hr{_w:_x;_h:1px;_b:rgb(var(--cfd));_m:4px 0;}.footer-static{_P:_r;border-radius:0 0 4px 4px;_m-_B:20px;_w:_c(_x - 84px);color:rgb(var(--cfd));_b:rgb(var(--cbl));_p:0 24px;}.ipvs{_w:100vw;_w:100svw;_h:100vh;_h:100svh;}.ipvs>.ipv{animation:fade-in-grow 0.2s;max-_h:_c(90vh - 30px);max-_h:_c(90svh - 30px);max-_w:90vw;max-_w:90svw;}.ipvs>.ipv.fo{animation:fade-out-shrink 0.2s;}.has-tooltip:hover .tooltip{opacity:1;}.has-tooltip .tooltip{pointer-events:none;_P:_a;_b:rgb(var(--cb));opacity:0;transition:opacity 0.2s;_p:2px 4px;box-shadow:var(--cs) 0 0 2px;z-index:1;_F-weight:normal;white-space:nowrap;}.has-tooltip .bt{_T:_c(_x + 6px);}.has-tooltip .tp{_B:_c(_x + 6px);}.w{_w:_x;transition:_h 0.5s;_o:hidden;_m-_B:auto;}.w.zero{_h:0;}.w .post, .w .cm{_w:_c(_x - 20px);}.w .cm>.vp{_o:visible;}.w .post{_m:10px 0;}.w .post, .w .pc{_o:visible;}.w .pc, .w .pc *{_F-size:var(--fs);}.w .img{cursor:pointer;scale:1;transition:scale 0.2s;}.w .img:hover{scale:1.02;}.w .sm, .w .ic{color:rgb(var(--cf));min-_h:50px;}.w .sm{_w:_c(_x - 10px);color:rgb(var(--cfd));_b:linear-gradient(rgb(var(--cb)), transparent);box-shadow:rgb(var(--cb)) 0 -2px 2px;}.w .sm>*{color:rgb(var(--cfd));}.w .sm:hover{_b:rgb(var(--cbl));box-shadow:rgb(var(--cb)) 0 0 2px;}.w .cm{_w:_x;}.w .cml .text, .w .cml .text *{_F-size:var(--fs);}.w .ic{_d:_f;_w:_c(_x - 10px);_b:rgb(var(--cb));box-shadow:rgb(var(--cb)) 0 0 2px;_F-weight:bold;_m-_T:10px;}.w .ic:hover{_b:rgb(var(--cbl));}.sb{_d:_f;_m:0 16px;_p:8px 12px;color:white;_F-weight:bold;_b:#7e4ca0;}.sb>*{color:white;}.sb:hover{_b:#691f9c;}.sb>.icon{_F-size:1.4em;_p-_R:0.2em;}.log{_b:black;_P:fixed;_T:0;z-index:4;_w:100vw;_w:100svw;align-items:_f-start;}.log p{text-align:_L;line-break:anywhere;}input, textarea{_F-size:var(--fs);_h:1.6em;_b:rgb(var(--cbl));color:rgb(var(--cf));text-align:_L;_p:10px 24px;border:2px solid transparent;transition:border 0.2s, _b-color 0.2s, color 0.2s;white-space:nowrap;line-break:anywhere;}input:focus, textarea:focus{_b:rgb(var(--cbdr));border:2px solid #7e4ca0;}input, textarea, .b, .r, .p, .sb, .modal, .tooltip{border-radius:4px;}.p{_b:rgb(var(--cb));box-shadow:var(--cs) 0 0 10px;z-index:1;animation:fade-in-grow 0.2s;}.p>.pc{_w:_c(_x - 60px) _i;_p:30px;}.p>.sb{_m:10px;}.tab{_d:_f;border-radius:4px 4px 0 0;z-index:1;min-_h:1.2em;}.tab>*{_m:0 2px;}.tab .close{_d:_f;_p:8px;}.tab .close>.icon{_F-size:inherit;color:rgb(var(--cfd));}.tab .close:hover>icon{color:rgb(var(--cf));}.ex{_d:_f;_w:_x;}.version{color:rgb(var(--cfd));_m:1em;}.pc>*, .cml .text>*{max-_w:_c(_x - 20px);}.pc *, .cml .text *{_d:initial;text-align:_L;max-_w:_x;white-space:initial;}.pc div, .cml .text div{_d:block;}.pc a, .cml .text a{color:#57abff;}.pc a:hover, .cml .text a:hover{text-decoration:underline;}.opts{_h:_c(_x - 20px);_w:_c(_x - 20px) _i;_p:10px;}.opts>.opt{_w:_c(_x - 20px);_p:6px 10px;_j:space-between;cursor:pointer;}.opts>.opt .label>.icon{_F-size:1em;_m-_R:0.8em;}.opts>.opt .value{_P:_r;_h:20px;_w:40px;_b:rgb(var(--cbdr));border-radius:100px;border:2px solid rgb(var(--cfd));transition:all 0.2s;}.opts>.opt .value::after{content:"";_d:block;_P:_a;_h:16px;_w:16px;border-radius:_x;_m:2px;_b:rgb(var(--cfd));transition:all 0.2s;_L:0;_T:0;}.opts>.opt .value>span{_F-size:22px;color:#7e4ca0;}.opts>.opt.chk .value{border:2px solid #7e4ca0;}.opts>.opt.chk .value::after{_b:#7e4ca0;_L:20px;}.opts>.opt.r{_P:_r;}.opts>.opt.r:hover{_b:rgb(var(--cbl));}.opts>.opt.hr{_F-weight:bold;}.chl, .chl>.tt, .cml{_P:_r;_w:_c(_x - 2em);line-_h:1.5em;line-break:anywhere;transition:all 0.2s;}.chl{align-items:baseline;align-self:center;border-radius:4px;}.chl>.tt{cursor:pointer;_w:_c(_x - 12px);_p:5px 6px;}.chl>.tt>span{_w:_x;}.chl>.tt>span .cm{_d:inline-_f;_h:1em;animation:fade-in 0.2s;}.chl>.tt>span .cm>*{color:rgb(var(--cfd));line-break:strict;}.chl>.tt>span .cm>.icon{_p:0 4px;}.chl>.tt>span .cm .nc *{color:var(--cc);filter:var(--f);}.chl>.tt *{_F-size:var(--fs);color:rgb(var(--cf));}.chl.open{_m:0.8em 1.5em;_b:rgb(var(--cbl));}.chl:hover{_b:rgb(var(--cbl));}.chl .ex.alt{min-_h:40px;}.chl.wr{opacity:1 _i;}.chl.wr .ic{_b:#7e4ca0;}.chl.wr .ic:hover{_b:#691f9c;}.chl.wr.rp .ic{_b:rgb(var(--cbd));}.chl.wr.rp .ic:hover{_b:rgb(var(--cb));}.cml{cursor:pointer;_d:_f;_b:rgb(var(--cb));_w:_c(_x - 20px);_p:6px;animation:fade-in 0.2s;_m:0.2em 0;_m-_R:3px;box-shadow:rgb(var(--cb)) 0 0 2px;_j:_f-start;align-self:_f-end;align-items:_f-start;}.cml:hover{_b:rgb(var(--cbl));}.cml *{text-align:_L;_P:initial;}.cml .writer-dlc{_d:inline;text-_o:ellipsis;_o:clip;white-space:nowrap;max-_w:_x;}.cml .text{align-items:_f-start;_w:_x;text-align:_L;}.cml .vp>.page{align-items:center;}.cml.re{_w:_c(_x - 50px);_P:_r;}.cml .re-icon{_P:_a;_L:-25px;_T:7px;}.cml .re-icon *{_F-size:20px;color:rgb(var(--cfd));}.cml.rp{_b:#7e4ca0;}.cml.rp:hover{_b:#691f9c;}.vp{_w:_x;_h:_x;_o-y:scroll;overscroll-behavior:none;_j:_f-start;align-items:_f-start;}.vp>.page{min-_w:_c(_x - 2px);max-_w:_c(_x - 2px);_p:2px 0 12px 0;align-items:baseline;}.vp>.page .notify .tt:hover{_b:transparent;}.vp>.page .notify .tt *{color:rgb(var(--cfd));}.vp>.page.hu .id{_d:none _i;}video.d, img.d{_w:var(--ds);_h:var(--ds);}img.nikcon{_w:1em;_h:1em;_m-_R:0.2em;}.ip{_F-size:10px _i;}.ip::before{_d:inline;content:" (";}.ip::after{_d:inline;content:")";}.name{_F-weight:bold;}*>.hover{_d:none;}*>.not-hover{_d:_f;}*:hover>.hover{_d:_f;}*:hover>.not-hover{_d:none;}.hd{_F-weight:bold;}.b{_d:_f;_p:4px;_m:10px;_F-weight:bold;}.b:hover{_b:rgba(var(--cf), 0.2);}.b.t{_b:rgba(var(--cf), 0.2);}.b.t:hover{_b:rgba(var(--cf), 0.4);}.gray{color:rgb(var(--cfd));}.gray *{color:rgb(var(--cfd));}.gray>span{color:rgb(var(--cfd));_F-size:20px;}.gray:hover{color:rgb(var(--cf));}.gray:hover>span{color:rgb(var(--cf));}.gray-div{color:rgb(var(--cfd));}.gray-div div{color:rgb(var(--cfd));}.go::after{content:"";_d:block;_P:_a;_w:_x;_h:_x;_b:rgba(var(--cbd), 0.8);}::-webkit-scrollbar{_w:2px;_h:2px;}::-webkit-scrollbar-track{_b:transparent;}::-webkit-scrollbar-thumb{border-radius:1px;_b:#888;}::-webkit-scrollbar-thumb:hover{_b:#555;}.hidden, .grecaptcha-badge, .hn img.nikcon, .chl.block{_d:none _i;visibility:collapse _i;}.material-symbols-outlined{_F-variation-settings:"FILL" 0, "GRAD" 0, "wght" 400, "opsz" 48;user-select:none;}.material-symbols-outlined.f{_F-variation-settings:"FILL" 1, "GRAD" 200, "wght" 400, "opsz" 48;}.icon{_p:0;}.icon.sml{_F-size:1em;}main{_j:_f-start;--cw:340px;}main>*{_P:_r;_h:100vh;_h:100svh;}.video{_b:rgb(var(--cbd));_w:_c(_x - var(--cw));}.video>div{_w:_x;}.main{_h:_x;}.main>div{_P:_a;transition:all 0.2s;}.main>div.p{_L:_c(50% - 180px);_h:130px;_w:360px;}.main>div.p>.src{_w:200px;_m:10px;_o-y:hidden;}.main>div.p>.ph{visibility:hidden;_m-_R:_c(-1em - 20px);_m-_L:20px;z-index:1;}.main>div.p.blank>.src{text-indent:14px;}.main>div.p.blank>.ph{visibility:visible;}.r1{_w:_c(_x / var(--rw1));_T:0;_h:var(--r2t);}.r1.c2{_L:_c(_x / var(--rw1));}.r1.c3{_L:_c(200% / var(--rw1));}.r1.c4{_L:_c(300% / var(--rw1));}.r1{_h:var(--r2t);}.c1{_L:0;}.r2{_w:_c(_x / var(--rw2));_T:var(--r2t);}.r2.c2{_L:_c(_x / var(--rw2));}.r2.c3{_L:_c(200% / var(--rw2));}.r2.c4{_L:_c(300% / var(--rw2));}.r2{_h:_c(_x - var(--r2t));}.max{_h:_x;}iframe{_w:_x;_h:_x;transition:all 0.2s;}.drg{z-index:3;transition:none _i;_L:var(--mx) _i;_T:var(--my) _i;pointer-events:none _i;}.grab{_d:none;_P:_a;_b:rgba(var(--cbl), 0.8);_w:_x;_h:_x;}.rlc{cursor:grab;}.rlc .grab{_d:_f;}.menu{_o:hidden;_j:_f-end;_h:50px;_b:rgba(var(--cbl), 0.8);_P:_a;_T:0;z-index:1;transition:_T 0.2s;}.menu.e{_T:-50px;}.menu span{white-space:nowrap;}.menu>.stretch{cursor:pointer;_w:_x;_h:_x;}.chat{_d:grid;_gtemplate-rows:auto 1fr 0;_w:var(--cw);_b:rgb(var(--cb));}.chat>*{_P:_r;_w:var(--cw);}.chat>.vp.r .chl{opacity:0.2;}main.co{--cw:100vw;}main.co>.video{_d:none _i;visibility:collapse _i;}main.co>.chat{_h:100vh;_h:100svh;_T:0;}main.co .f>.i>textarea{_w:_c(100vw - 100px);_w:_c(100svw - 100px);}.li-c, .ci-c{z-index:2;}.hd{_grow:1;_h:50px;border-_B:rgb(var(--cbl)) 1px solid;}.hd .h{_F-weight:bold;}.hd .help{_P:_a;}.hd .help>span{color:rgb(var(--cbl));}.hd .help:hover>span{color:rgb(var(--cf));}.vp{_grow:2;}.fade{opacity:0;}._R{_R:0;border-radius:100px 0 0 100px;}.cb-c{_grow:3;}.cb-c>a{_P:_a;_b:rgba(var(--cbd), 0.8);}.cb-c>a:hover{_b:rgba(var(--cbl), 0.8);}.cb-c>.pd{_B:8px;min-_w:200px;border:rgb(var(--cbl)) 1px solid;_p:6px 12px;z-index:1;}.cb-c>.pd>div{_f-direction:row;}.cb-c>.pd.m{border-radius:100px;_p:6px;min-_w:0;}.cb-c>._R{_m:0;_p:6px 12px 6px 6px;transition:all 0.2s;}.cb-c>._R.sd{_R:-50px;}.ca{_B:105px;}.nt{_B:150px;}.nt>.cnt{_b-color:#d42727;}.cnt{_w:12px;_h:12px;border-radius:12px;transition:all 0.2s;_d:_f;_F-size:8px;}.li-c{_grow:4;}.li-c .ex>.icon{_F-size:12px;}.li-c .ex:hover{_b:linear-gradient(rgb(var(--cbl)) 60%, transparent);}.li-c input{_h:10px;_p:6px 12px;_m:4px;}.li-c>div{_w:_x;}.li-c>div>*{_P:_r;_w:130px;}.li-c>div>a{_P:_r;_h:30px;_m:4px 18px;_b:rgb(var(--cfd));}.li-c>div img{_h:_x;_w:_x;}.ri-c{_grow:5;}.ri-c>div{_w:_x;_p:6px 0;_b:#7e4ca0;}.ri-c>div *{color:white;}.ci-c{_grow:6;}.ci-c>.p{_w:90%;_P:_a;_B:_c(_x + 10px);}.ci-c>.p>div{_w:_x;}.ci-c.wr{_b:linear-gradient(#7e4ca0, rgb(var(--cb)) 80%);}.f{_P:_r;}.f>.i{min-_h:var(--ih);}.f>.i textarea{_o:hidden;_m:4px 0;_w:240px;_h:20px;_p:10px 40px;white-space:pre-wrap;}.f .d, .f .b.up{_P:_a;_m:10px 5px;transition:all 0.02s linear;}.f .d, .f .d *, .f .b.up, .f .b.up *{color:rgb(var(--cfd));}.f .d:hover, .f .d:hover *, .f .b.up:hover, .f .b.up:hover *{color:rgb(var(--cf));}.f .d>.icon.pv, .f .b.up>.icon.pv{_P:_a;_w:_x;_h:_x;}.f .d{_B:0;_R:0;}.sc{align-self:_f-end;_m-_R:8px;}.sc .sb{_m:0;}.p-dccon{max-_h:50vh;max-_h:50svh;_h:400px;_d:grid;_gtemplate-columns:1fr 40px;}.p-dccon>*{_grow:1;_h:_x;max-_h:50vh;max-_h:50svh;_w:_x;}.dcl{_gcolumn:2;}.dcl *{max-_w:_x;}.dcl a{_w:_x;min-_h:30px;}.dcl a .dm{_w:_x;_h:_x;animation:glow 1s infinite;}.dcl .vp{_h:350px;}.dcc{_gcolumn:1;}.dcc div{_w:_x;}.dcc .vp{_w:_c(_x - 10px);_h:350px;}.dcc .hd{border:none;_b:rgb(var(--cbd));_m:10px 0;}.dcc ._f{_f-wrap:wrap;gap:4px;_j:_f-start;}.dcc .dm{_h:100px;}.dcc .d{cursor:pointer;}.p.up{_b:rgb(var(--cbl));_B:_x;_T:auto;box-shadow:rgb(var(--cbd)) 0 0 4px;_L:0;_w:_c(_x - 20px);_m:0;_p:10px;}.pv-vp{_h:auto;}.pv-vp>.page{_h:200px;max-_w:none;align-items:center;_p:0;}.pv{_P:_r;_b:rgb(var(--cb));_h:180px;_w:180px;_m:10px;_p:0;box-shadow:rgb(var(--cbd)) 0 0 2px;}.pv>.image{_P:_r;_h:140px;_w:140px;}.pv>.image>img{max-_h:_x;max-_w:_x;_m:10px;filter:grayscale(_x);}.pv>.image>.error{color:#d42727;}.pv>.image>.pending{animation:glow-color 1s infinite;}.pv>.desc{_w:_c(_x - 20px);_p:0.2em 0;}.pv>.desc>.file-name{max-_w:_x;text-_o:ellipsis;_o:clip;white-space:nowrap;}.pv>.desc>.size{color:rgb(var(--cfd));}.pv>.close{_m:-4px;_b:rgb(var(--cb));box-shadow:rgb(var(--cbd)) 0 0 2px;}.pv>.close:hover{_b:rgb(var(--cbl));}.pv.error>.image>img{filter:blur(4px);}.pv.up>.image>img{filter:none;}.o-f{order:-1;}.o-l{order:1;}@media(max-aspect-ratio:3/4)_s{main{_f-direction:column;align-items:_f-start;}.video{_h:60vw;_h:60svw;_w:100vw;_w:100svw;_P:fixed;_T:0;}.chat{_h:_c(100vh - 60vw);_h:_c(100svh - 60svw);min-_h:0;_w:100vw;_w:100svw;_P:fixed;_T:60vw;_T:60svw;}.chat>*{_w:100vw;_w:100svw;}.chat>.hd{_d:none _i;visibility:collapse _i;}main.co>.chat>.hd{_d:_f _i;visibility:visible _i;}.ci-c{_f-direction:row;}.sc{_m-_R:0px;align-self:center;}.f>.i>textarea{_w:_c(100vw - 200px) _i;_w:_c(100svw - 200px) _i;}}.nc{_d:grid;_gtemplate-columns:0.6em 0.6em 0.6em;_h:1em _i;_o:hidden;_P:_r;}.nc>div{_grow:1;_d:grid;_gtemplate-rows:1em 1em;_T:-1em;_P:_a;}.nc>div>span{_gcolumn:1;_h:_x;max-_w:1em;_p:0;line-_h:1.2em _i;}.nc>div>.old{_grow:1;}.nc>div>.new{_grow:2;}.nc>div.changed{animation:num-change 0.2s;}.nc>.num-0{_gcolumn:3;}.nc>.num-1{_gcolumn:2;}.nc>.num-2{_gcolumn:1;}@keyframes num-change{from{_T:0;}to{_T:-1em;}}.hl{transition:all 0.3s 0.1s;_b:#7e4ca0;}.hl-alt{animation:blink 0.5s;}@keyframes glow{0%{_b-color:rgba(var(--cfd), 0.8);}50%{_b-color:transparent;}_x{_b-color:rgba(var(--cfd), 0.8);}}@keyframes glow-color{0%{color:rgb(var(--cf));}50%{color:rgb(var(--cfd));}_x{color:rgb(var(--cf));}}@keyframes fade-in{from{opacity:0;}to{opacity:1;}}@keyframes fade-out{from{opacity:1;}to{opacity:0;}}@keyframes fade-in-grow{0%{scale:0.6;opacity:0;}50%{scale:1.02;}_x{scale:1;opacity:1;}}@keyframes fade-out-shrink{from{scale:1;opacity:1;}to{scale:0.6;opacity:0;}}@keyframes blink{0%{opacity:1;}25%{opacity:0.5;}50%{opacity:1;}75%{opacity:0.5;}_x{opacity:1;}}.rotate-ccw-half{animation:rotate-ccw-half 0.8s;}@keyframes rotate-ccw-half{0%{rotate:180deg;}_x{rotate:0deg;}}@keyframes rotate-cw{0%{rotate:0deg;}_x{rotate:360deg;}}';

(async() => {
String.prototype.r = function(regex, string) { return this.replace(regex, string); }
let decoder = new TextDecoder();
function decode(encoded) {
    let binary = atob(encoded.r(/-/g, '+').r(/_/g, '/').r(/\./g, '='));
    let bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) { bytes[i] = binary.charCodeAt(i); }
    return decoder.decode(bytes);
}

let str_dclivechat = decode('REMg65287J2067iM7LGX');
let str_recently = decode('7LWc6re8IOyCrOyaqQ..');
let str_lineBreak = decode('PHA-PGJyPjwvcD4.')
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
let regexYoutubeLink = /href="(https?:\/\/)?(www.)?youtu(.be\/|be.com\/watch\?v=|be.com\/v\/|be.com\/shorts\/|be.com\/live\/)([^"]+)"/g;

let https = 'https://';
let origin = 'gall.dcinside.com/';
let host = https + origin;
let helpUrl = https +'github.com/Joh1ah/dclivechat';
let boardForms = '/board/forms';
let articleSubmit = boardForms + '/article_submit';
let commentSubmit = boardForms + '/comment_submit';
let dcconInsertIcon = '/dccon/insert_icon';
let deleteSubmit = boardForms + '/delete_submit';
let deletePasswordSubmit = boardForms + '/delete_password_submit';
let commentDeleteSubmit = '/board/comment/comment_delete_submit';

let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

let initTime = getNow();

let gallId = ''; let gallType = ''; let rKey = ''; let gallNum = ''; let gallName = '';
let bMobile = false; let bMinor = true; let bMini = false; let bLogin = false; let bWriteUnavailable = false;
let bMado = true;
let userNickname = ''; let userId = ''; let userImg = ''; let bUserFix = false;
let bCaptcha = false; let bCaptchaComment = false;
let targetPostNum = 0; let targetCommentNum = 0; let lastSigniture = '';
let interval = intervalPresets[0]; let lastNum = 0; let newPostCount = 0; let bPullDown = true;
let bFirstUpdate = true; let bGreeted = false; let scrollSus = 99999;
let bFormExpanded = true;
let anonymousNickname = '';

let onLoginChecked; let renderUploadImage; let setTarget; let pullDown; let togglePullDown; let toggleExpander;
let loop = null; let worker = null;

let isPostingWrite = () => (targetPostNum == 0);
let isCaptcha = () => { if (isPostingWrite()) return bCaptcha; return bCaptchaComment; };

let logDiv;

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
    if (DEBUG && logDiv) {
        for (let item of any) {
            if (typeof item == 'undefined') string += ' undefined';
            else string += ' ' + (item.toString?.() ?? '');
        }
        createElement('p', logDiv, { [innerText]: string });
    }
}
let initPromise = () => { let r, p = new Promise(resolve => r = resolve); return {r, p}; };
let sleep = (ms) => { let { r, p } = initPromise(); timeout(r, ms); return p; }
let randomInt = (start, end) => {
    let range = end - start + 1;
    let num = Math.random() * range;
    return Math.min(start + Math.floor(num), end);
};
let unescapeEmoji = (string) => {
    let matches = string.matchAll(/&#x([0-9a-fA-F]+);/g);
    for (let match of matches) {
        let emoji = String.fromCodePoint('0x' + match[1]);
        string = string.replace(match[0], emoji);
    }
    return string;
}

let trimHtml = (string) => { return string.r(/(\r|\t)/g, '').r(/[ ]{2,}/g, ' '); };
function buf2hex(buffer) { return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join(''); };
let splice = (list, item) => { let index = list.indexOf(item); if (index != -1) list.splice(index, 1); }

let encoder = new TextEncoder();
let computeHashAsColor = async (string) => {
    let buffer = encoder.encode(string);
    let hash = await crypto.subtle.digest('SHA-256', buffer).catch(debug);
    let hex = buf2hex(hash);
    let color = '#' + hex.slice(0, 6);
    return color;
};
function toBrightColor(hex) {
    let num = parse(hex.substring(1, 7), 16);
    let scaled = Math.floor(num * 360 / 16777215);
    return 'hsl(' + scaled + ',80%,60%)';
};
let blanks = str_blanks.split('');
let randomBlanks = (count) => {
    let output = '';
    for (let i = 0; i < count; i++) { output += blanks[randomInt(0, blanks.length - 1)]; }
    return output;
};

let split = (string) => string.split('||');

let getCookie = (cookieName) => {
    let x, y; let val = doc.cookie.split(';');
    for (let i = 0; i < val.length; i++) {
        x = val[i].substring(0, val[i].indexOf('=')); y = val[i].substring(val[i].indexOf('=') + 1);
        x = x.r(/^\s+|\s+$/g, ''); if (x == cookieName) return y;
    }
    return 'undefined';
};
let cutIpAddress = (address) => { let array = address.split('.'); return array[0] + '.' + array[1]; };
let setStyleProp = (element, propertyName, value) => element.style.setProperty(propertyName, value);
let setDocStyleProp = (propertyName, value) => setStyleProp(doc.documentElement, propertyName, value);

let initCaptchaV3 = async () => {
    let { r, p } = initPromise();
    createElement('script', body, {
        onload: () => {
            if (typeof grecaptcha == 'undefined') return debug('recaptcha is undefined');
            else debug('recaptcha v3 loaded');
            r();
        }, type: 'text/javascript', src: https + 'www.google.com/recaptcha/api.js?render=' + grecaptchaBlock,
    });
    return await p;
}
let executeCaptchaV3 = async (action) => {
    if (typeof grecaptcha == 'undefined') await initCaptchaV3();
    let { r, p } = initPromise();
    grecaptcha.ready(() => grecaptcha.execute(grecaptchaBlock, {action: action}).then(r).catch(e => {debug(e); r('');}));
    return await p;
};

let executeCaptcha = async (version, data, action) => {
    if (version == 'v3') return data[grecaptchaToken] = await executeCaptchaV3(action);
    debug('recaptcha', version, 'is not supported');
};

let useCaptcha = async (func, params, data, action) => {
    let tryMax = 1; let tryNum = 0; let res;
    let tryPost = async () => {
        if (tryNum > tryMax) return res;
        tryNum += 1;
        res = await func(...params, data);
        if (!res) return falseString(str_error_badRequest);
        let splits = split(res);
        if (splits[0] == 'false') {
            if (splits.length == 1) return falseString(res);
            if (splits[1] == 'captcha') {
                await executeCaptcha(splits[2], data, action); return await tryPost();
            }
        }
        return res;
    };
    return await tryPost();
};

let bytesKb = 1024;
let bytesUnits = 'B.KB.MB.GB.TB.PB'.split('.');
let bytes = (size) => {
    let unitIndex = 0; let unitDevide = 1; let unitBytes = bytesKb;
    while (unitIndex < bytesUnits.length) {
        if (size < unitBytes) {
            let devided = size / unitDevide; let thres = 10; let fixed = 2;
            while (true) {
                if (devided < thres) return devided.toFixed(fixed) + bytesUnits[unitIndex];
                thres *= 10;
            }
        }
        unitDevide *= bytesKb; unitBytes *= bytesKb; unitIndex++;
    }
};

let createElement = (tagName, parent, attr, ...classes) => {
    let element = doc.createElement(tagName);
    if (attr) {
        if (typeof attr == 'object') for (let key in attr) element[key] = attr[key];
        else if (typeof attr == 'string') classes.push(attr);
    }
    for (let className of classes) { element.classList.add(...className.split('.')); }
    if (parent && parent.appendChild) parent.appendChild(element);
    return element;
}
let createIcon = (parent, name, ...classes) => { return createElement(spanString, parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes); };
let clearChildren = (element) => { while(element.lastChild) element.removeChild(element.lastChild); };
let detach = (element) => { element.parentNode.removeChild(element); return element; };
let addClass = (element, ...className) => { element.classList.add(...className); return element; };
let removeClass = (element, ...className) => { element.classList.remove(...className); return element; };
let scrollToTop = () => scrollTo(0, 0);
let preventEnter = false;
let enterAsClick = (input, submit, bShift = false, bForce = false) => {
    input.onkeypress = (ev) => {
        if (!bForce && preventEnter) return;
        if (ev.key != 'Enter') return;
        if (DEBUG) debug(ev);
        if (bMobileDevice && bShift) return;
        if (!bMobileDevice && bShift && ev.shiftKey) return;
        ev.preventDefault();
        submit.click();
        input.oninput?.();
    };
};

let getBoardUrl = () => host + (bMinor ? 'mgallery/' : (bMini ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = () => getBoardUrl() + 'lists?id=' + gallId;
let getWriteUrl = () => getBoardUrl() + 'write/?id=' + gallId;
let getPostUrl = (num) => getBoardUrl() + 'view/?id=' + gallId + '&no=' + num;
let getDeleteUrl = (num) => getBoardUrl() + 'delete/?id=' + gallId + '&no=' + num;

let serializeForm = (...datas) => {
    let body = '';
    for (let data of datas) {
        for (let key in data) {
            let value = data[key];
            if (value == undefined) value = 'undefined';
            body += '&' + key + '=' + value;
        }
    }
    return body.substring(1);
}
let serializeMultipart = (data, file) => {
    let form = createElement('form', null, { entype: "multipart/formdata" });
    let multipart = new FormData(form);
    for (let key in data) { multipart.append(key, data[key]); }
    if (file && file.name) multipart.append('files[]', file, file.name);
    return multipart;
};

let _secret;
let _d = (r) => {
    let a, e, n, t, f, d, h,
    i = 'yL/M=zNa0bcPQdReSfTgUhViWjXkYIZmnpo+qArOBslCt2D3uE4Fv5G6wH178xJ9K',
    o = '', c = 0;
    for (r = r.r(/[^A-Za-z0-9+/=]/g, ''); c < r.length; ) t = i.indexOf(r.charAt(c++)),
    f = i.indexOf(r.charAt(c++)), d = i.indexOf(r.charAt(c++)), h = i.indexOf(r.charAt(c++)),
    a = t << 2 | f >> 4, e = (15 & f) << 4 | d >> 2, n = (3 & d) << 6 | h,
    o += toChar(a), 64 != d && (o += toChar(e)), 64 != h && (o += toChar(n));
    return o;
}
let rc1 = (s) => {
    let fi = parse(s.substring(0, 1));
    fi = fi > 5 ? fi - 5 : fi + 4;
    return s.r(/^./, fi);
}
let getSecretString = (html) => {
    let r = html.match(/var _r = _d\('([A-Za-z0-9+=\/]+)'\)/);
    if (!r) return '';
    return _d(r[1]);
}
let getSecondServiceCode = (code, secret) => {
    secret = rc1(secret ?? _secret);
    let _rs = secret.split(','); let c = '';
    for (n = 0; n < _rs.length; n++) c += toChar(2 * (_rs[n] - n - 1) / (13 - n - 1));
    return code.r(/(.{10})$/, c);
}

let genUtil = () => {
    let _debug;
    try { _debug = debug; } catch { _debug = console.log; }
    let savedRegexHtml = {};
    let getHtml = (text, tagName, className) => {
        let matches = getHtmlAll(text, tagName, className);
        if (!matches) return '';
        return matches[0];
    }
    let getHtmlAll = (text, tagName, className) => {
        let regex; let key = tagName + className;
        if (savedRegexHtml[key] !== undefined) regex = savedRegexHtml[key];
        else {
            let regexString = `<${tagName}[^>]*class=["'][^"]*${className}[^"]*["'][^>]*(\/?)>`;
            regex = new RegExp(regexString, 'g');
            savedRegexHtml[key] = regex;
        }
        let matches = text.matchAll(regex);
        if (!matches) return null;
        let result = [];
        for (match of matches) {
            if (match[1]) {
                result.push([match[0], '']);
                continue;
            }
            let index = match.index; let size = 0; let sub = text.substring(index); let level = 0;
            let ends = sub.matchAll(new RegExp(`<(\/?)${tagName}[^>]*(\/?)>`, 'g'));
            for (let end of ends) {
                if (end[1]) {
                    level -= 1;
                    if (level == 0) { index = end.index; size = end[0].length; break; }
                } else { if (!end[2]) level += 1; }
            }
            result.push([sub.substring(0, index + size), sub.substring(match[0].length, index)]);
        }
        return result;
    };
    let getInnerHtml = (text, tagName, className) => { let match = getHtml(text, tagName, className); return match ? match[1] : ''; };
    let getOuterHtml = (text, tagName, className) => { let match = getHtml(text, tagName, className); return match ? match[0] : ''; };
    let getOuterHtmlAll = (text, tagName, className) => {
        let outers = []; let matches = getHtmlAll(text, tagName, className);
        if (!matches) return '';
        for (let match of matches) { outers.push(match[0]); }
        return outers;
    };
    let getInnerText = (text, tagName, className) => { let innerHtml = getInnerHtml(text, tagName, className); return innerHtml ? innerTextOf(innerHtml) : ''; };
    let innerTextOf = (text) => { let result = ''; for (let match of text.matchAll(/(>|$)(.*?)(<|^)/g)) { result += match[2].trim(); } return result; };
    let savedRegexAttr = {};
    let getAttributeTo = (text, attrName, output, propName) => { let attr = getAttribute(text, attrName); if (attr == null) return; output[propName] = attr; }
    let getAttribute = (text, attrName) => {
        let regex;
        if (savedRegexAttr[attrName] !== undefined) regex = savedRegexAttr[attrName];
        else { regex = new RegExp(`${attrName}="([^"]+)"`); savedRegexAttr[attrName] = regex; }
        let match = text.match(regex);
        return match ? match[1] : null;
    }
    let testFix = (string) => /fix/.test(string);
    return {
        _IH: getInnerHtml, _OH: getOuterHtml, _OHA: getOuterHtmlAll, _IT: getInnerText,
        _AT: getAttributeTo, _A: getAttribute, _TF: testFix, _DEBUG: _debug, _IO: innerTextOf,
    };
};
let { _IH: getInnerHtml, _OH: getOuterHtml, _OHA: getOuterHtmlAll, _IT: getInnerText, _AT: getAttributeTo, _A: getAttribute, _TF: testFix, _DEBUG: _debug, _IO: innerTextOf } = genUtil(debug);

let savedRegexId = {};
let getValueById = (text, id) => {
    let regex;
    if (savedRegexId[id]) regex = savedRegexId[id];
    else { regex = new RegExp(`<input[^>]+(?:id|name)=["']${id}["'][^>]*>`, 'i'); savedRegexId[id] = regex; }
    let match = text.match(regex);
    if (!match) return '';
    let valMatch = match[0].match(/value=["']([^"']*)["']/i);
    return valMatch ? valMatch[1] : '';
};

let getFormData = (text, id, data) => {
    let regex = new RegExp(`<form[^>]+id=["']${id}["'][^>]*>.*?<\/form>`);
    let match = text.match(regex);
    if (!match) return false;
    updateFormDataV3(match[0], data);
    return true;
};

let genFetch = () => {
    let _debug;
    try { _debug = _DEBUG; } catch { _debug = debug; }
    let getAsText = async (url, options = {}) => {
        if (!options.credentials) options.credentials = 'include';
        let res = await fetch(url, options).catch(_debug);
        if (!res || !res.ok) return '';
        return (await res.text().catch(_debug)).replace(/(\n|\r|\t)/g, '');
    };
    return { _TEXT: getAsText };
}
let { _TEXT: getAsText } = genFetch();

let postAsText = async(url, options = {}, body = '') => {
    if (!options.credentials) options.credentials = 'include';
    if (!options.method) options.method = 'POST';
    if (!options.mode) options.mode = 'cors';
    if (!options.body) options.body = body;
    let res = await fetch(url, options).catch(debug);
    if (!res || !res.ok) return '';
    return await res.text().catch(debug);
}
let formDataHeaders = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'X-Requested-With': 'XMLHttpRequest' };

let postWrite = async (url, ...datas) => {
    let body = serializeForm(...datas);
    let options = { headers: formDataHeaders, referrer: getWriteUrl(), };
    return postAsText(url, options, body).catch(debug);
}
let postDelete = async (num, password = '') => {
    let html = await getAsText(getDeleteUrl(num));
    if (!html) return falseString('not available');
    let data = { [grecaptchaResponse]: '', _GALLTYPE_: gallType, };
    if (!getFormData(html, 'delete', data)) return falseString('no form');
    let secret = getSecretString(html);
    if (!secret) return falseString('no secret');
    data.service_code = getSecondServiceCode(data.service_code, secret);
    let match = html.match(/formData \+= "&([0-9a-z]+)=([0-9a-z]+)&/);
    if (!match) return falseString('not valid');
    data[match[1]] = match[2];
    if (password) data.password = password;
    match = html.match(/dcc_key_v1 = document.getElementById\(["']([^"']+)["']\).getAttribute\(["']([^"']+)["']/);
    if (match) {
        let dcc_key_v1 = html.match(new RegExp(`<input[^>]+id=["']${match[1]}["'][^>]*>`));
        if (dcc_key_v1) data.dcc_key_v1 = getAttribute(dcc_key_v1[0], match[2]);
    }
    return await useCaptcha(postWrite, [ password ? deletePasswordSubmit : deleteSubmit ], data, 'delete_submit');
}
let postComment = async (num, url, ...datas) => {
    let body = serializeForm(...datas);
    let options = { headers: formDataHeaders, referrer: getPostUrl(num), }
    return postAsText(url, options, body).catch(debug);
};

let postDeleteComment = async (commentNum, { num, id, value, vCurT }, password = '') => {
    let data = { ci_t: getCookie('ci_c'), id: gallId, re_no: commentNum, mode: 'del', [grecaptchaResponse]: '', _GALLTYPE_: gallType, };
    if (password) { data[id]= value, data.no = num; data.re_password = password; data.v_cur_t = vCurT; }
    return await useCaptcha(postComment, [ commentNum, commentDeleteSubmit ], data, 'comment_delete_submit');
};

let postDcconPackageDetail = async (code) => {
    let url = host + 'dccon/package_detail';
    let options = { headers: formDataHeaders };
    let body = serializeForm({ ci_t: getCookie('ci_c'), package_idx: '', code: code });
    let res = await postAsText(url, options, body).catch(debug);
    if (!res) return null;
    try { return JSON.parse(res); } catch (e) { return debug(e), null; }
}

let postImage = async (file) => {
    let data = { r_key : rKey, gall_id: gallId, gall_no: gallNum, post_no: '', upload_ing: 'N', _GALLTYPE_: gallType, };
    try {
        let body = serializeMultipart(data, file);
        let options = { credentials: 'same-origin', referrer: host, referrerPolicy: 'strict-origin-when-cross-origin', };
        let url = https + 'upimg.dcinside.com/upimg_file.php?id=' + gallId + '&r_key=' + rKey;
        let res = await postAsText(url, options, body).catch(debug);
        if (!res) return null;
        return JSON.parse(res)['files'][0] ?? null;
    } catch (e) { return debug(e), null; }
}
let postDeleteImage = (imgNum) => {
    let data = { id: gallId, r_key: rKey, temp_no: imgNum, };
    let body = serializeForm(data);
    let options = { headers: formDataHeaders, credentials: 'same-origin', referrer: host +'/upload/image?xssDomain=dcinside.com', referrerPolicy: 'strict-origin-when-cross-origin', };
    let url = getBoardUrlPlain() + 'temp/upimg_pop_del';
    postAsText(url, options, body).catch(debug).then(res => (res != 'true') && openAlert(str_deleteFail));
}

let savedDccons = {}; let savedPackageTitles = []; let loadingDccon = false; let pending = [];
let _loadDcconDetail = async () => {
    if (!pending.length) return loadingDccon = false;
    let array = pending.shift(); let code = array[0]; let r = array[1];
    if (savedDccons[code] != undefined) return r(savedDccons[code]), timeout(_loadDcconDetail, 1);
    let json = await postDcconPackageDetail(code).catch(debug);
    if (!json) return r();
    let packageTitle = json['info']['title']; let packageIdx = json['info']['package_idx']; let details = [];
    for (let detail of json['detail']) {
        details.push({ title: detail['title'], buy: false, package_idx: packageIdx, package_title: packageTitle, code: detail['path'] });
    }
    let package = { title: packageTitle, idx: packageIdx, buy: false, code: json['info']['list_img_path'], detail: details };
    savePackage(package);
    r(savedDccons[code]), timeout(_loadDcconDetail, 1);
}
let loadDcconDetail = (code) => {
    let { r, p } = initPromise(); pending.push([code, r]);
    if (!loadingDccon) { loadingDccon = true; _loadDcconDetail(); }
    return p;
}

let savePackage = (package) => {
    let savedPackages = getOption('dccon-pk') ?? {};
    if (savedPackages[package.idx] != undefined) {
        let existing = savedPackages[package.idx];
        if (existing.buy || !package.buy) return;
        existing.detail = package.detail; existing.buy = true;
    } else { savedPackages[package.idx] = package; }
    applyOption('dccon-pk', savedPackages);
};
let getPackage = (packageTitle) => {
    let savedPackages = getOption('dccon-pk');
    if (!savedPackages) return null;
    for (let idx in savedPackages) { if (savedPackages[idx].title == packageTitle) return savedPackages[idx]; }
    return null;
}
let getDccon = (packageTitle, dcconTitle) => {
    let package = getPackage(packageTitle);
    if (!package || !package.detail) return null;
    for (let detail of package.detail) { if (detail.title == dcconTitle) return detail; }
    return null;
}

let getDcconUrl = (packageTitle, dcconTitle) => {
    let dccon = getDccon(packageTitle, dcconTitle);
    if (!dccon) return null;
    return getDcconUrlFromCode(dccon.code);
}
let getDcconUrlFromCode = (code) => https + 'dcimg5.dcinside.com/dccon.php?no=' + code;

let _loadDcconList = async (target, page) => {
    let jsonString = await postWrite( host + 'dccon/lists', { ci_t: getCookie('ci_c'), target: target, page: page }).catch(debug);
    if (!jsonString || jsonString == 'not_login' || jsonString.substring(0, 1) != '{') return 0;
    let json;
    try { json = JSON.parse(jsonString); } catch (e) { return debug(e), {}; }
    let list = json['list']; let maxPage = 1;
    if (target == 'recent') {
        let detail = [];
        for (let item of list) {
            let match = item['list_img'].match(regexDcconId);
            if (!match) continue;
            detail.push({ package_title: str_recently, package_idx: item['package_idx'], idx: item['idx'], code: match[1], title: item['title'], });
        }
        let package = { title: str_recently, idx: -1, detail: detail, };
        createPackagePage(package);
    } else if (target == 'icon') {
        maxPage = json['max_page'];
        for (let item of list) {
            let packageTitle = item['title']; let packageIdx = item['package_idx']; let code = item['main_img_url'].match(regexDcconId);
            if (!code) continue;
            let detail = [];
            for (let dccon of item['detail']) {
                let match = dccon['list_img'].match(regexDcconId);
                if (!match) continue;
                detail.push({ package_title: packageTitle, package_idx: packageIdx, idx: dccon['detail_idx'], buy: true, code: match[1], title: dccon['title'], });
            }
            let package = { title: packageTitle, idx: packageIdx, buy: true, code: code[1], detail: detail, };
            createPackagePage(package); savePackage(package);
        }
    }
    return maxPage;
}
let loadDcconList = async (target) => {
    if (target == 'recent') { await _loadDcconList(target, 0); }
    if (target == 'icon') {
        let maxPage = Math.min(await _loadDcconList(target, 0), 20);
        for (let page = 1; maxPage >= page; page++) { await _loadDcconList(target, page); }
    }
}
let insertDccon = async (dccon) => {
    if (!dccon.buy) return openAlert(str_notBought);
    let packageIdx = dccon.package_idx; let detailIdx = dccon.idx;
    let data = {
        id: gallId, no: undefined, package_idx: packageIdx, detail_idx: detailIdx, ci_t: getCookie('ci_c'),
        input_type: 'write', t_vch2: formData.t_vch2 || '', t_vch2_chk: formData.t_vch2_chk || '', c_gall_id: gallId, c_gall_no: undefined,
        [grecaptchaResponse]: '', check_6: formData.check_6 || '', check_7: formData.check_7 || '', check_8: formData.check_8 || '',
        check_9: formData.check_9 || '', check_10: formData.check_10 || '', check_11: formData.check_11 || '', c_r_k_x_z: formData.c_r_k_x_z || '',
        use_gall_nick: formData.use_gall_nick || '', gall_nick_name: formData.gall_nick_name || '', service_code: formData.service_code || '', _GALLTYPE_: gallType,
    };
    await useCaptcha(postWrite, [ dcconInsertIcon ], data, 'insert_icon');
    populatePackage('recent').catch(debug);
}
let insertDcconComment = async (dccon, num) => {
    if (!dccon.buy) return openAlert(str_notBought);
    let packageIdx = dccon.package_idx; let detailIdx = dccon.idx; let nickname = getNicknameV2();
    if (!nickname.length) return openAlert(str_nullNickname);
    let commentFormData = commentFormDatas[num];
    let data = {
        id: gallId, no: num, package_idx: packageIdx, detail_idx: detailIdx, name: nickname, ci_t: getCookie('ci_c'), input_type: 'comment',
        t_vch2: commentFormData.t_vch2 || '', t_vch2_chk: commentFormData.t_vch2_chk || '', c_gall_id: gallId, c_gall_no: num,
        [grecaptchaResponse]: '', check_6: commentFormData.check_6 || '', check_7: commentFormData.check_7 || '', check_8: commentFormData.check_8 || '',
        check_9: commentFormData.check_9 || '', check_10: commentFormData.check_10 || '', check_11: commentFormData.check_11 || '',
        c_r_k_x_z: commentFormData.c_r_k_x_z || '', use_gall_nick: commentFormData.use_gall_nick || '', gall_nick_name: commentFormData.gall_nick_name || '',
        service_code: commentFormData.service_code || '', _GALLTYPE_: gallType,
    };
    let additionalFormData = {};
    if (!bLogin) {
        let password = getPassword();
        if (password.length < 2) return openAlert(str_shortPassword);
        additionalFormData.password = password;
    }
    if (isCaptcha()) {
        let captcha = getCaptcha();
        if (!captcha.length) return openAlert(str_nullCode);
        additionalFormData.code = captcha;
    }
    if (targetCommentNum) { additionalFormData.c_no = targetCommentNum; }
    let res = await postWrite(dcconInsertIcon, data, additionalFormData);
    if (res == 'ok') { onPostCommentCountChanged[num](-1, true); setTarget(0); }
    timeout(renderInputCaptcha, 500); populatePackage('recent'); return;
}

let replaceDccon = (element, regex, url) => {
    let img = `<img class="dccon" src="${url}">`;
    element.innerHTML = element.innerHTML.r(regex, img);
}
let replacedErrorIndex = 0;
let neutralizeDccon = (string) => {
    string = string.r(/onmousedown="[^"]+"/g, '').r(/class="written_dccon[^"]*"/g, 'class="d"');
    let matches = string.matchAll(/onerror="[^"]+"/g);
    for (let match of matches) {
        replacedErrorIndex++; let id = 'error-' + replacedErrorIndex;
        string = string.r(match[0], `id="${ id }" onerror="window.postMessage(JSON.stringify({type:'${onImageErrorFuncName}',id:'${ id }' }),'*')"`);
    }
    return string;
};

let onclickFunc = (encoded) => `onclick="window.postMessage(JSON.stringify({type:'${openLinkFuncName}',url:'${encoded}' }),'*')"`;
let _replaceLink = (string, regex) => {
    let matches = string.match(regex);
    if (matches) {
        for (let match of matches) { string = string.r(newRegex(match), onclickFunc(encode(match.split('"')[1]))); }
    }
    return string;
}
let replaceLink = (string) => { string = _replaceLink(string, regexTwitchLink); string = _replaceLink(string, regexYoutubeLink); return string; }

let getDownloadUrl = (id) => 'https://image.dcinside.com/viewimage.php?id=&no=' + id;

let replaceImage = (string, id) => {
    let matches = string.matchAll(/<(img|video)[^>]*src="[^">]+no=([0-9a-zA-Z]+)[^">]*"[^>]*>/g);
    for (let match of matches) {
        let imageMatch = match[0]; let replaced = imageMatch; let src = match[2];
        if (/class="d"/.test(imageMatch)) continue;
        let classMatch = imageMatch.match(/class="([^"]+)"/);
        if (classMatch) { replaced = replaced.r(classMatch[0], `class="${ classMatch[1] } img"`); } else { replaced = replaced.r('>', '') + ' class="img">'; }
        let clickMatch = imageMatch.match(/on[Cc]lick="[^"]+no=([0-9a-zA-Z]+)[^"]*"/);
        if (clickMatch) {
            replaced = replaced.r(clickMatch[0], `onclick="window.postMessage(JSON.stringify({type:'${onImageClickFuncName}',src:'${ getDownloadUrl(clickMatch[1]) }',id:'${ id }'}))" data-osrc="${ getDownloadUrl(clickMatch[1]) }"`);
        } else {
            replaced = replaced.r('>', '') + ` onclick="window.postMessage(JSON.stringify({type:'${onImageClickFuncName}',src:'${ getDownloadUrl(src) }',id:'${ id }'}))" data-osrc="${ getDownloadUrl(src) }" draggable="false">`;
        }
        string = string.r(imageMatch, replaced);
    }
    return string;
};

let setIntervalIndex = (index) => {
    interval = intervalPresets[index];
    if (worker) worker.postMessage({type:'iv', iv: interval});
};

let updateFormDataV2 = (text, data) => {
    for (let id in data) {
        let value = getValueById(text, id);
        if (value) data[id] = value;
    }
    if (!gallType && formData._GALLTYPE_) gallType = formData._GALLTYPE_;
    if (!gallNum && formData.gallery_no) gallNum = formData.gallery_no;
    if (formData.r_key) rKey = formData.r_key;
};
let updateFormDataV3 = (text, data) => {
    let matches = text.matchAll(/<input[^>]+name=["']([^"']+)["'][^>]+value=["']([^"']*)["']/g);
    if (!matches) return;
    for (let match of matches) { data[match[1]] = match[2]; }
};

let onInvalidPage = (reason) => { alert(reason); return 0; };
let validateLocation = (url) => {
    let match = url.match(/^https?:\/\/(gall|m).dcinside.com\/([^\n]+)$/);
    if (!match) return onInvalidPage(str_noGalleryUrl);
    let idMatch = null;
    if (match[1] == 'gall') {
        idMatch = match[2].match(/id=([A-Za-z0-9_]+)($|\&|#)/);
        bMinor = /^mgallery/.test(match[2]); bMini = /^mini/.test(match[2]);
    } else {
        bMobile = true;
        idMatch = match[2].match(/(board|mini)\/([A-Za-z0-9_]+)($|\?|\/|#)/);
        bMinor = (doc[getElementsByClassName]('micon').length > 0); bMini = (doc[getElementsByClassName]('mnicon').length > 0)
    }
    if (!idMatch || !idMatch.length) return onInvalidPage(str_noGalleryPageUrl);
    gallId = bMobile ? idMatch[2] : idMatch[1];
    return 1;
}
if (!validateLocation(location.href)) return;

doc.cookie = 'm_dcinside_web=done; path=/; domain=.dcinside.com';
createElement('meta', head, { name:'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0' });

if (bMobile) { onInvalidPage(str_noSupportMobile); return location.href = getListUrl(); }
if (doc[appName]) return doc[appName]();
doc[appName] = () => openAlert(str_runningAlready);
doc.title = str_dclivechat + ' :: ' + doc.title;

let _saveData = {}; let onApplyFunc = {};
let saveOptions = (override) => { let string = JSON.stringify(override ?? _saveData); storage?.setItem(appName, string); };
let _applyOption = (optionKey, value) => { _saveData[optionKey] = value; onApplyFunc[optionKey]?.(value); };
let applyOption = (optionKey, value) => { _applyOption(optionKey, value); saveOptions(); };
let getOption = (optionKey) => { return _saveData[optionKey] ?? null; }
let loadOptions = () => {
    let string = storage?.getItem(appName) ?? '';
    if (!string) return;
    _saveData = JSON.parse(string);
    for (let key in _saveData) _applyOption(key, _saveData[key]);
};
let clearSaveData = () => saveOptions({});

let getBlockAll = () => {
    let json = storage?.getItem('block_all');
    if (!json) return { on: 1, word: '', id: '', nick: '', ip: '', };
    return JSON.parse(json);
};
let getBlockParts = () => {
    let json = storage?.getItem('block_parts');
    if (!json) return {};
    return JSON.parse(json);
};
let getBlockGall = (id, name) => getBlockParts()[id] ?? { on: 1, word: '', id: '', nick: '', ip: '', name: name, };
let setBlockAll = (o) => storage?.setItem('block_all', JSON.stringify(o));
let setBlockParts = (o) => storage?.setItem('block_parts', JSON.stringify(o));

let isBlocked = (postData, blockData) => {
    if (!blockData.on) return false;
    return _isBlocked(postData, 'title', blockData, 'word', true) || _isBlocked(postData, 'nickname', blockData, 'nick') || _isBlocked(postData, 'id', blockData, 'id') || _isBlocked(postData, 'ip', blockData, 'ip');
}
let _isBlocked = (postData, key, blockData, id, include = false) => {
    if (!blockData[id]) return false;
    let splits = split(blockData[id]);
    for (let split of splits) {
        if (include) { if (postData[key].includes(split)) return true; }
        else { if (postData[key] == split) return true; }
    }
    return false;
};
let updateBlockAll = (o) => {
    o.on = 1; setBlockAll(o);
    for (let line of chatLines) { if (isBlocked(line, o)) addClass(line.chat, 'block'); else removeClass(line.chat, 'block'); }
}
let updateBlockGall = (o, id) => {
    o.on = 1; let blockParts = getBlockParts(); blockParts[id] = o; setBlockParts(blockParts);
    for (let line of chatLines) { if (isBlocked(line, o)) addClass(line.chat, 'block'); else removeClass(line.chat, 'block'); }
}
let addBlock = (o, key, keyword) => {
    let splits = split(o[key]).filter(t => t != '');
    if (!splits.includes(keyword)) splits.push(keyword);
    o[key] = splits.join('||');
}
let removeBlock = (o, key, keyword) => {
    let splits = split(o[key]).filter(t => t != '');
    for (let i = 0; i < splits.length; i++) {
        let split = splits[i];
        if (split == keyword) { splits.splice(i, 1); break; }
    }
    o[key] = splits.join('||');
}

(async() => {
    let html = await getAsText(getListUrl()).catch(debug);
    let loginBox = getInnerHtml(html, divString, 'login_box');
    if (loginBox) {
        let string = getInnerHtml(loginBox, 'button', 'btn_inout');
        if (string && string == str_logout) {
            bLogin = true;
            let nickname = getInnerText(loginBox, 'strong', 'nickname');
            if (nickname) userNickname = nickname;
            let nikcon = getOuterHtml(loginBox, 'strong', 'writer_nikcon');
            if (nikcon) {
                let match = getAttribute(nikcon, 'onClick').match(/\/([a-zA-Z0-9_-]+)['"]/);
                if (match) userId = match[1];
                match = nikcon.match(/src=["']([^"']+)["']/);
                if (match) { userImg = match[1]; bUserFix = testFix(match[1]); }
            }
        }
    }
    onLoginChecked?.();
    gallName = getValueById(html, 'gallery_name');
    blockGallLabel[innerText] = str_blockGall + ' - ' + gallName;
})();

clearChildren(body); addClass(body, hidden);
for (var i = 1; i < 99999; i++) window.clearInterval(i);
for (var i = 1; i < 99999; i++) window.clearTimeout(i);

let stylesheet = STYLESHEET
    .r(/_w/g, 'width').r(/_h/g, 'height').r(/_b/g, 'background').r(/_m/g, 'margin').r(/_p/g, 'padding').r(/_d/g, 'display').r(/_i/g, '!important').r(/_P/g, 'position')
    .r(/_T/g, 'top').r(/_B/g, 'bottom').r(/_L/g, 'left').r(/_R/g, 'right').r(/_r/g, 'relative').r(/_a/g, 'absolute').r(/_o/g, 'overflow').r(/_f/g, 'flex')
    .r(/_F/g, 'font').r(/_j/g, 'justify-content').r(/_g/g, 'grid-').r(/_c/g, 'calc').r(/_x/g, '100%')
if (bMobileSafari) { stylesheet = stylesheet.r(/_s/g, ''); } else { stylesheet = stylesheet.r(/_s/g, ' or (max-width:700px)'); }
createElement('style', head, { [innerText]: stylesheet });
createElement('link', head, { rel: 'stylesheet', href: https + 'fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' });

if (bMobileDevice) initCaptchaV3();

logDiv = createElement(divString, body, 'log', hidden); scrollToTop();

let dropArea = createElement(divString, body, 'o');
createElement(divString, dropArea, { [innerText]: str_dragAndDrop } , 'drop');

let overlay = createElement(divString, body, 'o');
let renderOverlay = (bForce = false) => {
    if ((bForce && overlay.childNodes.length == 1) || !overlay.lastChild) removeClass(overlay, 'wait'); else addClass(overlay, 'wait');
    if (overlay.childNodes.length === 0) preventEnter = false; else preventEnter = true;
}
let enterUp = true;
doc.addEventListener('keyup', (ev) => { if (ev.key != 'Enter') return; enterUp = true; });
doc.addEventListener('keypress', (ev) => {
    if (!enterUp) return;
    if (ev.key !== 'Enter') return;
    if (!preventEnter) return;
    if (overlay.lastChild) overlay.lastChild.enter?.();
    enterUp = false;
});

let openModal = ({title, desc, options, close, html, input, nowrap}) => {
    if (!options) options = [{ text: str_confirm, [onclick]: (close) => close() }];
    let modal = createElement(divString, overlay, 'modal');
    if (title) createElement(divString, modal, { [innerText]: title }, 'tt');
    let content = createElement(divString, modal, 'desc'); modal.content = content;
    if (desc) { if (html) content.innerHTML = desc; else content[innerText] = desc; }
    let closeModal = () => { addClass(modal, hidden); modal.remove(); renderOverlay(); }
    if (close) createIcon(createElement('a', modal, { [onclick]: closeModal }, 'b.close.abs-tr'), 'close');
    if (input !== undefined) {
        if (nowrap) modal.input = createElement('input', modal, { type:'password', value: input }, 'nowrap');
        else modal.input = createElement('textarea', modal, { value: input });
    }
    let optionContainer = createElement(divString, modal, 'opts.fr');
    if (options.length === 1) options[0].enter = true;
    for (let option of options) {
        let wait = () => { button[innerText] = ''; createIcon(button, 'progress_activity', 'progress'); };
        let bIcon = (option.icon != undefined);
        let button = createElement('a', optionContainer, {
            [innerText]: bIcon ? '' : (option.text ?? option), [onclick]: option.onclick ? () => option.onclick(closeModal, wait) : closeModal,
        }, 'sb.r');
        if (bIcon) { createIcon(button, option.icon); createElement(spanString, button, { [innerText]: option.text }); }
        if (option.enter) timeout(() => { modal.enter = () => button.click(); if (nowrap) enterAsClick(modal.input, button, false, true); }, 100);
    }
    renderOverlay();
    return modal;
}
let openAlert = (desc) => openModal({ desc: desc });

let openImage = (targetSrc, id) => {
    let postContent = document[querySelector]('#' + id);
    if (!postContent) return;
    let imgs = postContent[getElementsByClassName]('img');
    let list = []; let index = 0;
    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        if (img.classList.contains(hidden) || img.classList.contains('d')) continue;
        let originalSrc = img.getAttribute('data-osrc');
        if (originalSrc == targetSrc) index = i;
        list.push(originalSrc);
    }
    let curImg; let clicked = false;
    let container = createElement(divString, overlay, { [onclick]: () => {
        if (clicked) return;
        addClass(curImg, 'fo');
        timeout(() => { container.remove(); }, 200);
        renderOverlay(true);
    }}, 'ipvs');
    let src = () => list[index];
    curImg = createElement('img', container, { src: src(), draggable: false, [onclick]: () => { clicked = true; request(() => clicked = false); }}, 'ipv');
    let controls = createElement(divString, container, 'fr');
    let download = createElement('a', controls, { [onclick]: () => {
        clicked = true; let temp = createElement('a', null, { href: curImg.src, download: '' });
        temp.click(); temp.remove(); request(() => clicked = false);
    }}, 'b');
    createIcon(download, 'download'); createElement(spanString, download, { innerText: str_download });
    renderOverlay();
};

let addTooltip = (element, { text, top = false }, ...classes) => {
    addClass(element, 'has-tooltip');
    let tooltip = createElement(divString, element, 'tooltip', top ? 'tp' : 'bt',  ...classes);
    createElement(spanString, tooltip, { innerText: text });
    return tooltip;
};

let contextmenu;
let addContextMenu = (element, options = []) => {
    element.oncontextmenu = (ev) => {
        ev.preventDefault(); let x = ev.clientX; let y = ev.clientY;
        if (contextmenu) contextmenu.remove();
        contextmenu = createElement(divString, body, 'p.ctx');
        contextmenu.style.left = x + 'px'; contextmenu.style.top = y + 'px';
        for (option of options) {
            if (option.hr) { createElement('hr', contextmenu); continue; }
            let entry = createElement('a', contextmenu, 'fr.b');
            if (option.icon) createIcon(entry, option.icon);
            if (option.text) createElement(spanString, entry, { [innerText]: option.text });
            if (option[onclick]) entry[onclick] = option[onclick];
        }
        return contextmenu;
    }
};
doc.addEventListener('click', () => { if (contextmenu) contextmenu.remove(); contextmenu = null; });

let main = createElement('main', body);

let videoContainer = createElement(divString, main, 'video');
let menu = createElement(divString, videoContainer, 'menu');
let videoMain = createElement(divString, videoContainer, 'main');
let menuExpanded = true;
let menuExpandButton;
let toggleMenu = (bool) => {
    if (typeof bool === 'boolean') menuExpanded = bool; else menuExpanded = !menuExpanded;
    if (menuExpanded) { removeClass(menu, 'e'); menuExpandButton[innerText] = 'expand_less'; }
    else { if (relocating) relocateVideoButton.click(); addClass(menu, 'e'); menuExpandButton[innerText] = 'expand_more'; }
};

createElement(divString, menu, { [onclick]: toggleMenu }, 'stretch');
let addVideoButton = createElement('a', menu, { [onclick]: () => { addClass(videoMain, 'go'); removeClass(videoInputContainer, hidden); } }, 'b');
createIcon(addVideoButton, 'add'); createElement(spanString, addVideoButton, { [innerText]: str_addVideo });

let relocating = false;
let relocateVideoButton = createElement('a', menu, 'b', disabled);
let relocateVideoButtonIcon = createIcon(relocateVideoButton, 'pan_tool');
let relocateVideoButtonSpan = createElement(spanString, relocateVideoButton, { [innerText]: str_relocate });
relocateVideoButton.onclick = () => {
    relocating = !relocating;
    if (relocating) {
        addClass(relocateVideoButton, '.t'); relocateVideoButtonIcon[innerText] = 'check';
        relocateVideoButtonSpan[innerText] = str_relocateDone; addClass(videoMain, 'rlc');
    } else {
        removeClass(relocateVideoButton, '.t'); relocateVideoButtonIcon[innerText] = 'pan_tool';
        relocateVideoButtonSpan[innerText] = str_relocate; removeClass(videoMain, 'rlc');
    }
};

let closeAllVideosButton = createElement('a', menu, 'b', disabled);
createIcon(closeAllVideosButton, 'close'); createElement(spanString, closeAllVideosButton, { [innerText]: str_closeAll });

menuExpandButton = createIcon(createElement('a', menu, { [onclick]: toggleMenu }, 'b.fix-tl'), 'expand_less');

let videoInputContainer = createElement(divString, videoMain, 'p.fr.blank');
let videoInputCloseButton = createElement('a', videoInputContainer, { [onclick]: () => { removeClass(videoMain, 'go'); addClass(videoInputContainer, hidden); } }, 'b.abs-tr', hidden);
createIcon(videoInputCloseButton, 'close');
createIcon(videoInputContainer, 'link', 'ph').onclick = () => videoInput.focus();
let onVideoInput = () => { if (videoInput.value !== '') removeClass(videoInputContainer, 'blank'); else addClass(videoInputContainer, 'blank'); };
let videoInput = createElement('textarea', videoInputContainer, { [placeholder]: str_placeholderVideo, oninput: onVideoInput, onchange: onVideoInput }, 'src');
let videoSubmit = createElement('a', videoInputContainer, { [onclick]: () => addVideo(videoInput.value) }, 'sb');
createElement(spanString, videoSubmit, { [innerText]: str_confirm, });
enterAsClick(videoInput, videoSubmit);

let loadedVideoUrls = []; let videoDivs = [];
let renderRow = () => {
    if (!bMado) {
        let newLength = Math.min(videoDivs.length, 1);
        addClass(menu, hidden); loadedVideoUrls.length = newLength;
        for (let i = 1; i < videoDivs.length; i++) { videoDivs[i]?.remove(); }
        videoDivs.length = newLength;
        if (relocating) relocateVideoButton.click();
    } else removeClass(menu, hidden);
    addClass(relocateVideoButton, disabled); removeClass(relocateVideoButton, '.t'); removeClass(videoMain, 'go');
    if (!videoDivs.length) {
        if (relocating) relocateVideoButton.click();
        addClass(closeAllVideosButton, disabled); addClass(videoInputCloseButton, hidden); removeClass(videoInputContainer, hidden);
        return;
    }
    removeClass(closeAllVideosButton, disabled); removeClass(relocateVideoButton, disabled);
    removeClass(videoInputCloseButton, hidden); addClass(videoInputContainer, hidden);
    if (videoDivs.length == 1) setDocStyleProp('--r2t', '0px'); else setDocStyleProp('--r2t', '50%');
    let half = (videoDivs.length - 1) / 2; let r1cnt = 0; let r2cnt = 0;
    for (let i = 0; i < videoDivs.length; i++) {
        let videoDiv = videoDivs[i];
        removeClass(videoDiv, ...'r1.r2.c1.c2.c3.c4'.split('.'));
        if (i < half) { addClass(videoDiv, 'r1'); r1cnt++; addClass(videoDiv, 'c' + r1cnt); }
        else { addClass(videoDiv, 'r2'); r2cnt++; addClass(videoDiv, 'c' + r2cnt); }
    }
    setDocStyleProp('--rw1', r1cnt); setDocStyleProp('--rw2', r2cnt);
};

let _addVideo = (url) => {
    let twitchMatch = url.match(regexTwitch);
    if (twitchMatch) return addVideoTwitch(twitchMatch[2]);
    let youtubeMatch = url.match(regexYoutube);
    if (youtubeMatch) {
        let t = 0; let timeMatch = url.match(/t=([0-9]+)/);
        if (timeMatch) t = timeMatch[1]; return addVideoYoutube(youtubeMatch[2], t);
    }
    addVideoIframe(url);
}

let addVideo = (url) => {
    if (!url) return openAlert(str_noValidUrl);
    if (url == 'show log') return removeClass(logDiv, hidden);
    if (url == 'clear options') return clearSaveData();
    if (url == 'show options') return debug(_saveData);
    if (url == 'refresh update') return initUpdate();
    let before = loadedVideoUrls.length;
    if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url)) return openAlert(str_noValidUrl);
    if (!/^[A-Za-z]+:\/\//.test(url)) url = 'https://' + url;
    _addVideo(url);
    if (before === 0 && loadedVideoUrls.length === 1) toggleMenu(false);
    renderRow();
}

let openLink = (string) => {
    let decoded = decodeURIComponent(string).r(/&amp;/g, '&');
    openModal({
        title: str_openUrlTitle, desc: decoded,
        options: [{ text: str_openInNew, icon: 'open_in_new', [onclick]: (close) => {
            let temp = createElement('a', null, { href: decoded, target: '_blank' });
            temp.click(); temp.remove(); close();
        }}, { text: str_confirm, [onclick]: (close) => { addVideo(decoded); close(); }, enter: true }],
        close: true,
    });
};

let onImageError = (videoId) => {
    let videoElement = doc[querySelector]('#' + videoId).parentNode;
    let bDccon = videoElement.classList.contains('d');
    let src = videoElement.getAttribute('data-src');
    let imageElement = createElement('img', null, { src: src, draggable: false }, bDccon ? 'd' : '_');
    if (!bDccon) imageElement[onclick] = () => onImageClick(src);
    videoElement.insertAdjacentElement('beforebegin', imageElement);
    addClass(videoElement, hidden);
};

onmessage = (ev) => {
    let json;
    if (typeof ev.data == 'object') json = ev.data; else json = JSON.parse(ev.data);
    if (json) {
        if (json.type == onImageErrorFuncName) onImageError(json.id);
        else if (json.type == openLinkFuncName) openLink(json.url);
        else if (json.type == onImageClickFuncName) openImage(json.src, json.id);
    }
}

let removeVideoPlayer = (url, videoDiv) => { splice(loadedVideoUrls, url); splice(videoDivs, videoDiv); saveOptions(); videoDiv.remove(); renderRow(); }
let clearVideoPlayers = () => {
    loadedVideoUrls.length = 0;
    for (let videoDiv of videoDivs) videoDiv.remove();
    videoDivs.length = 0; saveOptions(); renderRow();
}

let addVideoTwitch = (id) => { let src = https + 'player.twitch.tv/?channel=' + id + '&parent=gall.dcinside.com'; addVideoIframe(src); };
let addVideoYoutube = (id, t = 0) => { let src = https + 'www.youtube.com/embed/' + id  + '?start=' + t; addVideoIframe(src, { allow: "autoplay; picture-in-picture" }); }

let draggingDiv = null; let draggingIndex = () => videoDivs.indexOf(draggingDiv);
let draggingUrl = ''; let moving = false; let offsetX = 0, offsetY = 0;
let addVideoIframe = (url, options = {}) => {
    videoInput.value = '';
    if (loadedVideoUrls.includes(url)) {
        let div = videoDivs[loadedVideoUrls.indexOf(url)];
        addClass(div, 'hl-alt'); timeout(() => removeClass(div, 'hl-alt'), highlightDuration); return;
    }
    if (!bMado) { loadedVideoUrls.length = 0; videoDivs[0]?.remove(); videoDivs.length = 0; }
    loadedVideoUrls.push(url); applyOption('videos-' + gallId, loadedVideoUrls);
    let index; let videoDiv = createElement(divString, videoMain); videoDivs.push(videoDiv);
    index = () => videoDivs.indexOf(videoDiv);
    let onDown = (x, y) => {
        if (draggingDiv) return;
        addClass(videoDiv, 'drg');
        offsetX = () => videoDiv.getClientRects()[0].width / 2; offsetY = () => (videoDiv.getClientRects()[0].height / 2) + 50;
        setDocStyleProp('--mx', (x - offsetX()) + 'px'); setDocStyleProp('--my', (y - offsetY()) + 'px');
        draggingDiv = videoDiv; draggingUrl = url;
    };
    let onMove = (x, y) => { request(() => { setDocStyleProp('--mx', (x - offsetX()) + 'px'); setDocStyleProp('--my', (y - offsetY()) + 'px'); }); };
    let onEnter = () => {
        if (!draggingDiv || moving) return;
        let temp = index(), temp2 = draggingIndex();
        if (temp == temp2) return;
        videoDivs.splice(temp2, 1); videoDivs.splice(temp, 0, draggingDiv);
        loadedVideoUrls.splice(temp2, 1); loadedVideoUrls.splice(temp, 0, draggingUrl);
        moving = true; saveOptions(); timeout(() => moving = false, 200); renderRow();
    }
    let videoDrag = createElement(divString, videoDiv, {
        onmousedown: (ev) => {
            onDown(ev.clientX, ev.clientY);
            onmouseup = () => { removeClass(videoDiv, 'drg'); draggingDiv = null; onmouseup = null; onmousemove = null; }
            onmousemove = (ev) => onMove(ev.clientX, ev.clientY);
        },
        onmousemove: onEnter,
        ontouchstart: (ev) => {
            onDown(ev.touches[0].clientX, ev.touches[0].clientY);
            let onTouchEnd = () => { removeClass(videoDiv, 'drg'); draggingDiv = null; ontouchend = null; ontouchcancel = null; ontouchmove = null; }
            ontouchend = onTouchEnd; ontouchcancel = onTouchEnd;
            ontouchmove = (ev) => {
                onMove(ev.touches[0].clientX, ev.touches[0].clientY);
                let element = doc.elementFromPoint(ev.touches[0].pageX, ev.touches[0].pageY);
                element?.onmousemove?.();
            };
        },
    }, 'grab.fr');
    createIcon(videoDrag, 'drag_indicator'); options.sandbox = 'allow-same-origin allow-scripts'; 
    let video = createElement('iframe', videoDiv, options);
    renderRow(); video.src = url;
    let videoClose = createElement('a', videoDiv, { [onclick]: () => removeVideoPlayer(url, videoDiv) }, 'close.b.abs-tr');
    createIcon(videoClose, 'close'); addTooltip(videoClose, { text: str_tooltip_close });
}

onApplyFunc['videos-' + gallId] = (videos) => { for (let url of videos) if (!loadedVideoUrls.includes(url)) _addVideo(url); }
closeAllVideosButton[onclick] = clearVideoPlayers;

let openedList = [];
let checkMaxOpened = () => { if (openedList.length > maxOpened) openedList.shift().click(); };

let chatContainer = createElement(divString, main, 'chat');
let header = createElement(divString, chatContainer, 'hd');
createElement(spanString, header, { [innerText]: str_chatHeader }, 'h');
let bRefreshing = false;
let refresh = createElement('a', header, {
    [onclick]: () => {
        if (bRefreshing) return;
        bRefreshing = true; initUpdate('button');
        addClass(refreshIcon, 'rotate-ccw-half'); timeout(() => { bRefreshing = false; removeClass(refreshIcon, 'rotate-ccw-half'); }, 800);
    }
}, 'help.b.abs-tl');
let refreshIcon = createIcon(refresh, 'sync');
let help = createElement('a', header, { href: helpUrl, target: '_blank' }, 'help.b.abs-tr');
createIcon(help, 'help');
let chatViewport = createElement(divString, chatContainer, 'vp');
let chatPage = createElement(divString, chatViewport, 'page');
let chatBottomContainer = createElement(divString, chatContainer, 'cb-c');

let closeAllButton = createElement('a', chatBottomContainer, { [onclick]: () => { while(openedList.length) openedList.shift().click(); } }, 'r.b.ca.right.sd');
createIcon(closeAllButton, 'close');
let renderCloseAllButton = () => { if (openedList.length) removeClass(closeAllButton, 'sd'); else addClass(closeAllButton, 'sd'); };

let listeningFunc = {}; let listeningPost = {}; let notificationList = [];
let notifyButton = createElement('a', chatBottomContainer, {
    [onclick]: () => {
        if (!notificationList.length) return;
        let list = notificationList.shift();
        for (let item of list[1]) { listeningFunc[list[0]](item); }
        let temp = createElement('a', null, { href: '#' + list[0] }); temp.click(); temp.remove(); renderNotify();
    }
}, 'r.b.nt.right.sd');
createIcon(notifyButton, 'notifications');
let notifyCountSpan = createElement(spanString, notifyButton, 'cnt.abs-tl.fade');
let renderNotify = () => {
    if (!notificationList.length) { addClass(notifyButton, 'sd'); addClass(notifyCountSpan, 'fade'); }
    else { removeClass(notifyButton, 'sd'); removeClass(notifyCountSpan, 'fade'); notifyCountSpan[innerText] = notificationList.length < 10 ? notificationList.length : '9+'; }
};
let getNotificationKey = (postNum, commentNum) => 'n' + postNum + '_' + commentNum;
let checkAddNotification = (postNum, commentNum, commentDiv = null) => {
    if (!listeningPost[postNum]) return;
    let key = getNotificationKey(postNum, commentNum);
    if (!listeningFunc[key]) return;
    let notification = notificationList.find(list => list[0] == key);
    if (!notification) { notification = [key, []]; notificationList.push(notification); }
    notification[1].push(commentDiv); renderNotify();
}
let appendListener = (postNum, commentNum, onClickNotify) => { listeningPost[postNum] = true; listeningFunc[getNotificationKey(postNum, commentNum)] = onClickNotify; }

let scrollDownButton = createElement('a', chatBottomContainer, { [onclick]: () => togglePullDown(), onscroll: (ev) => ev.preventDefault(), }, 'r.pd.fr', (bMobileDevice ? 'm' : '_'), hidden);
let scrollDownButtonDiv1 = createElement(divString, scrollDownButton, 'not-hover');
createIcon(scrollDownButtonDiv1, (bMobileDevice ? arrow : 'pause'));
createElement(spanString, scrollDownButtonDiv1, { [innerText]: str_pullDown }, 'text', (bMobileDevice ? hidden : '_'));
let scrollDownButtonDiv2 = createElement(divString, scrollDownButton, 'hover');
createIcon(scrollDownButtonDiv2, arrow);
let newMessageSpan = createElement(spanString, scrollDownButtonDiv2, { [innerText]: str_pullDownHover }, 'text', (bMobileDevice ? hidden : '_'));

let diff = () => Math.abs(chatPage.scrollHeight - chatViewport.clientHeight - chatViewport.scrollTop);
let lastDiff = 0;
chatViewport.onscroll = () => {
    let curDiff = diff(); let change = lastDiff - curDiff; lastDiff = curDiff;
    if (curDiff < 2) checkMaxPost();
    if (change == 0) return;
    if (change < 0 && bPullDown && curDiff > 2) {
        if (scrollSus == 0) return togglePullDown();
        scrollSus = Math.max(scrollSus - 1, 0); return;
    }
    if (!bPullDown && curDiff < 2) togglePullDown();
}

let colorMap = {};
let getWriterKey = (name, id, ip) => { if (ip) return name + ip; return name + id; }
let applyColor = async (name, id, ip, ...elements) => {
    let colorKey = getWriterKey(name, id, ip); let color;
    if (colorMap[colorKey] != undefined) { color = colorMap[colorKey]; }
    else { color = await computeHashAsColor(colorKey).catch(debug); colorMap[colorKey] = color; }
    if (true) color = toBrightColor(color);
    for (let element of elements) { if (element) element.style.color = color; }
}

let createWriter = (parent, name, id, ip, img, fix) => {
    if (img) createElement('img', parent, { src: img }, 'nikcon');
    let nameSpan = createElement(spanString, parent, { [innerText]: name }, 'name');
    let ipSpan = null;
    if (id) { if (!fix) ipSpan = createElement(spanString, parent, { [innerText]: id }, 'ip.id'); }
    else if (ip) { ipSpan = createElement(spanString, parent, { [innerText]: ip }, 'ip') };
    createElement(spanString, parent, { [innerText]: ': ' });
    applyColor(name, id, ip, nameSpan, ipSpan);
}

let setNewPostCount = (num) => {
    newPostCount = num; let lastWord = str_pullDownHover_zero;
    if (num != 0) { if (num > 20) lastWord = str_pullDownHover_over; else lastWord = num + str_pullDownHover_count; }
    newMessageSpan.innerText = str_pullDownHover_common + lastWord;
}

let checkMaxPost = () => {
    let nodes = chatPage.childNodes;
    while (nodes.length > maxPost) { let childNode = nodes[0]; removeChat(childNode); }
}
let removeChat = (element) => {
    for (let i = 0; i < chatLines.length; i++) {
        let line = chatLines[i];
        if (line.chat == element) { chatLines.splice(i, 1); break; }
    }
    let removed = element[getElementsByClassName]('removed');
    if (removed && removed.length) removed[0].value = true;
    element.remove(); pullDown(true);
}

let _pullDown = () => chatViewport.scrollTop = chatPage.scrollHeight;
pullDown = (bForced = false) => { scrollSus = bForced ? 1 : 0; if (!bPullDown) return; return _pullDown(); };
togglePullDown = () => {
    bPullDown = !bPullDown;
    if (bPullDown) { addClass(scrollDownButton, hidden); setNewPostCount(0); pullDown(true); }
    else { removeClass(scrollDownButton, hidden); }
};

let chatLines = []; let postContentDatas = {}; let postCommentCount = {}; let onPostCommentCountChanged = {}; let postCommentDatas = {};

let showLine = (div) => { if (!bPullDown) setNewPostCount(newPostCount + 1); removeClass(div, hidden); pullDown(true); }
let newLine = async (postData) => {
    let num = postData.num;
    let line = createElement(divString, chatPage, 'chl', hidden);
    let removed = createElement('input', line, { type: hidden, value: false, }, 'removed');
    let titleDiv = createElement(divString, line, 'tt.r');
    let inline = createElement(spanString, titleDiv);
    let name = postData.nickname; let ip = postData.ip; let title = unescapeEmoji(decodeURIComponent(postData.title));
    let id = postData.id; let img = postData.img; let fix = postData.fix; let my = postData.my ?? false;
    let blockAll = getBlockAll(); let blockGall = getBlockGall(gallId, gallName);
    let blocked = isBlocked(postData, blockAll) || isBlocked(postData, blockGall);
    if (blocked) addClass(line, 'block');

    chatLines.push({ chat: line, title: title, id: id, ip: ip, nickname: name });

    if (name) createWriter(inline, name, id, ip, img, fix);
    else addClass(line, 'notify');

    let titleSpan = createElement(spanString, inline, { [innerText]: title }, 'tt');
    let fetchingDcconInfo = false; let waitingForFetch = [];
    for (let match of title.matchAll(regexDccon)) {
        let dcconString = match[0]; let packageName = match[1]; let dcconName = match[2];
        let url = getDcconUrl(packageName, dcconName);
        if (url) { replaceDccon(titleSpan, dcconString, url); pullDown(true); continue; }
        waitingForFetch.push([dcconString, packageName, dcconName]);
        if (fetchingDcconInfo) continue;
        fetchingDcconInfo = true;
        (async () => {
            let { write } = await getPostContent(postData.num).catch(debug);
            if (!write) return;
            let imgs = getOuterHtmlAll(write, 'img', 'written_dccon');
            for (let img of imgs) {
                let match = getAttribute(img, 'src').match(regexDcconId);
                if (match) await loadDcconDetail(match[1]).catch(debug);
                else {
                    let match = getAttribute(img, 'data-src').match(regexDcconId);
                    if (match) await loadDcconDetail(match[1]).catch(debug);
                }
            }
            for (let names of waitingForFetch) {
                let url = getDcconUrl(names[1], names[2]);
                if (url) replaceDccon(titleSpan, newRegex(names[0]), url);
            }
            pullDown(true);
        })();
    }

    let postContentVp;
    if (num) {
        titleDiv.id = getNotificationKey(num, 0);
        let postContent = createElement(divString, line, 'w.zero');
        postContentVp = createElement(divString, postContent, 'vp.post');
        let postContentPage = createElement(divString, postContentVp, { id: 'pc-' + num }, 'page.pc');
        let bHiddenPostContent = true;
        if (my) { appendListener(num, 0, () => { if (bHiddenPostContent) titleDiv.click(); }); }
        let onOpenPostContent = () => {
            addClass(line, 'open'); removeClass(postContent, 'zero'); setTarget(0);
            if (bPullDown) togglePullDown();
            updateComment(); splice(openedList, titleDiv); openedList.push(titleDiv);
            checkMaxOpened(); renderCloseAllButton();
            getPostContent(num).catch(debug).then(({text}) => {
                const iframes = text.matchAll(/<iframe[^>]*id="movieIcon([^"]*)"[^>]*>[^<]*<\/iframe>/g);
                if (iframes && true) (async() => {
                    for (const iframe of iframes) {
                        const movieUrl = host + 'board/movie/movie_view?no=' + iframe[1];
                        const movieText = await getAsText(movieUrl);
                        if (!movieText) continue;
                        const videoUrl = movieText.match(/<video[^>]*poster="([^"]*)"[^>]*>[^<]*<source[^>]*src="([^"]*)"[^>]*type="([^"]*)"[^>]*>/);
                        if (!videoUrl) continue;
                        const temp = createElement(divString, null, 'v-container');
                        const wrap = createElement(divString, temp, 'video_wrap');
                        createElement('source', createElement('video', createElement(divString, wrap, 'video_inbox'),
                            { controls: true, playsinline: true, controlslist: 'nodownload', poster: videoUrl[1], 'data-no': iframe[1], }, 'dc_mv'
                        ), { src: videoUrl[2], type: videoUrl[3] });
                        text = text.r(iframe[0], temp.outerHTML); temp.remove();
                    }
                    postContentPage.innerHTML = text;
                })();
                else postContentPage.innerHTML = text;
            });
        };

        titleDiv.onclick = () => {
            bHiddenPostContent = !bHiddenPostContent;
            if (targetPostNum == num) setTarget(0);
            if (bHiddenPostContent) {
                splice(openedList, titleDiv); addClass(postContent, 'zero'); removeClass(line, 'open');
                while (postContentPage.lastChild) { postContentPage.lastChild.remove(); }
                pullDown(); renderCloseAllButton(); return;
            };
            onOpenPostContent();
        };
        
        let postComment = createElement(divString, postContent, 'cm', hidden);
        let postCommentListVp = createElement(divString, postComment, 'vp');
        let postCommentListPage = createElement(divString, postCommentListVp, 'page');
        let showMore; let checkAnyMore;
        let postCommentShowMore = createElement('a', postComment, { [onclick]: () => showMore(), }, 'ex.sm.r');
        createIcon(postCommentShowMore, 'more_vert');
        let inputComment = createElement('a', postContent, { [onclick]: () => { if (targetPostNum == num) setTarget(0); else setTarget(num, line, inputCommentSpan); } }, 'ic.r');
        let inputCommentSpan = createElement(spanString, inputComment, { [innerText]: str_writeComment, });
        let postCommentExpander = createElement('a', postContent, { [onclick]: () => titleDiv.click() }, 'ex.alt');
        createIcon(postCommentExpander, 'expand_less');
        let commentWrappers = {}; let commentDone = []; let commentWrapperPages = [];
        let currentWrapperPage = createElement(divString, postCommentListPage, 'w');
        let commentWrapperPageIndex = 0; let count = 0;
        let updateComment = async() => {
            if (removed.value != 'false') return;
            let data = await getPostComment(num).catch(debug);
            if (!data) return;
            if (data.count) removeClass(postComment, hidden); else addClass(postComment, hidden);
            let tempWrapperPageIndex = commentWrapperPageIndex;
            for (let commentNum in data.comments) {
                if (commentDone.includes(commentNum)) continue;
                commentDone.push(commentNum);
                if (count > maxCommentOnPage) {
                    currentWrapperPage = createElement(divString, postCommentListPage, 'w', hidden);
                    tempWrapperPageIndex++; count = 0;
                }
                let comment = data.comments[commentNum];
                let commentWrapper = createElement(divString, null, 'w');
                let commentEntry = createElement('a', null, 'cml.r');
                commentEntry.id = getNotificationKey(num, commentNum);
                let text = comment.text; let targetNum = comment.target; let targetName = comment.name;
                if (targetNum) {
                    let target = data.comments[targetNum];
                    if (target) targetName = target.name;
                    addClass(commentEntry, 're'); createIcon(createElement(divString, commentEntry, 're-icon'), sub);
                }
                let myComment = text.length > commentSignitureLength && text.substring(text.length - commentSignitureLength) == lastSigniture;
                if (myComment) {
                    lastSigniture = '';
                    appendListener(num, targetNum ? targetNum : commentNum, (newDiv) => {
                        if (bHiddenPostContent) titleDiv.click();
                        addClass(newDiv, 'hl'); timeout(() => removeClass(newDiv, 'hl'), highlightDuration);
                    });
                } else { checkAddNotification(num, targetNum, commentEntry); }
                commentEntry.onclick = () => setTarget(num, line, inputCommentSpan, commentEntry, targetNum ? targetNum : comment.num, comment.name, targetName);
                if (commentWrappers[targetNum] == undefined) {
                    commentWrappers[comment.num] = commentWrapper; commentWrapper.appendChild(commentEntry);
                    currentWrapperPage.appendChild(commentWrapper);
                    if (commentWrapperPages.length == tempWrapperPageIndex) { commentWrapperPages.push(currentWrapperPage); }
                } else {
                    let existing = commentWrappers[targetNum]; existing.insertAdjacentElement('beforeend', commentEntry);
                }
                let commentWriter = createElement(divString, commentEntry, 'writer-dlc');
                createWriter(commentWriter, comment.name, comment.id, comment.ip, comment.img, comment.fix);
                createElement(divString, commentEntry, { innerHTML: text }, 'text');
                count++;
                let contextOptions = [{
                    text: str_delete, icon: 'delete',
                    [onclick]: async () => {
                        let password = ''; let { delId, delValue, vCurT } = await getPostContent(num).catch(debug);
                        if (ip || comment.ip) {
                            let { r, p } = initPromise();
                            let modal = openModal({
                                title: str_password, input: password, nowrap: true,
                                options: [{ text: str_confirm, [onclick]: (close) => { password = modal.input.value; if (password.length < 2) return openAlert(str_shortPassword); close(); r(true); } }, { text: str_cancel, [onclick]: (close) => { close(); r(false); } }]
                            });
                            if (!await p) return;
                        }
                        let res = await postDeleteComment(commentNum, { num: num, id: delId, value: delValue, vCurT: vCurT }, password);
                        if (!res) openAlert(str_error_generic);
                        let splits = res.split('||');
                        if (splits[0] == 'true') { commentEntry.remove(); return updateComment(); }
                        if (splits.length == 1) return openAlert(res);
                        openAlert(str_error_generic);
                    }
                }];
                if (my || ip || myComment || comment.ip || comment.id == userId) addContextMenu(commentEntry, contextOptions);
            }
            checkAnyMore(); pullDown(true);
        }
        showMore = () => { commentWrapperPageIndex++; let wrapperPage = commentWrapperPages[commentWrapperPageIndex]; if (wrapperPage) removeClass(wrapperPage, hidden); checkAnyMore(); }
        checkAnyMore = () => { if (commentWrapperPageIndex + 1 == commentWrapperPages.length) addClass(postCommentShowMore, hidden); else removeClass(postCommentShowMore, hidden); }

        let commentCount = createElement(spanString, inline, 'cm.fr', hidden);
        createIcon(commentCount, sub, 'f');
        let commentCountDiv = createElement(divString, commentCount, 'nc.gray-div');
        let commentCountOver = createElement(spanString, commentCount, { [innerText]: '+' });
        let digits = []; let olds = []; let news = [];
        for (let i = 0; i < 3; i++) {
            let digit = createElement(divString, commentCountDiv, 'num-' + i);
            olds.push(createElement(spanString, digit, 'old')); news.push(createElement(spanString, digit, 'new')); digits.push(digit);
        }
        let changeNumber = (digit, max, num) => {
            let actualDigit = 3 - max + digit;
            let old = news[actualDigit][innerText]; olds[actualDigit][innerText] = old; news[actualDigit][innerText] = num;
            if (num != old) { addClass(digits[actualDigit], 'changed'); timeout(() => removeClass(digits[actualDigit], 'changed'), 500); }
        }
        let splitNumber = (num) => { let string = num + ''; return string.split('').reverse(); }
        onPostCommentCountChanged[num] = (newCount = -1, bForced = false) => {
            if (removed.value != 'false') { delete onPostCommentCountChanged[num]; return; }
            let func = () => {
                if (newCount == -1) newCount = postCommentCount[num] + 1;
                postCommentCount[num] = newCount;
                let splited = splitNumber(newCount);
                if (splited.length > 3) { splited = '999'.split(''); removeClass(commentCountOver, hidden); } else { addClass(commentCountOver, hidden); }
                for (let i = 0; i < splited.length; i++) { changeNumber(i, splited.length, splited[i]); }
                if (newCount) { removeClass(commentCount, hidden); pullDown(true); } else { addClass(commentCount, hidden); }
                if (!bHiddenPostContent || listeningPost[num]) updateComment().catch(debug);
            }
            if (bForced) func(); else timeout(func, randomInt(1, interval));
        };
    }

    if (postData.date) {
        let simulatedDelay = getNow() - postData.date;
        if (simulatedDelay > interval || !bGreeted) showLine(line);
        timeout(() => showLine(line), interval - simulatedDelay);
    } else { showLine(line); }
    if (!bPullDown) checkMaxPost();

    let contextOptions = [];
    if (my || ip || (bLogin && id == userId)) contextOptions.push({
        text: str_delete, icon: 'delete',
        [onclick]: () => {
            openModal({
                title: str_deleteTitle, desc: str_deleteDesc,
                options: [{
                    text: str_confirm, enter: true,
                    [onclick]: async (close, wait) => {
                        wait(); let password = '';
                        if (ip) {
                            let { r, p } = initPromise();
                            let pwModal = openModal({
                                title: str_password, input: password, nowrap: true,
                                options: [{ text: str_confirm, enter: true, [onclick]: (_close, _wait) => { password = pwModal.input.value; if (password.length < 2) return openAlert(str_shortPassword); r(true); _close(); } }, { text:str_cancel, [onclick]: (_close) => { r(false); _close(); } }]
                            })
                            if (!await p) return close();
                        }
                        let res = await postDelete(num, password);
                        close(); let splits = res.split('||');
                        if (splits[0] == 'false') return openAlert(splits[1]);
                        removeChat(line);
                    }
                }, { text: str_cancel }]
            })
        }
    }, { hr: true, });
    if (num) {
        contextOptions.push({
            text: str_openInNew, icon: 'open_in_new', [onclick]: () => { let temp = createElement('a', null, { href: getPostUrl(num), target: '_blank' }); temp.click(); temp.remove(); }
        }, {
            text: str_copyUrl, [onclick]: () => { window.navigator.clipboard.writeText(getPostUrl(num)); }
        });
        if (!my && (ip || id != userId)) {
            contextOptions.push({ hr: true });
            if (!ip) {
                contextOptions.push({ text: str_block_id, [onclick]: () => { openModal({ title: str_blockUserTitle, desc: 'ID: ' + id, options: [{ text: str_blockGall, [onclick]: (close) => { let block = getBlockGall(gallId, gallName); block.on = 1; addBlock(block, 'id', id); updateBlockGall(block, gallId); close(); } }, { text: str_blockAll, [onclick]: (close) => { let block = getBlockAll(); block.on = 1; addBlock(block, 'id', id); updateBlockAll(block); close(); } }, { text: str_cancel, }] }); } });
            } else {
                contextOptions.push({ text: str_block_ip, [onclick]: () => { openModal({ title: str_blockUserTitle, desc: 'IP: ' + ip, options: [{ text: str_blockGall, [onclick]: (close) => { let block = getBlockGall(gallId, gallName); block.on = 1; addBlock(block, 'ip', ip); updateBlockGall(block, gallId); close(); } }, { text: str_blockAll, [onclick]: (close) => { let block = getBlockAll(); block.on = 1; addBlock(block, 'ip', ip); updateBlockAll(block); close(); } }, { text: str_cancel, }] }); } });
            }
            contextOptions.push({ text: str_block_name, [onclick]: () => { openModal({ title: str_blockUserTitle, desc: name, options: [{ text: str_blockGall, [onclick]: (close) => { let block = getBlockGall(gallId, gallName); block.on = 1; addBlock(block, 'nick', name); updateBlockGall(block, gallId); close(); } }, { text: str_blockAll, [onclick]: (close) => { let block = getBlockAll(); block.on = 1; addBlock(block, 'nick', name); updateBlockAll(block); close(); } }, { text: str_cancel, }] }); } });   
        }
    }
    if (contextOptions.length) { addContextMenu(titleDiv, contextOptions); addContextMenu(postContentVp, contextOptions); }
};

let loginInfoContainer = createElement(divString, chatContainer, 'li-c');
let loginInputExpander = createElement('a', loginInfoContainer, { [onclick]: () => toggleExpander() }, hidden, 'ex.tab');
let loginInputExpanderSpan = createIcon(loginInputExpander, 'expand_more');
toggleExpander = () => {
    bFormExpanded = !bFormExpanded;
    if (bFormExpanded) { loginInputExpanderSpan.innerText = 'expand_more'; removeClass(loginInputContainer, hidden); }
    else { loginInputExpanderSpan.innerText = 'expand_less'; addClass(loginInputContainer, hidden); }
    pullDown(true);
}
let loginInputContainer = createElement(divString, loginInfoContainer, 'fr', hidden);
let inputNickname = createElement('input', loginInputContainer, { type:'text', [placeholder]: str_nickname, maxlength: 15, name: 'name' });
let inputPassword = createElement('input', loginInputContainer, { type:'password', [placeholder]: str_password, maxlength: 20, name: 'password' });
let captchaInputContainer = createElement(divString, loginInfoContainer, 'fr', hidden);
let captchaImageContainer = createElement('a', captchaInputContainer);
let captchaImage = createElement('img', captchaImageContainer, { [onclick]: () => renderInputCaptcha() }, 'captcha');
let inputCaptcha = createElement('input', captchaInputContainer, { type:'text', [placeholder]: str_code, maxlength: 20 });

let renderInputNickname = () => {
    if (!bMini) return;
    if (anonymousNickname) { inputNickname.value = anonymousNickname; addClass(inputNickname, disabled); }
    else { removeClass(inputNickname, disabled); }
}

let renderInputCaptcha = async () => {
    inputCaptcha.value = '';
    if (isCaptcha()) {
        let postingWrite = isPostingWrite();
        let sessionData = { ci_t: getCookie('ci_c'), gall_id: gallId, kcaptcha_type: postingWrite ? 'write' : 'comment', _GALLTYPE_: gallType };
        let url = host + 'kcaptcha/session';
        if (postingWrite) await postWrite(url, sessionData).catch(debug);
        else await postComment(targetPostNum, url, sessionData).catch(debug);
        captchaImage.src = host + 'kcaptcha/image/?gall_id='+ gallId +'&kcaptcha_type=' + (postingWrite ? 'write' : 'comment') + '&time='+ getNow() + '&_GALLTYPE_=' + gallType;
        removeClass(captchaInputContainer, hidden);
    } else { addClass(captchaInputContainer, hidden); }
}
let refreshWriteSession;

onLoginChecked = () => {
    if (!bLogin && !getOption(str_settings_hideLogin)) { removeClass(loginInputContainer, hidden); removeClass(loginInputExpander, hidden); pullDown(true); }
    else { addClass(loginInfoContainer, hidden); }
    refreshWriteSession?.();
}
let getNickname = () => inputNickname.value ?? '';
let getNicknameV2 = () => anonymousNickname ? anonymousNickname : (bLogin ? userNickname : getNickname());
let getPassword = () => inputPassword.value ?? '';
let getCaptcha = () => inputCaptcha.value ?? '';

let replyInfoContainer = createElement(divString, chatContainer, 'ri-c', hidden);
let replyingTab = createElement(divString, replyInfoContainer, 'tab');
let replyingNameSpan = createElement(spanString, replyingTab, 'name');
let replyingTypeIcon = createIcon(replyingTab, 'more_horiz', hidden);
let replyingTypeNameSpan = createElement(spanString, replyingTab, 'name', hidden);
let replyingToSpan = createElement(spanString, replyingTab, { [innerText]: str_replyTo });

let chatInputContainer = createElement(divString, chatContainer, 'ci-c');
let chatInputContainerFloat = createElement(divString, chatInputContainer, 'f');
let inputContainer = createElement(divString, chatInputContainerFloat, 'i');

let inputHeightName = '--ih';
let input = createElement('textarea', inputContainer, {
    [placeholder]: str_placeholderMessage,
    oninput: () => { setDocStyleProp(inputHeightName, (input.clientHeight + 12) + 'px'); input.style.height = 0; input.style.height = (input.scrollHeight - 19) + 'px'; pullDown(true); request(() => setDocStyleProp(inputHeightName, 0)) },
    onblur: scrollToTop
}, disabled);

let lastTargetDiv = null; let lastTargetButtonSpan = null; let lastTargetComment = null;
setTarget = (num, tDiv, tButton, tComment = null, tCommentNum = 0, tCommentWriter = '', targetCommentWriter2 = '') => {
    if (tComment != null && tComment == lastTargetComment) { num = 0; tCommentNum = 0; }
    if (lastTargetDiv && lastTargetButtonSpan) {
        if (lastTargetComment) removeClass(lastTargetComment, 'rp');
        removeClass(lastTargetDiv, 'wr'); removeClass(lastTargetDiv, 'rp'); lastTargetButtonSpan[innerText] = str_writeComment;
        removeClass(lastTargetButtonSpan, 'f-white'); addClass(replyInfoContainer, hidden); removeClass(chatViewport, 'r');
        addClass(replyingTypeIcon, hidden); addClass(replyingTypeNameSpan, hidden);
    }
    targetPostNum = num; targetCommentNum = tCommentNum;
    if (isPostingWrite()) {
        if (bWriteUnavailable) { addClass(input, disabled); addClass(upload, disabled); addClass(dccon, disabled); addClass(submit, disabled); if (!bLogin) addClass(loginInfoContainer, hidden); }
        removeClass(chatInputContainer, 'wr'); input[placeholder] = str_placeholderMessage;
        lastTargetDiv = null; lastTargetButtonSpan = null; lastTargetComment = null;
    } else {
        if (bWriteUnavailable) { removeClass(input, disabled); removeClass(upload, disabled); removeClass(dccon, disabled); removeClass(submit, disabled); if (!bLogin) removeClass(loginInfoContainer, hidden); }
        addClass(chatInputContainer, 'wr'); addClass(tDiv, 'wr');
        if (tComment && tCommentNum) {
            addClass(tComment, 'rp'); addClass(tDiv, 'rp'); input[placeholder] = str_placeholderReply;
            replyingNameSpan[innerText] = tCommentWriter;
            if (tCommentWriter != targetCommentWriter2) { replyingTypeNameSpan[innerText] = targetCommentWriter2; removeClass(replyingTypeIcon, hidden); removeClass(replyingTypeNameSpan, hidden); }
            replyingToSpan[innerText] = str_replyTo; tButton[innerText] = str_cancel; removeClass(tButton, 'f-white');
        } else {
            let postData = postContentDatas[num]; replyingNameSpan[innerText] = postData.name; input[placeholder] = str_placeholderComment; replyingToSpan[innerText] = str_commentTo; tButton[innerText] = str_writeNewComment; addClass(tButton, 'f-white');
        }
        removeClass(replyInfoContainer, hidden); addClass(chatViewport, 'r'); lastTargetDiv = tDiv; lastTargetButtonSpan = tButton; lastTargetComment = tComment ?? null; input.focus();
    }
    renderUploadImage(); renderInputCaptcha(); renderUploadPanel(); renderInputNickname(); pullDown(true);
}

let dcconPanel = createElement(divString, chatInputContainer, 'p.p-dccon', hidden);
let listPage = createElement(divString, createElement(divString, createElement(divString, dcconPanel, 'dcl'), 'vp'), 'page');
let dcconPage = createElement(divString, createElement(divString, createElement(divString, dcconPanel, 'dcc'), 'vp'), 'page');

let createPackagePage = (package) => {
    let packageIdx = package.idx; let packageTitle = package.title; let id = 'dc' + packageIdx;
    let entry = createElement(divString, null, 'package'); let existing = doc[querySelector]('#' + id);
    if (existing) { dcconPage.replaceChild(entry, existing); } else { dcconPage.appendChild(entry); let link = createElement('a', listPage, { href: '#' + id, [onclick]: () => { input.focus(); scrollToTop(); } }); if (packageTitle == str_recently) createIcon(link, 'history'); else createElement('img', link, { src: getDcconUrlFromCode(package.code) }); }
    entry.setAttribute('id', id); createElement(spanString, createElement(divString, entry, 'hd.r'), { [innerText]: packageTitle });
    let flex = createElement(divString, entry, 'flex.fr');
    for (let dccon of package.detail) {
        let code = dccon.code; let title = dccon.title; let pTitle = dccon.package_title;
        createElement('img', flex, { loading: "lazy", src: getDcconUrlFromCode(code), [onclick]: async () => {
            let _dccon = await loadDcconDetail(code);
            if (isPostingWrite()) {
                insertDccon(_dccon); let _packageTitle = packageTitle;
                if (packageTitle == str_recently) { if (savedDccons[code] != undefined) _packageTitle = savedDccons[code].package_title; else { await loadDcconDetail(code); _packageTitle = savedDccons[code].package_title; } }
                input.focus(); input.value += ':' + _packageTitle + ', ' + title + ': ';
            } else { insertDcconComment(_dccon, targetPostNum); }
        } }, 'd');
    }
}

let populatePackage = async (target) => { await loadDcconList(target).catch(debug); }
onApplyFunc['dccon-pk'] = (packages) => {
    for (let title in packages) {
        if (savedPackageTitles.includes(title)) continue;
        let package = packages[title];
        for (let detail of package.detail) savedDccons[detail.code] = detail;
        savedPackageTitles.push(package.title);
    }
};

let panelHidden = true; let bPopulated = false;
let togglePanel = () => {
    panelHidden = !panelHidden;
    if (panelHidden) { removeClass(dcconIcon, 'f'); addClass(dcconPanel, hidden); }
    else { input.focus(); addClass(dcconIcon, 'f'); removeClass(dcconPanel, hidden); if (!bPopulated) { bPopulated = true; populatePackage('recent'); populatePackage('icon'); } };
    request(() => input.focus());
}
let dccon = createElement('a', chatInputContainerFloat, { onmousedown: () => togglePanel(), }, 'd.b', disabled);
let dcconIcon = createIcon(dccon, 'mood');

let uploadPanel = createElement(divString, chatInputContainerFloat, 'p.up.abs.vp.pv-vp', hidden);
let uploadPage = createElement(divString, uploadPanel, 'fr.page');
let addImage = createElement('a', uploadPage, { [onclick]: () => uploadInput.click() }, 'pv.r.b.o-l');
createIcon(addImage, 'add_photo_alternate'); createElement(spanString, addImage, { [innerText]: str_uploadImage });

let zzal = null; let omitZzal = false; let files = []; let panelToggled = false;
let renderUploadPanel = () => {
    if (zzal !== null) {
        if (!useZzal) addClass(zzal.preview, hidden);
        else { removeClass(zzal.preview, hidden); if (omitZzal) removeClass(zzal.preview, 'up'); else addClass(zzal.preview, 'up'); }
    }
    uploadNum[innerText] = files.length;
    if (files.length == 0) { addClass(uploadNum, hidden); } else { removeClass(uploadNum, hidden); }
    if (!panelToggled || !isPostingWrite()) { addClass(uploadPanel, hidden); removeClass(uploadIcon, 'f'); } else { removeClass(uploadPanel, hidden); addClass(uploadIcon, 'f'); }
};

let toggleUploadPanel = (bool = null) => { if (bool === null) panelToggled = !panelToggled; else panelToggled = bool; renderUploadPanel(); };

let createPreview = (parent, fileData) => {
    let preview = createElement(divString, parent, 'pv.r'); let previewImageContainer = createElement(divString, preview, 'image');
    let previewImg = createElement('img', previewImageContainer); let previewDesc = createElement(divString, preview, 'desc');
    let name = createElement(spanString, previewDesc, { [innerText]: fileData.name }, 'file-name');
    createElement(spanString, previewDesc, { [innerText]: '(' + bytes(fileData.size) + ')' }, 'size');
    return { p: preview, c: previewImageContainer, i: previewImg, n: name };
}

let createFileData = (file) => {
    let { p: preview, c: previewImageContainer, i: previewImg, } = createPreview(uploadPage, file);
    let previewPending = createIcon(previewImageContainer, 'pending', 'pending.abs');
    let previewError = createIcon(previewImageContainer, 'warning', 'error.abs', hidden);
    let reader = new FileReader(); reader.onload = () => previewImg.src = reader.result; reader.readAsDataURL(file);
    let { r, p } = initPromise();
    let fileData = {
        preview: preview, img: previewImg, original: file.name, name: '', size: file.size, type: file.type, upload: false, file: file, error: false, num: 0, url: '',
        close: async() => {
            preview.remove();
            for (let i = 0; i < files.length; i++) { let oldFile = files[i]; if (fileData === oldFile) { files.splice(i, 1); break; } }
            renderUploadPanel();
            if (fileData.upload) postDeleteImage(fileData.num);
            else { await p.catch(debug); if (!fileData.error) postDeleteImage(fileData.num); }
        }, p: p
    };
    files.push(fileData);
    let previewClose = createElement('a', preview, 'close.abs-tr.b'); createIcon(previewClose, 'delete', 'f');
    previewClose.onclick = () => fileData.close();
    let onError = (reason, ...any) => { openAlert(reason); debug(reason, ...any); fileData.error = true; addClass(preview, 'error'); removeClass(previewError, hidden); }
    postImage(file).catch(debug).then((json) => {
        addClass(previewPending, hidden);
        if (!json) return onError(str_uploadFail);
        if (json.error) return onError(json.
