import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["index.ts"],
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
});

await esbuild.build({
    entryPoints: ["index.ts"],
    bundle: true,
    format: "esm",
    outfile: "dist/index.mjs",
});
