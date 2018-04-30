
const Sequelize = require('sequelize')

const sequelize = require('../lib/sequelize')

module.exports = sequelize.define('traffic', {
  trafficId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
    comment: '主键'
  },
  nodeId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    field: 'node_id',
    comment: 'node主键'
  },
  userId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    field: 'user_id',
    comment: 'user主键'
  },
  flowUp: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0,
    field: 'flow_up',
    comment: '上传流量'
  },
  flowDown: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0,
    field: 'flow_down',
    comment: '下载流量'
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'created_at',
    comment: '创建时间'
  }
}, {
  tableName: 'traffic',
  timestamps: true,
  updatedAt: false,
  indexes: [
    {
      unique: false,
      fields: ['node_id']
    },
    {
      unique: false,
      fields: ['user_id']
    }
  ]
})
