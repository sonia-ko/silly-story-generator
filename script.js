// VARIABLES FOR GAME

let currentStory = 0;

let inputLabels = [ 
    ['Adjective 1', 'Adjective 2', 'Adjective 3', 'Adverb', 'Noun 1', 'Noun 2', 'Noun 3', 'Noun 4', 'Noun 5', 'Noun 6', 'Plural Noun'], 
    ['Adjective:', 'Adverb:', 'Body Part:', `Boy's Name:`, 'Exclamation:', 'Famous Person:', 'Favorite Song:', `Girl's Name:`, 'Past Tense Verb:', 'Room:'],
    ['Adjective:', 'Animal:', 'Best Friend:', 'Food:', 'Noun:', 'Past Tense Verb:', 'Plural Noun:', 'TV Show:', `Teacher's Name:`, 'Verb 1:', 'Verb 2:' ],
    ['Adjective:', 'Adverb:', 'Adverb:','Exclamation:', 'Noun 1:', 'Noun 2:', 'Noun 3:', 'Noun 4:', 'Plural Noun:', 'Verb 1:', 'Verb 2:'],
    ['Animal:', 'Cartoon Character:', 'Food:', `Job:`, `Name:`, 'Noun #1:', `Noun #2:`, 'Noun #3:', 'Noun #4:', 'Number #1:', 'Number #2:', 'Place:', 'Plural Animal #1:', 'Plural Animal #2:', 'Plural Noun #1:',  'Plural Noun #2:',  'Plural Noun #3:', 'TV Show:', 'Verb #1' , 'Verb #2' ],
    ['Adjective #1:', 'Adjective #2:', 'Adverb:', 'Name:', 'Noun #1:', 'Noun #2:',  'Noun #3:', 'Noun #4:', 'Plural Noun #1:',  'Plural Noun #2:',  'Plural Noun #3:', 'Verb #1:', 'Verb #2:',  'Verb #3:',  'Verb #4:',  'Verb #5:',  'Verb #6:']
];

let inputsData = [];


/// VARIABLES FOR DOM ELEMENTS

const storiesBlock = document.querySelector('.stories-block');
const inputsBlock = document.querySelector('.inputs-block');
const generatedStoryBlock = document.querySelector('.generated-story-block');

let submitButton = document.querySelector('.submit');
let startAnotherStoryButton = document.querySelector('.choose-another-story');
let startButtons = document.querySelectorAll('.start-button');

// A user clicks on the start button

for(let i = 0; i < startButtons.length; i++){
    
    startButtons[i].addEventListener('click', function(){
        currentStory = i;
        inputsBlock.classList.remove('hidden'); 
        storiesBlock.classList.add('hidden'); 
        generatedStoryBlock.classList.add('hidden'); 
        document.querySelector(".game-description").classList.add('hidden'); 
        
        for (let item = 0; item < inputLabels[currentStory].length; item++) {
         // Create an element <li>
            var li = document.createElement("LI");  
            li.innerHTML = inputLabels[currentStory][item];
            document.querySelector(".list-inputs").appendChild(li);
            // Create input
            var input = document.createElement("INPUT");             document.querySelector(".list-inputs").appendChild(input);
            //add a class to input element
            input.classList.add(`input${item}`); 
        
         
            
  };
        
    })
};


// a user submits the answers

submitButton.addEventListener('click', createStory);

// a user desides to choose another story

startAnotherStoryButton.addEventListener('click', initialState);
document.querySelector('h1').addEventListener('click', initialState);
document.querySelector('.logo').addEventListener('click', initialState);


// functions used in a game

function initialState(){
    inputsData = [];
    inputsBlock.classList.add('hidden'); 
     storiesBlock.classList.remove('hidden'); 
     generatedStoryBlock.classList.add('hidden'); 
      document.querySelector(".game-description").classList.remove('hidden');
    
    let listItems = document.querySelectorAll('li');
    let inputs = document.querySelectorAll('input');
    
    for(let i = 0; i < listItems.length; i++){
        listItems[i].remove();
        inputs[i].remove();
    }
    
    
};

// app flow

initialState();


//a function that creates a story

