### this package makes uses of rollup to build a EMS libraries defined at rollup.config file

Basic code snippets demonstrating how to utilize one of the libraries
After creating libraries, import them into HTML using a script element. Next, import the necessary methods from packages.

```html
    <script type="module" src="./packages/elements/dist/coreLibrary.js"> </script>
    <script type="module" defer>
        import {Clients, exposedUtil} from './packages/elements/dist/coreLibrary.js'  
        const client = new Clients();
 
        console.log(`calling Clients()`)
   
    </script>
```
