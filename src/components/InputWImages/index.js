import Input from "../Input";

export default function InputWImages({ src, type, name, placeholder, children }) {
    return (
        <>
            {children}
            <div className="input">
                <img src={src}></img>
                <Input type={type} name={name} placeholder={placeholder}></Input>
            </div>

            <style jsx>{`
                p{
                color: #000;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                margin-bottom:6px;
                }
                .input{
                    display: flex;
                    align-items:center;
                    gap:8px;
                    padding: 8px;
                    width: 100%;
                    border-radius:10px;                  
                    background: white;         
                }

                img{
                    cursor: pointer;
                    transition: .5s ease-in-out;
                }

                img:hover{
                    transform: scale(.90);
                }  
                `}
            </style>

        </>
    )
}