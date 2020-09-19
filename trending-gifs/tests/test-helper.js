import Application from 'trending-gifs/app';
import config from 'trending-gifs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
