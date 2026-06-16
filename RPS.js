import readline from "readline-sync";
// let score_u = 0
// let score_c = 0

// let user_kept = prompt


// function Computer_Choice(){
//     let result = (Math.random(1,3));
//     let kept = result
//     if (kept == "1");
//         console.log("O computador jogou tesoura")
//     elif (kept == "2");
//         console.log("O computador jogou pedra")
//     elif (kept == "3");
//         console.log ("O computador jogou papel");

//     return kept
// }

// const User_Choice = function(user_kept){
//         console.log("Escolha sua ação")
//         console.log("1. Tesoura")
//         console.log("2. pedra")
//         console.log("3. papel")
//         user_kept = int(prompt);

//     if (user_kept == "1");
//         console.log("O usuario jogou tesoura")
//     elif (user_kept == "2");
//         console.log("O usuario jogou pedra")
//     elif (user_kept == "3");
//         console.log == "O usuario jogou papel";

//     return user_kept

// }
//  function JogarRodada(User_Choice, Computer_Choice) {
//     let rodada = 0
//     const user_Choice = getUser_Choice();
//     const computer_Choice = getComputer_Choice();
//     while (rodada < 5) {
//         console.log(rodada + "rodada.")
//         if  (user_Choice == "1" && computer_Choice == "3");{    
//             console.log("O Usuario Ganha,Tesoura ganha de Papel")
//             rodada += 1
//         }
//         else if(user_Choice == "2" && computer_Choice == "3");{    
//             console.log("O Usuario perdeu,Papel ganha de Pedra")
//             rodada += 1
//         }
//         else if (user_Choice == "1" && computer_Choice == "2");{
//             console.log("O Usuario perdeu,Pedra ganha de Tesoura")
//             rodada += 1
//         }
//         else if (user_Choice == "2" && computer_Choice == "1");{    
//             console.log("O Usuario Ganha,Pedra ganha de Tesoura")
//             rodada += 1
//         } 
//         else if (user_Choice == "3" && computer_Choice == "2");{    
//             console.log("O Usuario Ganha,Papel ganha de Pedra")
//             rodada += 1
//         }
//         else if (user_Choice == "3" && computer_Choice == "1");{    
//             console.log("O Usuario Perdeu,Tesoura ganha de Papel")
//             rodada += 1
//         }
//  }}

//  JogarRodada(User_Choice, Computer_Choice)



let score_u = 0;
let score_c = 0;

function Computer_Choice() {
    let result = Math.floor(Math.random() * 3) + 1; 
    let kept = result.toString();

    if (kept == "1") {
        console.log("O computador jogou tesoura");
    } else if (kept == "2") {
        console.log("O computador jogou pedra");
    } else if (kept == "3") {
        console.log("O computador jogou papel");
    }

    return kept;
}

function User_Choice() {
    console.log("Escolha sua ação");
    console.log("1. Tesoura");
    console.log("2. Pedra");
    console.log("3. Papel");

    let user_kept = readline.question("");

    if (user_kept == "1") {
        console.log("O usuario jogou tesoura");
    } else if (user_kept == "2") {
        console.log("O usuario jogou pedra");
    } else if (user_kept == "3") {
        console.log("O usuario jogou papel");
    }

    return user_kept;
}

function JogarRodada() {
    let rodada = 0;

    while (rodada < 5) {
        rodada += 1;
        console.log(`\n--- Rodada ${rodada} ---`);

        const user_Choice = User_Choice();
        const computer_Choice = Computer_Choice();

        if (user_Choice == computer_Choice) {
            console.log("Empate!");
        } else if (
            (user_Choice == "1" && computer_Choice == "3") || 
            (user_Choice == "2" && computer_Choice == "1") || 
            (user_Choice == "3" && computer_Choice == "2")    
        ) {
            console.log("O Usuario ganhou essa rodada!");
            score_u += 1;
        } else {
            console.log("O Computador ganhou essa rodada!");
            score_c += 1;
        }
    }

    console.log(`\nPlacar final -> Você: ${score_u} x Computador: ${score_c}`);
    if (score_u > score_c) {
        console.log("Você venceu o jogo!");
    } else if (score_u < score_c) {
        console.log("O computador venceu o jogo!");
    } else {
        console.log("Empate no jogo!");
    }
}

JogarRodada();