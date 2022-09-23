export default class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        const body = document.querySelector('body')
        const className = pathname.replace('/', '')
        body.removeAttribute('class')
        if (!!className) body.classList.add(className)
      })

    console.log(route)
    console.log(pathname)
  }
}
