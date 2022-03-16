function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            console.log('第一张图片加载完毕');
            resolve(img);
        }
        img.onerror = function() {
            reject(new Error('could not load image at' + url));
        }
        img.src = url;
    })
}
loadImg('aaa')