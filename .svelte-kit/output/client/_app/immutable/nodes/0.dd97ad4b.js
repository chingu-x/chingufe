import{s as E,c as j,u as S,g as Y,d as q}from"../chunks/scheduler.d732cd1a.js";import{S as F,i as P,g as p,s as k,m as L,h as f,j as _,f as y,c as D,x as B,n as I,k as g,a as U,y as s,d as J,t as N}from"../chunks/index.0bfbdd81.js";function X(l){let r,t,n,d,c,w='<div class="px-5 py-2"><a href="mailto:support@chingu.io" target="_blank" rel="noreferrer noopener" class="text-base leading-6 text-gray-500 hover:text-gray-900">Contact</a></div> <div class="px-5 py-2"><a href="privacy" class="text-base leading-6 text-gray-500 hover:text-gray-900">Privacy</a></div>',u,h,$=`<a href="https://dev.to/chingu" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Dev.to</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 32 447.99999999999994 448"><path d="M120.12
            208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0
            7.77-1.45 11.65-4.35s5.82-7.25
            5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7
            32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0
            43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2
            291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0
            47.36 28.46 47.37
            47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15
            8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85
            24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"></path></svg></a> <a href="https://twitter.com/ChinguCollabs" target="_blank" rel="noopener noreferrer" class="ml-6 text-gray-400 hover:text-gray-500"><span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178
            0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646
            4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0
            00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27
            5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022
            4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0
            012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a> <a href="https://linkedin.com/company/chingu-os" target="_blank" rel="noopener noreferrer" class="ml-6 text-gray-400 hover:text-gray-500"><span class="sr-only">LinkedIn</span> <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 490.732 490.732" style="enable-background:new 0 0 490.732 490.732;" fill="currentColor"><g><g><path d="M472.366,0.003H18.36C8.219,0.003,0,8.222,0,18.363v454.005c0,10.143,8.219,18.361,18.36,18.361h454.012
                c10.142,0,18.36-8.219,18.36-18.361V18.363C490.727,8.222,482.507,0.003,472.366,0.003z M130.375,403.808
                c0,6.762-5.478,12.238-12.24,12.238H69.132c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.484-12.24,12.24-12.24h49.003
                c6.762,0,12.24,5.477,12.24,12.24V403.808z M130.375,127.482c0,6.763-5.478,12.24-12.24,12.24H69.132
                c-6.756,0-12.24-5.478-12.24-12.24V83.969c0-6.763,5.484-12.24,12.24-12.24h49.003c6.762,0,12.24,5.477,12.24,12.24V127.482z
                  M433.835,403.808c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.763,0-12.24-5.477-12.24-12.238v-90.436
                c0-29.988-1.566-49.383-4.712-58.189c-3.14-8.807-8.237-15.649-15.3-20.526c-7.062-4.884-15.558-7.32-25.496-7.32
                c-12.729,0-24.149,3.488-34.26,10.459c-10.11,6.977-17.038,16.211-20.79,27.717c-3.745,11.506-5.618,32.779-5.618,63.807v74.488
                c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.483-12.24,12.24-12.24h43.771
                c6.763,0,12.24,5.477,12.24,12.24v16.316c0,6.763,3.312,7.852,7.858,2.852c22.864-25.123,50.753-37.687,83.673-37.687
                c16.212,0,31.028,2.919,44.455,8.758c13.422,5.838,23.58,13.292,30.466,22.356c6.885,9.063,11.683,19.351,14.382,30.857
                c2.699,11.505,4.058,27.98,4.058,49.426V403.808L433.835,403.808z"></path></g></g></svg></a> <a href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw/feed" target="_blank" rel="noopener noreferrer" class="ml-6 text-gray-400 hover:text-gray-500"><span class="sr-only">Youtube</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 .03 2498 2502.47"><path d="m0 1864.11v.11c1.5 55.5 2 111.32 11.32 166.47 9.92 58.35 24.1
            115.25 51.15 168.21q54.86 107.52 150.21 181.66c45.52 35.5 95.25
            63.69 150.3 81.47 80.26 25.89 163.07 35.81 247.09 36.3 52.42.33
            104.81 1.64 157.25 1.42 380.82-1.6 761.65 2.75 1142.49-2.35
            50.53-.68 100.24-6.85 149.84-15.92 95.06-17.4 179.07-58
            250.95-122.09 83.77-74.71 140.29-166.16 165.81-276.52 16.69-72.14
            20.87-145.32
            21.58-218.77v-14.65c0-5.68-2.16-1247.91-2.36-1264.33-.55-45.1-3.88-89.87-12.33-134.25-10.29-54.08-24.82-106.78-50.71-155.7-27.35-51.7-61.6-98.17-104-138.79-64.89-62.23-139.78-106.23-227-129.51-78.74-21-159.07-25.68-240-25.6a2.45
            2.45 0 0 1 -.45-1.24h-1224.74c0 .42 0 .83-.07
            1.24-45.93.84-91.92.49-137.61 6.16-50.05 6.22-99.63 15.59-147
            33.09-74.62 27.6-139.46 70.59-194.84 128-62.75 65-107 140.22-130.44
            227.79-20.95 78.13-25.51 157.81-25.62 238.06" fill="#fff"></path><path d="m0 .79h2498v2498h-2498z" fill="none"></path><path d="m1293.24 1938.65-409.54-7.49c-132.6-2.61-265.53
            2.6-395.53-24.44-197.76-40.4-211.77-238.49-226.43-404.65-20.2-233.6-12.38-471.44
            25.74-703.09 21.52-129.98 106.21-207.54 237.18-215.98 442.12-30.63
            887.18-27 1328.32-12.71 46.59 1.31 93.5 8.47 139.44 16.62 226.77
            39.75 232.3 264.23 247 453.2 14.66 190.92 8.47 382.82-19.55
            572.44-22.48 157-65.49 288.66-247 301.37-227.42 16.62-449.62
            30-677.68
            25.74.01-1.01-1.3-1.01-1.95-1.01zm-240.77-397.48c171.38-98.4
            339.49-195.16 509.89-292.9-171.7-98.4-339.49-195.16-509.89-292.9z" fill="currentColor"></path></svg></a> <a href="https://medium.com/chingu" target="_blank" rel="noopener noreferrer" class="ml-6 text-gray-400 hover:text-gray-500"><span class="sr-only">Medium</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 195 195"><g fill="none"><path d="M0 0h195v195H0z" fill="currentColor"></path><path d="M46.534 65.216a5.074 5.074 0 0 0-1.651-4.28L32.65
              46.2V44h37.98l29.355 64.381L125.795 44H162v2.201l-10.458
              10.027a3.057 3.057 0 0 0-1.162 2.935v73.674a3.057 3.057 0 0 0
              1.162 2.935l10.213
              10.027V148h-51.372v-2.201l10.58-10.272c1.04-1.04 1.04-1.345
              1.04-2.934V73.042l-29.417 74.713H88.61L54.362 73.042v50.074a6.908
              6.908 0 0 0 1.896 5.747l13.76
              16.691v2.201H31v-2.2l13.76-16.692a6.663 6.663 0 0 0 1.774-5.747z" fill="#fff"></path></g></svg></a>`,V,m,o,b,H,z,x;const M=l[2].default,a=j(M,l,l[1],null);return{c(){r=p("div"),t=p("div"),n=p("div"),a&&a.c(),d=k(),c=p("nav"),c.innerHTML=w,u=k(),h=p("div"),h.innerHTML=$,V=k(),m=p("div"),o=p("p"),b=L("© "),H=L(l[0]),z=L(" Chingu, Inc. All rights reserved."),this.h()},l(e){r=f(e,"DIV",{class:!0});var v=_(r);t=f(v,"DIV",{class:!0});var i=_(t);n=f(i,"DIV",{class:!0});var A=_(n);a&&a.l(A),A.forEach(y),d=D(i),c=f(i,"NAV",{class:!0,"data-svelte-h":!0}),B(c)!=="svelte-krw19l"&&(c.innerHTML=w),u=D(i),h=f(i,"DIV",{class:!0,"data-svelte-h":!0}),B(h)!=="svelte-anycs6"&&(h.innerHTML=$),V=D(i),m=f(i,"DIV",{class:!0});var T=_(m);o=f(T,"P",{class:!0});var C=_(o);b=I(C,"© "),H=I(C,l[0]),z=I(C," Chingu, Inc. All rights reserved."),C.forEach(y),T.forEach(y),i.forEach(y),v.forEach(y),this.h()},h(){g(n,"class","w-min-h-screen bg-gray-100"),g(c,"class","-mx-5 my-2 flex flex-wrap justify-center"),g(h,"class","mt-8 flex justify-center"),g(o,"class","text-center text-base leading-6 text-gray-400"),g(m,"class","mt-8"),g(t,"class","max-w-screen-xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8"),g(r,"class","bg-white")},m(e,v){U(e,r,v),s(r,t),s(t,n),a&&a.m(n,null),s(t,d),s(t,c),s(t,u),s(t,h),s(t,V),s(t,m),s(m,o),s(o,b),s(o,H),s(o,z),x=!0},p(e,[v]){a&&a.p&&(!x||v&2)&&S(a,M,e,e[1],x?q(M,e[1],v,null):Y(e[1]),null)},i(e){x||(J(a,e),x=!0)},o(e){N(a,e),x=!1},d(e){e&&y(r),a&&a.d(e)}}}function G(l,r,t){let{$$slots:n={},$$scope:d}=r;const w=new Date().getFullYear();return l.$$set=u=>{"$$scope"in u&&t(1,d=u.$$scope)},[w,d,n]}class Q extends F{constructor(r){super(),P(this,r,G,X,E,{})}}export{Q as component};
