class Api {

    // we don't currently handle auth tokens on the back end, but we should
    constructor(authToken) {
      this.authToken = authToken;
    }
  
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    
    // if we ever prepend /api/ then we can add that here
    BASE_URL = '';
    
    // create request headers. puts the auth token inside if it is present
    createHeaders() {
      return this.authToken ? {
        ...this.headers,
        'Authorization': 'Bearer ' + this.authToken
      } : this.headers;
    }
    

    // artwork api requests

    async getArtworks() {
      return await fetch(`${this.BASE_URL}/artworks`, {
        method: 'GET',
        headers: this.createHeaders()
      });
    }

    async getArtworkByName(name) {
      return await fetch(`${this.BASE_URL}/artworks/${name}`, {
        method: 'GET',
        headers: this.createHeaders()
      });
    }
  
    async getArtworkByAlbum(album) {
      return await fetch(`${this.BASE_URL}/artworks/album/${album}`, {
        method: 'GET',
        headers: this.createHeaders()
      });
    }
    
    // the body may need to be adjusted here
    async addArtwork(artwork) {
      return await fetch(this.BASE_URL, {
        method: 'POST',
        headers: this.createHeaders(),
        body: JSON.stringify(artwork)
      });
    }
  }

  // music api requests
  
  export default Api;