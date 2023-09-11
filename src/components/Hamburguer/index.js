export default function Hamburguer() {
    return (
        <div className="container">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <style jsx>{`
                .container{
                    display:flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items:center;
                    gap:6px;
                    padding:12px 10px;
                    border-radius:8px;
                    transition:.3s ease;
                    background-color: white;
                    transition:.3s ease-in-out;
                    border:2px solid transparent;
                    
                }
                .container:hover{
                    border:2px solid black;
                    cursor:pointer;
                    /*transform:scale(.95);*/
                    opacity:.8        
                }

                .line{
                    width:28px;
                    height:3px;
                    background:black;
                    border-radius:50px;
                }
                `}
            </style>
        </div>
    )
}