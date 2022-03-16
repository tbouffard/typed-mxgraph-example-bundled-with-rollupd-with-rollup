import mx from './mxgraph-loader';
import type { mxAbstractCanvas2D, mxRectangle } from 'mxgraph';

export function registerCustomShapes(): void {
    console.info('Registering custom shapes...');
    mx.mxCellRenderer.registerShape('customRectangle', CustomMxRectangleShape);
    mx.mxCellRenderer.registerShape('customEllipse', CustomMxEllipse);
    console.info('Custom shapes registered');
}

class CustomMxRectangleShape extends mx.mxRectangleShape {

    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number) {
        super(bounds, fill, stroke, strokewidth);
        this.isRounded = true; // force rounded shape
    }

    paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void {
        c.setFillColor('Chartreuse');
        super.paintBackground(c, x, y, w, h);
    };

}

class CustomMxEllipse extends mx.mxEllipse {
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number) {
        super(bounds, fill, stroke, 5);
    }

    paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number) {
        c.setFillColor('Yellow');
        c.setStrokeColor('Red');
        super.paintVertexShape(c, x, y, w, h);
    }
}
