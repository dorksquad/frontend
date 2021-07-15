class Api {

    constructor(authToken) {
      this.authToken = authToken;
    }
  
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  
    BASE_URL = '/api';
  
    createHeaders() {
      return this.authToken ? {
        ...this.headers,
        'Authorization': 'Bearer ' + this.authToken
      } : this.headers;
    }
  
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
  
    async addArtwork(artwork) {
      return await fetch(this.BASE_URL, {
        method: 'POST',
        headers: this.createHeaders(),
        body: JSON.stringify(artwork)
      });
    }
  }
  
  export default Api;