'use strict'

// 趣味　クリックすると画像が切り替わる
let imgList = {
    image1:"tiramisu.jpg", image2:"gateau_chocolat.jpg", image3:"pudding.jpg"
};

let k = 1;

document.getElementById('sweet_img').addEventListener('click', function() {
    k++;
    let imgPath = "img/"+imgList['image'+k];
    document.querySelector('#sweet_img img').src = imgPath;
    if (k === 3) {
        k = 0;
    }
});