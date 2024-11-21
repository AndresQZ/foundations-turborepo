### https://medium.com/singapore-gds/how-to-support-subpath-imports-using-react-rollup-typescript-1d3d331f821b

https://github.com/GovTechSG/sgds-govtech-react

How to support subpath imports




Once this packages has been uploaded as a NPM package 
This will be an simple basic how to use it

```Javascript
import { Clients } from "foundations-web-library/clients";
import { Internal } from "foundations-web-library/internal";
import { proxy } from "foundations-web-library/proxy";
import { utilFc } from "foundations-web-library/utils";


console.log(new Internal().bind());
  
const client = new Clients("app");
console.log(`${utilFc()}`)

client.greet()
```

```package.json
 "foundations-web-library": "1.0.4"
 ```