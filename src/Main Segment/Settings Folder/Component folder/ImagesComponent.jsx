export default function ImageComp ({images}){
    return(
        <div className="imageComp-cont">
                {images.map((img) => (
                    <div key={img.imageID} className="image-name-cont">
                        <img src={img.imagePic} alt={""} />
                        <h3>{img.imgName}</h3>
                    </div>
                ))}
        </div>
    )
}