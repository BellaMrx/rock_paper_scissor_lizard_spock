// legt user, computer score fest
var uScore = 0;
var cScore = 0;


//funktion für button rock
function btnRock() {
	
	//ändert bild bei spieler wahl durch button rock
	var userImageChoice = document.querySelector("#displayPlayerChoice");
	var computerImageResult = document.querySelector("#displayComputerChoice");

    var weaponPlayer = document.querySelector("#iconPlayer");
    var weaponCom = document.querySelector("#iconCom");
	
	//Animation
	userImageChoice.style.animation = "shake 2s ease";
	computerImageResult.style.animation = "shake 2s ease";
    weaponPlayer.style.animation = "shake 2s ease";
    weaponCom.style.animation = "shake 2s ease";
	
	//setzt timer bis zur anzeige
	setTimeout (() => {
		
	//stoppt die animation
	userImageChoice.removeAttribute("style");
    computerImageResult.removeAttribute("style");
    weaponPlayer.removeAttribute("style");
    weaponCom.removeAttribute("style");
	
    userImageChoice.setAttribute("class", "hidden" );
    computerImageResult.setAttribute("class", "hidden" );

	weaponPlayer.innerHTML = '<i class="fa fa-hand-back-fist"></i>';
	
	//legt die 5 optionen fest
	var optionsR = [
		{
		  text: "Unentschieden",				//
		  icon:  '<i class="fa fa-hand-back-fist"></i>',		   		//option1
		  score: "Draw",						//
		},
		{
		  text: "Computer gewinnt",				//
		  icon:  '<i class="fa fa-hand"></i>',			//option2
		  score: "Lose",						//
		},
		{
		  text: "Du gewinnst",					//
		  icon: '<i class="fa fa-hand-scissors"></i>',			//option3
		  score: "Win",							//
		},
		{
		  text: "Du gewinnst",					//
          icon:  '<i class="fa fa-hand-lizard"></i>',			//option4
		  score: "Win",							//
		},
		{
		  text: "Computer gewinnt",				//
          icon: '<i class="fa fa-hand-spock"></i>',			//option5	
		  score: "Lose",						//
		}
	];
	
	//wählt eine zufällige option aus
	var rndR = optionsR[Math.floor(Math.random() * optionsR.length)];
	
	//gibt die ausgewälhte option aus
	weaponCom.innerHTML = rndR.icon;		//ausgabe option icon aus optionsR
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndR.text + '</p>';		//ausgabe option text aus optionsR
	
	userScore_span = document.getElementById("user-score");		//ausgabe spieler score ergebnis aus optionsR
	computerScore_span = document.getElementById("computer-score");		//ausgabe computer score ergebnis aus optionsR
	if (rndR.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndR.score === "Lose") {
		cScore++;		// addiert +1 zum computer score wenn option lose
		computerScore_span.innerHTML = cScore;		//aktualisiert user score
	} else if (rndR.score === "Win") {
		uScore++;		// addiert +1 zum user score wenn option win 
		userScore_span.innerHTML = uScore;		//aktualisiert user score
	}
	
	//zeitangabe für timeout
	}, 2000);

	return optionsR[rndR];
}


