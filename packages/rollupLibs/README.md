This project uses rollup to bundle the package into multiple formats
   UMD, IIFE,  ESM and CJS

### Note, it's important to set up exports since rollup will look up them to for the right behavior
#### Take a look at the end of foundation-main file

```JS
export {UMDArrowFunction, IIFEFunction}
```


How to import the library and use it, 

The library is referred to as foundationUMD in the UMD format,
so calling a method would be available as foundationUMD.whateverMethod()

The library is referred to as foundationIIFE in the IIFE format.
so calling a method would be available as foundationIIFE.whateverMethod()