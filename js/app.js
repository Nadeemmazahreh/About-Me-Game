'use strict';
let score = 0;

let name = prompt('Hello there, What\'s your name?');
alert('Nice to meet you ' + name);
// question 1
function favouriteMeal(){
      let favouriteMeal = prompt('Do you think Mansaf is my favourite meal?')
      
      if (favouriteMeal.toLowerCase() == 'yes' || favouriteMeal.toLowerCase() == 'y' ){
      //   console.log('No, Makloubeh is my favourite meal!');
      alert('No, Makloubeh is my favourite meal!')
      }else if (favouriteMeal.toLowerCase() == 'no' || favouriteMeal.toLowerCase() == 'n'){
      //    console.log('Correct, my favourite meal is Makloubeh');
      alert('Correct, my favourite meal is Makloubeh')
      score++;
      }else{
      //    console.log('please type yes or no');
      alert("please type yes or no")
   } return score;
}
 favouriteMeal();


 // question 2
 function favouriteSport(){ 
      let favouriteSport = prompt('Do you think my favourite sport is Football?')
      
      if (favouriteSport.toLowerCase() == 'yes' || favouriteSport.toLowerCase() == 'y'){
      //    console.log('No, Vollyball is my favourite sport!');
            alert("No, Vollyball is my favourite sport!")
      }else if (favouriteSport.toLowerCase() == 'no' || favouriteSport.toLowerCase() == 'n'){
      //    console.log('Correct!, Volleyball was my favourite sport in collage');
            alert("Correct!, Volleyball was my favourite sport in collage")
            score++;
      }else{
      //    console.log('please type yes or no');
            alert("please type yes or no")
      } return score;
 }
 favouriteSport();

// question 3
 function ifTravelToMalta(){
      let travelledToMalta = prompt('Do you think I have travelled to Malta?')

      if (travelledToMalta.toLowerCase() == 'yes' || travelledToMalta.toLowerCase() == 'y'){
      //    console.log('I did!, Malta is beautiful.');
            alert("I did!, Malta is beautiful.")
            score++;
      }else if (travelledToMalta.toLowerCase() == 'no' || travelledToMalta.toLowerCase() == 'n'){
      //    console.log('Worng, I tavelled to Malta in 2019 and it was amazing!');
            alert('Worng, I tavelled to Malta in 2019 and it was amazing!')
      }else{
      //    console.log('please type yes or no');
            alert('please type yes or no')
      }return score;
 }
 ifTravelToMalta();



function ifSibling(){
      let sister = prompt('Do you think I have a sister?')

      if (sister.toLowerCase() == 'yes' || sister.toLowerCase() == 'y'){
      //    console.log('No, I have one brother.');
            alert('No, I have one brother.')
      }else if (sister.toLowerCase() == 'no' || sister.toLowerCase() == 'n'){
      //    console.log('Correct!, I have one younger brother.');
            alert('Correct!, I have one younger brother.')
            score++;
      }else{
      //    console.log('please type yes or no');
            alert('please type yes or no')
      } return score;
}
ifSibling();



let videoGames = prompt('Do you think I play video games?')

if (videoGames.toLowerCase() == 'yes' || videoGames.toLowerCase() == 'y'){
//    console.log('No unfortunalty, I don\'t have time');
      alert('No unfortunalty, I don\'t have time')
}else if (videoGames.toLowerCase() == 'no' || videoGames.toLowerCase() == 'n'){
//    console.log('Correct, I used to play DOTA but now I don\'t have time');
      alert("Correct, I used to play DOTA but now I don\'t have time")
      score++;
}else{
//    console.log('please type yes or no');
      alert('please type yes or no')
}


for (let i = 0; i < 4; i++){
      let countriesTravelled = prompt('How many countries do you think I have visited?')
      if (countriesTravelled == 16){
            alert('Correct!!!!')
            score++;
            break
      }else if(countriesTravelled < 16){
            alert('Too Low')
      }else if(countriesTravelled > 16) {
            alert('Too high')
      }else{
            alert('Please pick a number')
            }   
      }
alert('The answer is 16 :)')

let JordanianDishsIHate = ['maftool', 'foul', 'shushbarak']  
for (let i = 0; i < 6; i++){
      let dishAnswer = prompt('What is an Arabian dish I really hate?')
      dishAnswer = dishAnswer.toLowerCase()
      if (dishAnswer == JordanianDishsIHate[0] || dishAnswer == JordanianDishsIHate[1] || dishAnswer == JordanianDishsIHate[2]){
            alert('Correct!!!!')
            score++;
            break;
      }else{
            alert('Try again');}     
}
alert('Dishes I dont like are Maftool, Fool and Shushbarak')  

alert(`You got ${score} out of 7`);
alert('This was fun ' + name + ' ,See you next time! Goodbye!');