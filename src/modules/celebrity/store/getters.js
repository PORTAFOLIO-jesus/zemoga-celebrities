// export const myGetter =  ( state ) => { return state.algo};
export const getAllCelebrities =
    (state) => () => {
        return state.celebrities;
    };