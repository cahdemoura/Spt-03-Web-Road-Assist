import InputForm from "@/components/ImputForm";
import Submit from "../Submit";
import ButtonMain from "@/components/ButtonMain";
import HyperLink from "@/components/HyperLink";
import Title from "@/components/Title";
import Image from "next/image";
import BackButton from "@/components/BackButton";


let backgroundImage = "/images/map.png";
let displayMainSection = "flex";
let displayPhotoSection = "none";

export default function FormularioFoto({ hrefFoward }) {
    return (
        <section className="section">

            <div className="main-section">
                <span>
                    <BackButton href={"/"} cor={"white"}></BackButton>
                </span>  

                <div className="attachPhoto">
                    <Image
                        src="/images/CameraIcon.svg"
                        alt="Camera Icon"
                        class="CameraIcon"
                        width={120}
                        height={120}
                        priority
                    />
                    <div className="wrapper">
                        <div className="textWrapper">
                            <Title tag={'h1'} textAlign={'left'} color={'#00000'}>Fotografe ou filme!</Title>
                            <p>   Fotografe ou filme, nossa camera IA ira fazer a leitura do seu caminhão, fazendo reconhecimento do modelo e possível problema, caso ele seja físico</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-photo">
                    <div className="photo">
                    <img
                        src={backgroundImage}
                        alt="Background Image"
                        className="img"
                    />
                </div>

                <HyperLink href={hrefFoward}>
                    <Submit value={"Confirmar"}></Submit>
                </HyperLink>
            </div>
               

            <style jsx>{`

                span{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: start;
                    justifyContent: start; 
                }

                aside div{
                    height: 70%;
                    display: flex;
                    align-items:center;
                    justify-content:center;
                }
                .spanTeste{
                    border: 1px solid red;
                }
                .main-section{
                    display: ${displayMainSection};
                    flex-direction: column;
                    background-color:#BBD6FF;
                    border-radius:7px;
                    border: 1px solid black;                    
                    padding:16px;
                    gap:16px;          
                    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.50);
                }

                .section-photo{
                    display: ${displayPhotoSection};
                    flex-direction: column;
                    align-content: center;
                    justify-content: center;
                }

                .photo{
                    flex-direction: column;
                    height: fit-content;
                    width: fit-content;
                }

                .img{
                    width: 500px;
                    height: 300px;
                    border-radius: 7px; 
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

                .wrapper{
                    display: flex;
                    padding: 16px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    border-radius: 18px;
                    border: 1px solid #C3C3C3;
                    background: #FFF;
                    box-shadow: 8px 8px 12px 0px rgba(0, 0, 0, 0.73);
                }

                .textWrapper{
                    display: flex;
                    padding: 16px 8px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    border-radius: 18px;
                    background: var(--BlueLight, #BBD6FF);
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

                .CameraIcon{
                    width: 200px;
                    height: 200px;
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