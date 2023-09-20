import InputWImages from "@/components/InputWImages";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";
import TitleH1 from "@/components/Title";

export default function Formulario0({ hrefFoward }) {
  return (
    <section>
      <form>
        <TitleH1 tag={"h1"} textAlign={"center"}>Localização</TitleH1>
        <div className="block">
          <label>
            <InputWImages
              src="./images/MyLocator.svg"
              name="local"
              type="text"
              placeholder="Qual seu local de atendimento?"
            ></InputWImages>
          </label>

          <label>
            <InputWImages
              src="./images/Location.svg"
              name="localVeiculo"
              type="text"
              placeholder="Qual o local de entrega do veículo?"
            ></InputWImages>
          </label>

          <label>
            <InputWImages
              src="./images/LocationPlus.svg"
              name="parada"
              type="text"
              placeholder="Adicionar parada (opcional)"
            ></InputWImages>
          </label>

          <label>
            <InputWImages
              src="./images/Commentary.svg"
              name="comentario"
              type="text"
              placeholder="Ponto de referencia (opcional)"
            ></InputWImages>
          </label>
        </div>

        <div className="div-input">
          <HyperLink href={hrefFoward}>
            <Submit value={"Confirmar"}></Submit>
          </HyperLink>
        </div>
      </form>

      <style jsx>{`

        .div-input{
            padding-top:20px;
            display:flex;
            justify-content: center;
            align-items: center;
        }

          section {
            width: 350px;
            background: white;
            padding: 16px;
            border-radius: 3px;
            border: 1px solid #C3C3C3;
            box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);
          }

          .block {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
            background: #bbd6ff;
            border-radius: 3px;
            width: 100%;
            margin-top:10px;
          }

          .formulario {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          label {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </section>
  );
}
