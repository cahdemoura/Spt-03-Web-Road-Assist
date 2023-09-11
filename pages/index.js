import Header from "@/components/patterns/Header";
import Main from "@/components/patterns/Main";
import style from "@/theme/syle.module.css"

export default function Home() {
    return (
        <main className={style.main}>
            <Header></Header>
            <Main></Main>

        </main>
    )
}