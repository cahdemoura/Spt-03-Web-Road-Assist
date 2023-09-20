import styledPage from "@/theme/style.module.css"
import Header from "@/components/patterns/Header";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/patterns/Map";
import GuinchoConfirmado from "@/components/formularios/GuinchoConfirmado";
import BackButton from "@/components/BackButton";



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
                    <div className={styledPage.divBackButton}>
                        <BackButton cor={"blue"} href={"/formularios3"}></BackButton>
                    </div>
                    <GuinchoConfirmado MapPage={"/formularios5"}></GuinchoConfirmado>
                </section>
                
                <span className={styledPage.form4}>
                    
                </span>

            </main>

            

        </>
    )
}