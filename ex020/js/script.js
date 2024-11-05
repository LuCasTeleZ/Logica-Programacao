var valorNumerico = Number(prompt("Digite um valor numerico"))

alert(valorNumerico.toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL`, })); // "R$ 5.000,00"

