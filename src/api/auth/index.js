import axios from "axios";

class AuthService {
  async create(userInfo) {
    const { data } = await axios.post("auth/registration/", userInfo);
    return data;
  }
  async login(userInfo) {
    const { data } = await axios.post("auth/login/", userInfo);
    return data;
  }
  async logout() {
    const { data } = await axios.post("auth/logout/");
    return data;
  }
  async changePassword(newPassword) {
    await axios.post("auth/password/change/", newPassword);
  }
  async read() {
    const { data } = await axios.get("auth/user/");
    return data;
  }
  async update(newUser) {
    await axios.patch("auth/user/", newUser);
  }
  async delete(inactivatedUser) {
    console.log(inactivatedUser);
    await axios.patch("auth/user/", inactivatedUser);
  }
}

export default new AuthService();
