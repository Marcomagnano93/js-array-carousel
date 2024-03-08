// 1- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci 
// dell'array fornito e un semplice ciclo for che concatena un template literal.

    
    //metti tutte le immagini in un array

    const imgArray = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"] //String array
    //imgArray [img1 img 2 img3 img4 img5]
    // i       [ 0     1     2    3    4 ]

   
    //crea un ciclo for per scorrere le immagini

    for(i = 0; i < imgArray.length; i++){
        // console.log(imgArray[i])


        let indexImg = i; //number
        let imgSelected = imgArray[indexImg]; //function

 

        const displayElement = document.querySelector(".container");

        displayElement.innerHTML += `
        <div class="item">
            <img src="${imgSelected}" alt="">
        </div>
        `
        console.log(indexImg)

        // 2- Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// 3- Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.

        const appear = document.querySelector(".item");

        appear.classList.add("d-block");
        

    }
//Al click dell'utente sulle frecce, 
//il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

        const rightInteraction = document.querySelector(".right");

        rightInteraction.addEventListener("click",
        function(){

            const allItems = document.getElementsByClassName("item");

            for(index = 0; i < allItems.length; index++){

                let selector = index;
                
                

            }


        })
   

    

       
    

    
    
  

    

   



   
    

    
    
    






