import Head from "next/head"
import styles from "../styles/style.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="board tool"/>

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>
      </main>
    </>
  )
}
