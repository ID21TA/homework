'use strict'

// 学生時代　画像拡大縮小
const experiment_1img = document.getElementById("experiment_1img");
let stat1 = false;
function func1() {
    if(stat1) {
        experiment_1img.classList.add('off');
        experiment_1img.classList.remove('on');
    }
    else {
        experiment_1img.classList.add('on');
        experiment_1img.classList.remove('off');
    }
    stat1 = !stat1;
}

const experiment_2img = document.getElementById("experiment_2img");
let stat2 = false;
function func2() {
    if(stat2) {
        experiment_2img.classList.add('off');
        experiment_2img.classList.remove('on');
    }
    else {
        experiment_2img.classList.add('on');
        experiment_2img.classList.remove('off');
    }
    stat2 = !stat2;
}

const experiment_3img = document.getElementById("experiment_3img");
let stat3 = false;
function func3() {
    if(stat3) {
        experiment_3img.classList.add('off');
        experiment_3img.classList.remove('on');
    }
    else {
        experiment_3img.classList.add('on');
        experiment_3img.classList.remove('off');
    }
    stat3 = !stat3;
}

const experiment_4img = document.getElementById("experiment_4img");
let stat4 = false;
function func4() {
    if(stat4) {
        experiment_4img.classList.add('off');
        experiment_4img.classList.remove('on');
    }
    else {
        experiment_4img.classList.add('on');
        experiment_4img.classList.remove('off');
    }
    stat4 = !stat4;
}

const experiment_5img = document.getElementById("experiment_5img");
let stat5 = false;
function func5() {
    if(stat5) {
        experiment_5img.classList.add('off');
        experiment_5img.classList.remove('on');
    }
    else {
        experiment_5img.classList.add('on');
        experiment_5img.classList.remove('off');
    }
    stat5 = !stat5;
}

const experiment_6img = document.getElementById("experiment_6img");
let stat6 = false;
function func6() {
    if(stat6) {
        experiment_6img.classList.add('off');
        experiment_6img.classList.remove('on');
    }
    else {
        experiment_6img.classList.add('on');
        experiment_6img.classList.remove('off');
    }
    stat6 = !stat6;
}