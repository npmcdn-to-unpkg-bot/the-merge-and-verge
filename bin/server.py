
import tornado.web
import tornado.ioloop


def main():

    settings = {}
    settings['static_path'] = './public'

    app = tornado.web.Application([
        (r"/()$", tornado.web.StaticFileHandler,
            dict(path=settings['static_path'] + '/index.html'))
    ], **settings)

    port = 7000
    app.listen(port)
    print "Listening on port %s" % port
    tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    main()
