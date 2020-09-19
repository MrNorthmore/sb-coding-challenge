import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | gif', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  // Model not fully implemented therefore nothing to test currently
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('gif', {});
    assert.ok(model);
  });
});
