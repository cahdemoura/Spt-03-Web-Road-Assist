import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import ButtonBorder from "@/components/ButtonBorder";
import ButtonMain from "@/components/ButtonMain";

export default function ConfirmBox() {
    return (
        <section>
            <form>
                <div className="block">
                    <TitleH1 tag={"h1"} textAlign={"center"}>Confirme</TitleH1>
                    <p>Com todos os seus dados verificados, confirme o pedido de guincho</p>
                </div>

                <div>
                <ButtonBorder>Cancelar</ButtonBorder>
                <ButtonMain>Confirmar</ButtonMain>
                </div>
            </form>

            <style jsx>{`
                p{
                    background: white;
                    padding: 8px;
                    font-size:14px;
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
                    border-radius:16px;
                    box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.60);
                }

                .block{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    padding: 16px;
                    background: #BBD6FF;  
                    border-radius:16px;        
                    width: 100%;
                }
                `}</style>

        </section>
    )
}