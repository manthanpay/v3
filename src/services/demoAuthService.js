import { localStore } from '../infrastructure/localStore.js'

export const demoAuthService = {
  users() { return localStore.get('mp_users', []) },
  findByMobile(mobile) { return this.users().find((u) => u.mobile === mobile) },
  register(user) { localStore.set('mp_users', [...this.users(), user]); return user },
  update(user) { localStore.set('mp_users', this.users().map((x) => x.mobile === user.mobile ? user : x)); return user },
  session() { return localStore.get('mp_session', null) },
  setSession(user) { localStore.set('mp_session', user) },
  clearSession() { localStore.remove('mp_session') },
}
