import axios from "axios";

class FormularioService {
  async create(formInfo) {
    const { data } = await axios.post("api/formularios/", userInfo);
    return data;
  }
  async read() {
    const { data } = await axios.get("api/formularios/");
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
