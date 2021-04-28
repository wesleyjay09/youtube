

const ImgSelector = (id)=>{
if(id % 2 === 0){
    var imgSRC = 'http://localhost:3208/letterR.jpg'
}else{
    var imgSRC = 'http://localhost:3208/letterJ.jpg'
}
return imgSRC
}

export default ImgSelector