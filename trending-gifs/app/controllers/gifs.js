import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class GifsController extends Controller {
  gifData = [];
  filteredGifData = [];


  @action
  searchTrendingGifs(event) {
    this.filteredGifData = []
    this.model.forEach((gif) => {
      if (gif.title.includes(event.target.value)) {
        this.filteredGifData.push(gif);
      }
    });
    console.log(this.filteredGifData);
  }
}
