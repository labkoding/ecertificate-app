import { atom } from 'jotai'
// import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'

// const storage = createJSONStorage(() => AsyncStorage)

const atomWithAsyncStorage = (key, initialValue) => {
  const baseAtom = atom(initialValue)
  baseAtom.onMount = (setValue) => {
    ;(async () => {
      const item = await AsyncStorage.getItem(key)
      setValue(JSON.parse(item))
    })()
  }
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
          typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      AsyncStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

export const loginIdAtom = atomWithAsyncStorage('loginId', '')
// export const loginIdAtom = atom('')
export const userProfileAtom = atomWithAsyncStorage('userProfile', { full_name: '', email: '', id: '' })
