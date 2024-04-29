import ImageItem from "./ImageItem";

function ImgList({imagesPlaceHolder}) {


    if (!Array.isArray(imagesPlaceHolder)) {
        console.error("imagesPlaceHolder is not an array:", imagesPlaceHolder);
        return null; 
    }
    return ( 

        <div className="imageList">
            {/* {imagesPlaceHolder.map((img,index)=>{
               return <ImageItem key={index} image={img}/>
            })}    //  ikiside olur*/} 
            {imagesPlaceHolder.map((img)=>{
               return <ImageItem key={img.id} image={img}/>
            })}
        </div>
     );
}

export default ImgList;