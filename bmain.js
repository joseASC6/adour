const productinfoElement = document.getElementById("productinfo");
const infotypeElement = document.getElementById("infotype");
const youtubechannelnameElement = document.getElementById("byoutubechannelname");
const subElement = document.getElementById("bsub");
const instagramElement = document.getElementById("binstagram");
const followersElement = document.getElementById("bfollowers");
const ylinkElement = document.getElementById("bylink");
const ilinkElement = document.getElementById("bilink");
const descriptionElement = document.getElementById("bdescription");
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
 * Updates the database with the username and message.
 */
function updateDB(event) {
    event.preventDefault();
    const productinfo = productinfoElement.value;
    const infotype = infotypeElement.value;
    const youtubechannelname = youtubechannelnameElement.value;
    const sub = subElement.value;
    const instagram = instagramElement.value;
    const followers = followersElement.value;
    const ylink = ylinkElement.value;
    const ilink = ilinkElement.value;
    const description = descriptionElement.value;
    const input1= document.querySelectorAll(".checklist input")[1];

    


    productinfoElement.value = "";
    infotypeElement.value = "";
    youtubechannelnameElement.value = "";
    subElement.value = "";
    instagramElement.value = "";
    followersElement.value = "";
    ylinkElement.value="";
    ilinkElement.value="";
     descriptionElement.value = "";
     document.querySelectorAll(".checklist input")[1]=""
    console.log(productinfo + " : " + infotype + " : " + youtubechannelname + ":" + sub + ":" + instagram + ":" + followers + ":" + ylink + ":" + ilink + ":" + description);

    //Update database here
    let obj = {
        productinfo: productinfo,
        infotype: infotype,
        youtubechannelname: youtubechannelname,
        sub:sub,
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
        const productinfo = row.productinfo;
        const infotype= row.infotype;
        const  youtubechannelname = row.youtubechannelname;
        const sub= row.sub;

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
        h1Element.innerHTML = productinfo ;
        pElement.innerHTML= infotype;
        aElement.innerHTML = youtubechannelname;
        bElement.innerHTML = sub;
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