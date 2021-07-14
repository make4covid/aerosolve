const helpers = {
  get: function (url: string) {
    const requestOptions = {
      method: 'GET',
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  },

  post: function (url: string, body: any) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  },
  handleResponse: function (response: any) {
    return response.text().then((text: string) => {
      const data = text && JSON.parse(text)

      if (!response.ok) {
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }

      return data
    })
  },
}

export default helpers
