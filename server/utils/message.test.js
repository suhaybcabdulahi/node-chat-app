var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
   it('should generate correct message', () => {
     var from = 'suhayb'
     var text = 'Hello, whatsupp'
     var message = generateMessage(from, text)

     expect(typeof message.createdAt).toBe('number')
     expect(message).toMatchObject({from, text})
   })
})
