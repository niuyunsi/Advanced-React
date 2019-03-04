const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // check login
    if (!ctx.request.userId) {
      throw new Error('You must be logged in');
    }
    // check permission
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // query users
    return ctx.db.query.users({}, info);
  }
};

module.exports = Query;
