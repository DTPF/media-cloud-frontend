import { ISubscription } from "./subscription.interface"
import { IUser } from "./user.interface"

export interface ILicenseState {
  licenses: ILicense[],
  isLoading: boolean,
  getLicenses: () => void,
  postLicense: ({ projectName }: { projectName: string }) => void,
}

export interface ILicense {
  _id?: string
  user?: IUser
  project: string
  apiKey?: string
  enabled?: boolean
  online?: boolean
  size: number
  sizeT: string
  totalFiles?: number
  subscription: ISubscription
  totalRequests?: number
  requestsInDataRange?: number
  createdAt: Date | string
  updatedAt: Date | string
  __v?: any
}

export interface IRequestsDataRange {
  quantity: number
  cicle: string
}