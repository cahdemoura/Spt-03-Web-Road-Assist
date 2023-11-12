import InputWImages from "@/components/InputWImages";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";
import TitleH1 from "@/components/Title";
import axios from "axios";
import { useState } from "react";

export default function Formulario0({ hrefFoward }) {

  //Estado para armazenas os dados retornados da nossa api VIACEP
  const [data1, setData1] = useState({});

  const [data2, setData2] = useState({});

  //Estado para manipular erro
  const [error, setError] = useState(null);

  const [localAtendimento, setLocalAtendimento] = useState('')

  const [localEntrega, setLocalEntrega] = useState('');

  const [localParada, setLocalParada] = useState('');

  const [referencia, setReferencia] = useState('');



  function buscarLocalAtendimento(e) {
    setLocalAtendimento(e.target.value);
  }

  function buscarLocalEntrega(e) {
    setLocalEntrega(e.target.value);
  }

  function buscarLocalParada(e) {
    setLocalParada(e.target.value);
  }

  function buscarLocalReferencia(e) {
    setReferencia(e.target.value);
  }

  function buscarLocal() {
    axios.get(`https://road-assist-871b.onrender.com/address/1`).then(
      function (response) {
        if (response.data && !response.data.erro) {
          setData1(response.data)
          setError(null);
          console.log(response)
        }
        else {
          setData1({})
          setError('requerimento não encontrado')
        }
      })
      .catch(function (error) {
        setData1({})
        setError('endereço não encontrado')
      })

    axios.get(`https://road-assist-871b.onrender.com/address/2`).then(
      function (response) {
        if (response.data && !response.data.erro) {
          setData2(response.data)
          setError(null);
          console.log(response)
        }
        else {
          setData2({})
          setError('requerimento não encontrado')
        }
      })
      .catch(function (error) {
        setData2({})
        setError('endereço não encontrado')
      })


    setLocalAtendimento(data2.neighborhood + ", " + data2.complement)
    setLocalEntrega(data1.neighborhood + ", " + data1.complement)
    setLocalParada('')
    setReferencia(data2.referencePoint)
    console.log(data1.street)

  }

  function teste() {
    console.log('e')
  }

  return (
    <section>
      <TitleH1 tag={"h1"} textAlign={"center"}>Localização</TitleH1>
      <form action={hrefFoward}>
        <div className="block">
          <label>
            <InputWImages
              src="./images/MyLocator.svg"
              name="local"
              type="text"
              placeholder="Qual seu local de atendimento?"
              value={localAtendimento}
              funcChange={buscarLocalAtendimento}
            ></InputWImages>
          </label>

          <label>
            <InputWImages
              src="./images/Location.svg"
              name="localVeiculo"
              type="text"
              placeholder="Qual o local de entrega do veículo?"
              value={localEntrega}
              funcChange={buscarLocalEntrega}
            ></InputWImages>
          </label>

          <label>
            <InputWImages
              src="./images/LocationPlus.svg"
              name="parada"
              type="text"
              placeholder="Adicionar parada (opcional)"
              value={localParada}
              funcChange={buscarLocalParada}
            ></InputWImages>
          </label>

          <label>
            <InputWImages
              src="./images/Commentary.svg"
              name="comentario"
              type="text"
              placeholder="Ponto de referencia (opcional)"
              value={referencia}
              funcChange={buscarLocalReferencia}
            ></InputWImages>
          </label>
          <p>{localAtendimento === 'undefined, undefined' && <p>Erro: Não foi possível de completar automaticamente.</p>}</p>
          <p> {error && <p>{error}</p>}</p>
        </div>

        <div className="div-input">
          <Submit type={'button'} value={"Auto Completar"} func={buscarLocal}></Submit>
          <Submit type={'submit'} value={"Confirmar"}></Submit>

        </div>
      </form>

      <style jsx>{`

        .div-input{
            padding-top:20px;
            display:flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
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
