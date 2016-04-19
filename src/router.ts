import RouteRecognizer = require('route-recognizer');
import foo from './components/foo';
import bar from './components/bar';
import root from './components/root';

var router = new RouteRecognizer();

router.add([{ path: "/", handler: root }]);
router.add([{ path: "/foo", handler: foo }]);
router.add([{ path: "/bar", handler: bar }]);

export default router;