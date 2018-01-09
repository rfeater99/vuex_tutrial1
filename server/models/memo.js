exports.list = function (callback) {
    callback(null, [{
        _id: '12345678-1234-1234-1234-123456789001',
        _rev: 'ake2234aeadfsa',
        title: 'xxx',
        content: 'bbb',
        updateAt: '2017/12/19 10:00'
      },
      {
        _id: '12345678-1234-1234-1234-123456789002',
        _rev: 'ake2234aeadfsa',
        title: 'xxx2',
        content: 'bbb2',
        updateAt: '2017/12/19 11:00'
      },
      {
        _id: '12345678-1234-1234-1234-123456789003',
        _rev: 'ake2234aeadfsa',
        title: 'xxx3',
        content: 'bbb3',
        updateAt: '2017/12/20 14:00'
      }]);
};

exports.get = function (id, callback) {
    callback(null, {
      _id: '12345678-1234-1234-1234-1234567890001',
      _rev: 'ake2234aeadfsa',
      title: 'xxx3',
      content: 'bbb3',
      updateAt: '2017/12/20 14:00'
    });
}

exports.save = function (id, doc, callback) {
    callback(null);
}

exports.delete = function (id, callback) {
    callback(null);
}