
import { GoogleGenAI } from '@google/genai';
import * as ActCns from "../../83.console.unit/console.action";


export const initGemini = (cpy: GeminiModel, bal: GeminiBit, ste: State) => {

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    async function main() {
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash-001',
            contents: 'Why is the sky blue?',
        });
        

        var  list = response.text.split('\n')
        list.forEach( (a)=>{

            ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })

            
        })

        
    }


    main()


    return cpy;
};

export const updateGemini = (cpy: GeminiModel, bal: GeminiBit, ste: State) => {
    return cpy;
};


import { GeminiModel } from "../gemini.model";
import GeminiBit from "../fce/gemini.bit";
import State from "../../99.core/state";