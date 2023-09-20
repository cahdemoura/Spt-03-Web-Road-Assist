import TitleH1 from "@/components/Title";
import ButtonBorder from "@/components/ButtonBorder";
import ButtonMain from "@/components/ButtonMain";
import InputForm from "@/components/ImputForm";
import InputWImages from "@/components/InputWImages";

export default function AguardandoMenu({ hrefFoward }) {
    return (
        <section>
            <form>
                <TitleH1 tag={"h1"} textAlign={"center"}>Tempo de espera</TitleH1>

                <div className="block">
                    <p>Aproximadamente 30 minutos de distância!</p>
                    <div>
                        <InputWImages src={"/images/phone.svg"} placeholder={"Alguma Oberservação?"}></InputWImages>

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
                    border-radius:6px;
                    text-align: center; 
                    font-weight: 500; 
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