import StyledPage from '@/theme/style.module.css'
import Header from "@/components/patterns/Header";
import Main from "@/components/patterns/Main";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import HistoricoComp from '@/components/patterns/HistoricoComp';

export default function Acompanhar() {
    return (
        <>
            <header>
                <Header></Header>
            </header>

            <main className={StyledPage.teste}>
                <section className={StyledPage.fff}>
                    <Title tag={'h1'} textAlign={'left'} color={'#00A1FC'}>Road Assist</Title>
                    <SearchBar SizeBar={"600px"}></SearchBar>
                </section>
                <HistoricoComp></HistoricoComp>
            </main>
        </>
    )
}