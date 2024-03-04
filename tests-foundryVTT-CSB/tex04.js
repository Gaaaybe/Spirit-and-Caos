${ #concat(?{ quant_vant: "Quantidade de Vantagens"[number] | 0 },
?{ quant_desvant: "Quantidade de desvantagens"[number] | 0 }) }$

${ vant:= quant_vant - quant_desvant vantposit:= %{Math.abs(${vant}$)}%}$


${#concat(?{quant_vant:"Quantidade de Vantagens"[number]|0},?{quant_desvant:"Quantidade de desvantagens"[number]|0})}$ %{const vant = ${quant_vant - quant_desvant}$; const vantposi = Math.abs(vant); console.log("Vant normal: "+vant+"\nVant positiva: "+ vantposi)}% ${%{console.log("vant teste:"+vant)}%}$