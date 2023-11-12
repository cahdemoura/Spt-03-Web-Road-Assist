import BackButton from "@/components/BackButton";
import ButtonMain from "@/components/ButtonMain";
import ImagesComp from "@/components/ImagesComp";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Map({ hrefBack }) {
    return (
        <section className="section">

            <div className="main-section">
                <aside className="right-menu">
                    <div className="teste">
                        <Image src={"/images/map.png"}
                            width={'1337'}
                            height={'621'}
                            style={{
                                width:'100%',
                                height:'100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <span><BackButton href={hrefBack} cor={"blue"}></BackButton></span>
                </aside>
            </div>

            <style jsx>{`
                .spanTeste{
                    border: 1px solid red;
                }
                .main-section{
                    position: relative;
                    display: flex;
                    border-radius:7px;
                    border: 1px solid #C3C3C3;                                
                    box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
                }

                .right-menu{
                    display:flex;
                    background-color:white;
                    padding:16px;
                    border-radius:7px;
                    display:flex;
                    flex-direction:column;
                    gap:8px;
                    width:830px;
                    max-width:792px;
                    height:444px;            
                }

                span{
                    position: absolute;
                    top: 25px;
                    left: 25px;
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
                    overflow:hidden;
                        position:relative;
                        width:100%;
                        height:444px;
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