import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import Formulario1 from "@/components/formularios/Formulario1";
import BackButton from "@/components/BackButton";



export default function Formularios1() {
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
                        <BackButton cor={"blue"} href={"/formularios"}></BackButton>
                    </div>
                    <Formulario1 hrefFoward={"/formularios3"}></Formulario1>

                </section>

                <span className={styledPage.disapear}>

                </span>

                <span className={styledPage.form1}>

                </span>

            </main>



        </>
    )
}