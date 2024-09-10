import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { PlusIcon } from '@heroicons/react/24/outline'; 

function PerguntasFrequentes() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Como o sistema de gestão de atendimento pode beneficiar minha empresa?",
      answer: "O sistema pode aumentar a eficiência, melhorar a comunicação e fornecer relatórios detalhados para uma gestão mais eficaz."
    },
    {
      question: "Posso personalizar o sistema de acordo com as necessidades da minha empresa?",
      answer: "Sim, o sistema é altamente personalizável para atender às necessidades específicas de cada empresa."
    },
    {
      question: "Como posso acompanhar o desempenho da minha equipe?",
      answer: "Você pode usar o sistema para gerar relatórios de desempenho e acompanhar métricas importantes em tempo real."
    },
    {
      question: "O sistema é seguro?",
      answer: "Sim, implementamos as melhores práticas de segurança para proteger seus dados e garantir a confidencialidade."
    },
    {
      question: "Posso integrar o sistema com outras ferramentas que minha empresa já utiliza?",
      answer: "Sim, nosso sistema suporta integração com várias ferramentas e aplicativos existentes."
    },
    {
      question: "Outros",
      answer: "Se você tiver outras perguntas, entre em contato com nosso suporte para obter mais informações."
    }
  ];

  return (
    <div>
      <NavBar />
      <div className="h-screen flex flex-col items-center justify-center px-4 py-8 bg-left">
        <h1 className="font-bold text-black text-5xl mb-8 text-center">Perguntas Frequentes</h1>
        <div className="flex flex-col items-center gap-6 w-full max-w-[600px]">
          {faqData.map((item, index) => (
            <div key={index} className="w-full">
              <button 
                onClick={() => handleToggle(index)}
                className="bg-white p-4 w-full flex items-center justify-between font-bold text-lg text-black rounded-lg border-4 border-gray-900 duration-300">
                <span>{item.question}</span>
                <PlusIcon className="h-6 w-6 text-green-600" />
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 border-t-2 border-gray-300 w-full text-center">
                  <p className="text-lg text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PerguntasFrequentes;
