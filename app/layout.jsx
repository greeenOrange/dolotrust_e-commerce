import Nav from "@components/Nav"
import "@styles/global.css"

export const metadata = {
  title: 'Dolotrust',
  description: 'Step up your Clothing & Fashion',
}

const RootLayout = ({children}) =>{
  return (
    <html lang="en">
      <body>
        <div className="main">
            <main className="app">
              <Nav />
              {children}
            </main>

        </div>
      </body>
    </html>
  )
}
export default RootLayout


export const getStaticProps = async()=>{
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()
    return {
      props : {
        allProduct: data
      },
    }
  }