
import { GoogleGenAI } from '@google/genai';
import * as ActCns from "../../83.console.unit/console.action";

import * as ActGmi from "../../04.gemini.unit/gemini.buzzer";

import { parse, stringify } from 'yaml'

import { GeminiModel } from "../gemini.model";
import GeminiBit from "../fce/gemini.bit";
import State from "../../99.core/state";

export const initGemini = (cpy: GeminiModel, bal: GeminiBit, ste: State) => {


    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Gemini" })

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    var FS = require('fs-extra')

    var sampleList = FS.readdirSync( './data/quest/witcher/');

    var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var my_random_string = chance.pickone( sampleList );

ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'pick: '+ my_random_string })

    FS.ensureDirSync('./astro/quest/003.primal-mama/mark/')
    FS.ensureDirSync('./astro/quest/003.primal-mama/yaml/')


    var coherence = FS.readFileSync('./astro/ambit/003.primal-mama/000.coherence.md').toString()
    var prop = FS.readFileSync('./astro/cosmica/004.action.md').toString()
    var quest = FS.readFileSync('./data/quest/witcher/' + my_random_string).toString()

    var list = FS.readdirSync('./astro/quest/003.primal-mama/mark/')

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
                    parts: [{ text: coherence }],
                },
                {
                    role: "model",
                    parts: [{ text: " thanks for the mark down file named primal mama" }],
                },
                {
                    role: "user",
                    parts: [{ text: prop }],
                },
                {
                    role: "model",
                    parts: [{ text: " thanks for the mark down file named action" }],
                },
                {
                    role: "user",
                    parts: [{ text: quest }],
                },
                {
                    role: "model",
                    parts: [{ text: " thanks for the mark down file named quest" }],
                },

            ],
        });

        const stream1 = await chat.sendMessageStream({
            message: "Take the quest text file and recreated it using only events that could exist in the Story World of Primal Mama. Can you use the world of Primal Mama in the coherence as the reference material and recontextualize the quest text file to create a new markdown document with the updated information",
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
            message: "Can you give up the name of QUEST inside this YAML file with a parameter called name and use at the most 10 words ",
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
        name = S(name).slugify().s


        const stream4 = await chat.sendMessageStream({
            message: "Take the YAML file and recontextualize the  entire file using  Entity Functional Profile Protocol from the markdown file named action as the reference material and recontextualize the YAML file to create a new markdown document with the updated information",
        });


        var out4 = []

        for await (const chunk of stream4) {
            ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: chunk.text })
            out4.push(chunk.text)
            //console.log(chunk.text);
            //console.log("_".repeat(80));
        }

        var marky = out4.join( ' ')
        //marky = S(marky).between('```', '```').s
        //marky = S( marky ).replaceAll('markdown', '').s

        
        const stream5 = await chat.sendMessageStream({
            message: "Take the Markdown file just created and contextualize the  entire file using  Entity Functional Profile Protocol from the markdown file named action as the reference material and recontextualize the Markdown file to create a new YAML document with the updated information",
        });


        var out5 = []

        for await (const chunk of stream5) {
            ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: chunk.text })
            out5.push(chunk.text)
            //console.log(chunk.text);
            //console.log("_".repeat(80));
        }

        var yalls = out5.join( ' ')
        //yalls = S(yalls).between('```', '```').s
        //yalls = S(yalls ).replaceAll('yaml', '').s

        


  


     

        var dirM = './astro/quest/003.primal-mama/mark/' + dex + '.' + S(name).slugify().s
        var dirY = './astro/quest/003.primal-mama/yaml/' + dex + '.' + S(name).slugify().s

        var dirActionM = './astro/action/003.primal-mama/mark/' + dex + '.' + S(name).slugify().s
        var dirActionY = './astro/action/003.primal-mama/yaml/' + dex + '.' + S(name).slugify().s

        FS.ensureDirSync('./astro/action/003.primal-mama/mark/')
        FS.ensureDirSync('./astro/action/003.primal-mama/yaml/')

        FS.writeFileSync(dirM + '.md', output)
        FS.writeFileSync(dirY + '.yaml', yaml)

        FS.writeFileSync(dirActionM + '.md', marky)
        FS.writeFileSync(dirActionY + '.yaml', yalls)

        ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: dirM + '.md COMPLETE!' })



        setTimeout(() => {

            initGemini(cpy, bal, ste)

        }, 3000)

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


export const autoGemini = async (cpy: GeminiModel, bal: GeminiBit, ste: State) => {


    var bit

    var next = async () => {

        debugger

        await ste.hunt(ActGmi.initGemini, {})

        debugger

        setTimeout(() => next(), 3333)
        return
    }

    await next()

    return cpy;
};

