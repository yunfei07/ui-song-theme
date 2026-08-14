import type { Context } from '@deepseek-ai/cordis';
/** Theme service required before the Song token layer can be mounted. */
export declare const inject: string[];
/**
 * Mount the paired Song-inspired token layer for the lifetime of this plugin.
 * @param ctx Client Cordis context carrying ThemeRuntime.
 */
export declare function apply(ctx: Context): void;
