import TitleH1 from "@/components/Title";
import ButtonBorder from "@/components/ButtonBorder";
import ButtonMain from "@/components/ButtonMain";

export default function GuinchoConfirmado({ MapPage }) {
    return (
        <section>
            <form>
                <TitleH1 tag={"h1"} textAlign={"center"}>Aguarde...</TitleH1>

                <div className="block">
                    <TitleH1 tag={"h2"} textAlign={"center"}>Seu guincho está a caminho!</TitleH1>
                    <img src="/images/Truck.svg" width="104px" height="104px" ></img>
                    <p>O seu guincho já foi requisitado e está a caminho do seu local!</p>
                </div>

                <div>
                    <ButtonMain href={"/"}>Menu</ButtonMain>
                    <ButtonMain href={MapPage}>Ver no mapa</ButtonMain>

                </div>
            </form>

            <style jsx>{`
                p{
                    background: white;
                    padding: 8px;
                    font-size:14px;
                    text-align:center;
                    font-weight: 500; 
                    border-radius:10px;
                }
                div{
                    display: flex;
                    justify-content:center;
                    gap: 8px;
                }
                form{
                    display: flex;
                    flex-direction: column;
                    gap:8px;
                    width: 350px;
                    background: white;
                    padding: 16px;
                    border-radius:3px;
                    border: 1px solid #c3c3c3;
                    box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
                }

                .block{
                    display: flex;
                    flex-direction: column;
                    align-items:center;
                    gap: 16px;
                    padding: 16px;
                    background: #BBD6FF;  
                    border-radius:3px;        
                    width: 100%;
                    margin-bottom: 10px ;
                }
                `}</style>

        </section>
    )
}