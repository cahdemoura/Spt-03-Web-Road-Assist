import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";

export default function Formulario1({ hrefFoward }) {
  return (
    <section>
      <form>

        <TitleH1 tag={"h1"} textAlign={"center"}>
          Veículo
        </TitleH1>
        <div className="block">
          <InputForm
            titulo={"Marca:"}
            name="MarcaVeiculo"
            type="text"
            placeholder={"Exemplo: Wolkswagen"}
          ></InputForm>
          <InputForm
            titulo={"Cor:"}
            name="CorVeiculo"
            type="text"
            placeholder={"Exemplo: Preto"}
          ></InputForm>
          <InputForm
            titulo={"Modelo:"}
            name="ModeloVeiculo"
            type="text"
            placeholder={"Exemplo: Worker 4x2"}
          ></InputForm>
          <InputForm
            titulo={"Categoria tarifária:"}
            name="Cateroria Tarifaria"
            type="text"
            placeholder={"Exemplo: Acima 10 Toneladas"}
          ></InputForm>
          <InputForm
            titulo={"Carroceira:"}
            name="Carroceria"
            type="text"
            placeholder={"Exemplo: Carreta"}
          ></InputForm>
        </div>

        <HyperLink href={hrefFoward}>
          <Submit value={"Confirmar"}></Submit>
        </HyperLink>
      </form>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 350px;
          background: white;
          padding: 16px;
          border-radius: 3px;
          border: 1px solid #c3c3c3;
          box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
        }

        .block {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          background: #bbd6ff;
          border-radius: 3px;
          width: 100%;
          margin-bottom: 10px ;
        }
      `}</style>
    </section>
  );
}
