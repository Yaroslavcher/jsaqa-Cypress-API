describe('petstore api', () => {
  it('creates user with given input array', () => {
    cy.request({
      url: 'https://petstore.swagger.io/v2/user/createWithArray',
      method: 'POST',
      body: {
        "id": 1,
        "username": "username1",
        "firstName": "Ivan",
        "lastName": "Ivanov",
        "email": "test@test.com",
        "password": "password1",
        "phone": "",
        "userStatus": 0
      }
    }).then((response) => {
      expect(response.status).to.be.eql(200)
      expect(response.body).to.be.eql({
          "code": 200,
          "type": "unknown",
          "message": "ok"
        })  
      })
  })

  // it('log in user', () => {
  //   cy.request('https://petstore.swagger.io/v2/user/login?username=username1&password=password1')
  // }).then((response) => {
  //   expect(response.status).to.be.eql(200)
  //   })
  
  // it('create user', () => {
  //   cy.request({
  //     url: 'https://petstore.swagger.io/v2/user',
  //     method: 'POST',
  //     body: {
  //       "id": 1,
  //       "username": "username1",
  //       "firstName": "Ivan",
  //       "lastName": "Ivanov",
  //       "email": "test@test.com",
  //       "password": "password1",
  //       "phone": "",
  //       "userStatus": 0
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.be.eql(200)
  //     expect(response.body).to.be.eql({
  //         "code": 200,
  //         "type": "unknown",
  //         "message": "1"
  //     })

  //     cy.request(`https://petstore.swagger.io/v2/user/${response.body.message}`)
  //       .then((response) => {
  //         expect(response.status).to.be.eql(200)
  //         expect(response.body).to.be.eql({
  //             "code": 200,
  //             "type": "unknown",
  //             "message": "123"
  //         })
  //       })
  //   })
  // })
})