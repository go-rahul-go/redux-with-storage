import ListAdder from "./components/ListAdder"
import ListDisplay from "./components/ListDisplay"



function App() {

    return (
        <>

            <ListAdder />
            <div className="text-gray-100 w-full text-center capitalize text-2xl py-4">
                
                <p>add text in the above input bar</p>
                
            </div>
            <ListDisplay />
        </>

    )

}

export default App
