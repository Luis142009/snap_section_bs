

export const Inicio = () => {
  return (
    <>
    
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundImage: "public/poppy.webp", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="row shadow-lg rounded" style={{ maxWidth: "800px", width: "100%" }}>

        <div
          className="col-md-6 p-5"
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.6)"
          }}
        >
          <p className="text-muted small mb-1">🟪 Bienvenido</p>
          <h4 className="fw-bold mb-4">Formulario de Registro</h4>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label text-muted small">Primer Nombre</label>
              <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" placeholder="Nombre" />
            </div>
            <div className="col-">
              <label className="form-label text-muted small">Segundo Nombre</label>
              <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" placeholder="Segundo " />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small">Nombre de Usuario</label>
            <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small">Email</label>
            <input type="email" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" />
          </div>

          <div className="mb-4">
            <label className="form-label text-muted small">Número de Teléfono</label>
            <input type="tel" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" />
          </div>

          <button className="btn text-white px-4 rounded-pill" style={{ background: "#3d2f8f" }}>
            Registro
          </button>
        </div>

        
        <div className="col-md-6 p-0" style={{ minHeight: "480px", background: "#1a1a3e", overflow: "hidden" }}>
          <img
            src="sopa.jpg" width="100%" height="100%" alt="character"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

      </div>
    </div>
   
    </>
  )
}
