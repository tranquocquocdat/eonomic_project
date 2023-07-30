const { MongoClient } = require('mongodb');

function connectToMongo(callback) {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);

  client.connect((error) => {
    if (error) {
      console.error('Kết nối thất bại đến MongoDB local:', error);
      callback(error);
    } else {
      console.log('Kết nối thành công đến MongoDB local');

      const db = client.db('mydatabase');
      const collection = db.collection('mycollection');

      collection.find({}).toArray((error, documents) => {
        if (error) {
          console.error('Lỗi khi truy vấn dữ liệu:', error);
          callback(error);
        } else {
          console.log('Dữ liệu từ MongoDB:', documents);
          callback(null);
          client.close(); // Move client.close() inside the callback
          console.log('Đã đóng kết nối đến MongoDB local');
        }
      });
    }
  });
}

connectToMongo((error) => {
  if (error) {
    console.error('Lỗi khi kết nối đến MongoDB:', error);
  } else {
    console.log('Kết nối và xử lý thành công');
  }
});