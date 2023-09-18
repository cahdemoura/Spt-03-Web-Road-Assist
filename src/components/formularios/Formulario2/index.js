import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";

export default function Formulario2({ hrefFoward }) {
    return (
        <section>

            <form>
                <div className="block">
                    <TitleH1 tag={"h1"} textAlign={"center"}>Confirme seus dados</TitleH1>
                </div>

                <div className="block">
                    <TitleH1 tag={"h1"}>Endereço Ocorrência</TitleH1>
                    <InputForm titulo={"Local:"} placeholder={"Rua..."}></InputForm>
                    <InputForm titulo={"Bairro:"} placeholder={"Bairro"}></InputForm>
                    <InputForm titulo={"Estado:"} placeholder={"São Paulo"}></InputForm>
                    <InputForm titulo={"Complemento:"} placeholder={""}></InputForm>
                    <InputForm titulo={"Ponto de referência:"} placeholder={""}></InputForm>
                </div>

                <div className="block">
                    <TitleH1 tag={"h1"}>Endereço Destino</TitleH1>
                    <InputForm titulo={"Local:"} placeholder={"Rua..."}></InputForm>
                    <InputForm titulo={"Bairro:"} placeholder={"Bairro"}></InputForm>
                    <InputForm titulo={"Estado:"} placeholder={"São Paulo"}></InputForm>
                    <InputForm titulo={"Complemento:"} placeholder={""}></InputForm>
                    <InputForm titulo={"Ponto de referência:"} placeholder={""}></InputForm>
                </div>

                <HyperLink href={hrefFoward}>
                    <Submit value={"Confirmar"}></Submit>
                </HyperLink>
            </form>

            <style jsx>{`
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