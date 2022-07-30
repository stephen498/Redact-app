function startApp() {

    const content = document.getElementById("content");
    console.log(content.value);
    let words = (content.value).split(' ').filter(item => Boolean(item) == 1);
    console.log(words);
    const scrabble = document.getElementById('scrabble');
    const sym = document.getElementById('symbol');
    const submit = document.getElementById('submit');
    let count = 0;

    for (let key of words) {
        if (key == scrabble.value) {
            count += 1;
        }
    }
    let redact = words.map((item, index, array) =>
        (item != scrabble.value) ? item :

        // for (let i = 1; i < (item.length - 1); i++) {
        //     item[i] = sym;
        // }
        item = item.split('').map((char, index, array) =>
            (index == 0 || index == array.length - 1) ? char : sym.value
        ).join('')

    )
    console.log(redact);
    const final = redact.join(' ');
    console.log(final);

    // let done;
    // done = final;
    // console.log(done);
    const perfect = document.createElement('p');
    perfect.innerText = final;
    const score = document.createElement('p');
    score.innerText = `The scrabbled word showed up ${count} time(s) `;
    content.remove();
    scrabble.remove();
    sym.remove();
    submit.remove();
    document.body.prepend(perfect);
    document.body.prepend(score);
}