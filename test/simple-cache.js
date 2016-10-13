var Promise = require('bluebird'),
    SimpleCache = require('../index').SimpleCache,
    assert = require('assert');

describe('SimpleCache', function () {
    it('should return the stored value if it has not expired yet', function () {
        var simpleCache = new SimpleCache({expireAfterSeconds: 2});
        return simpleCache
            .put('foo', 'bar')
            .then(function () {
                return new Promise(function (resolve) {
                    setTimeout(resolve, 100);
                });
            })
            .then(function () {
                return simpleCache.get('foo');
            })
            .then(function (cached) {
                assert(cached === 'bar');
            });

    });

    it('should not return the stored value if it has expired', function () {
        var simpleCache = new SimpleCache({expireAfterSeconds: 1});
        return simpleCache
            .put('foo', 'bar')
            .then(function () {
                return new Promise(function (resolve) {
                    setTimeout(resolve, 1300);
                });
            })
            .then(function () {
                return simpleCache.get('foo');
            })
            .then(function (cached) {
                assert(cached !== 'bar');
            })
            .catch(function (err) {
                assert(err !== undefined);
                assert(err !== null);
                return true;
            });

    });

    it('should clean up entries periodically', function (done) {
        var simpleCache = new SimpleCache({expireAfterSeconds: 0.2});
        simpleCache.put('foo', 'bar');
        setTimeout(function () {
            assert(simpleCache._keyValueStore.foo === undefined);
            done();
        }, 500);
    });
});
