'use strict'

// ホーム画面　画像切り替え
let pics_src = new Array("img/cherry-blossom.jpg","img/ocean.jpg","img/japanese-style.jpg","img/snow.jpg");
let i = -1;

slideshow_timer();

function slideshow_timer(){
    if (i== 3) {
        i = 0;
    }
    else {
        i ++;
    }
    document.getElementById("mypic").src=pics_src[i];
    setTimeout("slideshow_timer()",5000);
}
