export default function Input({ type, name, placeholder,value,func }) {
    return (
        <>
            <input name={name} type={type} placeholder={placeholder} value={value} onChange={func}></input>

            <style jsx>{`
                input{
                    width: 100%;
                    border: none;
                    outline:none;
                }
            
            `}
            </style>
        </>
    )
}