// export const myAction = async ( {commit} ) => {};
import celebrityApi from "../../../api/celebrityApi";

export const loadCelebrities = async ({ commit }) => {
    const { data: { data } } = await celebrityApi.get('/celebrity.json');
    const celebrities = data;

    if (!data) {
        commit("setCelebrities", []);
        return
    }
    commit('setCelebrities', celebrities);
};

export const updateCelebrity = async ({ commit }, { celebrity, id, votes }) => {

    celebrity.votes.positive = votes.positive;
    celebrity.votes.negative = votes.negative;

    const data = await celebrityApi.put(`/celebrity/data/${id}.json`, celebrity);
    const newCelebrity = data;
    commit('updateCelebrity', { newCelebrity, id });
};