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
    let redact;
    let dates;
    let time;
    let final;
    if (scrab.length == 1) {
        redact = words.map((item, index, array) =>

            (item.slice(0, scrab[0].length).toLowerCase() != scrab[0].toLowerCase()) ? item :

            // for (let i = 1; i < (item.length - 1); i++) {
            //     item[i] = sym;
            // }

            item = item.split('').map((char, index, array) =>
                (index == 0 || index == array.length - 1) ? char : sym.value
            ).join('')


        );
        // let date1 = Date.now();
        // console.log(date1)
        // dates = date1;
        // final = redact.join(' ');
        // console.log(final);

        // time = dates - date;
    } else if (scrab.length == 2) {
        redact = words.map((item, index, array) =>

            (item.slice(0, scrab[0].length).toLowerCase() != scrab[0].toLowerCase()) && (item.slice(0, scrab[1].length).toLowerCase() != scrab[1].toLowerCase()) ? item :

            // for (let i = 1; i < (item.length - 1); i++) {
            //     item[i] = sym;
            // }

            item = item.split('').map((char, index, array) =>
                (index == 0 || index == array.length - 1) ? char : sym.value
            ).join('')
        );
        // let date1 = Date.now();
        // console.log(date1)
        // dates = date1;
        // final = redact.join(' ');
        // console.log(final);

        time = dates - date;
    } else if (scrab.length == 3) {
        redact = words.map((item, index, array) =>

            (item.slice(0, scrab[0].length).toLowerCase() != scrab[0].toLowerCase()) && (item.slice(0, scrab[1].length).toLowerCase() != scrab[1].toLowerCase()) && (item.slice(0, scrab[2].length).toLowerCase() != scrab[2].toLowerCase()) ? item :

            // for (let i = 1; i < (item.length - 1); i++) {
            //     item[i] = sym;
            // }

            item = item.split('').map((char, index, array) =>
                (index == 0 || index == array.length - 1) ? char : sym.value
            ).join('')


        );
        // let date1 = Date.now();
        // console.log(date1)
        // dates = date1;
        // final = redact.join(' ');
        // console.log(final);

        // time = dates - date;
    } else if (scrab.length == 4) {
        redact = words.map((item, index, array) =>

            (item.slice(0, scrab[0].length).toLowerCase() != scrab[0].toLowerCase()) && (item.slice(0, scrab[1].length).toLowerCase() != scrab[1].toLowerCase()) && (item.slice(0, scrab[2].length).toLowerCase() != scrab[2].toLowerCase()) && (item.slice(0, scrab[3].length).toLowerCase() != scrab[3].toLowerCase()) ? item :

            // for (let i = 1; i < (item.length - 1); i++) {
            //     item[i] = sym;
            // }

            item = item.split('').map((char, index, array) =>
                (index == 0 || index == array.length - 1) ? char : sym.value
            ).join('')


        );
        // let date1 = Date.now();
        // console.log(date1)
        // dates = date1;
        // final = redact.join(' ');
        // console.log(final);

        // time = dates - date;
    } else if (scrab.length == 5) {
        redact = words.map((item, index, array) =>

            (item.slice(0, scrab[0].length).toLowerCase() != scrab[0].toLowerCase()) && (item.slice(0, scrab[1].length).toLowerCase() != scrab[1].toLowerCase()) && (item.slice(0, scrab[2].length).toLowerCase() != scrab[2].toLowerCase()) && (item.slice(0, scrab[3].length).toLowerCase() != scrab[3].toLowerCase()) && (item.slice(0, scrab[4].length).toLowerCase() != scrab[4].toLowerCase()) ? item :

            // for (let i = 1; i < (item.length - 1); i++) {
            //     item[i] = sym;
            // }

            item = item.split('').map((char, index, array) =>
                (index == 0 || index == array.length - 1) ? char : sym.value
            ).join('')


        );
        // let date1 = Date.now();
        // console.log(date1)
        // dates = date1;
        // final = redact.join(' ');
        // console.log(final);

        // time = dates - date;
    } else {
        const error = document.createElement('p');
        error.innerText = 'The redactApp can only take a maximum of 5 words to scrabble ';
        document.body.append(error);
        return;
    }
    let date1 = Date.now();
    console.log(date1)
    dates = date1;
    final = redact.join(' ');
    console.log(final);

    time = dates - date;
    // console.log(final);
    // let date1 = Date.now();
    // console.log(date1)
    // let done;
    // done = final;
    // console.log(done);
    // let time;
    // time = dates - date;
    const timer = document.createElement('p');
    timer.innerText = ` Timer 
                          
                          ${time} ms`;

    timer.style.border = '1px solid black';
    timer.style.borderRadius = '5px';
    timer.style.width = '90px'
    timer.style.height = '90px'
    timer.style.fontWeight = 'bold';
    timer.style.textAlign = 'center';
    // timer.style.marginLeft = '1500px';
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
    const score = document.createElement('textarea');
    score.innerText = `scrabbled word `;
    // // grids.cols = '10';
    // // grids.rows = '5';
    // // grids.style.border = '1px solid black';
    score.style.fontSize = '20px';
    score.style.fontWeight = 'bold';
    for (let i = 0; i < count.length; i++) {
        score.innerText +=
            `  
            ${scrab[i].toLowerCase()} :${count[i]}  
            `
    }
    score.id = 'score';
    const number = document.createElement('p');
    number.innerText = `number of words 
                        
                        ${counter} `;

    number.style.border = '1px solid black';
    number.style.borderRadius = '5px';

    number.style.fontWeight = 'bold';
    number.style.textAlign = 'center';
    // document.getElementById('score').insertAdjacentElement('afterend', number);

    const oyin = document.getElementById('reset');
    oyin.remove();
    content.remove();
    scrabble.remove();
    sym.remove();
    submit.remove();
    // const oyin = document.querySelector('container');

    // oyin.insertAdjacentHTML('afterbegin', 'number');
    // oyin.insertAdjacentHTML('afterbegin', 'score');
    // oyin.insertAdjacentHTML('afterbegin', timer);
    // document.body.prepend(timer);
    document.body.prepend(perfect);
    // document.body.prepend(score);
    // // document.body.prepend(container);
    // document.getElementById('score').insertAdjacentHTML('afterbegin', number.innerHTML)
    //     // document.body.prepend(number);
    // document.getElementById('score').insertAdjacentElement('afterend', timer)
    // const grids = document.querySelector('textarea');
    // // grids.cols = '10';
    // // grids.rows = '5';
    // // grids.style.border = '1px solid black';
    // grids.style.fontSize = '4px';
    // grids.style.fontWeight = 'bold';
    // const grid = document.querySelectorAll('p');
    // for (let key of grid) {
    //     // key.style.width = '50px';
    //     // key.style.height = '40px';
    //     key.style.border = '1px solid black';
    //     key.style.borderRadius = '5px';
    //     key.style.fontSize = '4px';
    //     key.style.fontWeight = 'bold';
    //     key.style.textAlign = 'center';
    //     // perfect.style.marginLeft = '155px';
    //     // key.style.display = 'inline-block';
    //     // key.style.margin = '30px'
    // }
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.columnGap = '50px';
    // container.innerHTML = number.innerHTML;
    // container.insertBefore(score, document.querySelector('number'))
    // container.insertBefore(timer, document.querySelector('score'))
    // container.style.border = '1px solid black';
    container.style.paddingLeft = '180px';
    container.style.marginBottom = '20px'
    document.body.prepend(container);
    container.appendChild(timer);
    container.appendChild(score);
    container.appendChild(number);
}