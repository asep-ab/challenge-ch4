let playerScore = 0;
let comScore = 0;
const playerScore_span = document.getElementById("player-score");
const comScore_span = document.getElementById("com-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".text-versus");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComChoice());


function win(playerChoice, comChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  comScore_span.innerHTML = comScore;
  result_div.innerHTML = "PLAYER 1 WINS!";
  document.getElementById('result').classList.remove('text-versus');
  document.getElementById('result').classList.add('game-result');

  console.log("PLAYER 1 WINS!");
  console.log("Player 1 vs COM = " + playerScore + " : " + comScore);

  document.getElementById(playerChoice).classList.add('get-clicked');
  document.getElementById(`${comChoice}-com`).classList.add('get-clicked');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('get-clicked'), 1000);
  setTimeout(() => document.getElementById(`${comChoice}-com`).classList.remove('get-clicked'), 1000);
}

function lose(playerChoice, comChoice) {
  comScore++;
  playerScore_span.innerHTML = playerScore;
  comScore_span.innerHTML = comScore;
  result_div.innerHTML = "COM WINS!";
  document.getElementById('result').classList.remove('text-versus');
  document.getElementById('result').classList.add('game-result');

  console.log("PLAYER 1 LOSES!");
  console.log("Player 1 vs COM = " + playerScore + " : " + comScore);

  document.getElementById(playerChoice).classList.add('get-clicked');
  document.getElementById(`${comChoice}-com`).classList.add('get-clicked');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('get-clicked'), 1000);
  setTimeout(() => document.getElementById(`${comChoice}-com`).classList.remove('get-clicked'), 1000);
}

function draw(playerChoice, comChoice) {
  result_div.innerHTML = "DRAW!";
  document.getElementById('result').classList.remove('text-versus');
  document.getElementById('result').classList.add('game-result');

  console.log("DRAW!");
  console.log("Player 1 vs COM = " + playerScore + " : " + comScore);

  document.getElementById(playerChoice).classList.add('get-clicked');
  document.getElementById(`${comChoice}-com`).classList.add('get-clicked');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('get-clicked'), 1000);
  setTimeout(() => document.getElementById(`${comChoice}-com`).classList.remove('get-clicked'), 1000);
}

