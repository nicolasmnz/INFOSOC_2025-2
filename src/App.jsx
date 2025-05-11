import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    id: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '' // Nuevo campo para Sala
  });

  const [errors, setErrors] = useState({
    idError: '',
    opcion1Error: '',
    opcion2Error: '',
    opcion3Error: '',
    opcion4Error: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Limpiar errores cuando se escribe/selecciona
    if (errors[`${name}Error`]) {
      setErrors({
        ...errors,
        [`${name}Error`]: ''
      });
    }

    // Resetear opciones dependientes cuando cambia la opción padre
    if (name === 'opcion1') {
      setFormData(prev => ({
        ...prev,
        opcion2: '',
        opcion3: '',
        opcion4: ''
      }));
    } else if (name === 'opcion2') {
      setFormData(prev => ({
        ...prev,
        opcion3: '',
        opcion4: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      idError: '',
      opcion1Error: '',
      opcion2Error: '',
      opcion3Error: '',
      opcion4Error: ''
    };

    // Validar ROL
    if (!formData.id) {
      newErrors.idError = 'El ROL es requerido';
      valid = false;
    } else if (!/^[1-9]\d{8}-\d$/.test(formData.id)) {
      newErrors.idError = 'El formato del ROL no es correcto (xxxxxxxxx-x)';
      valid = false;
    }

    // Validar opciones
    if (!formData.opcion1) {
      newErrors.opcion1Error = 'Por favor seleccione un tipo de problema';
      valid = false;
    }
    if (!formData.opcion2) {
      newErrors.opcion2Error = 'Por favor seleccione un edificio o entorno';
      valid = false;
    }
    if (!formData.opcion3) {
      newErrors.opcion3Error = formData.opcion1 === 'Sala' 
        ? 'Por favor seleccione un lugar específico' 
        : 'Por favor seleccione un problema';
      valid = false;
    }
    // Validar opcion4 solo si es Sala
    if (formData.opcion1 === 'Sala' && !formData.opcion4) {
      newErrors.opcion4Error = 'Por favor seleccione una opción adicional';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Datos enviados:', formData);
    }
  };

  // Opciones dinámicas para el select opcion2
  const getOpcion2Options = () => {
    if (!formData.opcion1) return [];

    switch (formData.opcion1) {
      case 'Casino':
        return ['Primer piso', 'Segundo piso'];
      case 'Bano':
        return ['Baño Varones', 'Baño Damas', 'Baño discapacitados', 'Baño Unisex'];
      case 'Sala':
        return ['Salas A', 'Salas B', 'Salas F', 'Salas K', 'Salas E'];
      default:
        return [];
    }
  };

  // Opciones dinámicas para el select opcion3
  const getOpcion3Options = () => {
    if (!formData.opcion1 || !formData.opcion2) return [];

    if (formData.opcion1 === 'Casino') {
      return ['Problemas con la comida', 'Problemas con las mesas', 'Problemas con la higiene'];
    } else if (formData.opcion1 === 'Bano') {
      return ['No hay papel para secarse', 'No hay papel higiénico', 'No disponible', 'Mal estado', 'Mal olor'];
    } else if (formData.opcion1 === 'Sala') {
      switch (formData.opcion2) {
        case 'Salas A':
          return ['A00X', 'A010'];
        case 'Salas B':
          return ['B00X', 'BX0X'];
        case 'Salas E':
          return ['E00X', 'EX0X'];
        case 'Salas K':
          return ['K00X', 'KX0X'];
        default:
          return [];
      }
    }
    return [];
  };

  // Opciones para el nuevo campo opcion4 (solo para Sala)
  const getOpcion4Options = () => {
    if (formData.opcion1 !== 'Sala') return [];
    return ['Problema eléctrico', 'Problema de mobiliario', 'Problema de limpieza'];
  };

  // Determinar el estado de los pasos
  const getStepStatus = (step) => {
    if (step === 1) return formData.id ? 'completed' : 'active';
    if (step === 2) return formData.opcion1 ? (formData.opcion2 ? 'completed' : 'active') : '';
    if (step === 3) return formData.opcion2 ? (formData.opcion3 ? 'completed' : 'active') : '';
    if (step === 4) return formData.opcion1 === 'Sala' 
      ? (formData.opcion4 ? 'completed' : (formData.opcion3 ? 'active' : ''))
      : (formData.opcion3 ? 'completed' : '');
    return '';
  };

  return (
    <div className="container">
      <h2>Sansavisos - Reporte de Problemas</h2>
      
      {submitted && (
        <div className="success-message">
          ¡Reporte enviado correctamente! Nos pondremos en contacto pronto.
        </div>
      )}
      
      <div className="step-indicator">
        <div className={`step ${getStepStatus(1)}`}>
          <span className="step-label">Identificación</span>
        </div>
        <div className={`step ${getStepStatus(2)}`}>
          <span className="step-label">Tipo de Problema</span>
        </div>
        <div className={`step ${getStepStatus(3)}`}>
          <span className="step-label">
            {formData.opcion1 === 'Sala' ? 'Ubicación' : 'Problema'}
          </span>
        </div>
        {formData.opcion1 === 'Sala' && (
          <div className={`step ${getStepStatus(4)}`}>
            <span className="step-label">Detalle</span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ROL (Identificación):</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Ingrese su ROL (ej: 123456789-0)"
            pattern="[1-9]\d{8}-\d"
            title="9 dígitos (el primero 1-9), guión, 1 dígito"
            required
          />
          <span className="error">{errors.idError}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="opcion1">1. Tipo de problema a reportar:</label>
          <select
            id="opcion1"
            name="opcion1"
            value={formData.opcion1}
            onChange={handleChange}
            required
          >
            <option value="">-- Seleccione una opción --</option>
            <option value="Casino">Casino</option>
            <option value="Bano">Baño</option>
            <option value="Sala">Sala</option>
          </select>
          <span className="error">{errors.opcion1Error}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="opcion2">2. Edificio u entorno:</label>
          <select
            id="opcion2"
            name="opcion2"
            value={formData.opcion2}
            onChange={handleChange}
            required
            disabled={!formData.opcion1}
          >
            <option value="">-- Seleccione primero el tipo de problema --</option>
            {getOpcion2Options().map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
          <span className="error">{errors.opcion2Error}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="opcion3">
            {formData.opcion1 === 'Sala' ? '3. Lugar específico:' : '3. Seleccione problema:'}
          </label>
          <select
            id="opcion3"
            name="opcion3"
            value={formData.opcion3}
            onChange={handleChange}
            required
            disabled={!formData.opcion2}
          >
            <option value="">
              {formData.opcion1 === 'Sala' 
                ? '-- Seleccione primero el edificio --' 
                : '-- Seleccione un problema --'}
            </option>
            {getOpcion3Options().map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
          <span className="error">{errors.opcion3Error}</span>
        </div>
        
        {formData.opcion1 === 'Sala' && (
          <div className="form-group">
            <label htmlFor="opcion4">4. Tipo de problema en la sala:</label>
            <select
              id="opcion4"
              name="opcion4"
              value={formData.opcion4}
              onChange={handleChange}
              required
              disabled={!formData.opcion3}
            >
              <option value="">-- Seleccione un tipo de problema --</option>
              {getOpcion4Options().map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
            <span className="error">{errors.opcion4Error}</span>
          </div>
        )}
        
        <div className="form-group">
          <button type="submit" className="btn-submit">
            Enviar Reporte
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;