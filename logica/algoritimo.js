//exercício de validar CPF
function validarCPF(cpf) {
  // 1. Remove caracteres não numéricos (como pontos e hífens)
  cpf = cpf.replace(/[^\d]+/g, '');

  // 2. Verifica se o CPF tem exatamente 11 dígitos
  if (cpf.length !== 11) return false;

  // 3. Verifica se todos os dígitos são iguais (ex: 111.111.111-11), que é inválido
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // 4. Função para calcular um dígito verificador
  function calcularDigito(cpfParcial, pesoInicial) {
    let soma = 0;

    for (let i = 0; i < cpfParcial.length; i++) {
      soma += parseInt(cpfParcial[i]) * pesoInicial--;
    }

    const resto = (soma * 10) % 11;

    // Se o resto for 10 ou 11, o dígito deve ser 0
    return (resto === 10 || resto === 11) ? 0 : resto;
  }

  // 5. Cálculo do primeiro dígito verificador (10 pesos de 10 a 2)
  const primeiroDigito = calcularDigito(cpf.slice(0, 9), 10);

  // 6. Cálculo do segundo dígito verificador (11 pesos de 11 a 2)
  const segundoDigito = calcularDigito(cpf.slice(0, 9) + primeiroDigito, 11);

  // 7. Compara os dígitos calculados com os fornecidos no CPF
  return cpf.endsWith(`${primeiroDigito}${segundoDigito}`);
}

const cpf = "155.134.263-20";

if (validarCPF(cpf)) {
  console.log("CPF válido!");
} else {
  console.log("CPF inválido!");
}

console.log(cpf)
