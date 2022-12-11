import axios from "axios";

class ConteudoService {
  async create(conteudoInfo) {
    const { data } = await axios.post("api/conteudos/", conteudoInfo);
    return data;
  }
  async read(disciplina) {
    const { data } = await axios.get(`api/conteudos/?disciplina=${disciplina}`);
    return data;
  }
  async update(idConteudo, conteudoInfo) {
    await axios.patch(`api/conteudos/${idConteudo}`, conteudoInfo);
  }
  async delete(idConteudo) {
    await axios.patch("api/conteudos/", idConteudo);
  }
}

export default new ConteudoService();
