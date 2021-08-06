import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols Http and Querys', () => {
  test('Url login ', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }

    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Url User', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user')

    expect(parsedUrl.href).toBe('http://localhost:3000/user')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Url query User', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname&email=email')
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname',
      email: 'email'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
