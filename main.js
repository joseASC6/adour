const paydayElement = document.getElementById("payday");
const adtypeElement = document.getElementById("adtype");
const youtubechannelnameElement = document.getElementById("youtubechannelname");
const ysubsElement = document.getElementById("ysubs");
const instagramElement = document.getElementById("instagram");
const followersElement = document.getElementById("followers");
const ylinkElement = document.getElementById("ylink");
const ilinkElement = document.getElementById("ilink");
const descriptionElement = document.getElementById("description");
const input1 = document.querySelectorAll(".checklist input")[0];
const input2 = document.querySelectorAll(".checklist input")[1];
const input3 = document.querySelectorAll(".checklist input")[2];
const input4 = document.querySelectorAll(".checklist input")[3];
const input5 = document.querySelectorAll(".checklist input")[4];
const input6 = document.querySelectorAll(".checklist input")[5];
const input7 = document.querySelectorAll(".checklist input")[6];
const input8 = document.querySelectorAll(".checklist input")[7];
const input9 = document.querySelectorAll(".checklist input")[8];
const input10 = document.querySelectorAll(".checklist input")[9];
const input11 = document.querySelectorAll(".checklist input")[10];
const input12 = document.querySelectorAll(".checklist input")[11];
const input13 = document.querySelectorAll(".checklist input")[12];




const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);




// sub
//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the payday and adtype.
 */
function updateDB(event) {
    event.preventDefault();
    const payday = paydayElement.value;
    const adtype = adtypeElement.value;
    const youtubechannelname = youtubechannelnameElement.value;
    const ysubs = ysubsElement.value;
    const instagram = instagramElement.value;
    const followers = followersElement.value;
    const ylink = ylinkElement.value;
    const ilink = ilinkElement.value;
    const description = descriptionElement.value;
    const input1= document.querySelectorAll(".checklist input")[1];

    


    paydayElement.value = "";
    adtypeElement.value = "";
    youtubechannelnameElement.value = "";
    ysubsElement.value = "";
    instagramElement.value = "";
    followersElement.value = "";
    ylinkElement.value="";
    ilinkElement.value="";
     descriptionElement.value = "";
     document.querySelectorAll(".checklist input")[1]=""
    console.log(payday + " : " + adtype + " : " + youtubechannelname + ":" + ysubs + ":" + instagram + ":" + followers + ":" + ylink + ":" + ilink + ":" + description);

    //Update database here
    let obj = {
        payday: payday,
        adtype: adtype,
        youtubechannelname: youtubechannelname,
        ysubs:ysubs,
        instagram:instagram,
        followers:followers,
        ylink:ylink,
        ilink:ilink,
        description:description



    };
    database.push(obj);
}
    // Set database "child_added" event listener here;

    database.on("child_added", addMessage );
    const msgContainer= document.querySelector(".allMessages")
    function addMessage(rowData){
        const row= rowData.val();
        const name = row.user;
        const adtype= row.adtype;
        const  youtubechannelname = row.youtubechannelname;
        const ysubs= row.ysubs;

        const instagram= row.instagram;
        const followers= row.followers;
        const ylink= row.ylink;
        const ilink= row.ilink;
        const description= row.description;


        const h1Element= document.createElement("h1");
        const pElement= document.createElement("p");
        const aElement= document.createElement("p");
        const bElement= document.createElement("p");
        const cElement= document.createElement("p");
        const dElement= document.createElement("p");
        const eElement= document.createElement("p");
        const fElement= document.createElement("p");
        const gElement= document.createElement("p");


        // pElement.innerHTML= `${name}, : ${message}`;
        h1Element.innerHTML = name ;
        pElement.innerHTML= adtype;
        aElement.innerHTML = youtubechannelname;
        bElement.innerHTML = ysubs;
        cElement.innerHTML = instagram;
        dElement.innerHTML = followers;
        eElement.innerHTML = ylink;
        fElement.innerHTML = ilink;
        gElement.innerHTML = description;

        msgContainer.appendChild(h1Element);
        msgContainer.appendChild(pElement);
        msgContainer.appendChild(aElement);
        msgContainer.appendChild(bElement);
        msgContainer.appendChild(cElement);
        msgContainer.appendChild(dElement);
        msgContainer.appendChild(eElement);
        msgContainer.appendChild(fElement);
        msgContainer.appendChild(gElement);


        
    }