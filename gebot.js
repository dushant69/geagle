let pass = prompt("Enter Password: ");

if(pass === "nigga"){
    (function(){
        function r(min, max){return Math.floor(Math.random()*(max-min+1))+min;}
        let cycle=0;
        function getEnergy(){
            let e=document.querySelector("div._label_15n79_25");
            return e?parseInt(e.innerText,10):null;
        }
        function tapButton(){
            let b=document.querySelector("div._tapArea_njdmz_15");
            if(b){
                if(Math.random()<0.1){
                    let ox=r(-25,25),oy=r(-25,25);
                    let ev=new MouseEvent("click",{clientX:b.getBoundingClientRect().x+ox,clientY:b.getBoundingClientRect().y+oy,bubbles:true,cancelable:true});
                    b.dispatchEvent(ev);
                }else{
                    b.click();
                }
            }
        }
        function moveMouse(){
            let x=r(50,window.innerWidth-50),y=r(50,window.innerHeight-50);
            document.dispatchEvent(new MouseEvent("mousemove",{clientX:x,clientY:y,bubbles:true}));
        }
        function scrollRandom(){
            let dy=(Math.random()<0.5?-1:1)*r(50,300);
            document.dispatchEvent(new WheelEvent("wheel",{deltaY:dy,bubbles:true}));
        }
        function loop(){
            let en=getEnergy();
            if(en!==null&&en<5){
                let rec=r(30000,60000);
                console.log("Low energy, wait "+(rec/1000)+"s");
                setTimeout(loop,rec);
                return;
            }
            tapButton();
            cycle++;
            if(Math.random()<0.3) moveMouse();
            if(Math.random()<0.1) scrollRandom();
            if(Math.random()<0.05){
                let micro=r(1000,3000);
                console.log("Mini pause "+(micro/1000)+"s");
                setTimeout(loop,micro);
                return;
            }
            if(cycle>=r(400,500)){
                cycle=0;
                let pause=r(180000,300000);
                console.log("Long pause "+(pause/60000)+"m");
                setTimeout(loop,pause);
                return;
            }
            setTimeout(loop,r(400,600));
        }
        loop();
    })();
}else{
    console.log("Wrong Password");
}

