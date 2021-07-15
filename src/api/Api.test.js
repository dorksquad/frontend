import Api from './Api';

const apiWithAuthToken = new Api('auth token');
const apiWithoutAuthToken = new Api();

describe('getArtworks function', () => {
    it('auth token present fetch is called', async () => {
       global.fetch = jest.fn(() => {
          Promise.resolve();
       });
       await apiWithAuthToken.getArtworks();
       expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('auth token not present fetch is called', async () => {
        global.fetch = jest.fn(() => {
           Promise.resolve();
        });
        await apiWithoutAuthToken.getArtworks();
        expect(fetch).toHaveBeenCalledTimes(1);
     });
});

describe('getArtworkByName function', () => {
    it('auth token present fetch is called', async () => {
       global.fetch = jest.fn(() => {
          Promise.resolve();
       });
       const name = 'chill name';
       await apiWithAuthToken.getArtworkByName(name);
       expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('auth token not present fetch is called', async () => {
        global.fetch = jest.fn(() => {
           Promise.resolve();
        });
        const name = 'chill name';
        await apiWithoutAuthToken.getArtworkByName(name);
        expect(fetch).toHaveBeenCalledTimes(1);
     });
});

describe('getArtworkByAlbum function', () => {
    it('auth token present fetch is called', async () => {
       global.fetch = jest.fn(() => {
          Promise.resolve();
       });
       const album = 'chill album';
       await apiWithAuthToken.getArtworkByAlbum(album);
       expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('auth token not present fetch is called', async () => {
        global.fetch = jest.fn(() => {
           Promise.resolve();
        });
        const album = 'chill album';
        await apiWithoutAuthToken.getArtworkByAlbum(album);
        expect(fetch).toHaveBeenCalledTimes(1);
     });
});

describe('addArtwork function', () => {
    it('auth token present fetch is called', async () => {
       global.fetch = jest.fn(() => {
          Promise.resolve();
       });
       const artwork = {
           name: 'chill name',
           album: 'chill album',
           file: '0101010101010'
       };
       await apiWithAuthToken.addArtwork(artwork);
       expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('auth token not present fetch is called', async () => {
        global.fetch = jest.fn(() => {
           Promise.resolve();
        });
        const artwork = {
            name: 'chill name',
            album: 'chill album',
            file: '0101010101010'
        };
        await apiWithoutAuthToken.addArtwork(artwork);
        expect(fetch).toHaveBeenCalledTimes(1);
     });
});