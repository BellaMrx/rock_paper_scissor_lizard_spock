// sets user, computer score
var uScore = 0;
var cScore = 0;

// function for button rock
function btnRock() {
	
	// changes image durcg icon at click button rock
	var startImageRulesPlayer = document.querySelector("#displayPlayerStartImage");
	var startImageRulesCom = document.querySelector("#displayComStartImage");

    var weaponPlayer = document.querySelector("#iconPlayer");
    var weaponCom = document.querySelector("#iconCom");
	
	// animation
	startImageRulesPlayer.style.animation = "shake 2s ease";
	startImageRulesCom.style.animation = "shake 2s ease";
    weaponPlayer.style.animation = "shake 2s ease";
    weaponCom.style.animation = "shake 2s ease";
	
	// sets timer until display
	setTimeout (() => {
		
	// stops the animation
	startImageRulesPlayer.removeAttribute("style");
    startImageRulesCom.removeAttribute("style");
    weaponPlayer.removeAttribute("style");
    weaponCom.removeAttribute("style");
	
    startImageRulesPlayer.setAttribute("class", "hidden" );
    startImageRulesCom.setAttribute("class", "hidden" );

	weaponPlayer.innerHTML = '<i class="fa fa-hand-back-fist"></i>';
	
	// sets the 5 options
	var optionsR = [
		{
		  text: "Draw",				                            //
		  icon:  '<i class="fa fa-hand-back-fist"></i>',        // option1
		  score: "Draw",						                //
		},
		{
		  text: "Computer wins",				                //  
		  icon:  '<i class="fa fa-hand"></i>',			        // option2
		  score: "Lose",						                //
		},
		{
		  text: "You win",					                    //
		  icon: '<i class="fa fa-hand-scissors"></i>',			// option3
		  score: "Win",							                //
		},
		{
		  text: "You win",					                    //
          icon:  '<i class="fa fa-hand-lizard"></i>',			// option4
		  score: "Win",							                //
		},
		{
		  text: "Computer wins",				                //
          icon: '<i class="fa fa-hand-spock"></i>',			    // option5	
		  score: "Lose",						                //
		}
	];
	
	// selects a random(rnd) option
	var rndR = optionsR[Math.floor(Math.random() * optionsR.length)];
	
	// outputs the selected option
	weaponCom.innerHTML = rndR.icon;		                    // output option icon from optionsR
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndR.text + '</p>';	// output option text from optionsR
	
	userScore_span = document.getElementById("user-score");		// output player score result from optionsR
	computerScore_span = document.getElementById("computer-score");		// output computer score result from optionsR
	if (rndR.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndR.score === "Lose") {
		cScore++;		// adds +1 to computer score when option lose
		computerScore_span.innerHTML = cScore;		// updated user score
	} else if (rndR.score === "Win") {
		uScore++;		// adds +1 to user score if option win 
		userScore_span.innerHTML = uScore;		// updated user score
	}
	
	// timeout indication
	}, 2000);

	return optionsR[rndR];
}


