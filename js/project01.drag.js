document.addEventListener("DOMContentLoaded", function () {

    let dragged;

    /* events fired on the draggable target */
    const source = document.querySelectorAll("#draggable a");

    for (var i = 0; i < source.length; i++) {

        source[i].addEventListener("dragstart", (event) => {
            // store a ref. on the dragged elem
            dragged = event.target;
            // make it half transparent
            event.target.classList.add("dragging");
        });

        source[i].addEventListener("dragend", (event) => {
            // reset the transparency
            event.target.classList.remove("dragging");
        });

    }

    // ==================================================

    /* events fired on the drop targets */
    const target = document.getElementById("droptarget");

    target.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    }, false);
    
    target.addEventListener("dragenter", (event) => {
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains("droptarget")) {
            event.target.classList.add("dragover");
        }
    });

    target.addEventListener("dragleave", (event) => {
        // reset background of potential drop target when the draggable element leaves it
        if (event.target.classList.contains("droptarget")) {
            event.target.classList.remove("dragover");
        }
    });

    target.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target

        if (event.target.classList.contains("droptarget")) {
            event.target.classList.remove("dragover");

            var cloneFactor = dragged.cloneNode(true);
            event.target.appendChild(cloneFactor);

            cloneFactor.classList.remove("dragging");
            cloneFactor.classList.add("dragComplete");

            var cloneFactorDel = document.createElement("div");
            cloneFactorDel.classList.add('drag_factor_delete')
            cloneFactorDel.innerHTML = `<span></span><span></span><div class="delete_event"></div>`;
            cloneFactor.append(cloneFactorDel);

            var deleteEvent = document.querySelectorAll('.delete_event');
            console.log(deleteEvent);

            for (var i = 0; i < deleteEvent.length; i++) {
                deleteEvent[i].addEventListener("click", function (event) {
                    event.target.parentNode.parentNode.remove();
                });
            }

        }

    });

    var droptargetFactor = querySelectorAll('droptarget a');
    var droptargetZone = document.querySelector('droptarget_zone');


});