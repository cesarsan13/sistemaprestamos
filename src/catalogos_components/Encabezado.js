function Encabezado({titulo,txt_boton}) {
return (
    <div className="row mb-5">
        <div className="col-sm-9 align-self-start">
            <h1 className="c-titulo fw-bold">{titulo}</h1>
        </div>
        <div className="col-sm-3 align-self-end">
            <button type="button" className="btn btn-primary mb-2">
            {txt_boton}
            </button>
        </div>
    </div>
);
}
export default Encabezado;
