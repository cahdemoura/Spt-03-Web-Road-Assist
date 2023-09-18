import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import GuinchoConfirmado from "@/components/formularios/GuinchoConfirmado";



export default function Formularios4() {
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
                <Map hrefBack={"/formularios3"}></Map>
                
                <span className={styledPage.form4}>
                    <GuinchoConfirmado MapPage={"/formularios5"}></GuinchoConfirmado>
                </span>

            </main>

            

        </>
    )
}