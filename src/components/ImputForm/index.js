import Input from "../Input";

export default function InputForm({ titulo, placeholder, name, type,value }) {
    return (
        <>
            <label >
                <p>{titulo}</p>
                <div className="input">
                    <Input type={type} name={name} placeholder={placeholder} value={value}></Input>
                </div>
            </label>

            <style jsx>{`
                .input{
                    display: flex;
                    width: 100%;
                    padding: 8px;
                    align-items: center;
                    border-radius: 6px;
                    background: white;
                }

                input{
                    position: relative;
                    font-size:14px;
                    height: 100%;
                    width: 100%;
                    border: none;
                    outline:none; 
                }

                p{
                color: #000;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                margin-bottom:6px;
                }


                `}
            </style>
        </>
    )
}