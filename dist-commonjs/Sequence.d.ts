import { ViewingDirection, ViewingHint } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { Canvas } from "./Canvas";
import { Thumbnail } from "./Thumbnail";
import { IManifestoOptions } from "./IManifestoOptions";
import { Thumb } from "./Thumb";
export declare class Sequence extends ManifestResource {
    items: Canvas[];
    private _thumbnails;
    constructor(jsonld?: any, options?: IManifestoOptions);
    getCanvases(): Canvas[];
    getCanvasById(id: string): Canvas | null;
    getCanvasByIndex(canvasIndex: number): any;
    getCanvasIndexById(id: string): number | null;
    getCanvasIndexByLabel(label: string, foliated?: boolean): number;
    getLastCanvasLabel(alphanumeric?: boolean): string;
    getLastPageIndex(): number;
    getNextPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
    getPagedIndices(canvasIndex: number, pagingEnabled?: boolean): number[];
    getPrevPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
    getStartCanvasIndex(): number;
    getThumbs(width: number, height?: number): Thumb[];
    getThumbnails(): Thumbnail[];
    getStartCanvas(): string;
    getTotalCanvases(): number;
    getViewingDirection(): ViewingDirection | null;
    getViewingHint(): ViewingHint | null;
    isCanvasIndexOutOfRange(canvasIndex: number): boolean;
    isFirstCanvas(canvasIndex: number): boolean;
    isLastCanvas(canvasIndex: number): boolean;
    isMultiCanvas(): boolean;
    isPagingEnabled(): boolean;
    isTotalCanvasesEven(): boolean;
}
