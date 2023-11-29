
export async function login({commit}, token) {
    commit("setToken", token);
}
