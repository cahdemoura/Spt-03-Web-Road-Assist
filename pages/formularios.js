import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import Formulario0 from "@/components/formularios/Formulario0";
import InputWImages from "@/components/InputWImages";


export default function Formularios() {
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
                <Map hrefBack={"/"}></Map>
                
                <span className={styledPage.form}>
                    <Formulario0 hrefFoward={"/formularios1"}></Formulario0>
                </span>

            </main>

            

        </>
    )
}