const hour=document.querySelector('.hour');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');




function setDate(){
    const now= new Date();
   
    const seconds = now.getSeconds();
    const degree= ((seconds / 60) * 360);
    console.log(seconds);
    second.style.transform=`rotate(${degree-90}deg)`;

    const minutes= now.getMinutes();
    const degreeMinutes= ((minutes / 60) * 360);
    console.log(minutes);
    minute.style.transform=`rotate(${degreeMinutes-90}deg)`;

    const hours=now.getHours();
    const degreeHour= ((hours / 12) * 360)  ;
    hour.style.transform=`rotate(${degreeHour-90}deg)`;
}


setInterval(setDate,1000);