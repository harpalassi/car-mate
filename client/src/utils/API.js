import axios from 'axios';

// export default {
//   // gets books from google books api
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY + PARTNER_TOKEN);
//   },

export default {
  //get available fields
  getAvailableFields: function(year, make, model, mileage, vin) {
    // console.log(year, make, model, mileage, vin);
    return axios.get('api/service/availableFields', {
      params: {
        year: year,
        make: make,
        model: model,
        mileage: mileage,
        vin: vin,
      },
    });
  },
  getMaintenance: function(year, make, model, mileage, vin, userEmail) {
    // console.log(year, make, model, mileage, vin, userEmail);
    return axios.get('api/service/getMaintenance', {
      params: {
        year: year,
        make: make,
        model: model,
        mileage: mileage,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  getUpcoming: function(year, make, model, mileage, vin, userEmail) {
    // console.log(year, make, model, mileage, vin, userEmail);
    return axios.get('api/service/getUpcoming', {
      params: {
        year: year,
        make: make,
        model: model,
        mileage: mileage,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  getRecalls: function (year, make, model, vin, userEmail) {
    // console.log(year, make, model, vin, userEmail);
    return axios.get('api/service/getRecalls', {
      params: {
        year: year,
        make: make,
        model: model,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  getWarranty: function (year, make, model, vin, userEmail) {
    // console.log(year, make, model, vin, userEmail);
    return axios.get('api/service/getWarranty', {
      params: {
        year: year,
        make: make,
        model: model,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  saveUser: (userData) => {
    return axios.post('api/user', userData);
  }

  // getUser: () => {
  //   return axios.get('api/user', userData);
  // }



  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get('/api/books/' + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete('/api/books/' + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post('/api/books', bookData);
  // },
};
