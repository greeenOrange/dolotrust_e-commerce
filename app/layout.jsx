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
          <div className="gradient">
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
export default RootLayout