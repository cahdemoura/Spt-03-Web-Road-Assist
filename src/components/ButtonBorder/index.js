export default function ButtonBorder({children}){
    return(
        <div>
            <button>Testando</button>

            <style jsx>{
                `button{
                    color: #000;
                    text-align: center;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;

                    display: flex;
                    padding: 8px 17px;
                    justify-content: center;
                    align-items: center;
                    background-color:white;
                    border-radius: 7px;
                    border: 2px solid var(--CorButton, #0046C0);

                }`
                }</style>
        </div>
    )
}