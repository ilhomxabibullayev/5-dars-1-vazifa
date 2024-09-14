let result;

// string to number

result = Number('324');
console.log(result);

result = Number('324e-1');
console.log(result);

// boolean to number

result = Number(true);
console.log(result);

result = Number(false);
console.log(result);

// bo'sh string va null raqamga aylantirilsa 0ga teng

result;
result = Number(null);
console.log(result);

result = Number(' ');
console.log(result);

// raqamga aylantira olmasa NaN beradi

result;
result = Number('hello');
result = Number(undefined);
console.log(result);

result = Number(NaN);
console.log(result);

result;
result = parseInt('20.01');
console.log(result);

result = parseFloat('20.01');
console.log(result);

result = +'20.01';
console.log(result);

result = Math.floor('20.01');
console.log(result);

//number to string

result;
result = String(324);
console.log(result);

result = String(2 + 4);
console.log(result);

//other data types to string

result = String(null);
console.log(result);

result = String(undefined);
console.log(result);

result = String(NaN);
console.log(result);

result = String(true);
console.log(result);

result = String(false);
console.log(result);

// using toString()

result = (324).toString();
console.log(result);

result = true.toString();
console.log(result);

// undefined, null .toString() deb yozib bo'lmaydi

result;
result = Boolean('');
console.log(result);

result = Boolean(0);
console.log(result);

result = Boolean(undefined);
console.log(result);

result = Boolean(null);
console.log(result);

result = Boolean(NaN);
console.log(result);