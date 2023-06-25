//Starts



let x=Math.random()*12;
x=Math.floor(x);
const quote = [
        'All that glitters is not gold.',
        'All the world’s a stage, and all the men and women merely players.',
        'Ask not what your country can do for you; ask what you can do for your country.',
        'Ask, and it shall be given you; seek, and you shall find.',
        'Elementary, my dear Watson.',
        'For those to whom much is given, much is required.',
        "Frankly, my dear, I don't give a damn.",
        'Genius is one percent inspiration and ninety-nine percent perspiration.',
        'Go ahead, make my day.',
        'Houston, we have a problem.',
        'I think therefore I am.',
        'If at first you don’t succeed, try, try again.',
];
const names=[
    ' William Shakespeare',
    ' William Shakespeare',
    ' John Kennedy',
    ' the Bible',
    ' Sherlock Holmes ',
    ' the Bible',
    'Rhett Butler',
    ' Thomas Edison',
    'Harry Callahan ',
    'Jim Lovell ',
    'Rene Descartes',
    'W. E. Hickson'
];
document.getElementById("Quote").innerHTML=quote[x];
document.getElementById("name").innerHTML=names[x];
