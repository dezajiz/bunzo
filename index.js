function changeBg(){
    const images = [
        'url("./gazo/1.gif")',
        'url("./gazo/2.gif")',
        'url("./gazo/3.gif")',
        'url("./gazo/4.gif")',
        'url("./gazo/5.gif")',
    ];

    // const section = document.querySelector('section'); 最初の1個だけ取ってくる
    const sections = document.querySelectorAll('section');
    const length = sections.length;

    for (let i = 0; i < length; i++) {
        const random = Math.random();
        const floor  = random * images.length;
        const number = Math.floor(floor);
        const bg = images[number];

        sections.item(i).style.backgroundImage = bg;
        images.splice(number, 1);
    }
}

changeBg();
