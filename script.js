let num = Number( prompt("Digite um número:") );
let total = 0;

for(i = num - 1; i !=0; i--) { 
  if (num % i == 0){
      total = total + i;
    }
}

if(total == num){
  console.log(num+" é um número perfeito");
}else {
  console.log(num+" não é um número perfeito");
}