function createStory(){
    
    let inputsData = [];
    
    for (let i = 0; i < inputLabels[currentStory].length; i++){
    
        let input = document.querySelector(`.input${i}`).value;
        if(input === ''){
        inputsData.push('racoon 🦝');
        }else{
            inputsData.push(document.querySelector(`.input${i}`).value);
        }
    }
    
    
    generatedStoryBlock.classList.remove('hidden');
    inputsBlock.classList.add('hidden');
        let generatedStories = [
    
    //Story 1
    `Driving a car can be fun if you follow this ${inputsData[0]} advice: <br>
<ul>
<li> When approaching a ${inputsData[4]} on the right, always blow your ${inputsData[5]}. </li>
<li> Before making an ${inputsData[1]} turn, always stick your ${inputsData[6]} out of the window. </li>
<li> Every 2000 miles, have your ${inputsData[7]} inspected and your ${inputsData[8]} checked. </li>
<li>When approaching a school, watch out for ${inputsData[2]} ${inputsData[10]}. </li>
<li> Above all, drive ${inputsData[3]}. The ${inputsData[9]} you save may be your own!  </li> </ul>
<img class='story-image' src="img/racoon-driving.png" alt="">`,
    
    // Story 2
    `<h3> The Package </h3>
The doorbell rang. ${inputsData[3]}  and ${inputsData[7]} raced to the door. There on the doorstep was an enormous, ${inputsData[0]} box. What could be inside? They ${inputsData[1]} ${inputsData[8]} the box into the ${inputsData[9]}.
<br>
${inputsData[7]}  ${inputsData[1]} put her  ${inputsData[2]} close to the box. She thought she heard a voice whisper,   "${inputsData[4]}". <br>
<br>
"Hurry. Open the box!" screamed ${inputsData[3]}. To their amazement,  ${inputsData[5]} leaped out of the box and started singing "${inputsData[6]}". There was nothing else to do but sing along. <br>
<img class='story-image' src="img/racoon-in-a-box.jpg" alt="">`,
    
        // story 3
    `<b>I just hate it when: </b> <br>
<br>
Mom serves ${inputsData[3]} for dinner.  <br>
<br>
My pet ${inputsData[1]} chews my ${inputsData[3]}. <br>
<br>
${inputsData[8]} gets mad at the class for being ${inputsData[0]}. <br> 
<br>
My best friend ${inputsData[2]} decides to  ${inputsData[9]} with somebody else. <br>
<br>
I get ${inputsData[5]} for something I didn't do. <br>
<br>
Dad makes me wear ${inputsData[6]} to school. <br>
<br>
My favorite TV show ${inputsData[7]} gets canceled because the station has to broadcast a news conference. <br>
<br>
People ${inputsData[10]} into my bedroom without knocking. <br> 

<img class='story-image' src="img/angry-racoon.jpg" alt="">`,
            
    // story 4
    ` When invited to a party at a ${inputsData[4]}'s house, you should always bring a ${inputsData[5]}. <br> This will make you seem especially ${inputsData[0]}, and may even get you some ${inputsData[8]}. <br> Don't talk too ${inputsData[1]}, and don't ever sit on the ${inputsData[6]}. <br> Don't dance too ${inputsData[2]}, and don't ${inputsData[9]} anything that's in the ${inputsData[7]}. <br> At the end of the party, be sure to walk your host before saying ${inputsData[3]} and driving home.  <br>
    <img class='story-image' src="img/racoon-party.png" alt="">`,
        ///  story 5
            
    `<h3> Strange but True </h3>
On average, people fear ${inputsData[12]} more than they do ${inputsData[14]}! <br>
<br>
Banging your ${inputsData[5]} against a wall uses  ${inputsData[9]} calories an hour.<br>
<br>
${inputsData[4]}'s son invented ${inputsData[15]}. <br>
<br>
In every episode of ${inputsData[17]} there is a ${inputsData[6]} somewhere. <br>
<br>
Many ${inputsData[13]} only blink one eye at a time. <br>
<br>
The ${inputsData[7]} was invented by a ${inputsData[3]}. <br>
<br> 
A/An ${inputsData[0]} can run for 3 years. <br>
<br>
Women ${inputsData[19]} nearly twice as much as men. <br>
<br>
${inputsData[1]} comics were banned in ${inputsData[11]} because he doesn't wear a ${inputsData[8]}. <br>
<br>
The average ${inputsData[2]} has ${inputsData[10]} ${inputsData[16]} in it. <br>
<img class='story-image' src="img/strange-racoon.jpg" alt="">`,
            
            // story 6
    `<h3> Summer Activities </h3> 
There are so many things to ${inputsData[11]}  in the summer. For instance, my favorite thing to do in the summer is ${inputsData[12]} . I like to go to the ${inputsData[4]} , go in the pool, and eat ${inputsData[10]}. I try not to ${inputsData[14]}  too happily, since I may become ${inputsData[0]}  and have to stay inside. Sometimes I go to the ${inputsData[5]}  with my friends, or we can ${inputsData[15]}  at ${inputsData[3]}'s house. The zoo is a ${inputsData[1]}  place to visit, and I can get free ${inputsData[8]} at the library. Of course, I also have to mow the ${inputsData[6]}, water the ${inputsData[9]}, and clean my ${inputsData[7]}  sometimes. On a really hot day, I just like to ${inputsData[16]} . <br> 
  <img class='story-image' src="img/racoon-on-vacation.jpg" alt="">`
];
    
    generatedStoryBlock.innerHTML = generatedStories[currentStory];
    
    var newBtn = document.createElement("button");  
    newBtn.textContent = 'Choose another story';
    document.querySelector(".generated-story-block").appendChild(newBtn);
    newBtn.classList.add('play-again');
    
    document.querySelector('.play-again').addEventListener('click', initialState);
}

