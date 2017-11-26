export const getMsg = (state, payload) => {
  state.msg = payload.msg;
}
export const getUserData = (state, res) => {
  state.userData = res;

}