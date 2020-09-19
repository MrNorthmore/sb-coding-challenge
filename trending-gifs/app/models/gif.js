import Model, { attr } from '@ember-data/model';

export default class GifModel extends Model {
    @attr('string') title;
    @attr('string') url;
}