//funktion für button paper
function btnPaper() {
	
	//ändert bild bei spieler wahl durch button paper
	var userImageChoice = document.querySelector("#displayPlayerChoice");
	var computerImageResult = document.querySelector("#displayComputerChoice");
	
	//Animation
	userImageChoice.style.animation = "shake 2s ease";
	computerImageResult.style.animation = "shake 2s ease";
	
	//setzt timer bis zur anzeige
	setTimeout (() => {
		
	//stoppt die animation
	userImageChoice.removeAttribute("style");
    computerImageResult.removeAttribute("style");
	
	userImageChoice.src = "RPSLSpaperUser.png";
	
	//legt die 5 optionen fest
	var optionsP = [
		{
		  text: "Unentschieden",
		  img:  "RPSLSpaperCom.png",
		  score: "Draw",
		},
		{
		  text: "Computer gewinnt",
		  img:  "RPSLSscissorCom.png",
		  score: "Lose",
		},
		{
		  text: "Du gewinnst",
		  img:  "RPSLSrockCom.png",
		  score: "Win",
		},
		{
		  text: "Computer gewinnt",
          img:  "RPSLSlizardCom.png",		
		  score: "Lose",
		},
		{
		  text: "Du gewinnst",
          img:  "RPSLSspockCom.png",		
		  score: "Win",
		}
	];

	//wählt eine zufällige option aus
	var rndP = optionsP[Math.floor(Math.random() * optionsP.length)];
	
	computerImageResult.src = rndP.img;
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndP.text + '</p>';

	userScore_span = document.getElementById("user-score");
	computerScore_span = document.getElementById("computer-score");
	if (rndP.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndP.score === "Lose") {
		cScore++;
		computerScore_span.innerHTML = cScore;
	} else if (rndP.score === "Win") {
		uScore++;
		userScore_span.innerHTML = uScore;
	}
	
	//zeitangabe für timeout
	}, 2000);
	
	return optionsP[rndP];
}


//funktion für button scissor
function btnScissor() {
	
	//ändert bild bei spieler wahl durch button scissor
	var userImageChoice = document.querySelector("#displayPlayerChoice");
	var computerImageResult = document.querySelector("#displayComputerChoice");
	
	//Animation
	userImageChoice.style.animation = "shake 2s ease";
	computerImageResult.style.animation = "shake 2s ease";
	
	//setzt timer bis zur anzeige
	setTimeout (() => {
		
	//stoppt die animation
	userImageChoice.removeAttribute("style");
    computerImageResult.removeAttribute("style");
	
	userImageChoice.src = "RPSLSscissorUser.png";
	
	var optionsS = [
		{
		  text: "Unentschieden",
		  img:  "RPSLSscissorCom.png",
		  score: "Draw",
		},
		{
		  text: "Computer gewinnt",
		  img:  "RPSLSrockCom.png",
		  score: "Lose",
		},
		{
		  text: "Du gewinnst",
		  img:  "RPSLSpaperCom.png",
		  score: "Win",
		},
		{
		  text: "Du gewinnst",
          img:  "RPSLSlizardCom.png",		
		  score: "Win",
		},
		{
		  text: "Du verlierst",
          img:  "RPSLSspockCom.png",		
		  score: "Lose",
		}		
	];

	var rndS = optionsS[Math.floor(Math.random() * optionsS.length)];
	
	computerImageResult.src = rndS.img;
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndS.text + '</p>';

	userScore_span = document.getElementById("user-score");
	computerScore_span = document.getElementById("computer-score");
	if (rndS.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndS.score === "Lose") {
		cScore++;
		computerScore_span.innerHTML = cScore;
	} else if (rndS.score === "Win") {
		uScore++;
		userScore_span.innerHTML = uScore;
	}
	
	//zeitangabe für timeout
	}, 2000);
	
	return optionsS[rndS];
}


