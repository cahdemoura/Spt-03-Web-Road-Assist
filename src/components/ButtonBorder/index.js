export default function ButtonBorder({children}){
    return(
        <div>
            <button>{children}</button>

            <style jsx>{`
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
                    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.50);
                    transition:.5s ease-in-out;
                }

                button:hover{
                    cursor:pointer;
                    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.50);
                    transform:scale(0.96);
                }
                
                `}</style>
        </div>
    )
}