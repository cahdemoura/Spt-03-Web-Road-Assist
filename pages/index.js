import StyledPage from '@/theme/style.module.css'
import Header from "@/components/patterns/Header";
import Main from "@/components/patterns/Main";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";

export default function Home() {
    return (
        <>
            <header>
                <Header></Header>
            </header>

            <main className={StyledPage.pageEstrutura}>
                <section className={StyledPage.middle}>
                    <Title tag={'h1'} textAlign={'left'} color={'#00A1FC'}>Road Assist</Title>
                    <SearchBar SizeBar={"600px"}></SearchBar>
                </section>
                <Main></Main>
            </main>
        </>
    )
}