export default class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(href,event) {
    // event = event
    event.preventDefault()
    window.history.pushState({}, '', href)
    this.handle()
    console.log(event,href)
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })

    console.log(route)
    console.log(pathname)
  }
}
