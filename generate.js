module.exports = function() {
    let faker = require('faker');
    let _ = require('lodash');
    return {
        people: _.times(10, (n) => {
            return {
                id: n,
                firstname: faker.fake("{{name.firstName}}"),
                lastname: faker.fake("{{name.lastName}}"),
                profile: faker.internet.avatar(),
                address: {
                    streetAddress: faker.fake("{{address.streetAddress}}"),
                    apartment: (faker.fake("{{random.number}}")).substr(0,2),
                    city: faker.fake("{{address.city}}"),
                    state: faker.fake("{{address.state}}"),
                    zip: faker.fake("{{address.zipCode}}"),
                },
                order : {
                    amount: faker.fake("{{finance.amount}}"),
                    // currency: faker.fake("{{finance.currencyCode}}"),
                    currency: "USD",
                }
                
            }
        })
    };
}