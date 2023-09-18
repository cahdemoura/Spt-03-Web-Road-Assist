import TitleH1 from "@/components/Title";
import ButtonBorder from "@/components/ButtonBorder";
import ButtonMain from "@/components/ButtonMain";
import InputForm from "@/components/ImputForm";

export default function AguardandoMenu({hrefFoward }) {
    return (
        <section>
            <form>
                <div className="block">
                    <TitleH1 tag={"h1"} textAlign={"center"}>Tempo de espera</TitleH1>
                </div>
                <div className="block">
                    <p>Aproximadamente 30 minutos de distância!</p>
                    <div>
                    <InputForm placeholder={"Alguma Oberservação?"}></InputForm>
                    <img src="/images/phone.svg" width="30px"></img>
                    </div>
                </div>

                <div>
                    <ButtonMain href={hrefFoward}>Voltar menu</ButtonMain>
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