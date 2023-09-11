import Image from "next/image";

export default function ImagesComp({src,width,height}) {
    return (
        <div>
            <Image src={src}
                width={width}
                height={height}/>
        </div>
    )
}