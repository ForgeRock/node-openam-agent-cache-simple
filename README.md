# openam-agent-cache-simple
Simple in-memory cache for the OpenAM Policy Agent for NodeJS

Installation: `npm install openam-agent-cache-simple`

# API Docs

<a name="SimpleCache"></a>

## SimpleCache ⇐ <code>Cache</code>
**Kind**: global class  
**Extends:** <code>Cache</code>  

* [SimpleCache](#SimpleCache) ⇐ <code>Cache</code>
    * [new SimpleCache([options])](#new_SimpleCache_new)
    * [.get(key)](#SimpleCache+get) ⇒ <code>Promise</code>
    * [.put(key, value)](#SimpleCache+put)
    * [.remove(key)](#SimpleCache+remove) ⇒ <code>Promise</code>
    * [.quit()](#SimpleCache+quit) ⇒ <code>Promise</code>

<a name="new_SimpleCache_new"></a>

### new SimpleCache([options])
Cache implementation that stores entries in an object in memory (not efficient for large caches)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Options |
| [options.expireAfterSeconds] | <code>number</code> | <code>300</code> | Expiration time in seconds (if undefined, entries won't expire) |
| [options.logger] | <code>winston~Logger</code> |  | Logger |

**Example**  
```js
var agent = new PolicyAgent({
  cache: new SimpleCache({expireAfterSeconds: 600}) // cached entries expire after 10 minutes
  ...
})
```
<a name="SimpleCache+get"></a>

### simpleCache.get(key) ⇒ <code>Promise</code>
Get a single cached item
If the entry is not found, reject

**Kind**: instance method of <code>[SimpleCache](#SimpleCache)</code>  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="SimpleCache+put"></a>

### simpleCache.put(key, value)
Store a single cached item (overwrites existing)

**Kind**: instance method of <code>[SimpleCache](#SimpleCache)</code>  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>\*</code> | 

<a name="SimpleCache+remove"></a>

### simpleCache.remove(key) ⇒ <code>Promise</code>
Remove a single cached item

**Kind**: instance method of <code>[SimpleCache](#SimpleCache)</code>  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="SimpleCache+quit"></a>

### simpleCache.quit() ⇒ <code>Promise</code>
If this were a database, it would close the connection, but since it's not, it doesn't

**Kind**: instance method of <code>[SimpleCache](#SimpleCache)</code>
