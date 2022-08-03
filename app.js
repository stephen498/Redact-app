function startApp() {
    let date = Date.now();
    console.log(date)
    const content = document.getElementById("content");
    console.log(content.value);
    let words = (content.value).split(' ').filter(item => Boolean(item) == 1);
    console.log(words);
    const scrabble = document.getElementById('scrabble');
    const sym = document.getElementById('symbol');
    const submit = document.getElementById('submit');
    let count = [];

    let count1 = 0;
    let counter = 0;
    let symbols = [',', '.', '_', ':', ';', '?', '@'];
    let scrab = scrabble.value.split(',');
    for (let i = 0; i < scrab.length; i++) {
        count[i] = 0;
    }
    for (let key of words) {
        for (let i = 0; i < scrab.length; i++) {
            if (key.slice(0, scrab[i].length).toLowerCase() == (scrab[i]).toLowerCase()) {
                count[i] += 1;
            }
        }
        if (!symbols.includes(key)) {
            counter += 1;
        }
    }
    console.log(scrab);
    let redact = words.map((item, index, array) =>

        (item.slice(0, scrab[0].length).toLowerCase() != scrab[0].toLowerCase()) && (item.slice(0, scrab[1].length).toLowerCase() != scrab[1].toLowerCase()) && (item.slice(0, scrab[2].length).toLowerCase() != scrab[2].toLowerCase()) ? item :

        // for (let i = 1; i < (item.length - 1); i++) {
        //     item[i] = sym;
        // }

        item = item.split('').map((char, index, array) =>
            (index == 0 || index == array.length - 1) ? char : sym.value
        ).join('')


    );
    console.log(redact);
    const final = redact.join(' ');
    console.log(final);
    let date1 = Date.now();
    console.log(date1)
        // let done;
        // done = final;
        // console.log(done);
    let time;
    time = date1 - date;
    const timer = document.createElement('p');
    timer.innerText = ` Timer 
                          ${time} ms`;
    timer.style.width = '250px';
    timer.style.height = '200px';
    timer.style.border = '1px solid black';
    timer.style.borderRadius = '5px';
    timer.style.fontSize = '30px';
    timer.style.fontWeight = 'bold';
    timer.style.textAlign = 'center';
    timer.style.marginLeft = '1500px';
    const perfect = document.createElement('div');
    perfect.innerText = final;
    perfect.style.width = '600px';
    perfect.style.height = '400px';
    perfect.style.border = '1px solid black';
    perfect.style.borderRadius = '5px';
    perfect.style.fontSize = '35px';
    perfect.style.fontWeight = 'normal';
    perfect.id = 'perfect';
    perfect.style.paddingTop = '100px';
    perfect.style.textAlign = 'center';
    perfect.style.marginLeft = '155px';
    const score = document.createElement('p');
    score.innerText = ` scrabbled word ${scrab[0]}   
                        ${count[0]}`
    score.id = 'score';
    const score1 = document.createElement('p');
    score1.innerText = `scrabbled word ${scrab[1]}
                        ${count[1]}`;
    score1.id = 'score1';
    const score2 = document.createElement('p');
    score2.innerText = `scrabbled word ${scrab[2]}
                        ${count[2]}`;
    score2.id = 'score2';
    const number = document.createElement('p');
    number.innerText = `number of words
                        ${counter}`;
    content.remove();
    scrabble.remove();
    sym.remove();
    submit.remove();
    document.body.prepend(timer);
    document.body.prepend(perfect);
    document.body.prepend(score);
    document.body.prepend(score1);
    document.body.prepend(score2);
    // document.getElementById('score').insertAdjacentElement('afterend', number)
    document.body.prepend(number);
    const grid = document.querySelectorAll('p');
    for (let key of grid) {
        key.style.width = '250px';
        key.style.height = '300px';
        key.style.border = '1px solid black';
        key.style.borderRadius = '5px';
        key.style.fontSize = '50px';
        key.style.fontWeight = 'bold';
        key.style.textAlign = 'center';
        // perfect.style.marginLeft = '155px';
        key.style.display = 'inline-block';
        key.style.margin = '30px'
    }
}