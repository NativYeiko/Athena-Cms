// Debut et appelle de Firebase
var firebase = require('firebase');
var app = firebase.initializeApp({ ... });
import * as firebase from 'firebase';
var app = firebase.initializeApp({ ... });

// script //
<script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase-messaging.js"></script>

<script>
  var app = firebase.initializeApp({ ... });
  // ...
</script>
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var app = firebase.initializeApp({ ... });
// Cette importation charge l'espace de noms Firebase avec toutes ses informations de type.
import * as firebase from 'firebase/app';

// Ces importations chargent des services individuels dans l'espace de noms Firebase.
import 'firebase/auth';
import 'firebase/database';

//Usage pour firebase
var firebase = require('firebase');
var app = firebase.initializeApp({ ... });
// ...
