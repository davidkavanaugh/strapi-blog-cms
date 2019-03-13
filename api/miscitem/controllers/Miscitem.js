'use strict';

/**
 * Miscitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Miscitem`.
 */

module.exports = {

  /**
   * Retrieve miscitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.miscitem.search(ctx.query);
    } else {
      return strapi.services.miscitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a miscitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.miscitem.fetch(ctx.params);
  },

  /**
   * Count miscitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.miscitem.count(ctx.query);
  },

  /**
   * Create a/an miscitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.miscitem.add(ctx.request.body);
  },

  /**
   * Update a/an miscitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.miscitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an miscitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.miscitem.remove(ctx.params);
  }
};
