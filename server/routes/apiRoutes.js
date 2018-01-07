const express = require('express');
const router = express.Router();
const memo = require('../models/memo');
const uuid = require('node-uuid');
const moment = require('moment');

router.get('/memos', (req, res) => {
  console.log('call memos!');
  memo.list(function (err, list) {
    if (err) {
        res.status(500);
    }
    res.status(200).json(list);
  });
})

router.get('/memos/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', (req, res) => {
  console.log('call memos/:id!');
  memo.get(req.params['id'], (err, doc) => {
    if (err) {
      res.status(500);
    }
    res.status(200).json(doc);
  });
});

router.post('/memos', (req, res) => {
  console.log('call memos post!');
  memo.save(uuid.v4(), {
    title : req.body.title,
    content : req.body.content,
    updatedAt : moment().zone('+0900').format('YYYY/MM/DD HH:mm:ss')
  }, (err) => {
      if (err) {
        res.status(500);
      }
      res.status(200);
    });
});

router.put('/memos/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', (req, res) => {
  console.log('call memos/:id put');
  memo.save(req.params['id'], {
    title : req.body.title,
    content : req.body.content,
    updatedAt : moment().zone('+0900').format('YYYY/MM/DD HH:mm:ss')
  }, (err) => {
    if (err) {
        res.status(500);
    }
    res.status(200);
  });
});

router.delete('/memos/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', (req, res) => {
  console.log('call memos/:id delete!');
  memo.remove(req.params['id'], (err) => {
    if (err) {
      res.status(500);
    }
    res.status(200); 
  });
});

module.exports = router;