// function for button paper
function btnPaper() {
	
	var startImageRulesPlayer = document.querySelector("#displayPlayerStartImage");
	var startImageRulesCom = document.querySelector("#displayComStartImage");

    var weaponPlayer = document.querySelector("#iconPlayer");
    var weaponCom = document.querySelector("#iconCom");
	
	startImageRulesPlayer.style.animation = "shake 2s ease";
	startImageRulesCom.style.animation = "shake 2s ease";
    weaponPlayer.style.animation = "shake 2s ease";
    weaponCom.style.animation = "shake 2s ease";
	
	setTimeout (() => {
		
	startImageRulesPlayer.removeAttribute("style");
    startImageRulesCom.removeAttribute("style");
    weaponPlayer.removeAttribute("style");
    weaponCom.removeAttribute("style");
	
    startImageRulesPlayer.setAttribute("class", "hidden" );
    startImageRulesCom.setAttribute("class", "hidden" );

	weaponPlayer.innerHTML = '<i class="fa fa-hand"></i>';
	
	var optionsP = [
		{
		  text: "Draw",
		  icon:  '<i class="fa fa-hand"></i>',
		  score: "Draw",
		},
		{
		  text: "Computer wins",
		  icon:  '<i class="fa fa-hand-scissors"></i>',
		  score: "Lose",
		},
		{
		  text: "You win",
		  icon:  '<i class="fa fa-hand-back-fist"></i>',
		  score: "Win",
		},
		{
		  text: "Computer wins",
          icon:  '<i class="fa fa-hand-lizard"></i>',		
		  score: "Lose",
		},
		{
		  text: "You win",
          icon:  '<i class="fa fa-hand-spock"></i>',		
		  score: "Win",
		}
	];

	var rndP = optionsP[Math.floor(Math.random() * optionsP.length)];
	
	weaponCom.innerHTML = rndP.icon;
	
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
	
	}, 2000);
	
	return optionsP[rndP];
}


function btnScissor() {
	
	var startImageRulesPlayer = document.querySelector("#displayPlayerStartImage");
	var startImageRulesCom = document.querySelector("#displayComStartImage");

    var weaponPlayer = document.querySelector("#iconPlayer");
    var weaponCom = document.querySelector("#iconCom");
	
	startImageRulesPlayer.style.animation = "shake 2s ease";
	startImageRulesCom.style.animation = "shake 2s ease";
    weaponPlayer.style.animation = "shake 2s ease";
    weaponCom.style.animation = "shake 2s ease";
	
	setTimeout (() => {
		
	startImageRulesPlayer.removeAttribute("style");
    startImageRulesCom.removeAttribute("style");
    weaponPlayer.removeAttribute("style");
    weaponCom.removeAttribute("style");
	
    startImageRulesPlayer.setAttribute("class", "hidden" );
    startImageRulesCom.setAttribute("class", "hidden" );

	weaponPlayer.innerHTML = '<i class="fa fa-hand-scissors"></i>';
	
	var optionsS = [
		{
		  text: "Draw",
		  icon:  '<i class="fa fa-hand-scissors"></i>',
		  score: "Draw",
		},
		{
		  text: "Computer wins",
		  icon:  '<i class="fa fa-hand-back-fist"></i>',
		  score: "Lose",
		},
		{
		  text: "You win",
		  icon:  '<i class="fa fa-hand"></i>',
		  score: "Win",
		},
		{
		  text: "You win",
          icon:  '<i class="fa fa-hand-lizard"></i>',		
		  score: "Win",
		},
		{
		  text: "Computer wins",
          icon:  '<i class="fa fa-hand-spock"></i>',		
		  score: "Lose",
		}		
	];

	var rndS = optionsS[Math.floor(Math.random() * optionsS.length)];
	
	weaponCom.innerHTML = rndS.icon;
	
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
	
	}, 2000);
	
	return optionsS[rndS];
}


