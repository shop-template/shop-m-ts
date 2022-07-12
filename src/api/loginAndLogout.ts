import { AxiosResponse } from 'axios'
import axios from '@/plugins/axios.js'
import { ResponseObject } from './index'
import { UserInfoType } from '@/types'

interface LoginResponseObject extends ResponseObject {
  data: {
    token: string
    userInfo: UserInfoType
  }
}

export const apiLogin: (params?: {}) => Promise<AxiosResponse<LoginResponseObject, any>> = (params = {}) => {
  return axios.post('/loginByPassword', params)
}
