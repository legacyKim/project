document.addEventListener("DOMContentLoaded", function () {

    const demoData = ["demo", "demo1", "demo2", "demo3", "demo4", "demo5", "demo6", "demo7", "demo8", "demo9", "demo10", "demo11", "demo12", "demo13", "demo14", "demo16", "demo17", "demo18", "demo19", "demo20", "demo21", "demo21", "demo21", "demo21", "demo21", "demo21", "demo21", "demo21", "demo30", "demo31", "demo32", "demo33", "demo34", "demo35", "demo36", "demo37", "demo38", "demo39", "demo40", "demo40", "demo41", "demo42", "demo43", "demo44", "demo45", "demo46", "demo47", "demo48", "demo49", "demo50", "demo51", "demo52", "demo53", "demo54", "demo55", "demo56", "demo57", "demo58", "demo59", "demo60", "demo61", "demo62", "demo63", "demo64", "demo65", "demo66", "demo67", "demo68", "demo69", "demo70", "demo71", "demo72", "demo73", "demo74", "demo75", "demo76", "demo77", "demo78", "demo79", ]

    const demodemo = ["demo", "demo1", "demo2", "demo3", "demo4", "demo5", "demo6", "demo7", "demo8", "demo9", "demo10", "demo11", "demo12", "demo13", "demo14", "demo15", "demo16", "demo17"]

    var roundUx = document.getElementById("round_ux_list");

    for (var i = 0; i < demodemo.length; i++) {

        var roundUxLi = document.createElement("li");
        roundUxLi.innerHTML = `<div class="contents">${i}</div>`;
        roundUx.append(roundUxLi)

        roundUxLi.id = demodemo[i];



    }


});