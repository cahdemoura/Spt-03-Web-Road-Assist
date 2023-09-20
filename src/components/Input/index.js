export default function Input({ type, name, placeholder,value }) {
    return (
        <>
            <input name={name} type={type} placeholder={placeholder} value={value}></input>

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