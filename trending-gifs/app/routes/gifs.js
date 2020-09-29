import Route from '@ember/routing/route';
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('8invPy0FTcoPrFFOsFuoyO1WDKVSJNUl')


export default class GifsRoute extends Route {
    
    async model() {
        // Returns a promise from the giphy SDK and 
        var fetchGifs = await gf.trending({ offset: 0, limit: 50 }).then((response) => {
            console.log(response.data)
            return response.data;
        })
        return fetchGifs;
    }

    setupController(controller, model) {
        super.setupController(controller, model)
        controller.filteredGifData = model
    }
}
