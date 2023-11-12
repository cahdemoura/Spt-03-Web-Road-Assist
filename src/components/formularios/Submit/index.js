export default function Submit({ value, type, func }) {
    return (
        <>
            <input type={type} value={value} onClick={func}></input>

            <style jsx>{`
                input{
                    color: #FFF;
                    text-align: center;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;

                    width: 158px;
                    height: 48px;
                    padding: 16px;
                    border-radius: 7px;
                    border: none;
                    background: #0046C0;
                    margin: 0 auto;

                    transition: .5s ease-in-out;
                }
                input:hover{
                    cursor: pointer;
                    transform: scale(.95);
                }
                `}
            </style>
        </>
    )
}