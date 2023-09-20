import BackButton from "../BackButton";
import ButtonCamera from "../ButtonCamera";
import ButtonMain from "../ButtonMain";
import TitleH1 from "../Title";

export function MenuFotos() {
    return (
        <div className="mainSection">
            <span><BackButton cor={"white"} href={"/"}></BackButton></span>
            <TitleH1 tag={"h1"}>Entendo nossa solução</TitleH1>
            <img src="../images/TruckSide.svg" width={"308px"}></img>
            <p>Nossa IA atráves de visão computacional irá capturar as informações essenciais sobre seu veículo. Tire uma foto da lateral do veiculo</p>
            <ButtonCamera>Tirar foto</ButtonCamera>
            <img src="../images/TruckFront.svg" width={"308px"}></img>
            <p>Agora tire uma foto frontal do veículo. Assim podemos calcular os dados e estar escolhendo o guincho apropriado para o seu veículo</p>
            <ButtonCamera>Tirar foto</ButtonCamera>
            <ButtonMain href={"/formularios"}>Avançar</ButtonMain>

            <style jsx>{`
                span{
                    position:absolute;
                    top:20px;
                    left: 20px;
                }

                p{
                    padding: 8px;
                    text-align:center;
                    font-size:16px;
                    font-weight:600;
                }

                .mainSection{
                    position: relative;
                    display: flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    padding: 16px;
                    padding-top:70px ;
                    gap: 30px;
                    width:363px;
                    background-color:#BBD6FF;
                    border-radius: 3px;
                    border: 1px solid #c3c3c3;
                    box-shadow: 0px 12px 10px 0px rgba(95, 158, 255, 0.26);

                }
                
                `}
            </style>
        </div>
    )
}