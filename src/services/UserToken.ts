import { ConstLocalStorage } from 'configs/Constants'
import { UserToken } from 'dto/UserToken'

export const setUserToken = async (userToken: UserToken) => {
  await localStorage.setItem(ConstLocalStorage.userToken, JSON.stringify(userToken))
}

export const clearUserToken = async () => {
  await localStorage.removeItem(ConstLocalStorage.userToken)
}

export const getUserToken = async (): Promise<UserToken | undefined> => {
  try {
    const token = await localStorage.getItem(ConstLocalStorage.userToken)
    const res = JSON.parse(token as string) as UserToken
    return res
  } catch (e) {
    // Do nothing
  }
}