function btnLizard() {
	
	var startImageRulesPlayer = document.querySelector("#displayPlayerStartImage");
	var startImageRulesCom = document.querySelector("#displayComStartImage");

    var weaponPlayer = document.querySelector("#iconPlayer");
    var weaponCom = document.querySelector("#iconCom");
	
	startImageRulesPlayer.style.animation = "shake 2s ease";
	startImageRulesCom.style.animation = "shake 2s ease";
    weaponPlayer.style.animation = "shake 2s ease";
    weaponCom.style.animation = "shake 2s ease";
	
	setTimeout (() => {
		
	startImageRulesPlayer.removeAttribute("style");
    startImageRulesCom.removeAttribute("style");
	
    weaponPlayer.removeAttribute("style");
    weaponCom.removeAttribute("style");
	
    startImageRulesPlayer.setAttribute("class", "hidden" );
    startImageRulesCom.setAttribute("class", "hidden" );

	weaponPlayer.innerHTML = '<i class="fa fa-hand-lizard"></i>';
	
	var optionsL = [
		{
		  text: "Draw",				
		  icon:  '<i class="fa fa-hand-lizard"></i>',
		  score: "Draw",		
		},
		{
		  text: "Computer wins",			
		  icon:  '<i class="fa fa-hand-back-fist"></i>',
		  score: "Lose",		
		},
		{
		  text: "You win",
		  icon:  '<i class="fa fa-hand"></i>',	
		  score: "Win",	
		},
		{
		  text: "You win",
          icon:  '<i class="fa fa-hand-spock"></i>',
		  score: "Win",	
		},
		{
		  text: "Computer wins",
          icon:  '<i class="fa fa-hand-scissors"></i>',		
		  score: "Lose",	
		}
	];
	
	var rndL = optionsL[Math.floor(Math.random() * optionsL.length)];
	
	weaponCom.innerHTML = rndL.icon;
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndL.text + '</p>';
	
	userScore_span = document.getElementById("user-score");	
	computerScore_span = document.getElementById("computer-score");	
	if (rndL.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndL.score === "Lose") {
		cScore++;	
		computerScore_span.innerHTML = cScore;		
	} else if (rndL.score === "Win") {
		uScore++;		
		userScore_span.innerHTML = uScore;		
	}
	
	}, 2000);

	return optionsL[rndL];
}


function btnSpock() {
	
	var startImageRulesPlayer = document.querySelector("#displayPlayerStartImage");
	var startImageRulesCom = document.querySelector("#displayComStartImage");

    var weaponPlayer = document.querySelector("#iconPlayer");
    var weaponCom = document.querySelector("#iconCom");
	
	startImageRulesPlayer.style.animation = "shake 2s ease";
	startImageRulesCom.style.animation = "shake 2s ease";
    weaponPlayer.style.animation = "shake 2s ease";
    weaponCom.style.animation = "shake 2s ease";
	
	setTimeout (() => {
		
	startImageRulesPlayer.removeAttribute("style");
    startImageRulesCom.removeAttribute("style");
    weaponPlayer.removeAttribute("style");
    weaponCom.removeAttribute("style");
	
    startImageRulesPlayer.setAttribute("class", "hidden" );
    startImageRulesCom.setAttribute("class", "hidden" );

	weaponPlayer.innerHTML = '<i class="fa fa-hand-spock"></i>';
	
	var optionsSp = [
		{
		  text: "Draw",				
		  icon:  '<i class="fa fa-hand-spock"></i>',		   
		  score: "Draw",		
		},
		{
		  text: "Computer wins",		
		  icon:  '<i class="fa fa-hand"></i>',		
		  score: "Lose",					
		},
		{
		  text: "You win",				
		  icon:  '<i class="fa fa-hand-back-fist"></i>',	
		  score: "Win",							
		},
		{
		  text: "You win",				
          icon:  '<i class="fa fa-hand-scissors"></i>',			
		  score: "Win",						
		},
		{
		  text: "Computer wins",				
          icon:  '<i class="fa fa-hand-lizard"></i>',				
		  score: "Lose",					
		}
	];
	

	var rndSp = optionsSp[Math.floor(Math.random() * optionsSp.length)];
	
	
	weaponCom.innerHTML = rndSp.icon;		
	
	var computerTextResult = document.querySelector("#textResultDrawLoseWin");
	computerTextResult.innerHTML = '<p>' + rndSp.text + '</p>';		
	
	userScore_span = document.getElementById("user-score");		
	computerScore_span = document.getElementById("computer-score");		
	if (rndSp.score === "Draw") {
		userScore_span.innerHTML = uScore;
		computerScore_span.innerHTML = cScore;
	} else if (rndSp.score === "Lose") {
		cScore++;		
		computerScore_span.innerHTML = cScore;	
	} else if (rndSp.score === "Win") {
		uScore++;		
		userScore_span.innerHTML = uScore;		
	}
	
	}, 2000);

	return optionsSp[rndSp];
}

