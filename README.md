swig jsonkv filter
==================

Swig filter to display a key value representation of an JavaScript object.

example
-------

### Template code

```html
{% set form = [
  {
    type:"email",
    id: "login",
    name: "login_email",
    placeholder: "Email",
    maxlength: 254
  },
  {
    type:"password",
    id: "password",
    name: "login_password",
    placeholder: "Password"
  },
  {
    type:"submit"
  }
]%}

<form class="login-form" role="form">
  {% for item in form %}
    {% if item.type == "submit" %}
    <button {{ item | jsonkv(['ignore']) | safe }} >Submit</button>
    {% else %}
    <input {{ item | jsonkv(['ignore']) | safe }} >
    {% endif %}
  {% endfor %}
</form>

```

### node.js code

```javascript
var swig = require('swig');
var jsonkv = require('../filters/jsonkv');

swig.setFilter("jsonkv", jsonkv);

var template = swig.compileFile('./form.html');
var output = template();

console.log(output);
```

### Output

```html
<form class="login-form" role="form">
    <input type="email" id="login" name="login_email" placeholder="Email" maxlength="254" />
    <input type="password" id="password" name="login_password" placeholder="Password" />
    <input type="submit" />
</form>
```

