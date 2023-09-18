import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";

export default function Formulario1({ hrefFoward }) {
    return (
        <section>

            <form>
                <div className="block">
                    <TitleH1 tag={"h1"} textAlign={"center"}>Confirme seus dados</TitleH1>
                </div>

                <div className="block">
                    <TitleH1 tag={"h1"}>Cliente</TitleH1>
                    <InputForm titulo={"Nome:"} name="NomeCliente" type="text" placeholder={"Digite seu nome"}></InputForm>
                    <InputForm titulo={"CPF:"} name="CpfCliente" type="text" placeholder={"Digite seu número"}></InputForm>
                </div>

                <div className="block">
                    <TitleH1 tag={"h1"}>Veículo</TitleH1>
                    <InputForm titulo={"Marca:"} name="MarcaVeiculo" type="text" placeholder={"Exemplo: Wolkswagen"}></InputForm>
                    <InputForm titulo={"Cor:"} name="CorVeiculo" type="text" placeholder={"Exemplo: Preto"}></InputForm>
                    <InputForm titulo={"Modelo:"} name="ModeloVeiculo" type="text" placeholder={"Exemplo: Worker 4x2"}></InputForm>
                    <InputForm titulo={"Categoria tarifária:"} name="Cateroria Tarifaria" type="text" placeholder={"Exemplo: Acima 10 Toneladas"}></InputForm>
                    <InputForm titulo={"Carroceira:"} name="Carroceria" type="text" placeholder={"Exemplo: Carreta"}></InputForm>
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