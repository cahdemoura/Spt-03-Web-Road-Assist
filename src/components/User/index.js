import HyperLink from "../HyperLink";

export default function User({ children }) {
    return (
        <div className="perfil">

            <HyperLink href='/'>{children}</HyperLink>

            <div className="photo"></div>

            <style jsx>{`
                .photo{
                    width:32px;
                    height:32px;
                    border-radius:50%;
                    border:2px solid black;
                    background:white;
                }

                .perfil{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    gap:10px;
                    padding:10px;
                    border-radius:10px;
                    transition:0.3s ease-in;
                }

                .perfil:hover{
                    background-color:#00A1FC;
                    cursor:pointer;
                    box-shadow: 0px 10px 100px rbga(0,0,0,10);
                }
                `}
            </style>
        </div>
    )
}