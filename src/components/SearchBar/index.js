import ImagesComp from "../ImagesComp";

export default function SearchBar({ SizeBar }) {

    return (
        <>
            <div className="bar">
                <div className="iconLocator"> <ImagesComp src={"/images/locator.svg"} width={17} height={21}></ImagesComp> </div>
                <div className="line"></div>
                <input className="input1" placeholder="Inserir Localização"></input>
                <div className="line"></div>
                <div className="locais-salvos">
                    <input className="input2" placeholder="Locais Salvos"></input>
                    <span> <ImagesComp src={"/images/open_up.svg"} width={25.4} height={25.4}></ImagesComp></span>
                </div>

            </div>

            <style jsx>{`
                .bar{
                    display:flex;
                    justify-content: center;
                    align-items: center; 
                    flex-direction: row;
                    background: #D9D9D9; 
                    padding:4px 6px;
                    border-radius:32px;
                    gap:8px;
                    max-width:${SizeBar};
                    margin: 0 10px;
                }

                .iconLocator{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background-color:white;
                    width:30px;
                    height:30px;
                    padding: 8px;
                    border-radius:50%;
                    transition:.1s ease-in-out;
                }

                .iconLocator:hover{
                    cursor:pointer;
                    transform: scale(.93);
                }

                .line{
                    min-width:1px;
                    height:26px;
                    background:black;  
                }

                input{
                    padding:8px 16px;
                    border:none;
                    border-radius:20px;
                    width:100%;
                }

                .input1{
                    width:60%;
                }

                .locais-salvos{
                    position:relative;
                    width: 40%;
                }
                
                span{
                    position:absolute;
                    right:4px;
                    top:4px;
                    justify-content: center;
                    align-items: center;
                    transition:.1s ease-in-out;                 
                }

                span:hover{
                    cursor:pointer;
                    transform: scale(.90);
                }          
            `}
            </style>
        </>
    )
}


