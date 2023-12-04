



const imgData = [
    {title:"Bird", path:"./images/bird"},
    {title:"Chicken", path:"./images/chicken"},
    {title:"Dog", path:"./images/dog"},
    {title:"Goat", path:"./images/goat"},
    {title:"Monkey", path:"./images/monkey"},
    {title:"Pig", path:"./images/pig"},
    {title:"Pug", path:"./images/pug"},
    {title:"Rabit", path:"./images/rabit"},
    {title:"Tiger", path:"./images/tiger"},
    {title:"Elephant", path:"./images/elephant"}
]



function getRandomImage() {
    randIndex = Math.floor(Math.random() * imgData.length);
    return imgData[randIndex];
}




function displayImage(imgObject) {

    const imgID = document.getElementById("img-container");


    if (imgID.innerHTML.length > 0) {
        imgID.innerHTML = "";
    }

    imgID.innerHTML = `
        <h2>${imgObject.title}</h2>
        <img src="${imgObject.path}">`


}



function displayRandomImg() {
    img = getRandomImage()
    displayImage(img)
}




displayRandomImg()


// imgID.innerHTML = '<img src="./images/dog">'




// console.log(imgID);
