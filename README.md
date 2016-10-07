# postgREST-example

Uma simples aplicação em AngularJS utilizando [PostgREST](http://postgrest.com) e [Angular-Formly](http://angular-formly.com).

## PostgREST

PostgREST is a standalone web server that turns your database directly into a RESTful API. The structural constraints and permissions in the database determine the API endpoints and operations.

```
GET /people?age=lt.13
```

Configuration

* Install [The Haskell Tool Stack](https://docs.haskellstack.org/en/stable/README/#how-to-install)
* Add the PostgreSQL path in the variable "Path" in the system variables
* git clone https://github.com/begriffs/postgrest.git
* cd postgrest
* stack build --install-ghc
* sudo stack install --allow-different-user
* run the database.sql to create the database structure

Running the Server

* postgrest postgres://user:pass@host:port/postgrest -a anon_user [other flags]



## Angular-Formly

Powerful, flexible, simple forms for Angular!

Give your forms consistency, maintainability, simplicity, flexibility, and sanity with angular-formly.

```
<formly-form model="vm.user" fields="vm.userFields">
  <button type="submit" class="btn btn-default" ng-click="vm.submit(vm.user)">Submit</button>
</formly-form>
```
```
vm.userFields = [
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email'
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Password',
      placeholder: 'Password'
    }
  }
]
```

## Team

| ![Neri Fontana](https://www.gravatar.com/avatar/0bf973872ae54d1a495903ec96c2d88b) | ![Alexandre Zanelatto](https://www.gravatar.com/avatar/c310c3345f41087b79c81c385c6c1082) |
|:---------------------------------------------------------------------------------:|:-:|:-:|
| [Neri Bez Fontana](https://github.com/nbfontana)                                  | [Alexandre Zanelatto](https://github.com/alexandredavi) |

## License
[MIT] (https://github.com/alexandredavi/postgREST-example/blob/master/LICENSE)