//funktion für button lizard
function btnLizard() {
	
	//ändert bild bei spieler wahl durch button rock
	var userImageChoice = document.querySelector("#displayPlayerChoice");
	var computerImageResult = document.querySelector("#displayComputerChoice");
	
	//Animation
	userImageChoice.style.animation = "shake 2s ease";
	computerImageResult.style.animation = "shake 2s ease";
	
	//setzt timer bis zur anzeige
	setTimeout (() => {
		
	//stoppt die animation
	userImageChoice.removeAttribute("style");
    computerImageResult.removeAttribute("style");
	
	userImageChoice.src = "RPSLSlizardUser.png";
	
	//legt die 5 optionen fest
	var optionsL = [
		{
		  text: "Unentschieden",				//
		  img:  "RPSLSlizardCom.png",		   	//option1
		  score: "Draw",						//
		},
		{
		  text: "Computer gewinnt",				//
		  img:  "RPSLSrockCom.png",				//option2
		  score: "Lose",						//
		},
		{
		  text: "Du gewinnst",					//
		  img:  "RPSLSpaperCom.png",			//option3
		  score: "Win",							//
		},
		{
		  text: "Du gewinnst",					//
          img:  "RPSLSspockCom.png",			//option4 
		  score: "Win",							//
		},
		{
		  text: "Computer gewinnt",				//
          img:  "RPSLSscissorCom.png",			//option5 	
		  score: "Lose",						//
		}
	];
	
	//wählt eine zufällige option aus
	var rndL = optionsL[Math.floor(Math.random() * optionsL.length)];
	
	//gibt die ausgewälhte option aus
	computerImageResult.src = rndL.img;		//ausgabe option img aus optionsR
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndL.text + '</p>';		//ausgabe option text aus optionsR
	
	userScore_span = document.getElementById("user-score");		//ausgabe spieler score ergebnis aus optionsR
	computerScore_span = document.getElementById("computer-score");		//ausgabe computer score ergebnis aus optionsR
	if (rndL.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndL.score === "Lose") {
		cScore++;		// addiert +1 zum computer score wenn option lose
		computerScore_span.innerHTML = cScore;		//aktualisiert user score
	} else if (rndL.score === "Win") {
		uScore++;		// addiert +1 zum user score wenn option win 
		userScore_span.innerHTML = uScore;		//aktualisiert user score
	}
	
	//zeitangabe für timeout
	}, 2000);

	return optionsL[rndL];
}


//funktion für button spock
function btnSpock() {
	
	//ändert bild bei spieler wahl durch button rock
	var userImageChoice = document.querySelector("#displayPlayerChoice");
	var computerImageResult = document.querySelector("#displayComputerChoice");
	
	//Animation
	userImageChoice.style.animation = "shake 2s ease";
	computerImageResult.style.animation = "shake 2s ease";
	
	//setzt timer bis zur anzeige
	setTimeout (() => {
		
	//stoppt die animation
	userImageChoice.removeAttribute("style");
    computerImageResult.removeAttribute("style");
	
	userImageChoice.src = "RPSLSspockUser.png";
	
	//legt die 5 optionen fest
	var optionsSp = [
		{
		  text: "Unentschieden",				//
		  img:  "RPSLSspockCom.png",		   	//option1
		  score: "Draw",						//
		},
		{
		  text: "Computer gewinnt",				//
		  img:  "RPSLSpaperCom.png",			//option2
		  score: "Lose",						//
		},
		{
		  text: "Du gewinnst",					//
		  img:  "RPSLSrockCom.png",				//option3
		  score: "Win",							//
		},
		{
		  text: "Du gewinnst",					//
          img:  "RPSLSscissorCom.png",			//option4 
		  score: "Win",							//
		},
		{
		  text: "Computer gewinnt",				//
          img:  "RPSLSlizardCom.png",			//option5 	
		  score: "Lose",						//
		}
	];
	
	//wählt eine zufällige option aus
	var rndSp = optionsSp[Math.floor(Math.random() * optionsSp.length)];
	
	//gibt die ausgewälhte option aus
	computerImageResult.src = rndSp.img;		//ausgabe option img aus optionsR
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndSp.text + '</p>';		//ausgabe option text aus optionsR
	
	userScore_span = document.getElementById("user-score");		//ausgabe spieler score ergebnis aus optionsR
	computerScore_span = document.getElementById("computer-score");		//ausgabe computer score ergebnis aus optionsR
	if (rndSp.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndSp.score === "Lose") {
		cScore++;		// addiert +1 zum computer score wenn option lose
		computerScore_span.innerHTML = cScore;		//aktualisiert user score
	} else if (rndSp.score === "Win") {
		uScore++;		// addiert +1 zum user score wenn option win 
		userScore_span.innerHTML = uScore;		//aktualisiert user score
	}
	
	//zeitangabe für timeout
	}, 2000);

	return optionsSp[rndSp];
}

