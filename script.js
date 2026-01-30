const output = document.getElementById("output");
const input = document.getElementById("command");

let stage = 0;

// Array de enigmas e respostas
const enigmas = [
  {
    text: `
> Enigma 1:
Sou o número de dias necessários
para completar um ciclo perfeito.
Depois disso, tudo recomeça.
Digite a resposta:`,
    answer: "7"
  },
  {
    text: `
> Enigma 2:
Sou o resultado de 3 x 3 - 1
Digite a resposta:`,
    answer: "8"
  },
  {
    text: `
> Enigma 3:
CALC: 3^2 = ?
Digite a resposta:`,
    answer: "9"
  },
  {
    text: `
> Enigma 4:
Sou metade de 8
Digite a resposta:`,
    answer: "4"
  }
];

let senhaFinal = "7894";

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    input.value = "";

    if (cmd.toLowerCase() === "erro404" && stage === 0) {
      output.textContent += enigmas[stage].text;
      stage++;
    } 
    else if (stage > 0 && stage <= enigmas.length) {
      // Checa resposta do enigma
      if (cmd === enigmas[stage - 1].answer) {
        output.textContent += `\n> Resposta correta!\n`;
        if (stage < enigmas.length) {
          output.textContent += enigmas[stage].text;
        } else {
          // Pergunta a senha final
          output.textContent += `
> Todos os fragmentos encontrados.
> Agora digite a senha completa para desbloquear o sistema:`;
        }
        stage++;
      } else {
        output.textContent += `\n> Resposta incorreta. Tente novamente.\n`;
      }
    } 
    else if (stage === enigmas.length + 1) {
      // Última fase: checa senha completa
  if (cmd === senhaFinal) {
  window.location.href = "acesso.html";
} else {
        output.textContent += `\n> Senha incorreta. Tente novamente.`;
      }
    } 
    else {
      output.textContent += `\n> A senha foi alterada, solicite-a novamente.`;
    }

    output.scrollTop = output.scrollHeight;
  }
});


