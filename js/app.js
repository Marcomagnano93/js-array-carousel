// 1- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci 
// dell'array fornito e un semplice ciclo for che concatena un template literal.
// 2- Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// 3- Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.
    
    //metti tutte le immagini in un array

    const imgArray = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"] //String array
    //imgArray [img1 img 2 img3 img4 img5]
    // i       [ 0     1     2    3    4 ]

   
    //crea un ciclo for per scorrere le immagini

    
    const displayElement = document.querySelector(".container");

    

    
    
   

    
        // const rightInteraction = document.querySelector(".right");

        // rightInteraction.addEventListener("click",
        // function(){

        //     selector = selector + 1; //number

        //     if(selector === 1){
        //         classes = "d-block"; //string
        //     }

        // })


        let selector = 0; //number
        let classes = ''; //string

        for(let i = 0; i < imgArray.length; i++){
            // console.log(imgArray[i])
         
            
            let indexImg = i; //number
            let imgSelected = imgArray[indexImg]; //function
            
            if(i === 0){
                classes = "d-block";
            }
            else{
                classes = "";
            }

            displayElement.innerHTML += `
                <div class="item ${classes}">
                    <img src="${imgSelected}" alt="">
                </div>
            `
           
        
        }




        const rightInteraction = document.querySelector(".right");
        rightInteraction.addEventListener("click",
        function(){
            
                    
                    if(selector < 4){
                        selector++;//number
                    }
                    else{
                        selector = 0;//number
                    }

                    displayElement.innerHTML = ""

                for(let i = 0; i < imgArray.length; i++){
                    // console.log(imgArray[i])
                
                    
                    let indexImg = i; //number
                    let imgSelected = imgArray[indexImg]; //function
                    
                    if(i === selector){
                        classes = "d-block";
                    }
                    else{
                        classes = "";
                    }

                    displayElement.innerHTML += `
                        <div class="item ${classes}">
                            <img src="${imgSelected}" alt="">
                        </div>
                    `
                
                
                }
        })
        


        const leftInteraction = document.querySelector(".left");
        leftInteraction.addEventListener("click",
        function(){
            
                    
                    if(selector > 0){
                        selector--;//number
                    }
                    else{
                        selector = 4;//number
                    }

                    displayElement.innerHTML = ""

                for(let i = 0; i < imgArray.length; i++){
                    // console.log(imgArray[i])
                
                    
                    let indexImg = i; //number
                    let imgSelected = imgArray[indexImg]; //function
                    
                    if(i === selector){
                        classes = "d-block";
                    }
                    else{
                        classes = "";
                    }

                    displayElement.innerHTML += `
                        <div class="item ${classes}">
                            <img src="${imgSelected}" alt="">
                        </div>
                    `
                
                
                }
        })


    // const rightInteraction = document.querySelector(".right");
            // rightInteraction.addEventListener("click",
            //     function() {
                  
        
        
            //     })


          



            //  if(selector === 1){
            //      classes = "d-block"; //string
            //  }

            // })



//Al click dell'utente sulle frecce, 
//il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.






        // const rightInteraction = document.querySelector(".right");

        // rightInteraction.addEventListener("click",
        // function(){

            


        //     const allItems = document.getElementsByClassName("item");

        // let selectedImg = 0; //number
        // for(index = 0; i < allItems.length; index++){


        //     selectedImg ++
        //     let selector = index;
            
        //     console.log(selectedImg)

        // }
            


        

        // })
   
        
    

       
    

    
    
  

    

   



   
    

    
    
    






