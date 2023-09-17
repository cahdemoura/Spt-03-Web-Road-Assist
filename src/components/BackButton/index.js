import ImagesComp from "../ImagesComp";

export default function BackButton({cor}) {
    let color;
    if(cor=="white"){
        color= "#fff";}
    else if(cor=="blue"){
         color= "#BBD6FF";
    }
    return (
        <div>
            <button><ImagesComp src={"/images/Arrow.svg"} width={32} height={24}></ImagesComp></button>

            <style jsx>{`
                button{
                    border:none;
                    padding: 6px 16px;
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    border-radius: 18px;
                    background:${color};
                }

                button:hover{
                    cursor: pointer;
                    opacity:.8;
                }
                
                `}</style>

        </div>
    )
}