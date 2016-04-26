import { VNode } from 'maquette';
import RouteRecognizer = require('route-recognizer');
import foo from './components/foo';
import bar from './components/bar';
import root from './components/root';

interface RenderHandler {
  (state: any): VNode;
}

const router = new RouteRecognizer<RenderHandler>();

router.add([{ path: "/", handler: root }]);
router.add([{ path: "/foo", handler: foo }]);
router.add([{ path: "/bar", handler: bar }]);

export default router;