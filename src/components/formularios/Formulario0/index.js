import InputWImages from "@/components/InputWImages";
import Submit from "../Submit";
import HyperLink from "@/components/HyperLink";

export default function Formulario0({hrefFoward}) {
    return (
        <section>

            <form>
                <div className="block">
                    <label>
                        <InputWImages src="./images/MyLocator.svg" name="local" type="text" placeholder="Qual seu local de atendimento?"></InputWImages>
                    </label>

                    <label>
                        <InputWImages src="./images/Location.svg" name="localVeiculo" type="text" placeholder="Qual o local de entrega do veículo?"></InputWImages>
                    </label>

                    <label>
                        <InputWImages src="./images/LocationPlus.svg" name="parada" type="text" placeholder="Adicionar parada (opcional)"></InputWImages>

                    </label>

                    <label>
                        <InputWImages src="./images/Commentary.svg" name="comentario" type="text" placeholder="Ponto de referencia (opcional)"></InputWImages>
                    </label>

                    <HyperLink href={hrefFoward}>
                        <Submit value={"Confirmar"}></Submit>
                    </HyperLink>



                </div>


            </form >

            <style jsx>{`
                section{
                    width: 350px;
                    background: white;
                    padding: 16px;
                    border-radius:16px;
                    box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.60);
                }

                .block{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 16px;
                    background: #BBD6FF;  
                    border-radius:16px;        
                    width: 100%;
                }

                .formulario{
                    display: flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;         
                }

                label{
                    position: relative;
                    display: flex;
                    flex-direction:row;
                    justify-content:center;
                    align-items:center;
                }      
                `}
            </style>
        </section >
    )
}