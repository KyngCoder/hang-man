const lettersDisplay  = document.querySelector('.keyboard')
const display = document.getElementById('word')
const head = document.querySelector('.head')
const eye1 = document.querySelector('.eye-1')
const eye2 = document.querySelector('.eye-2')
const nose = document.querySelector('.nose')
const mouth = document.querySelector('.mouth')
const stem = document.querySelector('.stem')
const leftHand = document.querySelector('.left-hand')
const rightHand = document.querySelector('.right-hand')
const leftLeg = document.querySelector('.left-foot')
const rightLeg = document.querySelector('.right-foot')
const won = document.querySelector('.won')
const lost = document.querySelector('.lost')
const replay = document.querySelector('.replay')
let container = {}
words = ['Go',"rust","Python",'html','css','javascript','kotlin','dart','solidity','web3','https','app']
randomWord = words[Math.floor(Math.random()*words.length)]

let dashes = []
let guess = randomWord
let currentLetter
let status = true
let guessLength = guess.length
const remainder = document.querySelector('.remainder')
remainder.textContent += `${guessLength}/${randomWord.length}` 
let attempt = 0;
for(let i=0; i<randomWord.length; i++){

   let dash = document.createElement('span')
   dash.textContent = '_ '
   dashes.push(dash)
   display.append(dash)
   
}



let remainingLetters = randomWord.length



//make container
for(let i=0; i<randomWord.length; i++){
    container[randomWord[i]]?container[randomWord[i]] = i: container[randomWord[i]] = i
}



const generateKeys = () => {
    const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

    letters.map((letter) => {
        let btnLetter = document.createElement('button')
        btnLetter.textContent = letter
        lettersDisplay.appendChild(btnLetter)
        btnLetter.addEventListener('click',(event)=>whom(event))
        btnLetter.addEventListener('click',(event)=>isThere(event))
    })
}

generateKeys()

const whom = (event) => {
   let stroke = event.target
   currentLetter = event.target.textContent
  
   //update game state
   for(let i=0; i<randomWord.length; i++){
   
    if(currentLetter !== guess[i]){
    
    }else{
        stroke.style.pointerEvents = 'none'
     
        dashes[i].textContent = currentLetter
        guessLength--
       
        remainder.textContent = `Remaining Words: ${guessLength}/${randomWord.length}`
        if(guessLength === 0){
            won.style.display = 'block'
            lettersDisplay.style.display = 'none'
        }
    }
    
}



}

const isThere = (event) => {
    
    currentLetter = event.target.textContent

    if(container[currentLetter] === undefined){
        attempt++
        if(attempt === 1){
            head.style.display = 'block'
        }
        if(attempt === 2){
            eye1.style.display = 'block'
        }
        if(attempt === 3){
            eye2.style.display = 'block'
        }
        if(attempt === 4){
            nose.style.display = 'block'
        }
        if(attempt === 5){
            mouth.style.display = 'block'
        }
        if(attempt === 6){
            stem.style.display = 'block'
        }
        if(attempt === 7){
            rightHand.style.display = 'block'
        }
        if(attempt === 8){
            leftHand.style.display = 'block'
        }
        if(attempt === 9){
            rightLeg.style.display = 'block'
        }
        if(attempt === 10){
            leftLeg.style.display = 'block'
            lost.style.display = 'block'
            lettersDisplay.style.display = 'none'
        }
    }
}

replay.addEventListener('click',()=>location.reload())
