const express = require('express');

module.exports = function(server) {
  // base URL for all routes
  const router = express.Router()
  server.use('/api', router)

  // URL to billing cycles
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
};