let database=[
    {
        id: 1,
        name:"Magnavox Odyssey",
        released:1972,
        description:"the first game console to be released in the world market. This console could only play games based on cards that were inserted into the console.",
        url: "https://i.pinimg.com/564x/b6/b0/65/b6b06518da42a18a56a88a0797f1c5ba.jpg"
    },
    {
        id: 2,
        name:"Atari 2600 ",
        released: 1977,
        description:"was equipped with a joystick and several buttons that allowed players to control characters in the game.",
        url: "https://i.pinimg.com/564x/59/f3/c3/59f3c39724cc1686f3429ddc685f0d5b.jpg"
    },
    {
        id: 3,
        name:"Nintendo Entertainment System (NES) ",
        released:1985,
        description:"became the most popular game console at the time with over 60 million units sold. The NES was equipped with a more advanced controller and more color in its graphics.",
        url:"https://i.pinimg.com/564x/b5/2e/cd/b52ecd7bf5467c44d180332f4c5fa8d6.jpg"
    },
    {
        id: 4,
        name:"Sega Genesis",
        released:1988,
        description:"became the most popular game console in the 1990s. The console was equipped with more controller buttons, as well as more advanced graphics than the NES.",
        url:"https://i.pinimg.com/564x/3f/4a/32/3f4a32801aae394c51b2f26f475626a8.jpg"
    },
    {
        id: 5,
        name:"Sony PlayStation",
        released:1994,
        description:"became the first game console to use CD-ROM media as a source of games. The console became very popular with over 100 million units sold worldwide",
        url:"https://i.pinimg.com/564x/9f/30/9d/9f309d2bee566ec9ef68a2858957e9ed.jpg"
    },    
    {
        id: 6,
        name:" Nintendo 64",
        released:1996,
        description:"became the first game console to use 3D graphics. The Nintendo 64 was also equipped with an innovative controller with a joystick that could be moved in various directions.",
        url:"https://i.pinimg.com/564x/15/d1/bc/15d1bc9d9cf45665b5b95d98ee87046f.jpg"
    },    
    {
        id: 7,
        name:"Sony PlayStation 2",
        released:2000,
        description:"became the best-selling game console of all time with over 150 million units sold. The PlayStation 2 was equipped with a DVD player that could be used as a movie player.",
        url:"https://i.pinimg.com/564x/41/15/d8/4115d8792ddb0337dc95f6a90cc782f0.jpg"
    },
    {
        id: 8,
        name:"Xbox 360 ",
        released:2005, 
        description:"became the first game console that could be connected to the internet network and allowed players to play games online. The console was also equipped with multimedia features such as music and video players.",
        url:"https://i.pinimg.com/564x/62/46/15/6246153ca9888d6f527a58d0b58a011d.jpg"
    },
    {
        id: 9,
        name:"PlayStation 4",
        released:2013,
        description:"became the most popular game console today with over 100 million units sold worldwide. The PlayStation 4 was equipped with features such as a Blu-ray player, media streaming, and motion controllers.",
        url:"https://i.pinimg.com/564x/7c/13/76/7c1376abff084025a582cf853c44621a.jpg"
    },
    {
        id: 10,
        name:" Xbox Series X/S",
        released:2020,
        description:"became the latest game console launched by Microsoft. This console has very high hardware specifications, and allows players to play games with 4K graphics and 120 fps.",
        url:"https://i.pinimg.com/564x/91/1d/f6/911df6e78dcfe1880f722ad539dbead5.jpg"
    },
    

];

////FUNCTION SHOW AND HIDE MODAL
let modal = document.getElementById("myModal");
var btnM = document.getElementById("myBtnModal");


  btnM.onclick = function() {
    modal.style.display = "none";
  }
  

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

/////RENDER AWAL

    function sortdata(database)
    {
        for(let i =0; i<database.length; i++)
        {
            if(i != database.length-1)
            {
                if(Number(database[i]["released"]) > Number(database[i+1]["released"]))
                {
                    let temp = database[i+1];                
                    database[i+1] = database[i];
                    database[i] = temp;
                    i = -1;
                }
            }
        }
        return database;
    }

