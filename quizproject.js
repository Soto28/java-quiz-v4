let currentQuestion = 0;
let score = 0;
let counter1 = 0;
let counter2 = 0;
let questions = [
   {
	"question": "Which series came out first?",
	"a": "Naruto",
	"b": "Dragon Ball",
	"c": "One Piece",
	"d": "Bleach",
	"image":"quizimages/q1.jpg",
	"answer": "b"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "In the series One Piece: Where did the series start?",
	"a": "North Blue",
	"b": "East Blue",
	"c": "South Blue",
	"d": "West Blue",
	"image":"quizimages/q3.jpg",
	"answer": "b"
   },
   {
	"question": "What is the direct translation of the series Shingeki no Kyojin?",
	"a": "Attack on Titan",
	"b": "Titans of War",
	"c": "War of Titan",
	"d": "Titan of Attack",
	"image":"quizimages/q2.jpg",
	"answer": "d"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "Which of these series is not in Shonen Jump?",
	"a": "Tokyo Ghoul",
	"b": "Death Note",
	"c": "Fire Force",
	"d": "JoJo's Bizarre Adventure",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   }
 ];
 
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
 }
 
 function loadQuestion(){
	 
	counter1++;
	 
	if(currentQuestion == 0){
		closeLightBox();
	}
	
	
	// load the image
	 if(counter1++ < 11){
		let img = document.getElementById("image");
		let preLoadImg = new Image();
		preLoadImg.src = questions[currentQuestion].image;
		
		preLoadImg.onload = function() {
			img.width = this.width;
		} // preLoadImg
		
		img.style.maxWidth = "80%";
		img.src = preLoadImg.src;
		
		// load the question and answers
		document.getElementById("question").innerHTML = questions[currentQuestion].question;
		document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
		document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
		document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
		document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	}
 } // loadQuestion
 
 
 function markIt(ans) {
	let message = "";
	
	if(currentQuestion < 9 && ans == questions[currentQuestion].answer){
		score++;
		
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message = "Correct! Your Score is " + score + " / " + questions.length;
	} else {
		message = "Wrong! The Answer was: " + ans + ". Your Score is " + score + " / " + questions.length;
	}
	
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;
	
	counter2++;
	currentQuestion++;
	loadQuestion();
	end();
	
 }  // markIt
 
 function end(){ 
   let message = "";
   if(counter2 == 10){
     if(score < 5){
     message = "Better luck next time, Your score is " + score + " / " + questions.length;
     document.getElementById("lightbox").style.display = "block";
     document.getElementById("message").innerHTML = message;
   }else{
     message = "Well Done! Your score is " + score + " / " + questions.length;
     document.getElementById("lightbox").style.display = "block";
     document.getElementById("message").innerHTML = message;
   }
     document.getElementById('a').style.pointerEvents = 'none';
     document.getElementById('b').style.pointerEvents = 'none';
     document.getElementById('c').style.pointerEvents = 'none';
     document.getElementById('d').style.pointerEvents = 'none';
   }
  
 } // end

 
 
 function closeLightBox() {
	 document.getElementById("lightbox").style.display = "none";
 }
 
 
 
 
 
 
 
 
 
   
