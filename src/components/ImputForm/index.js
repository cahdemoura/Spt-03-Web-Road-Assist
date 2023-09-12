export default function InputForm({ placeholder }) {
    return (
        <>
            <input placeholder={placeholder}></input>

            <style jsx>{`
                input{
                    display: flex;
                    width: 306px;
                    padding: 8px;
                    align-items: center;
                    gap: 8px;
                    border-radius: 10px;
                    background: #FFF;
                }
                `}
            </style>
        </>
    )
}