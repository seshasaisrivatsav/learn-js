## Garbage Collection
  
  JVM has 
  Younge Gen = Eden + Survivor
  Old Gen = Remaining
  
### Young Gen
### Eden
Wheneer you create new objects, this is where they are stored. then GC sweeps them. 

### Survivor
If objects are staying longer, they are moved to survivor

### Old Gen
Obects staying longer than survivor 

Eg: when you look at new relic we pass the xx: use G1GC (flag)

If you specify this, GC will tune itself to rause and lowe eden space.
