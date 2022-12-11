import axios from "axios";

class FormularioService {
  async create(formInfo) {
    const { data } = await axios.post("api/formularios/", formInfo);
    return data;
  }
  async read(idConteudo) {
    const { data } = await axios.get(`api/formularios/?conteudo=${idConteudo}`);
    return data;
  }
  async update(idForm, formInfo) {
    await axios.patch(`api/formularios/${idForm}`, formInfo);
  }
  async delete(idForm) {
    await axios.patch("api/formularios/", idForm);
  }
}

export default new FormularioService();
