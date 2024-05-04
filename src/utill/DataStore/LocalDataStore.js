import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV() 

export const setItem = async (key, value) => {
  await storage.set(key, value)
}

export const getItem = async (key) => {
  return await storage.getString(key)
}
