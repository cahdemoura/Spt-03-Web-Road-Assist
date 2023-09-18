import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import Formulario3 from "@/components/formularios/Formulario3";



export default function Formularios3() {
    return (
        <>
            <header>
                <Header></Header>
            </header>

            <main className={styledPage.pageEstrutura}>
                <section className={styledPage.middle}>
                    <Title tag={'h1'} textAlign={'left'} color={'#00A1FC'}>Road Assist</Title>
                    <SearchBar SizeBar={"600px"}></SearchBar>
                </section>
                <Map hrefBack={"/formularios2"}></Map>
                
                <span className={styledPage.form3}>
                    <Formulario3 hrefFoward={"/formularios4"}></Formulario3>
                </span>

            </main>

            

        </>
    )
}