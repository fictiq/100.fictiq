
import { GoogleGenAI } from '@google/genai';
import * as ActCns from "../../83.console.unit/console.action";
import { parse, stringify } from 'yaml'


export const initGemini = (cpy: GeminiModel, bal: GeminiBit, ste: State) => {

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    var FS = require('fs-extra')

    var quest = FS.readFileSync('./astro/ambit/002.glopratchet/004.coherence.md').toString()
    var prop = FS.readFileSync('./astro/cosmica/001.character.md').toString()

    var list = FS.readdirSync('./astro/character/002.glopratchet/mark/')

    function padInteger(number, length, paddingCharacter = '0') {
        const stringifiedNumber = String(number);
        return stringifiedNumber.padStart(length, paddingCharacter);
    }


    var dex = padInteger(list.length, 3); // Output: "005"


    async function main() {
        const chat = ai.chats.create({
            model: "gemini-2.5-pro-exp-03-25",
            history: [
                {
                    role: "user",
                    parts: [{ text: quest }],
                },
                {
                    role: "model",
                    parts: [{ text: " thanks for the mark down file named glopratchet" }],
                },
                {
                    role: "user",
                    parts: [{ text: prop }],
                },
                {
                    role: "model",
                    parts: [{ text: " thanks for the mark down file named character" }],
                },
            ],
        });

        const stream1 = await chat.sendMessageStream({
            message: "Can you use the world of Glopratchet in the coherence as the reference material and contextualize using the character markdown and create a new markdown document with the updated information",
        });


        var out = []

        for await (const chunk of stream1) {
            ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: chunk.text })
            out.push(chunk.text)
            //console.log(chunk.text);
            //console.log("_".repeat(80));
        }

        var output = out.join(' ');
        var S = require('string')
        var want = S(output).between('```', '```').s
        var source = S(want).replaceAll('markdown', '').s

        const stream2 = await chat.sendMessageStream({
            message: "Can you please convert the markdown document into a yaml file ready to load and make sure if one or more of these values has a colon character (:) them wrap the value(s)  in quotes. ",
        });


        var out1 = []

        for await (const chunk of stream2) {
            ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: chunk.text })
            out1.push(chunk.text)
            //console.log(chunk.text);
            //console.log("_".repeat(80));
        }

        var output2 = out1.join(' ');
        var want = S(output2).between('```', '```').s
        var yaml = S(want).replaceAll('yaml', '').s

        //var yamlDat = parse( yaml )


        const stream3 = await chat.sendMessageStream({
            message: "Can you give up the name of CHARACTER of the YAML inside a markdown file with a parameter called name and use at the most 10 words ",
        });


        var out2 = []

        for await (const chunk of stream3) {
            ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: chunk.text })
            out2.push(chunk.text)
            //console.log(chunk.text);
            //console.log("_".repeat(80));
        }

        var output2 = out2.join(' ');

        var name = output2.split(':')[1]
        var dirM = './astro/character/002.glopratchet/mark/' + dex + '.' + S(name).slugify().s
        var dirY = './astro/character/002.glopratchet/yaml/' + dex + '.' + S(name).slugify().s


        FS.writeFileSync(dirM +  '.md', source)
        FS.writeFileSync(dirY + '.yaml', yaml)

        ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: dirM + '.md COMPLETE!' })

        bal.slv({ gmiBit: { idx: "update-gemni", dat: { src: name } } });

    }

    main();

    //async function main() {


    //    const response = await ai.models.generateContent({
    //        model: 'gemini-2.0-flash-001',
    //        contents: 'Why is the sky blue?',
    //     });


    //    var  list = response.text.split('\n')
    //    list.forEach( (a)=>{

    //        ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })

    //        
    //    })




    return cpy;
};

export const updateGemini = (cpy: GeminiModel, bal: GeminiBit, ste: State) => {
    return cpy;
};


import { GeminiModel } from "../gemini.model";
import GeminiBit from "../fce/gemini.bit";
import State from "../../99.core/state";