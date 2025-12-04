import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Terminal, Loader2, Minus } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '> SYSTEM ONLINE. PLANNTA AI READY. QUERY?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";
      
      const systemInstruction = `
        Eres el sistema operativo central de PLANNTA Arquitectura.
        Estilo de respuesta: Breve, técnico, "cyberpunk", eficiente.
        Usa términos como "Afirmativo", "Procesando", "Datos:".
        
        IDENTIDAD: Estudio con 20+ años de experiencia. ADN Sustentable.
        ENFOQUE: Ecología + Eficiencia + Tecnología.
        
        STACK TECNOLÓGICO (Mencionar si es relevante):
        - Revit (Modelado BIM)
        - Navisworks (Coordinación y Clash Detection)
        - Dynamo (Automatización)
        - IA (Visualización y Narrativa)
        
        SERVICIOS CLAVE:
        - Diseño Arquitectónico (Conceptual/Ejecutivo)
        - Coordinación BIM
        - Visualización Hiperrealista y Animación IA
        - Mentorías especializadas
        
        Si preguntan contacto: Sugiere usar el formulario de transmisión de datos.
      `;

      const response = await ai.models.generateContent({
        model,
        contents: [
          { role: 'user', parts: [{ text: systemInstruction + "\n\nINPUT: " + userMsg }] }
        ]
      });

      const text = response.text || "> ERROR: DATA CORRUPTION.";
      setMessages(prev => [...prev, { role: 'model', text: `> ${text}` }]);

    } catch (error) {
      console.error("Error AI:", error);
      setMessages(prev => [...prev, { role: 'model', text: "> CRITICAL ERROR: CONNECTION LOST." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!process.env.API_KEY) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-mono">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-black border border-neon/50 shadow-[0_0_20px_rgba(0,255,157,0.1)] flex flex-col h-[400px]">
          {/* Terminal Header */}
          <div className="bg-neon/10 p-2 border-b border-neon/30 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-neon" />
              <span className="text-[10px] text-neon uppercase tracking-widest">AI_TERMINAL.EXE</span>
            </div>
            <div className="flex gap-2">
               <button onClick={() => setIsOpen(false)} className="text-neon hover:text-white"><Minus className="w-3 h-3" /></button>
               <button onClick={() => setIsOpen(false)} className="text-neon hover:text-white"><X className="w-3 h-3" /></button>
            </div>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-black/90">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-xs ${msg.role === 'user' ? 'text-white' : 'text-neon'}`}>
                <span className="opacity-50 mr-2">{msg.role === 'user' ? 'USR_Input:' : 'SYS_Output:'}</span>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="text-neon text-xs animate-pulse">
                > PROCESSING_REQUEST...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 bg-black border-t border-neon/30 flex gap-2">
            <span className="text-neon text-sm">{'>'}</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent border-none text-white text-xs focus:ring-0 focus:outline-none placeholder-gray-700 font-mono"
              placeholder="ENTER COMMAND..."
              autoFocus
            />
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black border border-neon text-neon p-4 hover:bg-neon hover:text-black transition-all shadow-lg group"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AIConsultant;