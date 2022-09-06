console.log('hi prompt')
// alert('dusto ki koros')


const showModal = () =>{

    const num = Math.random() * 10;
    console.log(num)
    if(num < 5){

        alert('dusto ki koros')
    }
}


const askSomeThing = () =>{
   const dicision = confirm('Kal ki college jaba?');
   console.log(dicision);

   if(dicision === true){
        alert('dusto 500 tk bkash kor')
        alert('ok')
   }
   else{
        console.log('DGM !!!  mane dure giah mor')
   }
}

const getUserInfo = () =>{
    const name =  prompt('Tell us your name!');
    console.log(name)

    if(!!name){                                         // judi sotto hoy
        console.log('welcome here', name)
    }
}