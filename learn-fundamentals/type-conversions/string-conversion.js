// O string conversion acontece quando precisamos converter um valor para uma string
let value = true;
alert(typeof value); // boolean

value = String(value); // agora o value é uma string "true"
alert(typeof value); // string

// A conversão de string é principalmente óbvia. O false torna-se "false", null torna-se "null", etc.