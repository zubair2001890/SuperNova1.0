import axios from 'axios'

const types = {
  SET_USER_INFO: 'SET_USER_INFO',
}

const setUserInfo = (user) => ({
  type: types.SET_USER_INFO,
  payload: user,
})

export const fetchAndSetUserInfo = () => async (dispatch) => {
  const { data } = await axios.get('/api/user')
  dispatch(setUserInfo(data))
}

const reduceUserInfo = (user = null, { payload, type }) => {
  if (type === types.SET_USER_INFO) {
    return payload
  }
  return user
}

export default reduceUserInfo
