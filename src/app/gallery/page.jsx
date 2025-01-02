import Image from "next/image";
import nextImage from "../../../public/image1.jpg"


const GalleryPage = () => {
    return (
        <div>
            <p className='text-center'>Image Optimization</p>
            <h2 className='text-center'>Regular Img tag</h2>
            <img className='mx-auto' src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="" />

            <Image src={"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"}
              alt="Image"  width={1000} height={600}/>

             <Image src={nextImage} width={1000} height={600}/>
        </div>
    );
};

export default GalleryPage;