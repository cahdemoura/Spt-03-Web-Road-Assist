import ButtonMain from "@/components/ButtonMain";
import HyperLink from "@/components/HyperLink";
import Title from "@/components/Title";
import Image from "next/image";


export default function Main() {
    return (
        <section className="section">

            <div className="main-section">

                <aside className="left-menu">
                    <ButtonMain href={"/requisitosFotos"}>Requisitar</ButtonMain>
                    <ButtonMain href={"/acompanhar"}>Acompanhar</ButtonMain>
                    <ButtonMain href={"/perfil"}>Perfil</ButtonMain>
                    <ButtonMain href={"/historico"}>Histórico</ButtonMain>
                </aside>

                <aside className="right-menu">
                    <div className="teste">
                        <Image src={"/images/map.png"}
                            width={'1337'}
                            height={'621'}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} />
                    </div>
                </aside>
            </div>

            <style jsx>{`
                .spanTeste{
                    border: 1px solid red;
                }
                .main-section{
                    display: flex;
                    background-color:#BBD6FF;
                    border-radius:7px;
                    border: 1px solid #C3C3C3;                  
                    padding:16px;
                    gap:16px;          
                    box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
                }

                .left-menu{
                    display:flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                    padding:8px;
                    gap:16px;
                }

                .right-menu{
                    display:flex;
                    background-color:white;
                    padding:16px;
                    border-radius:7px;
                    display:flex;
                    flex-direction:column;
                    gap:8px;
                    width:569px;
                    max-width:569px;
                    height:356px;            
                }

                .section{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;  
                    max-width:100%;
                    gap:24px;
                    margin-left:10px;
                    margin-right:10px;
                    margin-bottom:10px;
                }

                .teste{
                        position:relative;
                        width:100%;
                        height:356px;
                }

                @media (max-width:800px){
                    .main-section{                    
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        width:100%;
                        min-width:360px;
                    }
                    .right-menu{
                        width:100%;
                        min-width:356px;
                    }

                    .left-menu{
                        display:grid;
                        justify-content:center;
                        align-items:center;
                        grid-template-columns: 2fr 2fr
                    }

                    .teste{
                        position:relative;
                        width:100%;
                        height:356px;
                    }
                }
                `}
            </style>
        </section>
    )
}