import { StringIndex } from './types'

export function transferStringTemplate(templateString: string, inserts: StringIndex): string {
  return templateString?.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val: string) => {
    return inserts[val]
  })
}

export function getValueByObjPath(objectPath: string, data: StringIndex): unknown {
  return objectPath?.split('.').reduce((val, next) => {
    return val[next]
  }, data)
}


