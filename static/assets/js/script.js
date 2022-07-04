"use strict"
/*
$(document).ready(function(){
    var day = $(".day")
    var hour = $(".hour");
    var min = $(".min");
    var sec = $(".sec");
    var countdown = new Date("May 5, 2021 12:22:34");
    var count = setInterval(() => {

        var now = new Date().getTime();     
        var diff = countdown - now;
        day.text(`${Math.floor(diff /(1000 * 60 * 60 * 24))}d`)
        hour.text(`${Math.floor((diff % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60))}h`)
        min.text(`${Math.floor((diff % (1000 * 60 * 60)) /(1000 * 60))}m`)
        sec.text(`${Math.floor((diff % (1000 * 60)) /(1000))}s`)
    }, 1000);


    
 }); */
 var day = $(".day")
    var hour = $(".hour");
    var min = $(".min");
    var sec = $(".sec");
    var countdown = new Date("May 5, 2022 12:22:34");
    var count = setInterval(() => {

        var now = new Date().getTime();     
        var diff = countdown - now;
        day.text(`${Math.floor(diff /(1000 * 60 * 60 * 24))}d`)
        hour.text(`${Math.floor((diff % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60))}h`)
        min.text(`${Math.floor((diff % (1000 * 60 * 60)) /(1000 * 60))}m`)
        sec.text(`${Math.floor((diff % (1000 * 60)) /(1000))}s`)
    }, 1000);