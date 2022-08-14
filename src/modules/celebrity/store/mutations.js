// export const myAction =  ( state ) => {};
export const setCelebrities = (state, celebrities) => {
    state.celebrities = [...state.celebrities, ...celebrities];
};

export const updateCelebrity = (state, { newCelebrity, id }) => {
    const celebrities = state.celebrities;
    celebrities.splice(id, 1, newCelebrity.data);
};