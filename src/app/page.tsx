import {cookies} from "next/headers";

export default function Home() {
  const rewriteCookieAction = async () => {
    'use server'
    console.log('Called rewriteCookieAction')
    cookies().set('render-time', Date.now().toString())
  }

  const normalAction = async () => {
    'use server'
    console.log('Called normalAction')
  }
  return (
    <main>
      <h1>Revalidate behavior sandbox</h1>
      <div>Rendered: {new Date().toLocaleString()}</div>

      {/* SubmitするとCookieに現在のtimestampをsetするactionが実行される */}
      <form action={rewriteCookieAction}>
        <button type={"submit"}>Submit actions (rewrite cookie)</button>
      </form>

      {/* Submitするとconsoleにログを吐くだけのactionが実行される */}
      <form action={normalAction}>
        <button type={"submit"}>Submit actions</button>
      </form>
    </main>
  )
}

