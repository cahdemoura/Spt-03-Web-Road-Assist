import HyperLink from "../HyperLink";
import ImagesComp from "../ImagesComp";

export default function BackButton({ cor,href }) {
    let color;
    if (cor == "white") {
        color = "#fff";
    }
    else if (cor == "blue") {
        color = "#BBD6FF";
    }
    return (
        <div>
            <HyperLink href={href}>
                <button><ImagesComp src={"/images/Arrow.svg"} width={32} height={24}></ImagesComp></button>
            </HyperLink>

            <style jsx>{`
                button{
                    border:none;
                    padding: 6px 16px;
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    border-radius: 18px;
                    background:${color};
                    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.50);
                    transition: 0.3s ease-in-out;
                }

                button:hover{
                    cursor: pointer;
                    transform: scale(0.95);
                }
                
                `}</style>

        </div>
    )
}