import ImagesComp from "../ImagesComp";

export default function SearchBar() {
    return (
        <>
            <div className="bar">
                <div className="iconLocator">
                    <ImagesComp src={"/images/locator.svg"} width={17} height={21}></ImagesComp>
                </div>
                <div className="line"></div>

                <input placeholder="Inserir Localização"></input>
                <div className="line"></div>
                <div className="locais-salvos">
                    <input placeholder="Locais Salvos"></input>
                    <span> <ImagesComp src={"/images/open_up.svg"} width={25.4} height={25.4}></ImagesComp></span>
                </div>

            </div>

            <style jsx>{`
                .locais-salvos{
                    position:relative;
                }

                .locais-salvos input{
                    padding-right:50px
                }
                
                span{
                    position:absolute;
                    right:4px;
                    top:4px;
                    justify-content: center;
                    align-items: center; 
                    
                }

                input{
                    padding:8px 16px;
                    border:none;
                    border-radius:20px;
                    width:100%
                }

                .bar{
                    display:flex;
                    justify-content: center;
                    align-items: center; 
                    flex-direction: row;
                    background: #D9D9D9; 
                    padding:4px 6px;
                    border-radius:32px;
                    gap:8px;
                }

                .iconLocator{
                    background-color:white;
                    width:50px;
                    height:30px;
                    border-radius:25px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .line{
                    width:2px;
                    height:26px;
                    background:black;
                    
                }
                
                `}
            </style>

        </>
    )
}