// target=”_blank” href=”https://www.google.com/search?q=Google+tutorial+create+link”>

    function render() {
    let section = document.getElementById("section");
    let divtimeline = document.createElement('div');
    divtimeline.classList.add("timeline");
    
    database = sortdata(database);

    for(let i=0; i< database.length;i++)
    {
            
            let divcontainer = document.createElement('div');
            let gambar = document.createElement('img');
            let divterminal = document.createElement('div');
            let header = document.createElement('header');
            let h2 = document.createElement('h2');
            let divp = document.createElement('div');
            let small = document.createElement('small');
            let para = document.createElement('p');
            let a = document.createElement("a");

            if(i%2==0)
        {
            divcontainer.classList.add("container-cr","left-container");
            gambar.classList.add("gambarKiri");
        }
        else
        {
            divcontainer.classList.add("container-cr","right-container");
            gambar.classList.add("gambarKanan");
        }
            
            
            divterminal.classList.add("terminal-card");
            gambar.setAttribute("src", `${database[i]["url"]}`);
            a.setAttribute("target","_blank");
            a.setAttribute("href", `https://www.google.com/search?q=${database[i]["name"].replace(" ","+")}`)
            a.innerText = `${database[i]["name"]}`;
            a.style.color = "black";
            small.innerText = `${database[i]["released"]}`;
            para.innerText = `${database[i]["description"]}`;

            h2.append(a);
            header.append(h2);
            divterminal.append(header);
            divterminal.append(divp);
            divp.append(small);
            divp.append(para);
            divcontainer.append(gambar);
            divcontainer.append(divterminal);


            divtimeline.append(divcontainer);
            section.append(divtimeline);

       
    }//for
}

let blue = document.createElement("img");
let body = document.querySelector("body");
blue.setAttribute("src", "img/bluescreen.png") 
blue.style.position = "absolute";
blue.style.top = 0;
blue.style.height = "100%";
blue.style.zIndex = 100;
body.append(blue);

const myTimeout3 = setTimeout(hideblue,500) 

const myTimeout2 = setTimeout(render,3500) 
const myTimeout = setTimeout(removeblue,3000) 


function hideblue()
{
 blue.classList.add("hide");
}

function removeblue()
{
    blue.remove();
}
/////////////////////////BATAS RENDER AWAL///////////////////////////////////////////////////////////

//buat update
let inputidupdate = document.getElementById("select-update");//select option\
let inputiddelete = document.getElementById("option-delete");//select option\



//buat delete

for (const elm of database) { //generate data
    // console.log(elm.name);
    let option = document.createElement("option");
    option.innerText = elm.name;
    inputidupdate.append(option);
}


//buat delete

function generateoption() {
    inputidupdate.innerHTML="";
    inputiddelete.innerHTML="";
    
    let opsion = document.createElement("option");
    let opsion1 = document.createElement("option");
    opsion.innerText = "=======================================";
    opsion.value = "asd";
    opsion1.innerText = "=======================================";
    opsion1.value = "asd";
    inputidupdate.append(opsion);
    inputiddelete.append(opsion1);

    for (const elm of database) { //generate data
        // console.log(elm.name);
        let option = document.createElement("option");
        option.innerText = elm.name;
        option.value = elm.id;
        inputidupdate.append(option);

        let option1 = document.createElement("option");
        option1.innerText = elm.name;
        option1.value = elm.id;
        inputiddelete.append(option1);
    }
}

generateoption();


let btnFadd = document.getElementById("button-Fadd");
let btnFupdate = document.getElementById("button-Fupdate");
let btnFdelete = document.getElementById("button-Fdelete");

//INISIASI ADD DATA
let inputnama = document.getElementById("input-name-add");
let inputtahun = document.getElementById("input-year-add");
let inputdesc = document.getElementById("input-desc-add");
let inputimg = document.getElementById("input-img-add");

//FUNCTION ADD
function adddata() {
    let nama = inputnama.value;
    let tahun = inputtahun.value;
    let desc = inputdesc.value;
    let img = inputimg.value;

    let max=-Infinity;
    for (const elm of database) {
        if (elm.id>max) {
            max=elm.id;
        }
    }

    database.push(
        {
            id: max+1,
            name: nama,
            released: tahun,
            description: desc,
            url: img
        }
    );

    console.log(database);
}

//EVENT LISTENER CLICK ADD
btnFadd.addEventListener("click", function (e) {
    
    if(inputnama.value === "" || inputtahun.value === "" || inputdesc.value === "" || inputimg.value === "")
    {
        modal.style.display = "inline-flex";
    }
    else
    {
    adddata();
    divAdd.classList.toggle("hidden");
    section.innerHTML = ""
    divBtn.classList.remove("hidden");
    inputnama.value = "" 
    inputtahun.value = "" 
    inputdesc.value = "" 
    inputimg.value = ""
    render();
    }
})



