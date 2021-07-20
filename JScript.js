var user;
var btn;
var cmp;
var cmpNum;
var randomInt;

function ranInt(){
    randomInt = Math.floor(Math.random() * (3 + 1));
    return randomInt;
}

function picker(){
    ranInt();
	cmpNum = randomInt;

	if (cmpNum == 1){
		cmp = "rock";
	}
	else if (cmpNum == 2){
		cmp = "paper";
	}
	else if (cmpNum == 3){
		cmp = "scissors";
	}
}
	
function rockBtn(){
	btn = "rock";
    picker();
    game();
}

function paperBtn(){
	btn = "paper";
    picker();
    game();
}

function scissorsBtn(){
	btn = "scissors";
    picker();
    game();
}

function game(){
    user = btn;

    if (user == "rock"){
        if (cmp == "paper"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". User loses";
        }
        else if (cmp == "scissors"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". User wins";
        }
        else if (cmp == "rock"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". It is a tie";
        }
    }
    else if (user == "paper"){
        if (cmp == "paper"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". It is a tie";
        }
        else if (cmp == "scissors"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". User loses";
        }
        else if (cmp == "rock"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". User wins";
        }
    }
    else if(user == "scissors"){
        if (cmp == "paper"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". User wins";
        }
        else if (cmp = "scissors"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". It is a tie";
        }
        else if (cmp == "rock"){
            document.getElementById("demo").innerHTML = "The computer chose " + cmp + ". User loses";
        }
    }
}