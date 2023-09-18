import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";

export default function Formulario3({ hrefFoward }) {
    return (
        <section>

            <form>
                <div className="block">
                    <TitleH1 tag={"h1"}>Descrição Problema</TitleH1>
                    <InputForm titulo={"Motivo/Problema:"} name={"MotivoProblema"} type={"text"} placeholder={"..."}></InputForm>
                    <InputForm titulo={"Outros Motivos/Problemas:"} name={"OutrosMotivos"} type={"text"} placeholder={"..."}></InputForm>
                </div>

                <div className="block">
                    <TitleH1 tag={"h1"}>Descrição</TitleH1>
                    <textarea name="DescricaoProblema" placeholder="Descreva o problema ocorrido." rows="5"></textarea>
                </div>
                <HyperLink href={hrefFoward}>
                    <Submit value={"Confirmar"}></Submit>
                </HyperLink>

            </form>

            <style jsx>{`
                textarea{
                    border: none;
                    border-radius:10px;
                    padding: 8px;
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