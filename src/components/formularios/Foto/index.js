
import InputForm from "@/components/ImputForm";
import Submit from "../Submit";
import ButtonMain from "@/components/ButtonMain";
import HyperLink from "@/components/HyperLink";
import Title from "@/components/Title";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { useState } from "react";


let backgroundImage = "";

const showElement = true

function handleFileChange(event){
    if (event.target.files) {
    backgroundImage = event.target.files[0];
    }
};

export default function FormularioFoto({ hrefFoward }) {
    return (
        <section className="section">
            {
                showElement ?
                <div className="main-section">
                    <span>
                        <BackButton href={"/requisitosFotos"} cor={"white"}></BackButton>
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
                                <div className="pWrapper">
                                    <p>Fotografe ou filme, nossa camera IA ira fazer a leitura do seu caminhão, fazendo reconhecimento do modelo e possível problema, caso ele seja físico</p>
                                </div>
                            </div>

                            <label className="inputFile" for='selecao-arquivo'>
                                <Image
                                    src="/images/PhotoIcon.svg"
                                    alt="Photo Icon"
                                    width={24}
                                    height={24}
                                    priority
                                />
                                <p className="inputFileText">Carregar Foto/video</p>
                                </label>
                            <input type="file" id="selecao-arquivo" onChange={handleFileChange}/>
                        </div>
                    </div>
                    <HyperLink href={hrefFoward}>
                        <Submit value={"Confirmar"}></Submit>
                    </HyperLink>
                </div>

                :

                <div className="section-photo">
                    <div className="photo">
                        <img
                            src={backgroundImage}
                            alt="Background Image"
                            className="img"
                        />
                    </div>

                    
                </div>
            }
            

            
               

            <style jsx>{`
                span{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: start;
                    justifyContent: start; 
                }

                .attachPhoto{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
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
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color:#BBD6FF;
                    border-radius:3px;
                    border: 1px solid #C3C3C3;                                     
                    padding:16px;
                    gap:50px;
                    box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
                    height:600px;
                }

                .section-photo{
                    display: flex;
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

                input[type='file'] {
                    display: none
                  }

                .inputFileText{
                    color: #000;
                    text-align: center;
                    font-family: Raleway;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
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
                    border-radius: 3px;
                    border: 1px solid #C3C3C3;
                    background: #FFF;
                    box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
                }

                .textWrapper{
                    display: flex;
                    padding: 16px 16px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    border-radius: 3px;
                    background: var(--BlueLight, #BBD6FF);
                }

                .pWrapper{
                    display: flex;
                    width: 285px;
                    padding: 8px;
                    align-items: center;
                    gap: 8px;
                    border-radius: 6px;
                    background: #FFF;
                }

                p{
                    color: #000;
                    text-align: center;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }

                .inputFile{
                    display: flex;
                    flex-direction: row;
                    padding: 8px 17px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    border-radius: 7px;
                    border: 6px solid var(--CorButton, #0046C0);
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
                        display: flex;              
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