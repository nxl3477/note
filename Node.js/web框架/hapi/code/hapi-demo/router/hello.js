const hello = {
  method:'GET',
  path:'/hello/{name}',
  handler:function(request,h) {
      return'hello' + encodeURIComponent(request.params.name) + '!'
  }
}

const index = {
  method: "GET",
  path: "/",
  handler(request, h) {
    return {
      data: "hello world"
    }
  }
}

module.exports = [ index, hello ]
