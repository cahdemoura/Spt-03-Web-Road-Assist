import ImagesComp from "../ImagesComp";

export default function BackButton() {
    return (
        <div>
            <button><ImagesComp src={"/images/backButton.png"} width={40} height={20}></ImagesComp></button>

            <style jsx>{`
                button{
                    border:none;
                }
                `}</style>

        </div>
    )
}