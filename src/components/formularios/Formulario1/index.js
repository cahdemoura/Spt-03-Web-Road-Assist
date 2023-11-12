import InputForm from "@/components/ImputForm";
import TitleH1 from "@/components/Title";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";
import { useState } from "react";
import axios from "axios";

export default function Formulario1({ hrefFoward }) {

  //Estado para armazenas os dados retornados da nossa api VIACEP
  const [data, setData] = useState({});

  //Estado para manipular erro
  const [error, setError] = useState(null);

  const [marca, setMarca] = useState('')

  const [cor, setCor] = useState('');

  const [modelo, setModelo] = useState('');

  const [categoria, setCategoria] = useState('');

  const [carroceria, setCarroceria] = useState('');

  function buscarMarca(e) {
    setMarca(e.target.value);
  }

  function buscarCor(e) {
    setCor(e.target.value);
  }

  function buscarModelo(e) {
    setModelo(e.target.value);
  }

  function buscarCategoria(e) {
    setCategoria(e.target.value);
  }

  function buscarCarroceria(e) {
    setCarroceria(e.target.value);
  }

  function buscarModelo() {
    axios.get(`https://road-assist-871b.onrender.com/vehicle/1`).then(
      function (response) {
        if (response.data && !response.data.erro) {
          setData(response.data)
          setError(null);
          console.log(response)
        }
        else {
          setData({})
          setError('requerimento não encontrado')
        }
      })
      .catch(function (error) {
        setData({})
        setError('Veículo não encontrado')
      })


    setMarca(data.marca)
    setCor(data.cor)
    setModelo(data.modelo)
    setCategoria(data.categoria_tarifaria)
    setCarroceria(data.carroceria)
  }

  return (
    <section>
      <form action={hrefFoward} >

        <TitleH1 tag={"h1"} textAlign={"center"}>
          Veículo
        </TitleH1>
        <div className="block">
          <InputForm
            titulo={"Marca:"}
            name="MarcaVeiculo"
            type="text"
            placeholder={"Exemplo: Mercedes"}
            value={marca}
            func={buscarMarca}
          ></InputForm>
          <InputForm
            titulo={"Cor:"}
            name="CorVeiculo"
            type="text"
            placeholder={"Exemplo: Preto"}
            value={cor}
            func={buscarCor}
          ></InputForm>
          <InputForm
            titulo={"Modelo:"}
            name="ModeloVeiculo"
            type="text"
            placeholder={"Exemplo: Worker 4x2"}
            value={modelo}
            func={buscarModelo}
          ></InputForm>
          <InputForm
            titulo={"Categoria tarifária:"}
            name="Cateroria Tarifaria"
            type="text"
            placeholder={"Exemplo: Acima 10 Toneladas"}
            value={categoria}
            func={buscarCategoria}
          ></InputForm>
          <InputForm
            titulo={"Carroceira:"}
            name="Carroceria"
            type="text"
            placeholder={"Exemplo: Carreta"}
            value={carroceria}
            func={buscarCarroceria}
          ></InputForm>
          <p>{marca === undefined && <p>Erro: Não foi possível completar automaticamente.</p>}</p>
          <p> {error && <p>{error}</p>}</p>
        </div>

        <div className="div-input">
          <Submit type={'button'} value={"Auto Completar"} func={buscarModelo}></Submit>
          <Submit type={'submit'} value={"Confirmar"} ></Submit>
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
