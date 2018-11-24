import { getStore } from '../store'

/**
 * gets headers for xhr request
 * @returns { Object } the headers
 */
export default function getHeaders() {
  const { jwt } = getStore().getState().user

  return !jwt
    ? false
    : {
        Authorization: `Bearer ${jwt}`,
      }
}
