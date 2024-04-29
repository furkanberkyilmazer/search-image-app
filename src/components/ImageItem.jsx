

function ImageItem({image}) {
    const handleClick=(event)=>{

        console.log(event.target);

        window.location.href = image.urls.small; // Resmin URL'sine yönlendirme yap
      
    }
    return ( 
        <div>
            <img className="imageListImg" src={image.urls.small} alt={image.alt_description} onClick={handleClick}/>
        
        </div> 
    );
}

export default ImageItem;