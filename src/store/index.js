import { createStore } from "vuex";
import celebrity from "../modules/celebrity/store";
const store = createStore({
    modules: {
        celebrity,
    },
});

export default store;
