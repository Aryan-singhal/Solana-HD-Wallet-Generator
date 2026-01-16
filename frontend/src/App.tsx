
import Pnemonics from "./components/elements/pnemonics"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="">
        <div className="flex justify-between mt-5 mx-3">
          <h1 className="text-3xl">Solana HD Wallet Generator</h1>
          <ModeToggle /></div>
        <Pnemonics />
        {/* <Wallet /> */}

      </div>
    </ThemeProvider>
  )

}

export default App
