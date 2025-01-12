import { PathServices } from "@/pathServices/pathServices"
import { MethodsAxios } from "./adapters-axios"

export class UseMethods extends MethodsAxios {}

export const useMethods = new UseMethods(PathServices.URL)
