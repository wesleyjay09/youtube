const axios = require('axios');

sendPosts = () => {
    axios.post('http://localhost:3208/api/comments', {
        id : randomGen(10) + 1,
        post : postGenerator(),
        videoKey : randomGen(100) + 1
    })
    .then(function (response){
    })
    .catch(function (error){
        console.log(error)
    }); 
}

const randomGen = (max) => {
    const random = Math.floor(Math.random() * max);
    return random;
}

const postGenerator = () => {
    const format = [1, 2, 3, 4]
    const occupation = ['System Designer', 'Scuba Diver', 'Walrus Tamer', 'Sentient Cat', 'REDACTED', 'Hobo', 'Explorer', 'Translator', 'Teacher', 'Software Engineer']
    const site = ['Facecrook', 'Twibbler', 'Myplace', 'Gaggle', 'Fintrest', 'Whelp', 'Yoohoo', 'REDACTED', 'Guthub', 'Netflax', 'Big Tech Company', 'The Cartel']
    const person = ['Wife', 'Girlfriend', 'Husband', 'Boyfriend', 'Butcher', 'Friend', 'Cat', 'Doctor', 'Dentist', 'Taxi Driver', 'Mom', 'Dad', 'Aunt', 'Uncle', 'Son', 'Daughter']
    const goodbad = ['good', 'bad']
    const preposition = ['for', 'at', 'with']
    const verb = ['must', 'have to', 'need to', 'gotta', 'want to', 'wanna']
    const adverb = ['simply', 'really', 'clearly', 'honestly', 'strangely', 'justifiably']
    const starts = ['Firstly I', 'I', 'You know I', 'I couldnt stop thinking that I']
    const malePerson = ['Jeff', 'Kolby', 'Tyler', 'Wes', 'Elon']
    const femalePerson = ['Jeff', 'Sarah', 'Margret', 'Harriot']
    const opinion  = ['hate this', 'love it', 'am confused by what I just watched', 'think it is okay', 'love you and what you made', 'am selling doge for half market value! Reply to this to win big', 'dont know what I just watched', 'think you should quit', 'applaud you sir/madam', 'hate you', 'wonder why you made this', 'thik this is amazing']
    const final = ['More please!', 'Never again...', 'Meh.', 'Doge/10', 'TO THE MOON!', 'GREAT STUFF!!!!', 'Dude.. Really?', 'What even is this?', 'One of your best!', 'Wow, I mean really, this is gold!']

    const random = randomGen(3);

    let comment = "";
    if(random === 0){
        comment = `Im a ${occupation[randomGen(occupation.length)]} working ${preposition[randomGen(preposition.length)]} ${site[randomGen(site.length)]}, I ${adverb[randomGen(adverb.length)]} ${verb[randomGen(verb.length)]} say I ${opinion[randomGen(opinion.length)]}.`
    }else if(random === 1){
        comment = `My ${person[randomGen(person.length)]} said ${final[randomGen(final.length)]}`
    }else if(random === 2){
        comment = `${starts[randomGen(starts.length)]} ${verb[randomGen(verb.length)]} ask whos ${person[randomGen(person.length)]} approved this?! If this is ${goodbad[randomGen(goodbad.length)]} content then Im the CEO of ${site[randomGen(site.length)]}.. LOL!`
    }else if(random === 3){
        comment = final[randomGen(final.length)]
    }
    console.log(comment)
    return comment;
}

for(let i = 0; i < 10000; i++){
    sendPosts();
    console.log(i)
}