function game(playerChoice) {
  // console.log("gsdahkha " + playerChoice);
  const comChoice = getComChoice();
  console.log("PLAYER 1's Choice --> " + playerChoice)
  console.log("COM's Choice --> " + comChoice)
  switch (playerChoice + comChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, comChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(playerChoice, comChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(playerChoice, comChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    console.log("------START!! You clicked on Rock------");
    game("r");
  })
  paper_div.addEventListener('click', function () {
    console.log("------START!! You clicked on Paper------");
    game("p");
  })
  scissors_div.addEventListener('click', function () {
    console.log("------START!! You clicked on Scissors------");
    game("s");
  })
}
main();

/* Reset tampilan game dengan tombol refresh */
const refreshGame = document.querySelector('.refresh');

function resetGame() {
  refreshGame.addEventListener('click', function () {

    playerScore = 0;
    comScore = 0;
    result_div.innerHTML = "VS";
    document.getElementById('result').classList.add('text-versus');
    document.getElementById('result').classList.remove('game-result');
    
    // /* Hapus tulisan hasil dalam result */
    // textResult.innerHTML = '';
    console.log("------ You clicked on REFRESH! Starting from 0 : 0 ------")
    console.log(`Player 1 vs COM = ${playerScore} : ${comScore}`);

    // /* Hilangkan kembali class result */
    // resultClass.classList.remove('result');

    // /* Hilangkan kembali seluruh greyBox */
    // for (let i = 0; i < compBox.length; i++) {
    // 	playerBox[i].style.backgroundColor = '#9c835f';
    // 	compBox[i].style.backgroundColor = '#9c835f';
    // }

    // /* Tampilkan kembali tulisan VS */
    // versus.style.color = 'rgb(189,48,46)';

    /* Reset kembali result menjadi null agar dapat melakukan permainan kembali */
    // result = null;
  });
}
resetGame();
// myFunction();
// class Game {
//     constructor(player, comp) {
//       this.player = player;
//       this.comp = comp;
//       this.result = null;
//       this.round = 1;

//       // DOM Selector
//       this.versus = document.querySelector('.versus h1');
//       this.resultClass = document.querySelector('.versus div div');
//       this.textResult = document.querySelector('.versus h5');
//       this.compBox = document.querySelectorAll('.greyBox.compImage');
//       this.playerBox = document.querySelectorAll('.greyBox.playerImage');
//     }

//     getResult(player, comp) {
//       if (player.choice === comp.choice) this.result = 'DRAW';
//       if (player.choice === 'rock' && comp.choice === 'scissor') { this.result = 'PLAYER 1 WIN'; }
//       if (player.choice === 'rock' && comp.choice === 'paper') { this.result = 'COM WIN'; }
//       if (player.choice === 'paper' && comp.choice === 'rock') { this.result = 'PLAYER 1 WIN'; }
//       if (player.choice === 'paper' && comp.choice === 'scissor') { this.result = 'COM WIN'; }
//       if (player.choice === 'scissor' && comp.choice === 'paper') { this.result = 'PLAYER 1 WIN'; }
//       if (player.choice === 'scissor' && comp.choice === 'rock') { this.result = 'COM WIN'; }
//     }

//     setPlayerGreyBox(player) {
//       if (player.choice === 'rock') { this.playerBox[0].style.backgroundColor = '#c4c4c4'; } else if (player.choice === 'paper') { this.playerBox[1].style.backgroundColor = '#c4c4c4'; } else this.playerBox[2].style.backgroundColor = '#c4c4c4';
//     }

//     setCompGreyBox(comp) {
//       if (comp.choice === 'rock') { this.compBox[0].style.backgroundColor = '#c4c4c4'; } else if (comp.choice === 'paper') { this.compBox[1].style.backgroundColor = '#c4c4c4'; } else this.compBox[2].style.backgroundColor = '#c4c4c4';
//     }

//     showResult(player, comp) {
//       this.versus.style.color = '#9c835f';
//       this.resultClass.classList.add('result');
//       this.textResult.innerHTML = this.result;
//       this.textResult.style.backgroundColor = '#4c9654';
//       if (this.result === 'DRAW') { this.textResult.style.backgroundColor = '#225c0e'; }
//       this.setCompGreyBox(comp);
//     }

//     compThink() {
//       const start = new Date().getTime();
//       let i = 0;

//       setInterval(() => {
//         if (new Date().getTime() - start >= 1000) {
//           clearInterval;
//           return;
//         }
//         /* Comp pretends to think before play */
//         this.compBox[i++].style.backgroundColor = '#c4c4c4';
//         if (i == this.compBox.length) i = 0;
//       }, 50);

//       setTimeout(() => {
//         setInterval(() => {
//           if (new Date().getTime() - start >= 1200) {
//             clearInterval;
//             return;
//           }
//           // Reselect the DOM - It won't work with this.compBox
//           const compBox = document.querySelectorAll('.greyBox.compImage');
//           compBox[i++].style.backgroundColor = '#9c835f';
//           if (i == compBox.length) i = 0;
//         }, 50);
//       }, 50);
//     }

//     startGame(player, comp) {
//       comp.getCompChoice();
//       this.getResult(player, comp);
//       this.setPlayerGreyBox(player);

//       // Make comp pretend to think first
//       this.compThink();

//       // Show the result - execute after compThink()
//       setTimeout(() => {
//         this.showResult(player, comp);
//       }, 1200);

//       this.round++;
//     }

//     refresh() {
//       this.textResult.innerHTML = '';
//       this.resultClass.classList.remove('result');
//       this.versus.style.color = 'rgb(189,48,46)';
//       this.result = null;

//       for (let i = 0; i < this.compBox.length; i++) {
//         this.playerBox[i].style.backgroundColor = '#9c835f';
//         this.compBox[i].style.backgroundColor = '#9c835f';
//       }
//     }
//   }

//   class Player {
//     constructor() {
//       this.choice = null;
//     }

//     getPlayerChoice(choice) {
//       this.choice = choice;
//     }
//   }

//   class Comp extends Player {
//     constructor() {
//       super();
//     }

//     getCompChoice() {
//       const choice = Math.random();
//       if (choice <= 1 / 3) this.choice = 'rock';
//       if (choice > 1 / 3 && choice <= 2 / 3) this.choice = 'paper';
//       if (choice > 2 / 3) this.choice = 'scissor';
//     }
//   }

//   // Initialization of objects
//   const p1 = new Player();
//   const cpu = new Comp();
//   const game = new Game(p1, cpu);

//   // Event Listener if player side click any of the player images
//   document.querySelectorAll('.contentImage .player').forEach((playerimg) => {
//     playerimg.addEventListener('click', () => {
//       // Game can only be played if there's no winner result (null)
//       if (!game.result) {
//         // Get player choice (from the second class of each img), parse with substr
//         const playerChoice = playerimg.className.substr(7, 7);

//         // Store player choice
//         p1.getPlayerChoice(playerChoice);

//         // Start the game
//         game.startGame(p1, cpu);
//       } else alert('Please reset the game first.');
//     });
//   });

//   // Refresh listener
//   document
//     .querySelector('.refresh')
//     .addEventListener('click', () => game.refresh());


// // --------------------------------------------------------------------------------------

// // Menangkap pilihan dari komputer
// function getCompChoice() {
// 	const comp = Math.random();
// 	if (comp < (1 / 3)) return 'rock';
// 	if (comp >= (1 / 3) && comp < (2 / 3)) return 'paper';
// 	return 'scissor';
// }

// // Rules permainan
// let result = null;
// function getResult(comp, player) {
// 	if (player == comp) return result = 'DRAW';
// 	if (player == 'rock') return (comp == 'scissor') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
// 	if (player == 'paper') return (comp == 'rock') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
// 	if (player == 'scissor') return (comp == 'paper') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
// }

// /* Game dimulai */
// /* DOM Selector */
// const versus = document.querySelector('.versus h1');
// const resultClass = document.querySelector('.versus div div');
// const textResult = document.querySelector('.versus h5');
// const compBox = document.querySelectorAll('.greyBox.compImage');
// const playerBox = document.querySelectorAll('.greyBox.playerImage');

// /* Beri delay untuk membuat komputer seolah berpikir dahulu */

// function wait() {
// 	const start = new Date().getTime();
// 	let i = 0;

// 	setInterval(function () {
// 		/* Jalankan fungsi dalam waktu 1s */
// 		if (new Date().getTime() - start >= 1000) {
// 			clearInterval;
// 			return;
// 		}

// 		/* Komputer seolah-olah berpikir dengan bantuan greyBox */
// 		compBox[i++].style.backgroundColor = '#c4c4c4';
// 		if (i == compBox.length) i = 0;

// 		/* Hilangkan kembali class result saat wait () */
// 		resultClass.classList.remove('result');

// 		/* Tampilkan kembali tulisan VS saat wait () */
// 		versus.style.color = 'rgb(189,48,46)';

// 	}, 50);

// 	setTimeout(function () {
// 		setInterval(function () {
// 			if (new Date().getTime() - start >= 1200) {
// 				clearInterval;
// 				return;
// 			}

// 			/* Handling agar Menyamarkan greyBox dengan bgColor supaya tidak semuanya memiliki greyBox berwarna abu */
// 			compBox[i++].style.backgroundColor = '#9c835f';
// 			if (i == compBox.length) i = 0;
// 		}, 50);
// 	}, 50);
// }


// /* Menangkap pilihan pemain */
// const player = document.querySelectorAll('.contentImage .player');
// player.forEach(function (choice) {
// 	choice.addEventListener('click', function () {
// 		/* Samarkan seluruh greyBox pada sisi player saat game dijalankan */
// 		for (let i = 0; i < playerBox.length; i++) {
// 			playerBox[i].style.backgroundColor = '#9c835f';
// 		}

// 		/* Eventlistener hanya dikerjakan apabila result masih dalam kondisi null */
// 		if (result === null) {
// 			/* Tangkap pilihan komputer */
// 			const compChoice = getCompChoice();

// 			/* Tangkap pilihan pemain */
// 			const playerChoice = choice.className.substr(7, 7);

// 			/* Jalankan Rules permainan untuk mendapatkan hasil */
// 			result = getResult(compChoice, playerChoice);

// 			/* Berikan greyBox pada pilihan pemain */
// 			if (playerChoice == 'rock') {
// 				playerBox[0].style.backgroundColor = '#c4c4c4';
// 			}
// 			else if (playerChoice == 'paper') {
// 				playerBox[1].style.backgroundColor = '#c4c4c4';
// 			}
// 			else {
// 				playerBox[2].style.backgroundColor = '#c4c4c4';
// 			}

// 			/* Jalankan fungsi wait agar komputer terlihat berpikir dahulu */
// 			wait();

// 			/* Jalankan seluruh perintah dibawah setelah fungsi wait selesai dijalankan */
// 			setTimeout(function () {
// 				/* Samarkan tulisan VS dengan background saat hasil ditampilkan */
// 				versus.style.color = '#9c835f';

// 				/* Tampilkan class result */
// 				resultClass.classList.add('result');

// 				/* Tampilkan hasil dalam class result (kotak hijau) */
// 				textResult.innerHTML = result;
// 				if (result == "DRAW") {
// 					textResult.style.backgroundColor = '#225c0e';
// 				}
// 				else {
// 					textResult.style.backgroundColor = '#4c9654';
// 				}

// 				/* Berikan greyBox pada comp choice */
// 				if (compChoice == 'rock') {
// 					compBox[0].style.backgroundColor = '#c4c4c4';
// 				}
// 				else if (compChoice == 'paper') {
// 					compBox[1].style.backgroundColor = '#c4c4c4';
// 				}
// 				else {
// 					compBox[2].style.backgroundColor = '#c4c4c4';
// 				}
// 			}, 1200);
// 		}
// 		else {
// 			alert('Silahkan tekan logo refresh terlebih dahulu!');
// 		}
// 	});
// });

// /* Reset tampilan game dengan tombol refresh */
// const reset = document.querySelector('.refresh');
// reset.addEventListener('click', function () {
// 	/* Hapus tulisan hasil dalam result */
// 	textResult.innerHTML = '';

// 	/* Hilangkan kembali class result */
// 	resultClass.classList.remove('result');

// 	/* Hilangkan kembali seluruh greyBox */
// 	for (let i = 0; i < compBox.length; i++) {
// 		playerBox[i].style.backgroundColor = '#9c835f';
// 		compBox[i].style.backgroundColor = '#9c835f';
// 	}

// 	/* Tampilkan kembali tulisan VS */
// 	versus.style.color = 'rgb(189,48,46)';

// 	/* Reset kembali result menjadi null agar dapat melakukan permainan kembali */
// 	result = null;
// });

//---------------------------------------------------------------------------------------------------


// class Result {
//     static whoWin(playerChoice, comChoice) {
//       if (playerChoice === "rock" && comChoice === "scissors" || playerChoice === "scissors" && comChoice === "paper" || playerChoice === "paper" && comChoice === "rock") return "win";
//       else if (playerChoice === "scissors" && comChoice === "rock" || playerChoice === "paper" && comChoice === "scissors" || playerChoice === "rock" && comChoice === "paper") return "lose";
//       else return "draw";
//     }
//   }

//   class Choice {
//     constructor(playerChoice) {
//       this.playerChoice = playerChoice;
//       this.comChoice = this.drawComChoice();
//     }

//     getPlayerChoice = () => this.playerChoice;
//     getComChoice = () => this.comChoice;

//     drawComChoice() {
//       const options = ["rock", "paper", "scissors"];

//       return options[Math.floor(Math.random() * options.length)];
//     }
//   }

//   class Stats {
//     constructor(wins, draws, loses) {
//       this.status = {
//         wins: wins,
//         draws: draws,
//         loses: loses,
//       }
//     }
//     getStats = () => this.status;

//     refreshStats(result) {
//       switch (result) {
//         case "win":
//           this.status.wins++;
//           break;
//         case "draw":
//           this.status.draws++;
//           break;
//         case "lose":
//           this.status.loses++;
//           break;
//       }
//     }
//   }

//   class Game {
//     constructor() {
//       this.optionsImg = document.querySelectorAll('.choice');
//       this.optionsBtns = document.querySelectorAll('button');
//       this.optionsBtns.forEach(option => option.addEventListener('click', this.startGame.bind(this)))

//       this.youWins = document.querySelector('.results > .you-win');
//       this.draw = document.querySelector('.results > .draw');
//       this.PcWins = document.querySelector('.results > .pc-win');

//       this.stats = new Stats(0, 0, 0);

//       this.render.call(this, this.stats.getStats());
//     }

//     startGame(e) {
//       this.optionsImg.forEach(choice => choice.className = 'choice');
//       if (this.draw.classList.contains('draw-animation')) {
//         this.draw.classList.toggle('draw-animation');
//       }


//       this.choice = new Choice(e.target.dataset.option);

//       const playerChoice = this.choice.getPlayerChoice(),
//         ComChoice = this.choice.getComChoice();

//       if (playerChoice === ComChoice) {
//         [...this.optionsImg].find(choice => choice.dataset.option === ComChoice && choice.dataset.option === ComChoice).classList.add('draw-color');
//         this.draw.classList.toggle('draw-animation');
//       } else {
//       [...this.optionsImg].find(choice => choice.dataset.option === playerChoice).classList.add('player-choice');
//         [...this.optionsImg].find(choice => choice.dataset.option === ComChoice).classList.add('pc-choice');
//       }

//       this.stats.refreshStats(Result.whoWin(playerChoice, ComChoice));

//       this.render.call(this, this.stats.getStats());
//     }

//     render(stats) {
//       this.youWins.textContent = `You: ${stats.wins}`;
//       this.PcWins.textContent = `PC: ${stats.loses}`;
//     }
//   }

//   const newGame = new Game();