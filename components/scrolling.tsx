import React from "react";

export default function Scrolling() {
  const text = "PLANEJAMENTO FINANCEIRO PERSONALIZADO, SIMPLES E DESCOMPLICADO • INVESTIMENTOS PARA ALCANÇAR SEUS OBJETIVOS E SUA LIBERDADE FINANCEIRA";
  const repeatedText = `${text} • `.repeat(5);

  return (
    <div className="w-full overflow-hidden bg-[#E86A0C] text-white py-2 z-[50] relative">
      <div className="animate-scroll whitespace-nowrap">
        <span className="text-base md:text-lg font-bold text-primary-blue uppercase">{repeatedText}</span>
      </div>
    </div>
  );
}
