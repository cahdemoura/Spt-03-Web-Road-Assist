import HyperLink from "../HyperLink";

export default function ButtonMain({ children, href }) {
    return (
        <>
            <HyperLink href={href}>
                <button>{children}</button>
            </HyperLink>

            <style jsx>{`
                button{
                    display: flex;
                    width: 158px;
                    height: 48px;
                    padding: 16px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border:none;
                    border-radius: 7px;
                    background-color:#0046c0;
                    color:white;
                    font-size:14px;
                    font-weight:700;
                    transition:.5s ease-in-out;
                    
                }
                button:hover{
                    cursor:pointer;
                    transform:scale(0.96);
                }
                
                `}</style>
        </>
    )
}