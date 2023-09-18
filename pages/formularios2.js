import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import Formulario2 from "@/components/formularios/Formulario2";



export default function Formularios2() {
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
                <Map hrefBack={"/formularios1"}></Map>
                
                <span className={styledPage.form2}>
                    <Formulario2 hrefFoward={"/formularios3"}></Formulario2>
                </span>

            </main>

            

        </>
    )
}