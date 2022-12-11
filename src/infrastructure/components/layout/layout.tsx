import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import style from './layout.module.css';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <main className={style.main}>{children}</main>
            <Footer></Footer>
        </>
    );
}
