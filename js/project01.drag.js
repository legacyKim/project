document.addEventListener("DOMContentLoaded", function () {

    const dragList = document.getElementById("draggable");

    const dragData = [
        {
            id: 0,
            title: "Demo title 01",
            img: "./img/slide_00.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }, {
            id: 1,
            title: "Demo title 02",
            img: "./img/slide_01.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }, {
            id: 2,
            title: "Demo title 03",
            img: "./img/slide_02.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }, {
            id: 3,
            title: "Demo title 04",
            img: "./img/slide_03.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }, {
            id: 4,
            title: "Demo title 05",
            img: "./img/slide_04.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }, {
            id: 5,
            title: "Demo title 06",
            img: "./img/slide_05.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }, {
            id: 6,
            title: "Demo title 07",
            img: "./img/slide_06.JPG",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit quibusdam omnis nam labore consequuntur pariatur, facilis explicabo eveniet sed ad dolorum quidem esse quam aut non amet dolores repellat."
        }
    ]

    for (var list = 0; list < dragData.length; list++) {

        const listItem = document.createElement('a');
        listItem.draggable = true;
        listItem.href = "javascript:void(0)";
        listItem.innerHTML = `
          <div class="drag_img">
            <img src="${dragData[list].img}">
          </div>
          <span>
            ${dragData[list].title}
          </span>
          <p class="drag_contents">
            ${dragData[list].contents}
          </p>
        `;

        dragList.appendChild(listItem);

    }

    /* events fired on the draggable target */
    const source = document.querySelectorAll("#draggable a");

    for (var i = 0; i < source.length; i++) {

        source[i].addEventListener("dragstart", (event) => {
            // store a ref. on the dragged elem
            dragged = event.target;

            // make it half transparent
            event.target.classList.add("dragging");

            const imgElement = dragged.querySelector("img");

            // if (event.target == imgElement)
            //     event.stopPropagation(); 
        });

        source[i].addEventListener("dragend", (event) => {
            // reset the transparency
            event.target.classList.remove("dragging");
        });

    }

    // ==================================================

    let dragged;

    /* events fired on the drop targets */
    const target = document.getElementById("droptarget");

    target.addEventListener("dragover", (event) => {
<<<<<<< HEAD

        // prevent default to allow drop
        event.preventDefault();
    },
        false
    );
=======
        // prevent default to allow drop
        event.preventDefault();
    }, false);
>>>>>>> 1f255eed89a83c51359f96c852054097d779c33e

    target.addEventListener("dragenter", (event) => {

        // highlight potential drop target when the draggable element enters it
<<<<<<< HEAD
        if (event.target.classList.contains("dropzone")) {

            console.log('dragenter');
            console.log(event)
            console.log(event.target);

=======
        if (event.target.classList.contains("droptarget")) {
>>>>>>> 1f255eed89a83c51359f96c852054097d779c33e
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
            var dragContents = cloneFactor.querySelector('.drag_contents');

            if (dragContents) {
                dragContents.remove();
            }
            event.target.appendChild(cloneFactor);

            cloneFactor.classList.remove("dragging");
            cloneFactor.classList.add("dragComplete");

            var cloneFactorDel = document.createElement("div");
            cloneFactorDel.classList.add('drag_factor_delete')
            cloneFactorDel.innerHTML = `<span></span><span></span><div class="delete_event"></div>`;
            cloneFactor.append(cloneFactorDel);

            var deleteEvent = document.querySelectorAll('.delete_event');

            for (var i = 0; i < deleteEvent.length; i++) {
                deleteEvent[i].addEventListener("click", function (event) {
                    event.target.parentNode.parentNode.remove();
                });
            }

        }

    });

    // var droptargetFactor = querySelectorAll('droptarget a');
    // var droptargetZone = document.querySelector('droptarget_zone');


});