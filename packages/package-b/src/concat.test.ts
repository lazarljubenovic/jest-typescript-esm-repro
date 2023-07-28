import { describe, expect, it } from '@jest/globals'
import { a } from 'package-a'
import { concat } from './concat.js'


describe(`concat`, () => {
  it(`works`, () => {
    expect(concat(a, 'x')).toBe('ax')
  })
})