//-----------------------------------------------------------------------------------------------------------------------------
// 3- Display the date with time on the document title (which 
//     changed every second to show time with date). 
//     Note: use .toLocalString() method of the Date Object.


setInterval(() => document.title = (new Date().toLocaleString()), 1000);


//-----------------------------------------------------------------------------------------------------------------------------
// 4- write function startSliding(ImgObject) which takes the image 
// Object to be slide on the page , and start changing the image 
// every second  
// to be professional :don’t make timer ID global return it from 
// sliding function. 
// then write another function that stop image sliding   
// stopSliding(timerID) which stop sliding the image. 
// Now call these functions on console to control image sliding on 
// the page.


//the input of the function is a reference from html
//not id not class...
function startSliding(ImgObject) {

    let images = ['/images/1.jpg', '/images/1182.png', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg'];


    //transfer the src that contain the (port number and.. ex: http://127.0.0.1:5500/images/4.jpg') to only the pathname('/images/4.jpg')
    //because of the Comparison
    let ImageSrc = new URL(ImgObject.src).pathname;
    // get index of current src to continue with the images order
    let index = images.findIndex(image => image === ImageSrc);

    let sliderId;
    sliderId = setInterval(() => {
        index++;
        (index = index >= images.length ? 0 : index)
        ImgObject.src = images[index];
    }, 1000)

    return sliderId;
}

function stopSliding(timerID)
{
    clearInterval(timerID);
}




let imageIdRef0 = startSliding(document.images[0]);
let imageIdRef1 = startSliding(document.images[1]);


setTimeout(()=> stopSliding(imageIdRef0),10000 );
setTimeout(()=> stopSliding(imageIdRef1),16000 );
