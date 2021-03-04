
const verify = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("textarea").value;
    const dropdown = document.getElementById("select");

    var notes = [];
    const note =
    {
        title: title,
        description: description,
        category: dropdown.value
    }
    console.log(title);
    console.log(description);
    console.log(dropdown);
    if (JSON.parse(localStorage.getItem('notes')) == undefined) {
        notes = [];
    }
    else {
        notes = JSON.parse(localStorage.getItem('notes'))

    }
    notes.push(note)


    console.log('26', notes);
    localStorage.setItem('notes', JSON.stringify(notes));

};

function deletePopup() {
    $('#popup').modal('hide');
};
function deleteItem() {
    JSON.parse(localStorage.getItem("notes")).map(a=>{
        if(a.id ="itemID"){
            localStorage.removeItem(a.id);
            console.log(localStorage)
        }
    })
};


const htmlData = () => {
    let main = document.getElementById('allMembers');
    let element = document.createElement('div');
    element.classList.add('row');
    console.log(main);
    console.log(element);
    main.appendChild(element);
    notes = JSON.parse(localStorage.getItem('notes'))
    if (!JSON.parse(localStorage.getItem('notes'))) {
        var data = document.getElementById('data');
        let idDiv = document.createElement('div');
        idDiv.classList.add('idDiv');
        var para = document.createElement('p');
        para.classList.add("para");
        var img = document.createElement('img');
        img.classList.add("man");
        para.innerText = "you don't have any notes";
        img.src = "man.jpg";
        data.append(para, img);



    }

    const personData = notes.map(a => {
        console.log(a);
        let div = document.createElement('div');
        div.classList.add('col-md-4');

        div.innerHTML = `
        
        
        <div class="content">
        
        <div class="idDiv row ">
           <span class="checkbox col-3"><i class="fa fa-square-o" aria-hidden="true"></i></span>
            <span class="title col-6"> ${a.title}</span>
            <span class="write col-1"><i class="fa fa-pencil" aria-hidden="true"></i></span>
            <span class="delete col-1 id="itemId"><i class="fa fa-trash" value="click" onclick="deleteItem()"aria-hidden="true"></i></span>
            <pre class="description "> ${a.description} </pre>
            <pre class="date">jan 24,2021</pre>
        </div>
        </div>`;
        console.log(div);
        element.append(div);
        return div;
    });
}

htmlData();