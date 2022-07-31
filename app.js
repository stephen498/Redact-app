function startApp() {

    const content = document.getElementById("content");
    console.log(content.value);
    let words = (content.value).split(' ').filter(item => Boolean(item) == 1);
    console.log(words);
    const scrabble = document.getElementById('scrabble');
    const sym = document.getElementById('symbol');
    const submit = document.getElementById('submit');
    let count = 0;
    let counter = 0;
    let symbols = [',', '.', '_', ':', ';', '?', '@']
    for (let key of words) {
        if (key.toLowerCase() == (scrabble.value).toLowerCase()) {
            count += 1;
        }
        if (!symbols.includes(key)) {
            counter += 1;
        }
    }
    let redact = words.map((item, index, array) =>
        (item.toLowerCase() != (scrabble.value).toLowerCase()) ? item :

        // for (let i = 1; i < (item.length - 1); i++) {
        //     item[i] = sym;
        // }
        item = item.split('').map((char, index, array) =>
            (index == 0 || index == array.length - 1) ? char : sym.value
        ).join('')

    ) console.log(redact);
    const final = redact.join(' ');
    console.log(final);

    // let done;
    // done = final;
    // console.log(done);
    const perfect = document.createElement('p');
    perfect.innerText = final;
    const score = document.createElement('p');
    score.innerText = `The scrabbled word showed up ${count} time(s) `;
    const number = document.createElement('p');
    number.innerText = `The number of word are ${counter}`;
    content.remove();
    scrabble.remove();
    sym.remove();
    submit.remove();
    document.body.prepend(perfect);
    document.body.prepend(score);
    document.body.prepend(number);
}