import Hamburguer from "@/components/Hamburguer";
import HyperLink from "@/components/HyperLink";
import ImagesComp from "@/components/ImagesComp";
import TitleH1 from "@/components/Title";
import User from "@/components/User";

export default function Header({ }) {
    return (
        <header>
            <div className="footer">
                <div className="menu">
                    <ImagesComp src="/images/logo-porto1.png" width={89} height={20}></ImagesComp>

                    <ul className="navBar">
                        <li><HyperLink href='/'>Sobre Nós</HyperLink></li>
                        <li><HyperLink href='/'>Ajuda</HyperLink></li>
                        <li><HyperLink href='/'>Blog</HyperLink></li>
                        <li><HyperLink href='/'>Encontre um Corretor</HyperLink></li>
                    </ul>
                </div>

                <span className="navBar">
                    <User > Usuario</User>
                </span>

                <span className="hamburguerMenu">
                    <Hamburguer />
                </span>

            </div>

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
                    gap:40px
                }

                .footer{
                    display:flex;
                    align-items:center;
                    justify-content:space-evenly;
                }

                .line{
                    Max-width:100vw;
                    height:1px;
                    background:#00000080;
                    margin:10px 0;
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
                    .footer{
                        justify-content: space-between;
                        margin:0 16px;
                    }
                }

            `}</style>

        </header>
    )
}