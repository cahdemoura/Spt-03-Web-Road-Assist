import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";

export default function Formulario3({ hrefFoward }) {
    return (
        <section>
            <form>
                <TitleH1 tag={"h1"} textAlign={"center"}>Descrição Problema</TitleH1>
                <div className="block">

                    <InputForm titulo={"Motivo/Problema:"} name={"MotivoProblema"} type={"text"} placeholder={"..."}></InputForm>
                    <InputForm titulo={"Outros Motivos/Problemas:"} name={"OutrosMotivos"} type={"text"} placeholder={"..."}></InputForm>
                </div>

                <TitleH1 tag={"h1"} textAlign={"center"}>Descrição</TitleH1>

                <div className="block">
                    <textarea name="DescricaoProblema" placeholder="Descreva o problema ocorrido." rows="5"></textarea>
                </div>
                <HyperLink href={hrefFoward}>
                    <Submit value={"Confirmar"}></Submit>
                </HyperLink>

            </form>

            <style jsx>{`
                textarea{
                    border: none;
                    border-radius:6px;
                    padding: 8px;
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