//INISIASI INPUT UPDATE
let inputnamaupdate = document.getElementById("input-name-update");
let inputtahunupdate = document.getElementById("input-year-update");
let inputdescupdate = document.getElementById("input-desc-update");
let inputimgupdate = document.getElementById("input-img-update");


//FUNCTION UPDATE
btnFupdate.addEventListener("click", function (e) {
    
    let id=inputidupdate.value;
    let nama = inputnamaupdate.value;
    let tahun = inputtahunupdate.value;
    let desc = inputdescupdate.value;


    if(inputnamaupdate.value === "" || inputtahunupdate.value === "" || inputdescupdate.value === "" || inputidupdate.value === "asd")
    {
        modal.style.display = "inline-flex";
    }//if data kosong
    else
    {
    for (const elm of database) {
        if (elm.id==id) {
            elm.name=nama;
            elm.released=tahun;
            elm.description=desc;
        }
    }

    section.innerHTML = "";
    divUp.classList.add("hidden");
    divBtn.classList.remove("hidden");
    render();
    }//ELSE

})


//FUNCTION DELETE
function fdelete() {
   let id= inputiddelete.value;

   let newobj=[];
   for (const elm of database) {
    if (elm.id!=id) {
        newobj.push(elm);
    }
   }
   database=newobj;
}

btnFdelete.addEventListener("click", function (e) {
    if( inputiddelete.value === "asd")
    {
        modal.style.display = "inline-flex";
    }//if data kosong
    else
    {
    fdelete();
    section.innerHTML = "";
    divDel.classList.add("hidden");
    divBtn.classList.remove("hidden");
    render();
    }
})


//auto fill ketika ganti option di select update
inputidupdate.addEventListener("change", function(e){
    
    let obj = {};

    for(let i=0; i<database.length; i++)
    {
        console.log(database[i]);
        if(Number(database[i]["id"]) === Number(inputidupdate.value))
        {
            obj["pilih"] = database[i];
            // alert("masuk")
        }
    }


    inputnamaupdate.value = obj["pilih"]["name"];
    inputtahunupdate.value = obj["pilih"]["released"];
    inputdescupdate.value = obj["pilih"]["description"];
})


////////INTERAKSI/////////////////////


//BUTTON CANCEL 
let btnCadd = document.getElementById("button-cancel-add");
let btnCupdate = document.getElementById("button-cancel-update");
let btnCdelete = document.getElementById("button-cancel-delete");



btnCadd.addEventListener("click", function(e){
    divAdd.classList.add("hidden");
    divBtn.classList.remove("hidden");
    modal.style.display = "none";
})

btnCupdate.addEventListener("click", function(e){
    divUp.classList.add("hidden");
    divBtn.classList.remove("hidden");
    modal.style.display = "none";

    inputnamaupdate.value = "";
    inputtahunupdate.value = "";
    inputdescupdate.value = "";
})

btnCdelete.addEventListener("click", function(e){
    divDel.classList.add("hidden");
    divBtn.classList.remove("hidden");
    modal.style.display = "none";
})

//INISIASI BUTTON ADD UPDATE DELETE
        let btnAdd = document.getElementById("btn-add");
        let btnUp = document.getElementById("btn-update");
        let btnDel = document.getElementById("btn-delete");
        let divAdd = document.getElementById("div-add");
        let divUp = document.getElementById("div-update");
        let divDel = document.getElementById("div-delete");
        let divBtn = document.getElementById("div-btn");
  
        //click
        btnAdd.addEventListener("click", function(e){
            divAdd.classList.remove("hidden");
            divBtn.classList.add("hidden");
        })

        btnUp.addEventListener("click", function(e){
            generateoption()
            divUp.classList.remove("hidden");
            divBtn.classList.add("hidden");
        })

        btnDel.addEventListener("click", function(e){
            generateoption()
            divDel.classList.remove("hidden");
            divBtn.classList.add("hidden");
        })


        //hover
        btnAdd.addEventListener("mouseenter", function(e){
            btnAdd.classList.toggle("btn-ghost");
        })
        btnAdd.addEventListener("mouseleave", function(e){
            btnAdd.classList.toggle("btn-ghost");
        })

        btnUp.addEventListener("mouseenter", function(e){
            btnUp.classList.toggle("btn-ghost");
        })
        btnUp.addEventListener("mouseleave", function(e){
            btnUp.classList.toggle("btn-ghost");
        })

        btnDel.addEventListener("mouseenter", function(e){
            btnDel.classList.toggle("btn-ghost");
        })
        btnDel.addEventListener("mouseleave", function(e){
            btnDel.classList.toggle("btn-ghost");
        })

    