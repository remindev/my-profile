

var AppMain = {

    init:function (){
        // this methord will be called when the page is loaded

        stopLoadingLoading(); // stops all loading...
        
        AppMain.intro(4,2000); // start itro animations...
        // AppMain.intro(false,false,true); // hide itro animations...


    },

    /**
     * @param {Number} NumberOfPages 
     * @param {Number} delayInMillySeconds 
     */
    intro:function(NumberOfPages,delayInMillySeconds,stoper){
        
        document.getElementById("titles-title-cont").style.display = "flex";

        function stop(){
            document.getElementById("titles-title-cont").style.display = "none";
            document.getElementById("page-contents").style.display = "initial";
        }

        if(stoper==true){
            stop();
            return 0;
        }

        if(NumberOfPages){
            
            /**
             * @type {Array<ElementInternals>} docs
             */
            
            let docs = [];
            let timerLimit;

            for(let i=0; i<NumberOfPages; i++){
                docs.push(document.getElementById("Title-Cont-A-"+(i+1)));
            }

            // docs.forEach((element,index)=>{
            //     console.log(element);
            // });
            
            function display(ItemNumber){

                for(let i=0; i<docs.length; i++){

                    if((i+1)==ItemNumber){
                        docs[i].style.display = "flex";
                    }else{
                        docs[i].style.display = "none";
                    }
                    
                }

            }
            display(1);

            if(delayInMillySeconds){

                timerLimit = delayInMillySeconds;

            }else{
                timerLimit = 2000;
            }

            let counter=2;

            let timerDelay = setInterval(e=>{

                if((counter-1)==NumberOfPages){
                    clearInterval(timerDelay);
                    stop();
                }
                display(counter);
                counter++;

            },timerLimit);
            
        }
    },
    sidebar:{
        open:function(){
            let doc = document.getElementById("sidebar-menu-toggelable");
            doc.style.display = "initial";
        },
        close:function(){
            let doc = document.getElementById("sidebar-menu-toggelable");
            doc.style.display = "none";
        }
    },
    form:{
        submit:function(){
            let name = document.getElementById("name-form-submission").value;
            let email = document.getElementById("email-form-submission").value;
            let subject = document.getElementById("subject-form-submission").value;
            let errDisp = document.getElementById("errDisp-form");
            let sucessDisp = document.getElementById("sucessDisp-form");

            function displayStaus(message,isErr){
                if(isErr==true){
                    sucessDisp.style.display="none";
                    errDisp.innerText=message;
                    errDisp.style.display="flex";
                }else{
                    errDisp.style.display="none";
                    sucessDisp.innerText=message;
                    sucessDisp.style.display="flex";
                }
            }

            if(name.length>=1){

                if(email.length>=1){
                    
                    if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){

                        if(subject.length>=5){

                            displayStaus("Form sucessfully validated");
                            
                        }else{
                            displayStaus("Subject must contain 5 charactors",true);
                        }
                        
                    }else{
                        displayStaus("Enter a valid email",true);
                    }
                    
                }else{
                    displayStaus("Email field cannot be empty",true);
                }

            }else{
                displayStaus("Name field cannot be empty",true);
            }


        }
    }
}
