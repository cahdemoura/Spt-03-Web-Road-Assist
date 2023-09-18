export default function Input({ type, name, placeholder }) {
    return (
        <>
            <input name={name} type={type} placeholder={placeholder}></input>

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