let name = prompt('Hello there, What\'s your name?');
alert('Nice to meet you ' + name);

let favouriteMeal = prompt('Do you think Mansaf is my favourite meal?')
    
if (favouriteMeal.toLowerCase() == 'yes'){
//   console.log('No, Makloubeh is my favourite meal!');
    alert('No, Makloubeh is my favourite meal!')
}else if (favouriteMeal.toLowerCase() == 'no'){
//    console.log('Correct, my favourite meal is Makloubeh');
    alert('Correct, my favourite meal is Makloubeh')
}else{
//    console.log('please type yes or no');
    alert("please type yes or no")
}

let favouriteSport = prompt('Do you think my favourite sport is Football?')
    
if (favouriteSport.toLowerCase() == 'yes'){
//    console.log('No, Vollyball is my favourite sport!');
      alert("No, Vollyball is my favourite sport!")
}else if (favouriteSport.toLowerCase() == 'no'){
//    console.log('Correct!, Volleyball was my favourite sport in collage');
      alert("Correct!, Volleyball was my favourite sport in collage")
}else{
//    console.log('please type yes or no');
      alert("please type yes or no")
}

let travelledToMalta = prompt('Do you think I have travelled to Malta?')

if (travelledToMalta.toLowerCase() == 'yes'){
//    console.log('I did!, Malta is beautiful.');
      alert("I did!, Malta is beautiful.")
}else if (travelledToMalta.toLowerCase() == 'no'){
//    console.log('Worng, I tavelled to Malta in 2019 and it was amazing!');
      alert('Worng, I tavelled to Malta in 2019 and it was amazing!')
}else{
//    console.log('please type yes or no');
      alert('please type yes or no')
}

let sister = prompt('Do you think I have a sister?')

if (sister.toLowerCase() == 'yes'){
//    console.log('No, I have one brother.');
      alert('No, I have one brother.')
}else if (sister.toLowerCase() == 'no'){
//    console.log('Correct!, I have one younger brother.');
      alert('Correct!, I have one younger brother.')
}else{
//    console.log('please type yes or no');
      alert('please type yes or no')
}

let videoGames = prompt('Do you think I play video games?')

if (videoGames.toLowerCase() == 'yes'){
//    console.log('No unfortunalty, I don\'t have time');
      alert('No unfortunalty, I don\'t have time')
}else if (videoGames.toLowerCase() == 'no'){
//    console.log('Correct, I used to play DOTA but now I don\'t have time');
      alert("Correct, I used to play DOTA but now I don\'t have time")
}else{
//    console.log('please type yes or no');
      alert('please type yes or no')
}

alert('This was fun ' + name + ' ,See you next time! Goodbye!');