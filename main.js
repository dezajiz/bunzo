// ページロード時に非表示用のクラスをつける
const contentsItem = document.querySelectorAll('.content-item');

// contentsItem -> [1個目のcontent-item, 2個目のcontent-item, 3個目のcontent-item ... ]
contentsItem.forEach((item) => {
    item.classList.add('hide');
});

// ここから下は要素が画面に入ったタイミングでhideクラスを外す処理
window.addEventListener('load', () => {
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hide');
            }
        });
    };

    const observer = new IntersectionObserver(callback, {root: null, threshold: 0});

    contentsItem.forEach((item) => {
        observer.observe(item);
    });
});