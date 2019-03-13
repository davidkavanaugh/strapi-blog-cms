'use strict';

/**
 * Price.js controller
 *
 * @description: A set of functions called "actions" for managing `Price`.
 */

module.exports = {

  /**
   * Retrieve price records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.price.search(ctx.query);
    } else {
      return strapi.services.price.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a price record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.price.fetch(ctx.params);
  },

  /**
   * Count price records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.price.count(ctx.query);
  },

  /**
   * Create a/an price record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.price.add(ctx.request.body);
  },

  /**
   * Update a/an price record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.price.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an price record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.price.remove(ctx.params);
  }
};
