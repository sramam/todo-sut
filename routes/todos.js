
/*
 * GET users listing.
 */

module.exports = function(app, store) {

  app.get('/api', function(req, res) {
    res.send('There is an api here');
  });

  app.get('/api/todos', function(req, res){
    res.json(store.getAll());
  });

  app.post('/api/todos', function(req, res){
    var todo = store.save(req.body);
    res.json(todo);
  });

  app.put('/api/todos/:id', function(req, res){
    var id = parseInt(req.params['id'], 10)
    var todo = store.update(id, req.body);
    res.json(todo);
  })

  app.delete('/api/todos/:id', function(req, res){
    var id = parseInt(req.params['id'], 10)
    store.delete(id)
    res.send("")
  })
}
