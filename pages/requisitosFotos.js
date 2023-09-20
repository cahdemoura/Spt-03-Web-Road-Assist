import StyledPage from '@/theme/style.module.css'
import Header from "@/components/patterns/Header";
import Main from "@/components/patterns/Main";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import HistoricoComp from '@/components/patterns/HistoricoComp';
import { MenuFotos } from '@/components/MenuFotos';

export default function RequisitosFotos() {
    return (
        <>
            <header>
                <Header></Header>
            </header>

            <main className={StyledPage.pageEstrutura}>
                <section className={StyledPage.middle}>
                    <MenuFotos></MenuFotos>
                </section>
                
            </main>
        </>
    )
}