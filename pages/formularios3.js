import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import Formulario3 from "@/components/formularios/Formulario3";
import BackButton from "@/components/BackButton";



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
                    <div className={styledPage.divBackButton}>
                        <BackButton cor={"blue"} href={"/formularios2"}></BackButton>
                    </div>
                    <Formulario3 hrefFoward={"/formularios4"}></Formulario3>
                </section>

                <span className={styledPage.form3}>

                </span>

            </main>



        </>
    )
}