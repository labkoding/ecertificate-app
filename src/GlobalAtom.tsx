import { atomWithStorage } from 'jotai/utils'

export const loginIdAtom = atomWithStorage('loginId', '')

export const userProfileAtom = atomWithStorage('userProfile', { full_name: '', email: '', id: '' })
