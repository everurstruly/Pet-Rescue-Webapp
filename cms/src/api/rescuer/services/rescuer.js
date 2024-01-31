'use strict';

/**
 * rescuer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rescuer.rescuer');
