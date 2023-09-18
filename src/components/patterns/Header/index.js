import Hamburguer from "@/components/Hamburguer";
import HyperLink from "@/components/HyperLink";
import ImagesComp from "@/components/ImagesComp";
import TitleH1 from "@/components/Title";
import User from "@/components/User";

export default function Header({ }) {
    return (
        <>
            <section className="header">
                <div className="menu">
                    <ImagesComp src="/images/logo-porto1.png" width={89} height={20}></ImagesComp>

                    <ul className="navBar">
                        <li><HyperLink paddingLR={"10px"} paddingTB={"5px"} href='/'>Sobre Nós</HyperLink></li>
                        <li><HyperLink paddingLR={"10px"} paddingTB={"5px"} href='/'>Ajuda</HyperLink></li>
                        <li><HyperLink paddingLR={"10px"} paddingTB={"5px"} href='/'>Blog</HyperLink></li>
                        <li><HyperLink paddingLR={"10px"} paddingTB={"5px"} href='/'>Encontre um Corretor</HyperLink></li>
                    </ul>
                </div>

                <span className="navBar">
                    <User >Usuario</User>
                </span>

                <span className="hamburguerMenu">
                    <Hamburguer />
                </span>

            </section>

            <div className="line"></div>



            <style jsx>{`
                ul{
                    list-style: none;
                    display: flex;
                    
                }
                li{
                    text-decoration: none;
                    padding:5px; 
                    transition: 0.1s ease;
                }

                li:hover{
                    transform:scale(.98);
                    text-decoration:underline;
                }

                .menu{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    gap:40px;
                }

                .header{
                    display:flex;
                    align-items:center;
                    justify-content:space-evenly;
                    margin-top: 20px;
                    margin-bottom:10px;
                }

                .line{
                    Max-width:100vw;
                    height:1px;
                    background:#00000080;
                    margin-bottom:20px;
                }

                .hamburguerMenu{
                    display:none;
                }

                @media (max-width:1000px)
                {
                    .navBar{
                        display:none;
                    }

                    .hamburguerMenu{
                    display:Block;
                    }   

                    .header{
                        margin-top: 20px;
                        margin-bottom:10px;
                        justify-content:space-between; 
                        margin-left:20px;
                        margin-right:20px;
                    }
                }

            `}</style>

        </>
    )
}