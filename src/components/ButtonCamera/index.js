import HyperLink from "../HyperLink";

export default function ButtonCamera({ children }) {
    return (
        <div>
            <HyperLink href={"/formularioFoto"}>
                <button>
                    <img src="./images/photo_camera.svg"></img>
                    {children}</button>
            </HyperLink>

            <style jsx>{`
                img{
                    padding-right:8px;
                }

                button{
                    color: #000;
                    text-align: center;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:158px;
                    height: 48px;
                    padding: 16px;

                    background-color:white;
                    border-radius: 7px;
                    border: 2px solid var(--CorButton, #0046C0);
                    transition:.5s ease-in-out;
                }

                button:hover{
                    cursor:pointer;

                    transform:scale(0.96);
                }
                
                `}</style>
        </div>
    )
}