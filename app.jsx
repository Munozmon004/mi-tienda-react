function App(){

    function isUserLoggedIn(){
        return false;
    }

    function logIn() {
        alert("Bienvenido");
    }

    return (
        <>
        <section style={{display: "none"}}>
        </section>

        <section>
            <h2>clase 4 -componentes</h2>
            <Button text="Iniciar sesion"></Button>
            <Button text="Registro" disabled={true}></Button>
            <Button text="Hola coder" color="purple"></Button>
            <Button text="Verde" color="green"></Button>
        </section>
        </>
    );
}
export default App;