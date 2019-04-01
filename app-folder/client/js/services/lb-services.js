// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Household
 * @header lbServices.Household
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Household` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Household",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Households/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Household.shoppingLists.findById() instead.
            "prototype$__findById__shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/shoppingLists/:fk",
              method: "GET",
            },

            // INTERNAL. Use Household.shoppingLists.destroyById() instead.
            "prototype$__destroyById__shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/shoppingLists/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Household.shoppingLists.updateById() instead.
            "prototype$__updateById__shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/shoppingLists/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Household.fridges() instead.
            "prototype$__get__fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "GET",
            },

            // INTERNAL. Use Household.fridges.create() instead.
            "prototype$__create__fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "POST",
            },

            // INTERNAL. Use Household.fridges.update() instead.
            "prototype$__update__fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "PUT",
            },

            // INTERNAL. Use Household.fridges.destroy() instead.
            "prototype$__destroy__fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "DELETE",
            },

            // INTERNAL. Use Household.timetables.findById() instead.
            "prototype$__findById__timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/timetables/:fk",
              method: "GET",
            },

            // INTERNAL. Use Household.timetables.destroyById() instead.
            "prototype$__destroyById__timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/timetables/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Household.timetables.updateById() instead.
            "prototype$__updateById__timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/timetables/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Household.tenants.findById() instead.
            "prototype$__findById__tenants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/tenants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Household.tenants.destroyById() instead.
            "prototype$__destroyById__tenants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/tenants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Household.tenants.updateById() instead.
            "prototype$__updateById__tenants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/tenants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Household.shoppingLists() instead.
            "prototype$__get__shoppingLists": {
              isArray: true,
              url: urlBase + "/Households/:id/shoppingLists",
              method: "GET",
            },

            // INTERNAL. Use Household.shoppingLists.create() instead.
            "prototype$__create__shoppingLists": {
              url: urlBase + "/Households/:id/shoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Household.shoppingLists.destroyAll() instead.
            "prototype$__delete__shoppingLists": {
              url: urlBase + "/Households/:id/shoppingLists",
              method: "DELETE",
            },

            // INTERNAL. Use Household.shoppingLists.count() instead.
            "prototype$__count__shoppingLists": {
              url: urlBase + "/Households/:id/shoppingLists/count",
              method: "GET",
            },

            // INTERNAL. Use Household.timetables() instead.
            "prototype$__get__timetables": {
              isArray: true,
              url: urlBase + "/Households/:id/timetables",
              method: "GET",
            },

            // INTERNAL. Use Household.timetables.create() instead.
            "prototype$__create__timetables": {
              url: urlBase + "/Households/:id/timetables",
              method: "POST",
            },

            // INTERNAL. Use Household.timetables.destroyAll() instead.
            "prototype$__delete__timetables": {
              url: urlBase + "/Households/:id/timetables",
              method: "DELETE",
            },

            // INTERNAL. Use Household.timetables.count() instead.
            "prototype$__count__timetables": {
              url: urlBase + "/Households/:id/timetables/count",
              method: "GET",
            },

            // INTERNAL. Use Household.tenants() instead.
            "prototype$__get__tenants": {
              isArray: true,
              url: urlBase + "/Households/:id/tenants",
              method: "GET",
            },

            // INTERNAL. Use Household.tenants.create() instead.
            "prototype$__create__tenants": {
              url: urlBase + "/Households/:id/tenants",
              method: "POST",
            },

            // INTERNAL. Use Household.tenants.destroyAll() instead.
            "prototype$__delete__tenants": {
              url: urlBase + "/Households/:id/tenants",
              method: "DELETE",
            },

            // INTERNAL. Use Household.tenants.count() instead.
            "prototype$__count__tenants": {
              url: urlBase + "/Households/:id/tenants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#create
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Households",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#patchOrCreate
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Households",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#replaceOrCreate
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Households/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#upsertWithWhere
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Households/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#exists
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Households/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#findById
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Households/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#replaceById
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Households/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#find
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Households",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#findOne
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Households/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#updateAll
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Households/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#deleteById
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Households/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#count
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Households/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#prototype$patchAttributes
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Households/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#createChangeStream
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Households/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Household#createMany
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Households",
              method: "POST",
            },

            // INTERNAL. Use ShoppingList.household() instead.
            "::get::ShoppingList::household": {
              url: urlBase + "/ShoppingLists/:id/household",
              method: "GET",
            },

            // INTERNAL. Use Fridge.household() instead.
            "::get::Fridge::household": {
              url: urlBase + "/Fridges/:id/household",
              method: "GET",
            },

            // INTERNAL. Use Timetable.household() instead.
            "::get::Timetable::household": {
              url: urlBase + "/Timetables/:id/household",
              method: "GET",
            },

            // INTERNAL. Use Tenant.household() instead.
            "::get::Tenant::household": {
              url: urlBase + "/Tenants/:id/household",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Household#upsert
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Household#updateOrCreate
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Household#patchOrCreateWithWhere
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Household#update
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Household#destroyById
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Household#removeById
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Household#prototype$updateAttributes
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Household#modelName
        * @propertyOf lbServices.Household
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Household`.
        */
        R.modelName = "Household";

    /**
     * @ngdoc object
     * @name lbServices.Household.shoppingLists
     * @header lbServices.Household.shoppingLists
     * @object
     * @description
     *
     * The object `Household.shoppingLists` groups methods
     * manipulating `ShoppingList` instances related to `Household`.
     *
     * Call {@link lbServices.Household#shoppingLists Household.shoppingLists()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Household#shoppingLists
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Queries shoppingLists of Household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::get::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#count
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Counts shoppingLists of Household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shoppingLists.count = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::count::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#create
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Creates a new instance in shoppingLists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.create = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::create::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#createMany
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Creates a new instance in shoppingLists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.createMany = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::createMany::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#destroyAll
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Deletes all shoppingLists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shoppingLists.destroyAll = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::delete::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#destroyById
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Delete a related item by id for shoppingLists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for shoppingLists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shoppingLists.destroyById = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::destroyById::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#findById
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Find a related item by id for shoppingLists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for shoppingLists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.findById = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::findById::Household::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.shoppingLists#updateById
             * @methodOf lbServices.Household.shoppingLists
             *
             * @description
             *
             * Update a related item by id for shoppingLists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `fk` – `{*}` - Foreign key for shoppingLists
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.updateById = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::updateById::Household::shoppingLists"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Household.fridges
     * @header lbServices.Household.fridges
     * @object
     * @description
     *
     * The object `Household.fridges` groups methods
     * manipulating `Fridge` instances related to `Household`.
     *
     * Call {@link lbServices.Household#fridges Household.fridges()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Household#fridges
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Fetches hasOne relation fridges.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::get::Household::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.fridges#create
             * @methodOf lbServices.Household.fridges
             *
             * @description
             *
             * Creates a new instance in fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.create = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::create::Household::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.fridges#createMany
             * @methodOf lbServices.Household.fridges
             *
             * @description
             *
             * Creates a new instance in fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.createMany = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::createMany::Household::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.fridges#destroy
             * @methodOf lbServices.Household.fridges
             *
             * @description
             *
             * Deletes fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.fridges.destroy = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::destroy::Household::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.fridges#update
             * @methodOf lbServices.Household.fridges
             *
             * @description
             *
             * Update fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.update = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::update::Household::fridges"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Household.timetables
     * @header lbServices.Household.timetables
     * @object
     * @description
     *
     * The object `Household.timetables` groups methods
     * manipulating `Timetable` instances related to `Household`.
     *
     * Call {@link lbServices.Household#timetables Household.timetables()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Household#timetables
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Queries timetables of Household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::get::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#count
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Counts timetables of Household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.timetables.count = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::count::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#create
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Creates a new instance in timetables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.create = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::create::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#createMany
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Creates a new instance in timetables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.createMany = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::createMany::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#destroyAll
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Deletes all timetables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.timetables.destroyAll = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::delete::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#destroyById
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Delete a related item by id for timetables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for timetables
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.timetables.destroyById = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::destroyById::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#findById
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Find a related item by id for timetables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for timetables
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.findById = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::findById::Household::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.timetables#updateById
             * @methodOf lbServices.Household.timetables
             *
             * @description
             *
             * Update a related item by id for timetables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `fk` – `{*}` - Foreign key for timetables
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.updateById = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::updateById::Household::timetables"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Household.tenants
     * @header lbServices.Household.tenants
     * @object
     * @description
     *
     * The object `Household.tenants` groups methods
     * manipulating `Tenant` instances related to `Household`.
     *
     * Call {@link lbServices.Household#tenants Household.tenants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Household#tenants
             * @methodOf lbServices.Household
             *
             * @description
             *
             * Queries tenants of Household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenants = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#count
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Counts tenants of Household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.tenants.count = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::count::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#create
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Creates a new instance in tenants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenants.create = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::create::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#createMany
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Creates a new instance in tenants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenants.createMany = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::createMany::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#destroyAll
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Deletes all tenants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tenants.destroyAll = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::delete::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#destroyById
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Delete a related item by id for tenants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tenants
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tenants.destroyById = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::destroyById::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#findById
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Find a related item by id for tenants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tenants
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenants.findById = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::findById::Household::tenants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Household.tenants#updateById
             * @methodOf lbServices.Household.tenants
             *
             * @description
             *
             * Update a related item by id for tenants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Household id
             *
             *  - `fk` – `{*}` - Foreign key for tenants
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenants.updateById = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::updateById::Household::tenants"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ShoppingList
 * @header lbServices.ShoppingList
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ShoppingList` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ShoppingList",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/ShoppingLists/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ShoppingList.household() instead.
            "prototype$__get__household": {
              url: urlBase + "/ShoppingLists/:id/household",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.items.findById() instead.
            "prototype$__findById__items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ShoppingLists/:id/items/:fk",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.items.destroyById() instead.
            "prototype$__destroyById__items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ShoppingLists/:id/items/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ShoppingList.items.updateById() instead.
            "prototype$__updateById__items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ShoppingLists/:id/items/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ShoppingList.tenant() instead.
            "prototype$__get__tenant": {
              url: urlBase + "/ShoppingLists/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.items() instead.
            "prototype$__get__items": {
              isArray: true,
              url: urlBase + "/ShoppingLists/:id/items",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.items.create() instead.
            "prototype$__create__items": {
              url: urlBase + "/ShoppingLists/:id/items",
              method: "POST",
            },

            // INTERNAL. Use ShoppingList.items.destroyAll() instead.
            "prototype$__delete__items": {
              url: urlBase + "/ShoppingLists/:id/items",
              method: "DELETE",
            },

            // INTERNAL. Use ShoppingList.items.count() instead.
            "prototype$__count__items": {
              url: urlBase + "/ShoppingLists/:id/items/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#create
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ShoppingLists",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#patchOrCreate
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/ShoppingLists",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#replaceOrCreate
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/ShoppingLists/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#upsertWithWhere
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/ShoppingLists/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#exists
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ShoppingLists/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#findById
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ShoppingLists/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#replaceById
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/ShoppingLists/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#find
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ShoppingLists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#findOne
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ShoppingLists/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#updateAll
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/ShoppingLists/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#deleteById
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ShoppingLists/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#count
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ShoppingLists/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#prototype$patchAttributes
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/ShoppingLists/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#createChangeStream
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ShoppingLists/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#createMany
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ShoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Household.shoppingLists.findById() instead.
            "::findById::Household::shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/shoppingLists/:fk",
              method: "GET",
            },

            // INTERNAL. Use Household.shoppingLists.destroyById() instead.
            "::destroyById::Household::shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/shoppingLists/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Household.shoppingLists.updateById() instead.
            "::updateById::Household::shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/shoppingLists/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Household.shoppingLists() instead.
            "::get::Household::shoppingLists": {
              isArray: true,
              url: urlBase + "/Households/:id/shoppingLists",
              method: "GET",
            },

            // INTERNAL. Use Household.shoppingLists.create() instead.
            "::create::Household::shoppingLists": {
              url: urlBase + "/Households/:id/shoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Household.shoppingLists.createMany() instead.
            "::createMany::Household::shoppingLists": {
              isArray: true,
              url: urlBase + "/Households/:id/shoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Household.shoppingLists.destroyAll() instead.
            "::delete::Household::shoppingLists": {
              url: urlBase + "/Households/:id/shoppingLists",
              method: "DELETE",
            },

            // INTERNAL. Use Household.shoppingLists.count() instead.
            "::count::Household::shoppingLists": {
              url: urlBase + "/Households/:id/shoppingLists/count",
              method: "GET",
            },

            // INTERNAL. Use Item.shoppingList() instead.
            "::get::Item::shoppingList": {
              url: urlBase + "/Items/:id/shoppingList",
              method: "GET",
            },

            // INTERNAL. Use Tenant.shoppingLists.findById() instead.
            "::findById::Tenant::shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/shoppingLists/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.shoppingLists.destroyById() instead.
            "::destroyById::Tenant::shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/shoppingLists/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.shoppingLists.updateById() instead.
            "::updateById::Tenant::shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/shoppingLists/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.shoppingLists() instead.
            "::get::Tenant::shoppingLists": {
              isArray: true,
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "GET",
            },

            // INTERNAL. Use Tenant.shoppingLists.create() instead.
            "::create::Tenant::shoppingLists": {
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Tenant.shoppingLists.createMany() instead.
            "::createMany::Tenant::shoppingLists": {
              isArray: true,
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Tenant.shoppingLists.destroyAll() instead.
            "::delete::Tenant::shoppingLists": {
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.shoppingLists.count() instead.
            "::count::Tenant::shoppingLists": {
              url: urlBase + "/Tenants/:id/shoppingLists/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#upsert
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#updateOrCreate
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#patchOrCreateWithWhere
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#update
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#destroyById
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#removeById
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#prototype$updateAttributes
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ShoppingList#modelName
        * @propertyOf lbServices.ShoppingList
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ShoppingList`.
        */
        R.modelName = "ShoppingList";


            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#household
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Fetches belongsTo relation household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R.household = function() {
          var TargetResource = $injector.get("Household");
          var action = TargetResource["::get::ShoppingList::household"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ShoppingList.items
     * @header lbServices.ShoppingList.items
     * @object
     * @description
     *
     * The object `ShoppingList.items` groups methods
     * manipulating `Item` instances related to `ShoppingList`.
     *
     * Call {@link lbServices.ShoppingList#items ShoppingList.items()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#items
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Queries items of ShoppingList.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::get::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#count
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Counts items of ShoppingList.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.items.count = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::count::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#create
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Creates a new instance in items of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.create = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::create::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#createMany
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Creates a new instance in items of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.createMany = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::createMany::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#destroyAll
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Deletes all items of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.items.destroyAll = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::delete::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#destroyById
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Delete a related item by id for items.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for items
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.items.destroyById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::destroyById::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#findById
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Find a related item by id for items.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for items
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.findById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::findById::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList.items#updateById
             * @methodOf lbServices.ShoppingList.items
             *
             * @description
             *
             * Update a related item by id for items.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `fk` – `{*}` - Foreign key for items
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.updateById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::updateById::ShoppingList::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShoppingList#tenant
             * @methodOf lbServices.ShoppingList
             *
             * @description
             *
             * Fetches belongsTo relation tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ShoppingList id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenant = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::ShoppingList::tenant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Item
 * @header lbServices.Item
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Item` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Item",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Items/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Item.shoppingList() instead.
            "prototype$__get__shoppingList": {
              url: urlBase + "/Items/:id/shoppingList",
              method: "GET",
            },

            // INTERNAL. Use Item.tenant() instead.
            "prototype$__get__tenant": {
              url: urlBase + "/Items/:id/tenant",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#create
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Items",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#patchOrCreate
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Items",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#replaceOrCreate
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Items/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#upsertWithWhere
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Items/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#exists
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Items/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#findById
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Items/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#replaceById
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Items/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#find
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Items",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#findOne
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Items/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#updateAll
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Items/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#deleteById
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Items/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#count
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Items/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#prototype$patchAttributes
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Item id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Items/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#createChangeStream
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Items/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Item#createMany
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Items",
              method: "POST",
            },

            // INTERNAL. Use ShoppingList.items.findById() instead.
            "::findById::ShoppingList::items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ShoppingLists/:id/items/:fk",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.items.destroyById() instead.
            "::destroyById::ShoppingList::items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ShoppingLists/:id/items/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ShoppingList.items.updateById() instead.
            "::updateById::ShoppingList::items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ShoppingLists/:id/items/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ShoppingList.items() instead.
            "::get::ShoppingList::items": {
              isArray: true,
              url: urlBase + "/ShoppingLists/:id/items",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.items.create() instead.
            "::create::ShoppingList::items": {
              url: urlBase + "/ShoppingLists/:id/items",
              method: "POST",
            },

            // INTERNAL. Use ShoppingList.items.createMany() instead.
            "::createMany::ShoppingList::items": {
              isArray: true,
              url: urlBase + "/ShoppingLists/:id/items",
              method: "POST",
            },

            // INTERNAL. Use ShoppingList.items.destroyAll() instead.
            "::delete::ShoppingList::items": {
              url: urlBase + "/ShoppingLists/:id/items",
              method: "DELETE",
            },

            // INTERNAL. Use ShoppingList.items.count() instead.
            "::count::ShoppingList::items": {
              url: urlBase + "/ShoppingLists/:id/items/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.items.findById() instead.
            "::findById::Tenant::items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/items/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.items.destroyById() instead.
            "::destroyById::Tenant::items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/items/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.items.updateById() instead.
            "::updateById::Tenant::items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/items/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.items() instead.
            "::get::Tenant::items": {
              isArray: true,
              url: urlBase + "/Tenants/:id/items",
              method: "GET",
            },

            // INTERNAL. Use Tenant.items.create() instead.
            "::create::Tenant::items": {
              url: urlBase + "/Tenants/:id/items",
              method: "POST",
            },

            // INTERNAL. Use Tenant.items.createMany() instead.
            "::createMany::Tenant::items": {
              isArray: true,
              url: urlBase + "/Tenants/:id/items",
              method: "POST",
            },

            // INTERNAL. Use Tenant.items.destroyAll() instead.
            "::delete::Tenant::items": {
              url: urlBase + "/Tenants/:id/items",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.items.count() instead.
            "::count::Tenant::items": {
              url: urlBase + "/Tenants/:id/items/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Item#upsert
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Item#updateOrCreate
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Item#patchOrCreateWithWhere
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Item#update
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Item#destroyById
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Item#removeById
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Item#prototype$updateAttributes
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Item id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Item#modelName
        * @propertyOf lbServices.Item
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Item`.
        */
        R.modelName = "Item";


            /**
             * @ngdoc method
             * @name lbServices.Item#shoppingList
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Fetches belongsTo relation shoppingList.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Item id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingList = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::get::Item::shoppingList"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Item#tenant
             * @methodOf lbServices.Item
             *
             * @description
             *
             * Fetches belongsTo relation tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Item id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenant = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::Item::tenant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Fridge
 * @header lbServices.Fridge
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fridge` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Fridge",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Fridges/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Fridge.household() instead.
            "prototype$__get__household": {
              url: urlBase + "/Fridges/:id/household",
              method: "GET",
            },

            // INTERNAL. Use Fridge.postIts.findById() instead.
            "prototype$__findById__postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Fridges/:id/postIts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Fridge.postIts.destroyById() instead.
            "prototype$__destroyById__postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Fridges/:id/postIts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Fridge.postIts.updateById() instead.
            "prototype$__updateById__postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Fridges/:id/postIts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Fridge.tenant() instead.
            "prototype$__get__tenant": {
              url: urlBase + "/Fridges/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use Fridge.postIts() instead.
            "prototype$__get__postIts": {
              isArray: true,
              url: urlBase + "/Fridges/:id/postIts",
              method: "GET",
            },

            // INTERNAL. Use Fridge.postIts.create() instead.
            "prototype$__create__postIts": {
              url: urlBase + "/Fridges/:id/postIts",
              method: "POST",
            },

            // INTERNAL. Use Fridge.postIts.destroyAll() instead.
            "prototype$__delete__postIts": {
              url: urlBase + "/Fridges/:id/postIts",
              method: "DELETE",
            },

            // INTERNAL. Use Fridge.postIts.count() instead.
            "prototype$__count__postIts": {
              url: urlBase + "/Fridges/:id/postIts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#create
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Fridges",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#patchOrCreate
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Fridges",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#replaceOrCreate
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Fridges/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#upsertWithWhere
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Fridges/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#exists
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Fridges/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#findById
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Fridges/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#replaceById
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Fridges/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#find
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Fridges",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#findOne
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Fridges/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#updateAll
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Fridges/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#deleteById
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Fridges/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#count
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Fridges/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#prototype$patchAttributes
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Fridges/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#createChangeStream
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Fridges/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fridge#createMany
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Fridges",
              method: "POST",
            },

            // INTERNAL. Use Household.fridges() instead.
            "::get::Household::fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "GET",
            },

            // INTERNAL. Use Household.fridges.create() instead.
            "::create::Household::fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "POST",
            },

            // INTERNAL. Use Household.fridges.createMany() instead.
            "::createMany::Household::fridges": {
              isArray: true,
              url: urlBase + "/Households/:id/fridges",
              method: "POST",
            },

            // INTERNAL. Use Household.fridges.update() instead.
            "::update::Household::fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "PUT",
            },

            // INTERNAL. Use Household.fridges.destroy() instead.
            "::destroy::Household::fridges": {
              url: urlBase + "/Households/:id/fridges",
              method: "DELETE",
            },

            // INTERNAL. Use PostIt.fridge() instead.
            "::get::PostIt::fridge": {
              url: urlBase + "/PostIts/:id/fridge",
              method: "GET",
            },

            // INTERNAL. Use Tenant.fridges.findById() instead.
            "::findById::Tenant::fridges": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/fridges/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.fridges.destroyById() instead.
            "::destroyById::Tenant::fridges": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/fridges/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.fridges.updateById() instead.
            "::updateById::Tenant::fridges": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/fridges/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.fridges() instead.
            "::get::Tenant::fridges": {
              isArray: true,
              url: urlBase + "/Tenants/:id/fridges",
              method: "GET",
            },

            // INTERNAL. Use Tenant.fridges.create() instead.
            "::create::Tenant::fridges": {
              url: urlBase + "/Tenants/:id/fridges",
              method: "POST",
            },

            // INTERNAL. Use Tenant.fridges.createMany() instead.
            "::createMany::Tenant::fridges": {
              isArray: true,
              url: urlBase + "/Tenants/:id/fridges",
              method: "POST",
            },

            // INTERNAL. Use Tenant.fridges.destroyAll() instead.
            "::delete::Tenant::fridges": {
              url: urlBase + "/Tenants/:id/fridges",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.fridges.count() instead.
            "::count::Tenant::fridges": {
              url: urlBase + "/Tenants/:id/fridges/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Fridge#upsert
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Fridge#updateOrCreate
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Fridge#patchOrCreateWithWhere
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Fridge#update
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Fridge#destroyById
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Fridge#removeById
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Fridge#prototype$updateAttributes
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Fridge#modelName
        * @propertyOf lbServices.Fridge
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Fridge`.
        */
        R.modelName = "Fridge";


            /**
             * @ngdoc method
             * @name lbServices.Fridge#household
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Fetches belongsTo relation household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R.household = function() {
          var TargetResource = $injector.get("Household");
          var action = TargetResource["::get::Fridge::household"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Fridge.postIts
     * @header lbServices.Fridge.postIts
     * @object
     * @description
     *
     * The object `Fridge.postIts` groups methods
     * manipulating `PostIt` instances related to `Fridge`.
     *
     * Call {@link lbServices.Fridge#postIts Fridge.postIts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Fridge#postIts
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Queries postIts of Fridge.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::get::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#count
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Counts postIts of Fridge.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.postIts.count = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::count::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#create
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Creates a new instance in postIts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.create = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::create::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#createMany
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Creates a new instance in postIts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.createMany = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::createMany::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#destroyAll
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Deletes all postIts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.postIts.destroyAll = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::delete::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#destroyById
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Delete a related item by id for postIts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for postIts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.postIts.destroyById = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::destroyById::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#findById
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Find a related item by id for postIts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for postIts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.findById = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::findById::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge.postIts#updateById
             * @methodOf lbServices.Fridge.postIts
             *
             * @description
             *
             * Update a related item by id for postIts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `fk` – `{*}` - Foreign key for postIts
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.updateById = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::updateById::Fridge::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Fridge#tenant
             * @methodOf lbServices.Fridge
             *
             * @description
             *
             * Fetches belongsTo relation tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Fridge id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenant = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::Fridge::tenant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.PostIt
 * @header lbServices.PostIt
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PostIt` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "PostIt",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/PostIts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use PostIt.fridge() instead.
            "prototype$__get__fridge": {
              url: urlBase + "/PostIts/:id/fridge",
              method: "GET",
            },

            // INTERNAL. Use PostIt.tenant() instead.
            "prototype$__get__tenant": {
              url: urlBase + "/PostIts/:id/tenant",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#create
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/PostIts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#patchOrCreate
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/PostIts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#replaceOrCreate
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/PostIts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#upsertWithWhere
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/PostIts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#exists
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/PostIts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#findById
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/PostIts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#replaceById
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/PostIts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#find
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/PostIts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#findOne
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/PostIts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#updateAll
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/PostIts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#deleteById
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/PostIts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#count
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/PostIts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#prototype$patchAttributes
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostIt id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/PostIts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#createChangeStream
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/PostIts/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostIt#createMany
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/PostIts",
              method: "POST",
            },

            // INTERNAL. Use Fridge.postIts.findById() instead.
            "::findById::Fridge::postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Fridges/:id/postIts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Fridge.postIts.destroyById() instead.
            "::destroyById::Fridge::postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Fridges/:id/postIts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Fridge.postIts.updateById() instead.
            "::updateById::Fridge::postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Fridges/:id/postIts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Fridge.postIts() instead.
            "::get::Fridge::postIts": {
              isArray: true,
              url: urlBase + "/Fridges/:id/postIts",
              method: "GET",
            },

            // INTERNAL. Use Fridge.postIts.create() instead.
            "::create::Fridge::postIts": {
              url: urlBase + "/Fridges/:id/postIts",
              method: "POST",
            },

            // INTERNAL. Use Fridge.postIts.createMany() instead.
            "::createMany::Fridge::postIts": {
              isArray: true,
              url: urlBase + "/Fridges/:id/postIts",
              method: "POST",
            },

            // INTERNAL. Use Fridge.postIts.destroyAll() instead.
            "::delete::Fridge::postIts": {
              url: urlBase + "/Fridges/:id/postIts",
              method: "DELETE",
            },

            // INTERNAL. Use Fridge.postIts.count() instead.
            "::count::Fridge::postIts": {
              url: urlBase + "/Fridges/:id/postIts/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.postIts.findById() instead.
            "::findById::Tenant::postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/postIts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.postIts.destroyById() instead.
            "::destroyById::Tenant::postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/postIts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.postIts.updateById() instead.
            "::updateById::Tenant::postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/postIts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.postIts() instead.
            "::get::Tenant::postIts": {
              isArray: true,
              url: urlBase + "/Tenants/:id/postIts",
              method: "GET",
            },

            // INTERNAL. Use Tenant.postIts.create() instead.
            "::create::Tenant::postIts": {
              url: urlBase + "/Tenants/:id/postIts",
              method: "POST",
            },

            // INTERNAL. Use Tenant.postIts.createMany() instead.
            "::createMany::Tenant::postIts": {
              isArray: true,
              url: urlBase + "/Tenants/:id/postIts",
              method: "POST",
            },

            // INTERNAL. Use Tenant.postIts.destroyAll() instead.
            "::delete::Tenant::postIts": {
              url: urlBase + "/Tenants/:id/postIts",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.postIts.count() instead.
            "::count::Tenant::postIts": {
              url: urlBase + "/Tenants/:id/postIts/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.PostIt#upsert
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PostIt#updateOrCreate
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PostIt#patchOrCreateWithWhere
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.PostIt#update
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.PostIt#destroyById
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PostIt#removeById
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PostIt#prototype$updateAttributes
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostIt id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.PostIt#modelName
        * @propertyOf lbServices.PostIt
        * @description
        * The name of the model represented by this $resource,
        * i.e. `PostIt`.
        */
        R.modelName = "PostIt";


            /**
             * @ngdoc method
             * @name lbServices.PostIt#fridge
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Fetches belongsTo relation fridge.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostIt id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridge = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::get::PostIt::fridge"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostIt#tenant
             * @methodOf lbServices.PostIt
             *
             * @description
             *
             * Fetches belongsTo relation tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostIt id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenant = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::PostIt::tenant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Timetable
 * @header lbServices.Timetable
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Timetable` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Timetable",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Timetables/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Timetable.household() instead.
            "prototype$__get__household": {
              url: urlBase + "/Timetables/:id/household",
              method: "GET",
            },

            // INTERNAL. Use Timetable.entries.findById() instead.
            "prototype$__findById__entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timetables/:id/entries/:fk",
              method: "GET",
            },

            // INTERNAL. Use Timetable.entries.destroyById() instead.
            "prototype$__destroyById__entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timetables/:id/entries/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Timetable.entries.updateById() instead.
            "prototype$__updateById__entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timetables/:id/entries/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Timetable.tenant() instead.
            "prototype$__get__tenant": {
              url: urlBase + "/Timetables/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use Timetable.entries() instead.
            "prototype$__get__entries": {
              isArray: true,
              url: urlBase + "/Timetables/:id/entries",
              method: "GET",
            },

            // INTERNAL. Use Timetable.entries.create() instead.
            "prototype$__create__entries": {
              url: urlBase + "/Timetables/:id/entries",
              method: "POST",
            },

            // INTERNAL. Use Timetable.entries.destroyAll() instead.
            "prototype$__delete__entries": {
              url: urlBase + "/Timetables/:id/entries",
              method: "DELETE",
            },

            // INTERNAL. Use Timetable.entries.count() instead.
            "prototype$__count__entries": {
              url: urlBase + "/Timetables/:id/entries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#create
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Timetables",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#patchOrCreate
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Timetables",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#replaceOrCreate
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Timetables/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#upsertWithWhere
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Timetables/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#exists
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Timetables/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#findById
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Timetables/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#replaceById
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Timetables/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#find
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Timetables",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#findOne
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Timetables/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#updateAll
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Timetables/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#deleteById
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Timetables/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#count
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Timetables/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#prototype$patchAttributes
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Timetables/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#createChangeStream
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Timetables/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timetable#createMany
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Timetables",
              method: "POST",
            },

            // INTERNAL. Use Household.timetables.findById() instead.
            "::findById::Household::timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/timetables/:fk",
              method: "GET",
            },

            // INTERNAL. Use Household.timetables.destroyById() instead.
            "::destroyById::Household::timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/timetables/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Household.timetables.updateById() instead.
            "::updateById::Household::timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/timetables/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Household.timetables() instead.
            "::get::Household::timetables": {
              isArray: true,
              url: urlBase + "/Households/:id/timetables",
              method: "GET",
            },

            // INTERNAL. Use Household.timetables.create() instead.
            "::create::Household::timetables": {
              url: urlBase + "/Households/:id/timetables",
              method: "POST",
            },

            // INTERNAL. Use Household.timetables.createMany() instead.
            "::createMany::Household::timetables": {
              isArray: true,
              url: urlBase + "/Households/:id/timetables",
              method: "POST",
            },

            // INTERNAL. Use Household.timetables.destroyAll() instead.
            "::delete::Household::timetables": {
              url: urlBase + "/Households/:id/timetables",
              method: "DELETE",
            },

            // INTERNAL. Use Household.timetables.count() instead.
            "::count::Household::timetables": {
              url: urlBase + "/Households/:id/timetables/count",
              method: "GET",
            },

            // INTERNAL. Use Entry.timetable() instead.
            "::get::Entry::timetable": {
              url: urlBase + "/Entries/:id/timetable",
              method: "GET",
            },

            // INTERNAL. Use Tenant.timetables.findById() instead.
            "::findById::Tenant::timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/timetables/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.timetables.destroyById() instead.
            "::destroyById::Tenant::timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/timetables/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.timetables.updateById() instead.
            "::updateById::Tenant::timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/timetables/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.timetables() instead.
            "::get::Tenant::timetables": {
              isArray: true,
              url: urlBase + "/Tenants/:id/timetables",
              method: "GET",
            },

            // INTERNAL. Use Tenant.timetables.create() instead.
            "::create::Tenant::timetables": {
              url: urlBase + "/Tenants/:id/timetables",
              method: "POST",
            },

            // INTERNAL. Use Tenant.timetables.createMany() instead.
            "::createMany::Tenant::timetables": {
              isArray: true,
              url: urlBase + "/Tenants/:id/timetables",
              method: "POST",
            },

            // INTERNAL. Use Tenant.timetables.destroyAll() instead.
            "::delete::Tenant::timetables": {
              url: urlBase + "/Tenants/:id/timetables",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.timetables.count() instead.
            "::count::Tenant::timetables": {
              url: urlBase + "/Tenants/:id/timetables/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Timetable#upsert
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Timetable#updateOrCreate
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Timetable#patchOrCreateWithWhere
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Timetable#update
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Timetable#destroyById
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Timetable#removeById
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Timetable#prototype$updateAttributes
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Timetable#modelName
        * @propertyOf lbServices.Timetable
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Timetable`.
        */
        R.modelName = "Timetable";


            /**
             * @ngdoc method
             * @name lbServices.Timetable#household
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Fetches belongsTo relation household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R.household = function() {
          var TargetResource = $injector.get("Household");
          var action = TargetResource["::get::Timetable::household"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Timetable.entries
     * @header lbServices.Timetable.entries
     * @object
     * @description
     *
     * The object `Timetable.entries` groups methods
     * manipulating `Entry` instances related to `Timetable`.
     *
     * Call {@link lbServices.Timetable#entries Timetable.entries()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Timetable#entries
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Queries entries of Timetable.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::get::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#count
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Counts entries of Timetable.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.entries.count = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::count::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#create
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Creates a new instance in entries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.create = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::create::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#createMany
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Creates a new instance in entries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.createMany = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::createMany::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#destroyAll
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Deletes all entries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.entries.destroyAll = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::delete::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#destroyById
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Delete a related item by id for entries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for entries
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.entries.destroyById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::destroyById::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#findById
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Find a related item by id for entries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for entries
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.findById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::findById::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable.entries#updateById
             * @methodOf lbServices.Timetable.entries
             *
             * @description
             *
             * Update a related item by id for entries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `fk` – `{*}` - Foreign key for entries
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.updateById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::updateById::Timetable::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timetable#tenant
             * @methodOf lbServices.Timetable
             *
             * @description
             *
             * Fetches belongsTo relation tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Timetable id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenant = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::Timetable::tenant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Entry
 * @header lbServices.Entry
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Entry` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Entry",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Entries/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Entry.timetable() instead.
            "prototype$__get__timetable": {
              url: urlBase + "/Entries/:id/timetable",
              method: "GET",
            },

            // INTERNAL. Use Entry.tenant() instead.
            "prototype$__get__tenant": {
              url: urlBase + "/Entries/:id/tenant",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#create
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Entries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#patchOrCreate
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Entries",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#replaceOrCreate
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Entries/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#upsertWithWhere
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Entries/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#exists
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Entries/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#findById
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Entries/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#replaceById
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Entries/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#find
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Entries",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#findOne
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Entries/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#updateAll
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Entries/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#deleteById
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Entries/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#count
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Entries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#prototype$patchAttributes
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Entry id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Entries/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#createChangeStream
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Entries/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Entry#createMany
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Entries",
              method: "POST",
            },

            // INTERNAL. Use Timetable.entries.findById() instead.
            "::findById::Timetable::entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timetables/:id/entries/:fk",
              method: "GET",
            },

            // INTERNAL. Use Timetable.entries.destroyById() instead.
            "::destroyById::Timetable::entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timetables/:id/entries/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Timetable.entries.updateById() instead.
            "::updateById::Timetable::entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timetables/:id/entries/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Timetable.entries() instead.
            "::get::Timetable::entries": {
              isArray: true,
              url: urlBase + "/Timetables/:id/entries",
              method: "GET",
            },

            // INTERNAL. Use Timetable.entries.create() instead.
            "::create::Timetable::entries": {
              url: urlBase + "/Timetables/:id/entries",
              method: "POST",
            },

            // INTERNAL. Use Timetable.entries.createMany() instead.
            "::createMany::Timetable::entries": {
              isArray: true,
              url: urlBase + "/Timetables/:id/entries",
              method: "POST",
            },

            // INTERNAL. Use Timetable.entries.destroyAll() instead.
            "::delete::Timetable::entries": {
              url: urlBase + "/Timetables/:id/entries",
              method: "DELETE",
            },

            // INTERNAL. Use Timetable.entries.count() instead.
            "::count::Timetable::entries": {
              url: urlBase + "/Timetables/:id/entries/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.entries.findById() instead.
            "::findById::Tenant::entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/entries/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.entries.destroyById() instead.
            "::destroyById::Tenant::entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/entries/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.entries.updateById() instead.
            "::updateById::Tenant::entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/entries/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.entries() instead.
            "::get::Tenant::entries": {
              isArray: true,
              url: urlBase + "/Tenants/:id/entries",
              method: "GET",
            },

            // INTERNAL. Use Tenant.entries.create() instead.
            "::create::Tenant::entries": {
              url: urlBase + "/Tenants/:id/entries",
              method: "POST",
            },

            // INTERNAL. Use Tenant.entries.createMany() instead.
            "::createMany::Tenant::entries": {
              isArray: true,
              url: urlBase + "/Tenants/:id/entries",
              method: "POST",
            },

            // INTERNAL. Use Tenant.entries.destroyAll() instead.
            "::delete::Tenant::entries": {
              url: urlBase + "/Tenants/:id/entries",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.entries.count() instead.
            "::count::Tenant::entries": {
              url: urlBase + "/Tenants/:id/entries/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Entry#upsert
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Entry#updateOrCreate
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Entry#patchOrCreateWithWhere
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Entry#update
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Entry#destroyById
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Entry#removeById
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Entry#prototype$updateAttributes
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Entry id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Entry#modelName
        * @propertyOf lbServices.Entry
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Entry`.
        */
        R.modelName = "Entry";


            /**
             * @ngdoc method
             * @name lbServices.Entry#timetable
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Fetches belongsTo relation timetable.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Entry id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetable = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::get::Entry::timetable"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Entry#tenant
             * @methodOf lbServices.Entry
             *
             * @description
             *
             * Fetches belongsTo relation tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Entry id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R.tenant = function() {
          var TargetResource = $injector.get("Tenant");
          var action = TargetResource["::get::Entry::tenant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Test
 * @header lbServices.Test
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Test` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Test",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/tests/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Test#create
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/tests",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#patchOrCreate
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/tests",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#replaceOrCreate
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/tests/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#upsertWithWhere
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/tests/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#exists
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/tests/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#findById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/tests/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#replaceById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/tests/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#find
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/tests",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#findOne
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/tests/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#updateAll
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/tests/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#deleteById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/tests/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#count
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/tests/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#prototype$patchAttributes
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - test id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/tests/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#createChangeStream
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/tests/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#createMany
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/tests",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Test#upsert
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Test#updateOrCreate
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Test#patchOrCreateWithWhere
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Test#update
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Test#destroyById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Test#removeById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Test#prototype$updateAttributes
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - test id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Test#modelName
        * @propertyOf lbServices.Test
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Test`.
        */
        R.modelName = "Test";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Tenant
 * @header lbServices.Tenant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tenant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Tenant",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Tenants/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Tenant.household() instead.
            "prototype$__get__household": {
              url: urlBase + "/Tenants/:id/household",
              method: "GET",
            },

            // INTERNAL. Use Tenant.timetables.findById() instead.
            "prototype$__findById__timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/timetables/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.timetables.destroyById() instead.
            "prototype$__destroyById__timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/timetables/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.timetables.updateById() instead.
            "prototype$__updateById__timetables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/timetables/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.fridges.findById() instead.
            "prototype$__findById__fridges": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/fridges/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.fridges.destroyById() instead.
            "prototype$__destroyById__fridges": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/fridges/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.fridges.updateById() instead.
            "prototype$__updateById__fridges": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/fridges/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.shoppingLists.findById() instead.
            "prototype$__findById__shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/shoppingLists/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.shoppingLists.destroyById() instead.
            "prototype$__destroyById__shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/shoppingLists/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.shoppingLists.updateById() instead.
            "prototype$__updateById__shoppingLists": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/shoppingLists/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.items.findById() instead.
            "prototype$__findById__items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/items/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.items.destroyById() instead.
            "prototype$__destroyById__items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/items/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.items.updateById() instead.
            "prototype$__updateById__items": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/items/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.postIts.findById() instead.
            "prototype$__findById__postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/postIts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.postIts.destroyById() instead.
            "prototype$__destroyById__postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/postIts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.postIts.updateById() instead.
            "prototype$__updateById__postIts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/postIts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.entries.findById() instead.
            "prototype$__findById__entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/entries/:fk",
              method: "GET",
            },

            // INTERNAL. Use Tenant.entries.destroyById() instead.
            "prototype$__destroyById__entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/entries/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.entries.updateById() instead.
            "prototype$__updateById__entries": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Tenants/:id/entries/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Tenant.timetables() instead.
            "prototype$__get__timetables": {
              isArray: true,
              url: urlBase + "/Tenants/:id/timetables",
              method: "GET",
            },

            // INTERNAL. Use Tenant.timetables.create() instead.
            "prototype$__create__timetables": {
              url: urlBase + "/Tenants/:id/timetables",
              method: "POST",
            },

            // INTERNAL. Use Tenant.timetables.destroyAll() instead.
            "prototype$__delete__timetables": {
              url: urlBase + "/Tenants/:id/timetables",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.timetables.count() instead.
            "prototype$__count__timetables": {
              url: urlBase + "/Tenants/:id/timetables/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.fridges() instead.
            "prototype$__get__fridges": {
              isArray: true,
              url: urlBase + "/Tenants/:id/fridges",
              method: "GET",
            },

            // INTERNAL. Use Tenant.fridges.create() instead.
            "prototype$__create__fridges": {
              url: urlBase + "/Tenants/:id/fridges",
              method: "POST",
            },

            // INTERNAL. Use Tenant.fridges.destroyAll() instead.
            "prototype$__delete__fridges": {
              url: urlBase + "/Tenants/:id/fridges",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.fridges.count() instead.
            "prototype$__count__fridges": {
              url: urlBase + "/Tenants/:id/fridges/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.shoppingLists() instead.
            "prototype$__get__shoppingLists": {
              isArray: true,
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "GET",
            },

            // INTERNAL. Use Tenant.shoppingLists.create() instead.
            "prototype$__create__shoppingLists": {
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "POST",
            },

            // INTERNAL. Use Tenant.shoppingLists.destroyAll() instead.
            "prototype$__delete__shoppingLists": {
              url: urlBase + "/Tenants/:id/shoppingLists",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.shoppingLists.count() instead.
            "prototype$__count__shoppingLists": {
              url: urlBase + "/Tenants/:id/shoppingLists/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.items() instead.
            "prototype$__get__items": {
              isArray: true,
              url: urlBase + "/Tenants/:id/items",
              method: "GET",
            },

            // INTERNAL. Use Tenant.items.create() instead.
            "prototype$__create__items": {
              url: urlBase + "/Tenants/:id/items",
              method: "POST",
            },

            // INTERNAL. Use Tenant.items.destroyAll() instead.
            "prototype$__delete__items": {
              url: urlBase + "/Tenants/:id/items",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.items.count() instead.
            "prototype$__count__items": {
              url: urlBase + "/Tenants/:id/items/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.postIts() instead.
            "prototype$__get__postIts": {
              isArray: true,
              url: urlBase + "/Tenants/:id/postIts",
              method: "GET",
            },

            // INTERNAL. Use Tenant.postIts.create() instead.
            "prototype$__create__postIts": {
              url: urlBase + "/Tenants/:id/postIts",
              method: "POST",
            },

            // INTERNAL. Use Tenant.postIts.destroyAll() instead.
            "prototype$__delete__postIts": {
              url: urlBase + "/Tenants/:id/postIts",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.postIts.count() instead.
            "prototype$__count__postIts": {
              url: urlBase + "/Tenants/:id/postIts/count",
              method: "GET",
            },

            // INTERNAL. Use Tenant.entries() instead.
            "prototype$__get__entries": {
              isArray: true,
              url: urlBase + "/Tenants/:id/entries",
              method: "GET",
            },

            // INTERNAL. Use Tenant.entries.create() instead.
            "prototype$__create__entries": {
              url: urlBase + "/Tenants/:id/entries",
              method: "POST",
            },

            // INTERNAL. Use Tenant.entries.destroyAll() instead.
            "prototype$__delete__entries": {
              url: urlBase + "/Tenants/:id/entries",
              method: "DELETE",
            },

            // INTERNAL. Use Tenant.entries.count() instead.
            "prototype$__count__entries": {
              url: urlBase + "/Tenants/:id/entries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#create
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Tenants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#patchOrCreate
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Tenants",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#replaceOrCreate
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Tenants/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#upsertWithWhere
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Tenants/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#exists
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Tenants/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#findById
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Tenants/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#replaceById
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Tenants/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#find
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Tenants",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#findOne
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Tenants/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#updateAll
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Tenants/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#deleteById
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Tenants/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#count
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Tenants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#prototype$patchAttributes
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Tenants/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#createChangeStream
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Tenants/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#login
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Tenants/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#logout
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Tenants/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#prototype$verify
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Tenants/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#confirm
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Tenants/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#resetPassword
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Tenants/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#changePassword
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Tenants/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#setPassword
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Tenants/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#createMany
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Tenants",
              method: "POST",
            },

            // INTERNAL. Use Household.tenants.findById() instead.
            "::findById::Household::tenants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/tenants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Household.tenants.destroyById() instead.
            "::destroyById::Household::tenants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/tenants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Household.tenants.updateById() instead.
            "::updateById::Household::tenants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Households/:id/tenants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Household.tenants() instead.
            "::get::Household::tenants": {
              isArray: true,
              url: urlBase + "/Households/:id/tenants",
              method: "GET",
            },

            // INTERNAL. Use Household.tenants.create() instead.
            "::create::Household::tenants": {
              url: urlBase + "/Households/:id/tenants",
              method: "POST",
            },

            // INTERNAL. Use Household.tenants.createMany() instead.
            "::createMany::Household::tenants": {
              isArray: true,
              url: urlBase + "/Households/:id/tenants",
              method: "POST",
            },

            // INTERNAL. Use Household.tenants.destroyAll() instead.
            "::delete::Household::tenants": {
              url: urlBase + "/Households/:id/tenants",
              method: "DELETE",
            },

            // INTERNAL. Use Household.tenants.count() instead.
            "::count::Household::tenants": {
              url: urlBase + "/Households/:id/tenants/count",
              method: "GET",
            },

            // INTERNAL. Use ShoppingList.tenant() instead.
            "::get::ShoppingList::tenant": {
              url: urlBase + "/ShoppingLists/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use Item.tenant() instead.
            "::get::Item::tenant": {
              url: urlBase + "/Items/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use Fridge.tenant() instead.
            "::get::Fridge::tenant": {
              url: urlBase + "/Fridges/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use PostIt.tenant() instead.
            "::get::PostIt::tenant": {
              url: urlBase + "/PostIts/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use Timetable.tenant() instead.
            "::get::Timetable::tenant": {
              url: urlBase + "/Timetables/:id/tenant",
              method: "GET",
            },

            // INTERNAL. Use Entry.tenant() instead.
            "::get::Entry::tenant": {
              url: urlBase + "/Entries/:id/tenant",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tenant#getCurrent
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Tenants" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Tenant#upsert
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Tenant#updateOrCreate
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Tenant#patchOrCreateWithWhere
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Tenant#update
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Tenant#destroyById
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Tenant#removeById
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Tenant#prototype$updateAttributes
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tenant` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Tenant#getCachedCurrent
         * @methodOf lbServices.Tenant
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Tenant#login} or
         * {@link lbServices.Tenant#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Tenant instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Tenant#isAuthenticated
         * @methodOf lbServices.Tenant
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Tenant#getCurrentId
         * @methodOf lbServices.Tenant
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Tenant#modelName
        * @propertyOf lbServices.Tenant
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Tenant`.
        */
        R.modelName = "Tenant";


            /**
             * @ngdoc method
             * @name lbServices.Tenant#household
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Fetches belongsTo relation household.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Household` object.)
             * </em>
             */
        R.household = function() {
          var TargetResource = $injector.get("Household");
          var action = TargetResource["::get::Tenant::household"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tenant.timetables
     * @header lbServices.Tenant.timetables
     * @object
     * @description
     *
     * The object `Tenant.timetables` groups methods
     * manipulating `Timetable` instances related to `Tenant`.
     *
     * Call {@link lbServices.Tenant#timetables Tenant.timetables()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Tenant#timetables
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Queries timetables of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::get::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#count
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Counts timetables of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.timetables.count = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::count::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#create
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Creates a new instance in timetables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.create = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::create::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#createMany
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Creates a new instance in timetables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.createMany = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::createMany::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#destroyAll
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Deletes all timetables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.timetables.destroyAll = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::delete::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#destroyById
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Delete a related item by id for timetables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for timetables
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.timetables.destroyById = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::destroyById::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#findById
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Find a related item by id for timetables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for timetables
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.findById = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::findById::Tenant::timetables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.timetables#updateById
             * @methodOf lbServices.Tenant.timetables
             *
             * @description
             *
             * Update a related item by id for timetables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `fk` – `{*}` - Foreign key for timetables
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timetable` object.)
             * </em>
             */
        R.timetables.updateById = function() {
          var TargetResource = $injector.get("Timetable");
          var action = TargetResource["::updateById::Tenant::timetables"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tenant.fridges
     * @header lbServices.Tenant.fridges
     * @object
     * @description
     *
     * The object `Tenant.fridges` groups methods
     * manipulating `Fridge` instances related to `Tenant`.
     *
     * Call {@link lbServices.Tenant#fridges Tenant.fridges()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Tenant#fridges
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Queries fridges of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::get::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#count
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Counts fridges of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.fridges.count = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::count::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#create
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Creates a new instance in fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.create = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::create::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#createMany
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Creates a new instance in fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.createMany = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::createMany::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#destroyAll
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Deletes all fridges of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.fridges.destroyAll = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::delete::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#destroyById
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Delete a related item by id for fridges.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for fridges
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.fridges.destroyById = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::destroyById::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#findById
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Find a related item by id for fridges.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for fridges
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.findById = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::findById::Tenant::fridges"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.fridges#updateById
             * @methodOf lbServices.Tenant.fridges
             *
             * @description
             *
             * Update a related item by id for fridges.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `fk` – `{*}` - Foreign key for fridges
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fridge` object.)
             * </em>
             */
        R.fridges.updateById = function() {
          var TargetResource = $injector.get("Fridge");
          var action = TargetResource["::updateById::Tenant::fridges"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tenant.shoppingLists
     * @header lbServices.Tenant.shoppingLists
     * @object
     * @description
     *
     * The object `Tenant.shoppingLists` groups methods
     * manipulating `ShoppingList` instances related to `Tenant`.
     *
     * Call {@link lbServices.Tenant#shoppingLists Tenant.shoppingLists()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Tenant#shoppingLists
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Queries shoppingLists of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::get::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#count
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Counts shoppingLists of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shoppingLists.count = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::count::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#create
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Creates a new instance in shoppingLists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.create = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::create::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#createMany
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Creates a new instance in shoppingLists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.createMany = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::createMany::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#destroyAll
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Deletes all shoppingLists of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shoppingLists.destroyAll = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::delete::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#destroyById
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Delete a related item by id for shoppingLists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for shoppingLists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shoppingLists.destroyById = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::destroyById::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#findById
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Find a related item by id for shoppingLists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for shoppingLists
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.findById = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::findById::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.shoppingLists#updateById
             * @methodOf lbServices.Tenant.shoppingLists
             *
             * @description
             *
             * Update a related item by id for shoppingLists.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `fk` – `{*}` - Foreign key for shoppingLists
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShoppingList` object.)
             * </em>
             */
        R.shoppingLists.updateById = function() {
          var TargetResource = $injector.get("ShoppingList");
          var action = TargetResource["::updateById::Tenant::shoppingLists"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tenant.items
     * @header lbServices.Tenant.items
     * @object
     * @description
     *
     * The object `Tenant.items` groups methods
     * manipulating `Item` instances related to `Tenant`.
     *
     * Call {@link lbServices.Tenant#items Tenant.items()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Tenant#items
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Queries items of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::get::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#count
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Counts items of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.items.count = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::count::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#create
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Creates a new instance in items of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.create = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::create::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#createMany
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Creates a new instance in items of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.createMany = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::createMany::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#destroyAll
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Deletes all items of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.items.destroyAll = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::delete::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#destroyById
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Delete a related item by id for items.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for items
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.items.destroyById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::destroyById::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#findById
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Find a related item by id for items.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for items
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.findById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::findById::Tenant::items"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.items#updateById
             * @methodOf lbServices.Tenant.items
             *
             * @description
             *
             * Update a related item by id for items.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `fk` – `{*}` - Foreign key for items
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Item` object.)
             * </em>
             */
        R.items.updateById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::updateById::Tenant::items"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tenant.postIts
     * @header lbServices.Tenant.postIts
     * @object
     * @description
     *
     * The object `Tenant.postIts` groups methods
     * manipulating `PostIt` instances related to `Tenant`.
     *
     * Call {@link lbServices.Tenant#postIts Tenant.postIts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Tenant#postIts
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Queries postIts of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::get::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#count
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Counts postIts of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.postIts.count = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::count::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#create
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Creates a new instance in postIts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.create = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::create::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#createMany
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Creates a new instance in postIts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.createMany = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::createMany::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#destroyAll
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Deletes all postIts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.postIts.destroyAll = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::delete::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#destroyById
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Delete a related item by id for postIts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for postIts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.postIts.destroyById = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::destroyById::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#findById
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Find a related item by id for postIts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for postIts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.findById = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::findById::Tenant::postIts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.postIts#updateById
             * @methodOf lbServices.Tenant.postIts
             *
             * @description
             *
             * Update a related item by id for postIts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `fk` – `{*}` - Foreign key for postIts
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostIt` object.)
             * </em>
             */
        R.postIts.updateById = function() {
          var TargetResource = $injector.get("PostIt");
          var action = TargetResource["::updateById::Tenant::postIts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tenant.entries
     * @header lbServices.Tenant.entries
     * @object
     * @description
     *
     * The object `Tenant.entries` groups methods
     * manipulating `Entry` instances related to `Tenant`.
     *
     * Call {@link lbServices.Tenant#entries Tenant.entries()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Tenant#entries
             * @methodOf lbServices.Tenant
             *
             * @description
             *
             * Queries entries of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::get::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#count
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Counts entries of Tenant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.entries.count = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::count::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#create
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Creates a new instance in entries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.create = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::create::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#createMany
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Creates a new instance in entries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.createMany = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::createMany::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#destroyAll
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Deletes all entries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.entries.destroyAll = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::delete::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#destroyById
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Delete a related item by id for entries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for entries
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.entries.destroyById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::destroyById::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#findById
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Find a related item by id for entries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for entries
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.findById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::findById::Tenant::entries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tenant.entries#updateById
             * @methodOf lbServices.Tenant.entries
             *
             * @description
             *
             * Update a related item by id for entries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tenant id
             *
             *  - `fk` – `{*}` - Foreign key for entries
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Entry` object.)
             * </em>
             */
        R.entries.updateById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::updateById::Tenant::entries"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
